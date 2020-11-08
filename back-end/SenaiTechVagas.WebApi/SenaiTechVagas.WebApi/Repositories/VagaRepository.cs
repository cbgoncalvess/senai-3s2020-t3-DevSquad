using Microsoft.Data.SqlClient;
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
                    var VagaNova = ctx.Vaga.FirstOrDefault(v => v == vaga);
                    var Vaga = ctx.Vaga.Find(VagaNova.IdVaga);
                    int idTecnologia = 1;
                    var a=(new VagaTecnologia { IdVaga = Vaga.IdVaga, IdTecnologia = idTecnologia });
                    ctx.Add(a);
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

        public List<ListarVagasViewModel> ListarVagas(int idEmpresa)
        {
            try
            {
                string stringConexao = "Data Source=DESKTOP-0VF65US\\SQLEXPRESS;Initial Catalog=Db_TechVagas;integrated Security=True";
                List<ListarVagasViewModel> listvagas = new List<ListarVagasViewModel>();

                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                    "SELECT e.RazaoSocial,v.IdVaga,t.NomeTecnologia,v.Experiencia,v.TipoContrato,v.Salario,v.Localidade FROM VagaTecnologia" +
                    " INNER JOIN Vaga v on v.IdVaga = VagaTecnologia.IdVaga" +
                    " INNER JOIN Tecnologia t on t.IdTecnologia = VagaTecnologia.IdTecnologia" +
                    " INNER JOIN Empresa e on e.IdEmpresa = v.IdEmpresa" +
                    " WHERE e.IdEmpresa =@IDEmpresa";
                    con.Open();

                    // Declara o SqlDataReader para receber os dados do banco de dados
                    SqlDataReader rdr;

                    // Declara o SqlCommand passando o comando a ser executado e a conexão
                    using (SqlCommand cmd = new SqlCommand(querySelectAll, con))
                    {
                        cmd.Parameters.AddWithValue("@IDEmpresa", idEmpresa);
                        // Executa a query e armazena os dados no rdr
                        rdr = cmd.ExecuteReader();

                        // Enquanto houver registros para serem lidos no rdr, o laço se repete
                        while (rdr.Read())
                        {
                            bool teveAcao = false;

                            // Instancia um objeto jogo 
                            ListarVagasViewModel vm = new ListarVagasViewModel
                            {
                                // Atribui às propriedades os valores das colunas da tabela do banco
                                IdVaga = Convert.ToInt32(rdr["IdVaga"]),
                                Experiencia = rdr["Experiencia"].ToString(),
                                TipoContrato = rdr["TipoContrato"].ToString(),
                                Localidade = rdr["Localidade"].ToString(),
                                Salario = Convert.ToDecimal(rdr["Salario"]),
                                RazaoSocial = rdr["RazaoSocial"].ToString(),
                            };
                            var NomeTecnologia = rdr["NomeTecnologia"].ToString();
                            vm.Tecnologias = new List<string>();

                            for (int i = 0; i < listvagas.Count; i++)
                            {
                                if (vm.IdVaga == listvagas[i].IdVaga)
                                {
                                    listvagas[i].Tecnologias.Add(NomeTecnologia);
                                    teveAcao = true;
                                }
                            }
                            if (teveAcao == true)
                                continue;
                            else vm.Tecnologias.Add(NomeTecnologia);
                            // Adiciona a vaga criada à lista de vagas
                            listvagas.Add(vm);
                        }
                    }
                }

                // Retorna a lista de vagas
                return listvagas;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
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
