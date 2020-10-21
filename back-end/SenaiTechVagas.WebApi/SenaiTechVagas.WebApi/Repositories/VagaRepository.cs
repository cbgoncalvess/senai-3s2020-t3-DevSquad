using Microsoft.EntityFrameworkCore;
using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class VagaRepository : IVagaRepository
    {
        public bool AdicionarTecnologia(VagaTecnologia vagaTecnologia)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    if (vagaTecnologia.IdVaga != 0 && vagaTecnologia.IdVaga != 0)
                    {
                        ctx.Add(vagaTecnologia);
                        ctx.SaveChanges();
                        return true;
                    }
                    return false;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public bool AdicionarVaga(Vaga vaga)
        {
            using(DbSenaiContext ctx=new DbSenaiContext())
            {
                try
                {
                    vaga.DataExpiracao = DateTime.Now.AddDays(30);
                    vaga.DataPublicacao = DateTime.Now;
                    ctx.Add(vaga);
                    ctx.SaveChanges();
                    return true;
                }
                catch(Exception e)
                {
                    return false;
                }
            }
        }

        public bool AtualizarVaga(int idVaga,AtualizarVagaViewModel vaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    //Adicionar o metodo que pega o ID da Empresa logada
                    Vaga vagaBuscada = BuscarPorid(idVaga);
                    if (vagaBuscada == null)
                        return false;

                    if(vaga.Cep != null)
                        vagaBuscada.Cep = vaga.Cep;

                    if(vaga.Complemento != null)
                        vagaBuscada.Complemento = vaga.Complemento;

                    if(vaga.DescricaoBeneficio != null)
                        vagaBuscada.DescricaoBeneficio = vaga.DescricaoBeneficio;

                    if (vaga.DescricaoEmpresa != null)
                        vagaBuscada.DescricaoEmpresa = vaga.DescricaoEmpresa;

                    if(vaga.DescricaoVaga != null)
                        vagaBuscada.DescricaoVaga = vaga.DescricaoVaga;

                    if(vaga.Estado != null)
                        vagaBuscada.Estado = vaga.Estado;

                    if(vaga.Experiencia != null)
                        vagaBuscada.Experiencia = vaga.Experiencia;

                    if(vaga.Localidade != null)
                        vagaBuscada.Localidade = vaga.Localidade;

                    if(vaga.Logradouro != null)
                        vagaBuscada.Logradouro = vaga.Logradouro;

                    if (vaga.Salario != 0)
                        vagaBuscada.Salario = vaga.Salario;

                    if(vaga.TipoContrato != null)
                        vagaBuscada.TipoContrato = vaga.TipoContrato;

                    if (vaga.DataExpiracao>vagaBuscada.DataExpiracao)
                    {
                        vagaBuscada.DataExpiracao = vaga.DataExpiracao;
                    }
                       
                    ctx.Update(vagaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public Vaga BuscarPorid(int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Vaga.Find(idVaga);
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }

        public bool DeletarVaga(int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    //Falta adicionar a empresa a que é publicadora da vaga
                    Vaga vagaBuscada = BuscarPorid(idVaga);
                    if (vagaBuscada == null)
                        return false;

                    List<Inscricao> BuscarInscricoes = ctx.Inscricao.Where(u=>u.IdVaga==vagaBuscada.IdVaga).ToList();
                    for (int i = 0; i < BuscarInscricoes.Count; i++)
                    {
                        ctx.Remove(BuscarInscricoes[i]);
                        ctx.SaveChanges();
                    }
                    List < VagaTecnologia >VagaTecnologia= ctx.VagaTecnologia.Where(v => v.IdVaga == vagaBuscada.IdVaga).ToList();
                    for(int i = 0; i < VagaTecnologia.Count; i++)
                    {
                        ctx.Remove(VagaTecnologia[i]);
                        ctx.SaveChanges();
                    }

                    ctx.Remove(vagaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public void ExpirarVaga(Vaga vaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Vaga vagaBuscada = ctx.Vaga.FirstOrDefault(v=>v.DataExpiracao>=DateTime.Now);
                    if (vagaBuscada != null)
                    {
                        DeletarVaga(vagaBuscada.IdVaga);

                        ctx.Remove(vagaBuscada);

                        ctx.SaveChanges();
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
            }
        }

        public List<VagaTecnologia> ListarFiltroNivelExperiencia(string NivelExperiencia)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.VagaTecnologia.Include(V => V.IdTecnologiaNavigation).Include(V => V.IdVagaNavigation)
                        .Where(v => v.IdVagaNavigation.Experiencia==NivelExperiencia).ToList();
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }

        public List<VagaTecnologia> ListarFiltroTipoContrato(string TipoContrato)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.VagaTecnologia.Include(V => V.IdTecnologiaNavigation).Include(V => V.IdVagaNavigation)
                        .Where(v => v.IdVagaNavigation.TipoContrato == TipoContrato).ToList();
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }

        public List<VagaTecnologia> ListarPesquisaTecnologia(string NomeTecnologia)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.VagaTecnologia.Include(V => V.IdTecnologiaNavigation).Include(V => V.IdVagaNavigation).Where(v=>v.IdTecnologiaNavigation.NomeTecnologia==NomeTecnologia).ToList();
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }

        public List<Vaga> ListarVagas()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                  return ctx.Vaga.Include(v=>v.VagaTecnologia).ToList();
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
                    Tecnologia tecnologiaBuscada = ctx.Tecnologia.Find(id);
                    if (tecnologiaBuscada == null)
                        return true;

                    return false;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public bool VerificarSeTecnologiaFoiAdicionada(int idTecnologia,int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    VagaTecnologia vaga = ctx.VagaTecnologia.FirstOrDefault(v=>v.IdTecnologia==idTecnologia&&v.IdVaga==idVaga);
                    if (vaga != null)
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
