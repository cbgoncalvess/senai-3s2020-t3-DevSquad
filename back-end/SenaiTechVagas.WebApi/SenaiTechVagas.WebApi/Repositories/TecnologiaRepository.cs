using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class TecnologiaRepository : ITecnologiaRepository
    {
        
        public bool AtualizarTecnologia(int id, Tecnologia tecnologia)
        {
            using(DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Tecnologia tecnologiaBuscada = ctx.Tecnologia.Find(id);
                    tecnologiaBuscada.NomeTecnologia = tecnologia.NomeTecnologia;
                    ctx.Tecnologia.Update(tecnologiaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public Tecnologia BuscarPorId(int id)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Tecnologia.Find(id);
                }
                catch (Exception e)
                {

                    return null;
                }
            }
        }

        public bool CadastrarTecnologia(Tecnologia tecnologia)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    ctx.Add(tecnologia);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        /// <summary>
        /// Pode prejudicar o funcionamento do sistema
        /// </summary>
        /// <returns></returns>
        //public bool DeletarTecnologia(int id)
        //{
        //    using (DbSenaiContext ctx = new DbSenaiContext())
        //    {
        //        try
        //        {
        //            Tecnologia tecnologiaBuscada = ctx.Tecnologia.Find(id);
        //            ctx.Tecnologia.Remove(tecnologiaBuscada);
        //            ctx.SaveChanges();
        //            return true;
        //        }
        //        catch (Exception e)
        //        {
        //            return false;
        //        }
        //    }
        //}

        public List<Tecnologia> ListarTecnologia()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Tecnologia.ToList();
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }
    }
}
