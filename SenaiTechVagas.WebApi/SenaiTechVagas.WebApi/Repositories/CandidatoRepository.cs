using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class CandidatoRepository : ICandidatoRepository
    {
        //Em ordem CRUD - Criar, Ler, Atualizar, Deletar
        public bool AtualizarCandidato(int idUsuario,AtualizarCandidatoViewModel CandidatoAtualizado)
        {
            using(DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Candidato CandidatoBuscado = ctx.Candidato.FirstOrDefault(c=>c.IdUsuario==idUsuario);

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
                    if (CandidatoAtualizado.IdCurso >=1)
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
       
        public List<VagaTecnologia> ListarInscricoes(int idUsuario)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Candidato candidato = ctx.Candidato.FirstOrDefault(c => c.IdUsuario == idUsuario);
                    if (candidato == null)
                        return null;

                    List<Inscricao> ListaDeInscricoes = ctx.Inscricao.Where(v=>v.IdCandidato==candidato.IdCandidato).ToList();
                    if (ListaDeInscricoes == null)
                        return null;

                    List<VagaTecnologia> ListaParaArmazenar = new List<VagaTecnologia>();
                    for(int i = 0; i < ListaDeInscricoes.Count; i++)
                    {
                        VagaTecnologia vagabuscada = ctx.VagaTecnologia.Include(v => v.IdVagaNavigation).Include(x=>x.IdTecnologiaNavigation).FirstOrDefault(x => x.IdVaga == ListaDeInscricoes[i].IdVaga);
                        ListaParaArmazenar.Add(vagabuscada);
                    }
                    return ListaParaArmazenar;
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }

        public bool RevogarInscricao(int idInscricao,int idCandidato)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Inscricao inscricaoBuscada =ctx.Inscricao.FirstOrDefault(i=>i.IdInscricao==idInscricao&&i.IdCandidato==idCandidato);
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
        
        public bool VerificarSeInscricaoExiste(int idVaga, int idCandidato)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Inscricao InscricaoBuscada = ctx.Inscricao.FirstOrDefault(e => e.IdCandidato == idCandidato && e.IdVaga == idVaga);
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
        public Candidato BuscarCandidatoPorIdUsuario(int idUsuario)
        {
            using(DbSenaiContext ctx=new DbSenaiContext())
            {
                try
                {
                    return ctx.Candidato.FirstOrDefault(c => c.IdUsuario == idUsuario);
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }
    }
}
