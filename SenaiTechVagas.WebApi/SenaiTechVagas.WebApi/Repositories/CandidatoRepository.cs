using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class CandidatoRepository : ICandidatoRepository
    {
        //Em ordem CRUD - Criar, Ler, Atualizar, Deletar

        public bool CadastrarCandidato(CadastrarCandidatoViewModel NovoCandidato)
        {
            using(DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Usuario user = new Usuario()
                    {
                        Email = NovoCandidato.Email,
                        Senha = NovoCandidato.Senha,
                        IdTipoUsuario = 2
                    };

                    Candidato applicant = new Candidato()
                    {
                        IdUsuarioNavigation = user,
                        NomeCompleto = NovoCandidato.NomeCompleto,
                        Rg = NovoCandidato.Rg,
                        Cpf = NovoCandidato.Cpf,
                        Telefone = NovoCandidato.Telefone,
                        LinkLinkedinCandidato = NovoCandidato.LinkLinkedinCandidato,
                        Area = NovoCandidato.Area,
                        IdCurso = NovoCandidato.IdCurso
                    };

                    ctx.Add(applicant);
                    ctx.SaveChanges();
                    return true;
                }
                catch(Exception e)
                {
                    return false;
                }
            }
        }

        public List<Candidato> ListarCandidatos()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Candidato.ToList();
                }
                catch(Exception e)
                {
                    return null;
                }                
            }
        }

        public Candidato BuscarPorId(int id)
        {
            using(DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Candidato.Find(id);
                }
                catch(Exception e)
                {
                    return null;
                }
            }
        }

        public bool AtualizarCandidato(int IdCandidato, Candidato CandidatoAtualizado)
        {
            using(DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Candidato CandidatoBuscado = BuscarPorId(IdCandidato);

                    if(CandidatoBuscado == null)
                    {
                        return false;
                    }

                    if (CandidatoAtualizado.NomeCompleto != null)
                    {
                        CandidatoBuscado.NomeCompleto = CandidatoAtualizado.NomeCompleto;
                    }
                    if (CandidatoAtualizado.Rg != null)
                    {
                        CandidatoBuscado.Rg = CandidatoAtualizado.Rg;
                    }
                    if (CandidatoAtualizado.Cpf != null)
                    {
                        CandidatoBuscado.Cpf = CandidatoAtualizado.Cpf;
                    }
                    if (CandidatoAtualizado.Telefone != null)
                    {
                        CandidatoBuscado.Telefone = CandidatoAtualizado.Telefone;
                    }
                    if (CandidatoAtualizado.LinkLinkedinCandidato != null)
                    {
                        CandidatoBuscado.LinkLinkedinCandidato = CandidatoAtualizado.LinkLinkedinCandidato;
                    }
                    if (CandidatoAtualizado.Area != null)
                    {
                        CandidatoBuscado.Area = CandidatoAtualizado.Area;
                    }
                    if (CandidatoAtualizado.IdCurso != null)
                    {
                        CandidatoBuscado.IdCurso = CandidatoAtualizado.IdCurso;
                    }

                    ctx.Update(CandidatoBuscado);
                    ctx.SaveChanges();
                    return true;
                }
                catch(Exception e)
                {
                    return false;
                }
            }
        }

        //TODO: Falta Terminar
        public bool DeletarCandidato(int IdCandidato)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Candidato CandidatoBuscado = ctx.Candidato.Find(IdCandidato);
                    if (CandidatoBuscado == null)
                        return false;

                    List<Inscricao> listaDeInscricao = ctx.Inscricao.
                        Where(l => l.IdCandidato == IdCandidato).ToList();
                    for (int i = 0; i < listaDeInscricao.Count; i++)
                    {
                        InscricaoRepository inscricaoRepository = new InscricaoRepository();
                        inscricaoRepository.RevogarInscricao(listaDeInscricao[i].IdInscricao);
                    }
                    Estagio estagioBuscado = ctx.Estagio.FirstOrDefault(e=>e.IdCandidato==CandidatoBuscado.IdCandidato);
                    if (estagioBuscado != null)
                    {
                        ctx.Remove(estagioBuscado);
                        ctx.SaveChanges();
                    }
                    ctx.Remove(CandidatoBuscado);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }
    }
}
