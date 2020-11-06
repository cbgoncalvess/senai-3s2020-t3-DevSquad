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

            Usuario candidatoBuscado = ctx.Usuario.Include(u => u.Candidato).FirstOrDefault(u => u.IdUsuario == id);
            Usuario empresaBuscada = ctx.Usuario.Include(u => u.Empresa).FirstOrDefault(u => u.IdUsuario == id);

            if (candidatoBuscado.IdTipoUsuario == 4)
            {
                candidatoBuscado.IdTipoUsuario = 2;
                ctx.Update(candidatoBuscado);
                ctx.SaveChanges();
                return true;
            }
            if (empresaBuscada.IdTipoUsuario == 4)
            {
                empresaBuscada.IdTipoUsuario = 3;
                ctx.Update(empresaBuscada);
                ctx.SaveChanges();
                return true;
            }

            return false;
        
        }

        public List<Usuario> banidos()
        {
            return ctx.Usuario.Where(u => u.IdTipoUsuario == 4).ToList();
        }

        public List<Usuario> Colaboradores()
        {
            return ctx.Usuario.Where(u => u.IdTipoUsuario == 1).ToList();
        }
    }
}
