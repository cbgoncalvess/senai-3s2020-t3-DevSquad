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
                    if (Estagio.PeriodoEstagio > 36)
                        return false;

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

                    //Implementar a condiçao que permita que o admin substitua a empresa e candidato

                    if(estagioAtualizado.PeriodoEstagio <36)
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
