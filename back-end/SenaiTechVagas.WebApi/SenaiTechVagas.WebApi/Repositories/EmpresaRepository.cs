using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{

    public class EmpresaRepository : IEmpresaRepository
    {
<<<<<<< HEAD
    string stringConexao = "Data Source=DESKTOP-1CB35NO; Initial Catalog=Db_TechVagas;integrated Security=True";
=======
    string stringConexao = "Data Source=DESKTOP-7H5DJOO;Initial Catalog=Db_TechVagas;integrated Security=True";
>>>>>>> 7b07ced0e8f5a4cc23039b70dfca68321686c83e
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
                        empresaBuscada.NomeReponsavel = EmpresaAtualizada.NomeResponsavel;
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
                catch (Exception e)
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

                    if (vaga.IdArea != vagaBuscada.IdArea&&vaga.IdArea!=0)
                        vagaBuscada.IdArea = vaga.IdArea;

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
                catch (Exception)
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

        public List<ListarVagasViewModel> ListarVagasDaEmpresa(int idEmpresa)
        {
            try
            {
<<<<<<< HEAD
                string stringConexao = "Data Source=DESKTOP-1CB35NO; Initial Catalog=Db_TechVagas;integrated Security=True";
=======
>>>>>>> 7b07ced0e8f5a4cc23039b70dfca68321686c83e
                List<ListarVagasViewModel> listvagas = new List<ListarVagasViewModel>();

                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                    "SELECT are.NomeArea,v.TituloVaga,e.RazaoSocial,v.IdVaga,t.NomeTecnologia,v.Experiencia,v.TipoContrato,v.Salario,v.Localidade FROM VagaTecnologia" +
                    " INNER JOIN Vaga v on v.IdVaga = VagaTecnologia.IdVaga" +
                    " INNER JOIN Tecnologia t on t.IdTecnologia = VagaTecnologia.IdTecnologia" +
                    " INNER JOIN Empresa e on e.IdEmpresa = v.IdEmpresa"+
                    " INNER JOIN Area are on are.IdArea=v.IdArea"+
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
                                NomeArea = rdr["NomeArea"].ToString(),
                                TituloVaga = rdr["TituloVaga"].ToString()
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

        public List<ListarInscricoesViewModel> ListarCandidatosInscritos(int idVaga)
        {
            try
            {
                List<ListarInscricoesViewModel> listInscricoes = new List<ListarInscricoesViewModel>();

                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                    "SELECT Inscricao.IdStatusInscricao,C.IdCandidato,IdInscricao,C.NomeCompleto,C.Telefone,Curso.NomeCurso,U.Email FROM Inscricao" +
                    " INNER JOIN Candidato C ON C.IdCandidato=Inscricao.IdCandidato" +
                    " INNER JOIN Usuario U ON U.IdUsuario=C.IdUsuario" +
                    " INNER JOIN Curso ON Curso.IdCurso=C.IdCurso" +
                    " WHERE Inscricao.IdVaga = @IDVaga AND Inscricao.idStatusInscricao=2";
                    con.Open();

                    // Declara o SqlDataReader para receber os dados do banco de dados
                    SqlDataReader rdr;

                    // Declara o SqlCommand passando o comando a ser executado e a conexão
                    using (SqlCommand cmd = new SqlCommand(querySelectAll, con))
                    {
                        cmd.Parameters.AddWithValue("@IDVaga", idVaga);
                        // Executa a query e armazena os dados no rdr
                        rdr = cmd.ExecuteReader();

                        // Enquanto houver registros para serem lidos no rdr, o laço se repete
                        while (rdr.Read())
                        {
                            // Instancia um objeto jogo 
                            ListarInscricoesViewModel vm = new ListarInscricoesViewModel
                            {
                                // Atribui às propriedades os valores das colunas da tabela do banco
                                idInscricao = Convert.ToInt32(rdr["IdInscricao"]),
                                idCandidato = Convert.ToInt32(rdr["idCandidato"]),
                                NomeCandidato = rdr["NomeCompleto"].ToString(),
                                Telefone = rdr["Telefone"].ToString(),
                                NomeCurso = rdr["NomeCurso"].ToString(),
                                Email = rdr["Email"].ToString()
                            };
                            listInscricoes.Add(vm);
                        }
                    }
                }
                // Retorna a lista de vagas
                return listInscricoes;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
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

        public List<ListarInscricoesViewModel> ListarCandidatosAprovados(int idVaga)
        {
            try
            {
                List<ListarInscricoesViewModel> listInscricoes = new List<ListarInscricoesViewModel>();

                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                    "SELECT Inscricao.IdStatusInscricao,C.IdCandidato,IdInscricao,C.NomeCompleto,C.Telefone,Curso.NomeCurso,U.Email FROM Inscricao" +
                    " INNER JOIN Candidato C ON C.IdCandidato=Inscricao.IdCandidato" +
                    " INNER JOIN Usuario U ON U.IdUsuario=C.IdUsuario" +
                    " INNER JOIN Curso ON Curso.IdCurso=C.IdCurso" +
                    " WHERE Inscricao.IdVaga = @IDVaga AND Inscricao.idStatusInscricao=1";
                    con.Open();

                    // Declara o SqlDataReader para receber os dados do banco de dados
                    SqlDataReader rdr;

                    // Declara o SqlCommand passando o comando a ser executado e a conexão
                    using (SqlCommand cmd = new SqlCommand(querySelectAll, con))
                    {
                        cmd.Parameters.AddWithValue("@IDVaga", idVaga);
                        // Executa a query e armazena os dados no rdr
                        rdr = cmd.ExecuteReader();

                        // Enquanto houver registros para serem lidos no rdr, o laço se repete
                        while (rdr.Read())
                        {
                            // Instancia um objeto jogo 
                            ListarInscricoesViewModel vm = new ListarInscricoesViewModel
                            {
                                // Atribui às propriedades os valores das colunas da tabela do banco
                                idInscricao = Convert.ToInt32(rdr["IdInscricao"]),
                                idCandidato = Convert.ToInt32(rdr["idCandidato"]),
                                NomeCandidato = rdr["NomeCompleto"].ToString(),
                                Telefone = rdr["Telefone"].ToString(),
                                NomeCurso = rdr["NomeCurso"].ToString(),
                                Email = rdr["Email"].ToString()
                            };
                              listInscricoes.Add(vm);
                        }
                    }
                }
                // Retorna a lista de vagas
                return listInscricoes;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
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
                    int idTecnologia = 1;
                    AdicionarTecnologiaNaVaga(new VagaTecnologia { IdVaga=Vaga.IdVaga,IdTecnologia=idTecnologia});
                }
                catch (Exception){}
            }
        }
    }
}
