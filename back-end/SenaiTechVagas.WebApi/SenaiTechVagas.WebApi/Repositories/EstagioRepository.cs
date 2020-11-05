using Microsoft.EntityFrameworkCore;
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

                    if (estagioAtualizado.IdEmpresa >=1)
                        estagioBuscado.IdEmpresa = estagioAtualizado.IdEmpresa;

                    if(estagioAtualizado.PeriodoEstagio <36)
                        estagioBuscado.PeriodoEstagio = estagioAtualizado.PeriodoEstagio;

                    if (estagioAtualizado.IdCandidato>=1)
                        estagioBuscado.IdCandidato = estagioAtualizado.IdCandidato;

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
                    return ctx.Estagio.Include(u=>u.IdCandidatoNavigation).Include(u=>u.IdEmpresaNavigation).ToList();
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

        public List<Estagio> ListarPorperiodo(int Periodo)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Estagio.Where(v=>v.PeriodoEstagio==Periodo).ToList();
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }

        public int ContadorEmpresasCadastradas()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Empresa.ToList().Count;
                }
                catch (Exception e)
                {
                    return 0;
                }
            }
        }

        public int ContadorCandidatoCadastrados()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Candidato.ToList().Count;
                }
                catch (Exception e)
                {
                    return 0;
                }
            }
        }

        public int ContadorCandidatoContratados()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Estagio.ToList().Count;
                }
                catch (Exception e)
                {
                    return 0;
                }
            }
        }
    }
}
