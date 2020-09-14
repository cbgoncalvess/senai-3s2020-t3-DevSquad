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
        DbSenaiContext ctx = new DbSenaiContext();
        public bool AtualizarTecnologia(int id, Tecnologia tecnologia)
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

        public Tecnologia BuscarPorId(int id)
        {
            try
            {
                Tecnologia tecnologiaBuscada = ctx.Tecnologia.Find(id);
                return tecnologiaBuscada;
            }
            catch (Exception e)
            {

                return null;
            }
        }

        public bool CadastrarTecnologia(Tecnologia tecnologia)
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

        public bool DeletarTecnologia(int id)
        {
            try
            {
                Tecnologia tecnologiaBuscada = ctx.Tecnologia.Find(id);
                ctx.Tecnologia.Remove(tecnologiaBuscada);
                ctx.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                return false;
            }
        }

        public List<Tecnologia> ListarTecnologia()
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
