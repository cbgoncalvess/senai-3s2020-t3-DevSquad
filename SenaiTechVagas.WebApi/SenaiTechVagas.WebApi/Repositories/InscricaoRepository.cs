using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class InscricaoRepository : IInscricaoRepository
    {
        public Inscricao BuscarPorId(int idInscricao)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Inscricao.Find(idInscricao);
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }

        public List<Inscricao> ListarInscricoes()
        {
            using(DbSenaiContext ctx=new DbSenaiContext())
            {
                try
                {
                    return ctx.Inscricao.ToList();
                }catch(Exception e)
                {
                    return null;
                }
            }
        }

        public bool RevogarInscricao(int idInscricao)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    // Candidato candidato = ctx.Find();//Buscar o id do candidato
                    Inscricao inscricaoBuscada = BuscarPorId(idInscricao);
                    if (inscricaoBuscada == null)
                    return false;

                    ctx.Remove(inscricaoBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public bool SeInscrever(Inscricao NovaInscricao)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    NovaInscricao.DataInscricao = DateTime.Now;
                    NovaInscricao.IdStatusInscricao = 1;
                    ctx.Add(NovaInscricao);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public bool VerificarSeInscricaoExiste(int idVaga,int idCandidato)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Inscricao InscricaoBuscada = ctx.Inscricao.FirstOrDefault(e => e.IdCandidato == idCandidato&& e.IdVaga==idVaga);
                    if (InscricaoBuscada != null)
                        return true;

                    return false;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }
    }
}
