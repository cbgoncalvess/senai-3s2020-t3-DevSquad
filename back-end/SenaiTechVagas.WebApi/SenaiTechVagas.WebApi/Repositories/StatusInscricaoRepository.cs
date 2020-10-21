using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class StatusInscricaoRepository : IStatusInscricaoRepository
    {
        public bool AtualizarStatusInscricao(int id, StatusInscricao status)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    var statusBuscado = ctx.StatusInscricao.Find(id);
                    if (statusBuscado == null)
                        return false;

                    if (status.NomeStatusInscricao != null)
                        statusBuscado.NomeStatusInscricao = status.NomeStatusInscricao;

                    ctx.Update(statusBuscado);
                    ctx.SaveChanges();

                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool CadastrarStatusInscricao(StatusInscricao statusInscricao)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                ctx.Add(statusInscricao);
                ctx.SaveChanges();

                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }
        public List<StatusInscricao> ListarStatusInscricao()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                return ctx.StatusInscricao.ToList();
            }
        }
    }
}
