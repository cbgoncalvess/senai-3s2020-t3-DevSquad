using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class CandidatoRepository : ICandidatoRepository
    {
        public List<Candidato> ListarCandidatos()
        {
            using(DbSenaiContext ctx = new DbSenaiContext ())
            {
                return ctx.Candidato.ToList();
            }
        }
    }
}
