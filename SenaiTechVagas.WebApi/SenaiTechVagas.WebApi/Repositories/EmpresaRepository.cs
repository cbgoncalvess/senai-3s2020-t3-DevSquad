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
    public class EmpresaRepository : IEmpresaRepository
    {
        public bool AtualizarEmpresaPorIdCorpo(int idUsuario, AtualizarEmpresaViewModel EmpresaAtualizada)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Empresa empresaBuscada = ctx.Empresa.FirstOrDefault(e=>e.IdUsuario==idUsuario);
                    if (empresaBuscada == null)
                        return false;

                    if (empresaBuscada.NomeReponsavel != null)
                    {
                        empresaBuscada.NomeReponsavel = EmpresaAtualizada.NomeReponsavel;
                    }
                    if (EmpresaAtualizada.Cnpj != null)
                    {
                        empresaBuscada.Cnpj = EmpresaAtualizada.Cnpj;
                    }
                    if (EmpresaAtualizada.EmailContato != null)
                    {
                        empresaBuscada.EmailContato = EmpresaAtualizada.EmailContato;
                    }
                    if (EmpresaAtualizada.NomeFantasia != null)
                    {
                        empresaBuscada.NomeFantasia = EmpresaAtualizada.NomeFantasia;
                    }
                    if (EmpresaAtualizada.RazaoSocial != null)
                    {
                        empresaBuscada.RazaoSocial = EmpresaAtualizada.RazaoSocial;
                    }
                    if (EmpresaAtualizada.Telefone != null)
                    {
                        empresaBuscada.Telefone = EmpresaAtualizada.Telefone;
                    }
                    if (EmpresaAtualizada.NumFuncionario != empresaBuscada.NumFuncionario)
                    {
                        empresaBuscada.NumFuncionario = EmpresaAtualizada.NumFuncionario;
                    }
                    if (EmpresaAtualizada.NumCnae != null)
                    {
                        empresaBuscada.NumCnae = EmpresaAtualizada.NumCnae;
                    }
                    if (EmpresaAtualizada.Cep != null)
                    {
                        empresaBuscada.Cep = EmpresaAtualizada.Cep;
                    }
                    if (EmpresaAtualizada.Logradouro != null)
                    {
                        empresaBuscada.Logradouro = EmpresaAtualizada.Logradouro;
                    }
                    if (EmpresaAtualizada.Complemento != null)
                    {
                        empresaBuscada.Complemento = EmpresaAtualizada.Complemento;
                    }
                    if (EmpresaAtualizada.Localidade != null)
                    {
                        empresaBuscada.Localidade = EmpresaAtualizada.Localidade;
                    }
                    if (EmpresaAtualizada.Estado != null)
                    {
                        empresaBuscada.Uf = EmpresaAtualizada.Estado;
                    }

                    ctx.Update(empresaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool AdicionarVaga(Vaga vaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    vaga.DataExpiracao = DateTime.Now.AddDays(30);
                    vaga.DataPublicacao = DateTime.Now;
                    ctx.Add(vaga);
                    ctx.SaveChanges();
                    var VagaNova=ctx.Vaga.FirstOrDefault(v=>v==vaga);
                    AdicionarTecnologiaPadrao(VagaNova.IdVaga);
                    return true;
                }
                catch (Exception )
                {
                    return false;
                }
            }
        }

        public bool AtualizarVaga(int idVaga, AtualizarVagaViewModel vaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Vaga vagaBuscada = ctx.Vaga.Find(idVaga);
                    if (vagaBuscada == null)
                        return false;

                    if (vaga.Cep != null)
                        vagaBuscada.Cep = vaga.Cep;

                    if (vaga.Complemento != null)
                        vagaBuscada.Complemento = vaga.Complemento;

                    if (vaga.DescricaoBeneficio != null)
                        vagaBuscada.DescricaoBeneficio = vaga.DescricaoBeneficio;

                    if (vaga.DescricaoEmpresa != null)
                        vagaBuscada.DescricaoEmpresa = vaga.DescricaoEmpresa;

                    if (vaga.DescricaoVaga != null)
                        vagaBuscada.DescricaoVaga = vaga.DescricaoVaga;

                    if (vaga.Estado != null)
                        vagaBuscada.Estado = vaga.Estado;

                    if (vaga.Experiencia != null)
                        vagaBuscada.Experiencia = vaga.Experiencia;

                    if (vaga.Localidade != null)
                        vagaBuscada.Localidade = vaga.Localidade;

                    if (vaga.Logradouro != null)
                        vagaBuscada.Logradouro = vaga.Logradouro;

                    if (vaga.Salario != 0)
                        vagaBuscada.Salario = vaga.Salario;

                    if (vaga.TipoContrato != null)
                        vagaBuscada.TipoContrato = vaga.TipoContrato;

                    if (vaga.DataExpiracao>vagaBuscada.DataExpiracao&&vaga.DataExpiracao.Month>vagaBuscada.DataExpiracao.Month)
                        vagaBuscada.DataExpiracao = vaga.DataExpiracao;
                    ctx.Update(vagaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
        public bool DeletarVaga(int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Vaga vagaBuscada = ctx.Vaga.Find(idVaga);
                    if (vagaBuscada == null)
                        return false;

                    List<Inscricao> BuscarInscricoes = ctx.Inscricao.Where(u => u.IdVaga == vagaBuscada.IdVaga).ToList();
                    for (int i = 0; i < BuscarInscricoes.Count; i++)
                    {
                        ctx.Remove(BuscarInscricoes[i]);
                        ctx.SaveChanges();
                    }
                    List<VagaTecnologia> VagaTecnologia = ctx.VagaTecnologia.Where(v => v.IdVaga == vagaBuscada.IdVaga).ToList();
                    for (int i = 0; i < VagaTecnologia.Count; i++)
                    {
                        ctx.Remove(VagaTecnologia[i]);
                        ctx.SaveChanges();
                    }
                    ctx.Remove(vagaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception )
                {
                    return false;
                }
            }
        }
        public bool VerificarSeTecnologiaFoiAdicionada(int idTecnologia, int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    VagaTecnologia vaga = ctx.VagaTecnologia.FirstOrDefault(v => v.IdTecnologia == idTecnologia && v.IdVaga == idVaga);
                    if (vaga != null)
                        return true;

                    return false;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
        public void ExpirarVaga()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    List<Vaga> VagasExpiradas = ctx.Vaga.Where(v => v.DataExpiracao >= DateTime.Now).ToList();
                    for(int i = 0; i < VagasExpiradas.Count; i++)
                    {
                        DeletarVaga(VagasExpiradas[i].IdVaga);
                    }
                    ctx.SaveChanges();
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
            }
        }
        public bool AdicionarTecnologiaNaVaga(VagaTecnologia vagaTecnologia)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    ctx.Add(vagaTecnologia);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public bool RemoverTecnologiaDaVaga(VagaTecnologia vaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    var BuscandoVagaTecnologia = ctx.VagaTecnologia.FirstOrDefault(u => u == vaga);
                    if (BuscandoVagaTecnologia == null)
                        return false;

                    ctx.Remove(BuscandoVagaTecnologia);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool VerificarSeTecnologiaExiste(int idTecnologia)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Tecnologia tce = ctx.Tecnologia.FirstOrDefault(e => e.IdTecnologia== idTecnologia);
                    if (tce == null)
                        return true;
                    else
                    return false;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool AprovarCandidato(int idInscricao)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Inscricao inscricaoBuscada = ctx.Inscricao.Find(idInscricao);
                    if (inscricaoBuscada == null)
                        return false;
                    if (inscricaoBuscada.IdStatusInscricao == 2 && inscricaoBuscada.IdStatusInscricao != 3)
                    {
                        inscricaoBuscada.IdStatusInscricao = 1;
                        ctx.Update(inscricaoBuscada);
                        ctx.SaveChanges();
                        return true;
                    }
                    return false;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool ReprovarCandidato(int idInscricao)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Inscricao inscricaoBuscada = ctx.Inscricao.Find(idInscricao);
                    if (inscricaoBuscada == null)
                        return false;

                    if (inscricaoBuscada.IdStatusInscricao == 2 && inscricaoBuscada.IdStatusInscricao != 1)
                    {
                        inscricaoBuscada.IdStatusInscricao = 3;
                        ctx.Update(inscricaoBuscada);
                        ctx.SaveChanges();
                        return true;
                    }
                    return false;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public List<VagaTecnologia> ListarVagasDaEmpresa(int idEmpresa)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                return ctx.VagaTecnologia.Include(u => u.IdTecnologiaNavigation).Include(u=>u.IdVagaNavigation).Where(u=>u.IdVagaNavigation.IdEmpresa==idEmpresa).ToList();
            }
        }

        public bool VerificarSeaVagaPertenceaEmpresa(int idEmpresa,int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Vaga vagaBuscada = ctx.Vaga.FirstOrDefault(a => a.IdEmpresa == idEmpresa&&a.IdVaga==idVaga);
                    if (vagaBuscada == null)
                        return true;

                    return false;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public List<Inscricao> ListarCandidatosInscritos(int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Vaga vagaBuscada = ctx.Vaga.Find(idVaga);
                    if (vagaBuscada == null)
                        return null;

                    return ctx.Inscricao.Include(x => x.IdCandidatoNavigation).Where(x => x.IdVaga == idVaga).ToList();
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }
        public Empresa BuscarEmpresaPorIdUsuario(int idUsuario)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Empresa.FirstOrDefault(c => c.IdUsuario == idUsuario);
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }

        public List<Inscricao> ListarCandidatosAprovados(int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Inscricao.Include(x => x.IdCandidatoNavigation).Where(x => x.IdStatusInscricao == 1).ToList(); 
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }

        public List<Candidato> ListarCandidatosEstagiandoNaEmpresa(int idEmpresa)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    List<Estagio> ListaEstagios = ctx.Estagio.Where(e => e.IdEmpresa == idEmpresa).ToList();
                    List<Candidato> candidatos = new List<Candidato>();
                    for(int i = 0; i < ListaEstagios.Count; i++)
                    {
                        Candidato candidatoBuscado = ctx.Candidato.Find(ListaEstagios[i].IdCandidato);
                        candidatos.Add(candidatoBuscado);
                    }
                    return candidatos;
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }

        public void AdicionarTecnologiaPadrao(int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    var Vaga = ctx.Vaga.Find(idVaga);
                    int idTecnologia = 10;
                    AdicionarTecnologiaNaVaga(new VagaTecnologia { IdVaga=Vaga.IdVaga,IdTecnologia=idTecnologia});
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
            }
        }
    }
}
