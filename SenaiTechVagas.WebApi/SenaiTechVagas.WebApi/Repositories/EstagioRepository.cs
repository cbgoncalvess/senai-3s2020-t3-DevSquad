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
        public bool CadastrarEstagio(Estagio Estagio)
        {
            using (DbSenaiContext ctx=new DbSenaiContext())
            {
                try
                {
                    Estagio.DataCadastro = DateTime.Now;
                    ctx.Add(Estagio);
                    ctx.SaveChanges();
                    return true;
                }
                catch(Exception e)
                {
                    return false;
                }
            }
        }

        public bool AtualizarPorIdCorpo(int idEstagio, AtualizarEstagioViewModel estagioAtualizado)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Estagio estagioBuscado = BuscarPorId(idEstagio);
                    if (estagioBuscado == null)
                        return false;

                    Empresa empresaBuscada = ctx.Empresa.Find(estagioAtualizado.IdEmpresa);
                    if (empresaBuscada == null)
                        return false;

                    if (estagioAtualizado.IdEmpresa != estagioBuscado.IdEmpresa)
                        estagioBuscado.IdEmpresa = estagioAtualizado.IdEmpresa;

                    if(estagioAtualizado.PeriodoEstagio <36)
                        estagioBuscado.PeriodoEstagio = estagioAtualizado.PeriodoEstagio;

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
                    return ctx.Estagio.Find(idEstagio);
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
                        return false;

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

        public bool VerificarSeExiste(int id)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Estagio estagioBuscado = ctx.Estagio.FirstOrDefault(e => e.IdCandidato == id);
                    if (estagioBuscado != null)
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
