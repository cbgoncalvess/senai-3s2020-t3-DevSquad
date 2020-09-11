using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class EstagioRepository : IEstagioRepository
    {
        public bool CadastrarEstagio(int idCandidato, int idEmpresa, int PeriodoEstagio)
        {
            using (DbSenaiContext ctx=new DbSenaiContext())
            {
                try
                {
                    if (PeriodoEstagio > 36)
                        return false;

                    Estagio estagio = new Estagio()
                    {
                        DataCadastro = DateTime.Now,
                        IdCandidato=idCandidato,
                        IdEmpresa=idEmpresa,
                        PeriodoEstagio=PeriodoEstagio
                    };
                    ctx.Add(estagio);
                    ctx.SaveChanges();
                    return true;
                }
                catch(Exception e)
                {
                    return false;
                }
            }
        }

        public bool AtualizarPorIdCorpo(int idEstagio, Estagio estagioAtualizado)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Estagio estagioBuscado = BuscarPorId(idEstagio);
                    if (estagioBuscado == null)
                    {
                        return false;
                    }

                    else if (estagioAtualizado.IdEmpresa != null)
                    {
                        estagioBuscado.IdEmpresa = estagioAtualizado.IdEmpresa;
                    }

                    else if (estagioAtualizado.PeriodoEstagio != null)
                    {
                        estagioBuscado.PeriodoEstagio = estagioAtualizado.PeriodoEstagio;
                    }

                    ctx.Update(estagioBuscado);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public Estagio BuscarPorId(int idEstagio)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Estagio EstagioBuscado = ctx.Estagio.Find(idEstagio);
                        return EstagioBuscado;
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }

        public bool DeletarPorId(int idEstagio)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Estagio estagioBuscado =BuscarPorId(idEstagio);
                    if (estagioBuscado == null)
                    {
                        return false;
                    }
                    ctx.Remove(estagioBuscado);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public List<Estagio> ListarEstagios()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Estagio.ToList();
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }
    }
}
