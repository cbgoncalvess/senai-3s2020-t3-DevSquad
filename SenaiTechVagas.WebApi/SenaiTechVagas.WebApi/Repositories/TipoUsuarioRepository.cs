using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        DbSenaiContext ctx = new DbSenaiContext();
        public bool AtualizarTipoUsuario(int id, TipoUsuario tipoUsuario)
        {
            try
            {
                TipoUsuario tipoUsuarioBuscado = ctx.TipoUsuario.Find(id);
                tipoUsuarioBuscado.NomeTipoUsuario = tipoUsuario.NomeTipoUsuario;
                ctx.TipoUsuario.Update(tipoUsuarioBuscado);
                ctx.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                return false;
            }
            
        }

        public bool CadastrarTipoUsuario(TipoUsuario tipoUsuario)
        {
            try
            {
               ctx.Add(tipoUsuario);
               ctx.SaveChanges();
               return true;
               
            }
            catch (Exception e)
            {
                return false;
            }
        }

        /// <summary>
        /// Pode prejudicar o andamento do sistema por ser um delete em cadeia
        /// </summary>
        /// <returns></returns>
        //public bool DeletarTipoUsuario(int id)
        //{
        //    try
        //    {
        //        TipoUsuario tipoUsuarioBuscado = ctx.TipoUsuario.Find(id);
        //        ctx.TipoUsuario.Remove(tipoUsuarioBuscado);
        //        ctx.SaveChanges();
        //        return true;
        //    }
        //    catch (Exception e)
        //    {
        //        return false;
        //    }
        //}

        public List<TipoUsuario> ListarTipoUsuario()
        {
            try
            {
                return ctx.TipoUsuario.ToList();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public TipoUsuario BuscarPorId(int id)
        {
            try
            {
                TipoUsuario tipoUsuarioBuscado = ctx.TipoUsuario.Find(id);
                return tipoUsuarioBuscado;

            }
            catch (Exception e)
            {

                return null;
            }
        }
    }
}
