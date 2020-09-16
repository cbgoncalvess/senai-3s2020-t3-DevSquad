using Microsoft.EntityFrameworkCore;
using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {

        DbSenaiContext ctx = new DbSenaiContext();

        public Usuario Logar(string email, string senha)
        {
            return ctx.Usuario.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }

        public void AtualizarUsuario(int id, Usuario usuarioAtualizado)
        {
            Usuario usuarioBuscado = ctx.Usuario.Find(id);

            if (usuarioBuscado != null)
            {               
                usuarioBuscado.Senha = usuarioAtualizado.Senha;
                ctx.Update(usuarioBuscado);
                ctx.SaveChanges();
            }
        }

        public Usuario BuscarPorId(int id)
        {
            return ctx.Usuario.FirstOrDefault(u => u.IdUsuario == id);
        }


        public List<Usuario> ListarUsuario()
        {
            return ctx.Usuario.Include(u => u.IdTipoUsuarioNavigation).ToList();
        }


        public bool BanirUsuario(int id)
        {
            try
            {
                Usuario usuarioBuscado = ctx.Usuario.Find(id);

               
                    usuarioBuscado.IdTipoUsuario = 4;

                    ctx.Update(usuarioBuscado);
                    ctx.SaveChanges();
                    return true;
              
            }
            catch (Exception error)
            {

                return false;
            }
           
        }

        public bool DesbanirUsuario(int id)
        {
            Usuario usuarioBuscado = ctx.Usuario.Find(id);

            Candidato candidatoBuscado = ctx.Candidato.Include(c => c.IdUsuarioNavigation).FirstOrDefault(c => c.IdUsuarioNavigation.IdTipoUsuario == usuarioBuscado.IdUsuario);
            Empresa empresaBuscado = ctx.Empresa.Include(e => e.IdUsuarioNavigation).FirstOrDefault(e => e.IdUsuarioNavigation.IdTipoUsuario == usuarioBuscado.IdUsuario);

            if (candidatoBuscado == null && empresaBuscado == null)
            {
                return false;
            }
            else if (candidatoBuscado != null && candidatoBuscado.IdUsuarioNavigation.IdTipoUsuario != 4)
            {
                candidatoBuscado.IdUsuarioNavigation.IdTipoUsuario = 2;
                ctx.Update(candidatoBuscado);
                ctx.SaveChanges();
            }
           else if (empresaBuscado != null && empresaBuscado.IdUsuarioNavigation.IdTipoUsuario != 4)
            {
                empresaBuscado.IdUsuarioNavigation.IdTipoUsuario = 3;
                ctx.Update(empresaBuscado);
                ctx.SaveChanges();
            }

            return true;           

        }

        public List<Usuario> banidos()
        {
            return ctx.Usuario.Where(u => u.IdTipoUsuario == 4).ToList();
        }
    }
}
