using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.Utils;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Sockets;
using System.Security.Cryptography;
using System.Security.Cryptography.Xml;
using System.Text;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        public Usuario Login(string email, string senha)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    senha = Crypter.Criptografador(senha);
                    return ctx.Usuario.FirstOrDefault(u => u.Email == email && u.Senha == senha);
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }

        public List<Curso> ListarCurso()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Curso.ToList();
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }

        public List<Tecnologia> ListarTecnologia()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Tecnologia.ToList();
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }
        public bool CadastrarEmpresa(CadastrarEmpresaViewModel empresa)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Usuario usuario = new Usuario()
                    {
                        IdTipoUsuario = 3,
                        Email = empresa.Email,
                        Senha = empresa.Senha,
                        RespostaSeguranca=empresa.RespostaSeguranca,
                        PerguntaSeguranca=empresa.PerguntaSeguranca
                    };

                    Empresa NovaEmpresa = new Empresa()
                    {
                        NomeReponsavel = empresa.NomeReponsavel,
                        Cnpj = empresa.Cnpj,
                        EmailContato = empresa.EmailContato,
                        NomeFantasia = empresa.NomeFantasia,
                        RazaoSocial = empresa.RazaoSocial,
                        Telefone = empresa.Telefone,
                        NumFuncionario = empresa.NumFuncionario,
                        NumCnae = empresa.NumCnae,
                        Cep = empresa.Cep,
                        Logradouro = empresa.Logradouro,
                        Complemento = empresa.Complemento,
                        Localidade = empresa.Localidade,
                        Uf = empresa.Estado,
                        IdUsuarioNavigation = usuario
                    };
                    ctx.Add(NovaEmpresa);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
        public bool CadastrarCandidato(CadastrarCandidatoViewModel NovoCandidato)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Usuario user = new Usuario()
                    {
                        Email = NovoCandidato.Email,
                        Senha = NovoCandidato.Senha,
                        IdTipoUsuario = 2,
                        RespostaSeguranca = NovoCandidato.RespostaSeguranca,
                        PerguntaSeguranca = NovoCandidato.PerguntaSeguranca
                    };
                    Candidato applicant = new Candidato()
                    {
                        IdUsuarioNavigation = user,
                        NomeCompleto = NovoCandidato.NomeCompleto,
                        Rg = NovoCandidato.Rg,
                        Cpf = NovoCandidato.Cpf,
                        Telefone = NovoCandidato.Telefone,
                        LinkLinkedinCandidato = NovoCandidato.LinkLinkedinCandidato,
                        IdArea = NovoCandidato.IdArea,
                        IdCurso = NovoCandidato.IdCurso
                    };

                    ctx.Add(applicant);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public List<ListarVagasViewModel> ListarVagasEmGeral()
        {
            try
            {
                string stringConexao = "Data Source=DESKTOP-1CB35NO; Initial Catalog=Db_TechVagas;integrated Security=True";
                List<ListarVagasViewModel> listvagas = new List<ListarVagasViewModel>();

                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                    "SELECT  are.NomeArea,v.TituloVaga, e.RazaoSocial,v.IdVaga,t.NomeTecnologia,v.Experiencia,v.TipoContrato,v.Salario,v.Localidade FROM VagaTecnologia" +
                    " INNER JOIN Vaga v on v.IdVaga = VagaTecnologia.IdVaga" +
                    " INNER JOIN Tecnologia t on t.IdTecnologia = VagaTecnologia.IdTecnologia" +
                    " INNER JOIN Empresa e on e.IdEmpresa = v.IdEmpresa"+
                    " INNER JOIN Area are on are.IdArea=v.IdArea";
                    con.Open();

                    // Declara o SqlDataReader para receber os dados do banco de dados
                    SqlDataReader rdr;

                    // Declara o SqlCommand passando o comando a ser executado e a conexão
                    using (SqlCommand cmd = new SqlCommand(querySelectAll, con))
                    {
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
                                TituloVaga = (rdr["TituloVaga"]).ToString(),
                                Experiencia = rdr["Experiencia"].ToString(),
                                TipoContrato = rdr["TipoContrato"].ToString(),
                                Localidade = rdr["Localidade"].ToString(),
                                Salario = Convert.ToDecimal(rdr["Salario"]),
                                RazaoSocial = rdr["RazaoSocial"].ToString(),
                                NomeArea = rdr["NomeArea"].ToString()
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
        public List<ListarVagasViewModel> ListarFiltroNivelExperiencia(string NivelExperiencia)
        {
            try
            {
                string stringConexao = "Data Source=DESKTOP-1CB35NO; Initial Catalog=Db_TechVagas;integrated Security=True";
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
                    " WHERE v.Experiencia=@Experiencia";
                    con.Open();

                    // Declara o SqlDataReader para receber os dados do banco de dados
                    SqlDataReader rdr;

                    // Declara o SqlCommand passando o comando a ser executado e a conexão
                    using (SqlCommand cmd = new SqlCommand(querySelectAll, con))
                    {

                        cmd.Parameters.AddWithValue("@Experiencia", NivelExperiencia);

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
                                NomeArea = rdr["NomeArea"].ToString()
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

        public List<ListarVagasViewModel> ListarFiltroTipoContrato(string TipoContrato)
        {
            try
            {
                string stringConexao = "Data Source=DESKTOP-1CB35NO; Initial Catalog=Db_TechVagas;integrated Security=True";
                List<ListarVagasViewModel> listvagas = new List<ListarVagasViewModel>();

                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                   "SELECT are.NomeArea,v.TituloVaga,e.RazaoSocial,v.IdVaga,t.NomeTecnologia,v.Experiencia,v.TipoContrato,v.Salario,v.Localidade FROM VagaTecnologia" +
                   " INNER JOIN Vaga v on v.IdVaga = VagaTecnologia.IdVaga" +
                   " INNER JOIN Tecnologia t on t.IdTecnologia = VagaTecnologia.IdTecnologia" +
                   " INNER JOIN Empresa e on e.IdEmpresa = v.IdEmpresa" +
                   " INNER JOIN Area are on are.IdArea=v.IdArea"+
                   " WHERE v.TipoContrato=@TipoContrato";
                    con.Open();

                    // Declara o SqlDataReader para receber os dados do banco de dados
                    SqlDataReader rdr;

                    // Declara o SqlCommand passando o comando a ser executado e a conexão
                    using (SqlCommand cmd = new SqlCommand(querySelectAll, con))
                    {

                        cmd.Parameters.AddWithValue("@TipoContrato", TipoContrato);

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
                                NomeArea = rdr["NomeArea"].ToString()
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
            catch (Exception)
            {
                return null;
            }
        }

        public List<ListarVagasViewModel> ListarPesquisaTecnologia(string NomeTec)
        {
            try
            {
                string stringConexao = "Data Source=DESKTOP-1CB35NO; Initial Catalog=Db_TechVagas;integrated Security=True";
                List<ListarVagasViewModel> listvagas = new List<ListarVagasViewModel>();
                List<ListarVagasViewModel> listvagasBuscadas = new List<ListarVagasViewModel>();

                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                   "SELECT are.NomeArea,v.TituloVaga,e.RazaoSocial,v.IdVaga,t.NomeTecnologia,v.Experiencia,v.TipoContrato,v.Salario,v.Localidade FROM VagaTecnologia" +
                   " INNER JOIN Vaga v on v.IdVaga = VagaTecnologia.IdVaga" +
                   " INNER JOIN Tecnologia t on t.IdTecnologia = VagaTecnologia.IdTecnologia" +
                   " INNER JOIN Empresa e on e.IdEmpresa = v.IdEmpresa" +
                   " INNER JOIN Area are on are.IdArea=v.IdArea"+
                   " WHERE t.NomeTecnologia=@NomeTecnologia";
                    con.Open();

                    // Declara o SqlDataReader para receber os dados do banco de dados
                    SqlDataReader rdr;

                    // Declara o SqlCommand passando o comando a ser executado e a conexão
                    using (SqlCommand cmd = new SqlCommand(querySelectAll, con))
                    {
                        cmd.Parameters.AddWithValue("@NomeTecnologia", NomeTec);

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
                                NomeArea = rdr["NomeArea"].ToString()
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
                var listall = ListarVagasEmGeral();
                for (int i=0;i<listall.Count;i++)
                {
                    if (listall[i].Tecnologias.Contains(NomeTec))
                        listvagasBuscadas.Add(listall[i]);
                }
                // Retorna a lista de vagas
                return listvagasBuscadas;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public VagaCompletaViewModel BuscarVagaPeloId(int idVaga)
        {
            try
            {
                string stringConexao = "Data Source=DESKTOP-1CB35NO; Initial Catalog=Db_TechVagas;integrated Security=True";
                List<VagaCompletaViewModel> listvagas = new List<VagaCompletaViewModel>();
                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                   "SELECT v.TituloVaga,v.DescricaoVaga,v.DescricaoBeneficio,v.DescricaoEmpresa,v.Estado,v.CEP,v.Logradouro,v.Complemento,are.NomeArea,v.TituloVaga,e.RazaoSocial,v.IdVaga,t.NomeTecnologia,v.Experiencia,v.TipoContrato,v.Salario,v.Localidade FROM VagaTecnologia" +
                   " INNER JOIN Vaga v on v.IdVaga = VagaTecnologia.IdVaga" +
                   " INNER JOIN Tecnologia t on t.IdTecnologia = VagaTecnologia.IdTecnologia" +
                   " INNER JOIN Empresa e on e.IdEmpresa = v.IdEmpresa" +
                   " INNER JOIN Area are on are.IdArea=v.IdArea" +
                   " WHERE v.IdVaga=@IdVaga";
                    con.Open();

                    // Declara o SqlDataReader para receber os dados do banco de dados
                    SqlDataReader rdr;

                    // Declara o SqlCommand passando o comando a ser executado e a conexão
                    using (SqlCommand cmd = new SqlCommand(querySelectAll, con))
                    {
                        cmd.Parameters.AddWithValue("@IdVaga", idVaga);

                        // Executa a query e armazena os dados no rdr
                        rdr = cmd.ExecuteReader();

                        // Enquanto houver registros para serem lidos no rdr, o laço se repete
                        while (rdr.Read())
                        {
                            bool teveAcao = false;

                            // Instancia um objeto jogo 
                            VagaCompletaViewModel vm = new VagaCompletaViewModel
                            {
                                // Atribui às propriedades os valores das colunas da tabela do banco
                                IdVaga = Convert.ToInt32(rdr["IdVaga"]),
                                Experiencia = rdr["Experiencia"].ToString(),
                                TituloVaga = rdr["TituloVaga"].ToString(),
                                TipoContrato = rdr["TipoContrato"].ToString(),
                                Localidade = rdr["Localidade"].ToString(),
                                Salario = Convert.ToDecimal(rdr["Salario"]),
                                RazaoSocial = rdr["RazaoSocial"].ToString(),
                                NomeArea = rdr["NomeArea"].ToString(),
                                DescricaoBeneficio = rdr["DescricaoBeneficio"].ToString(),
                                DescricaoEmpresa = rdr["DescricaoVaga"].ToString(),
                                DescricaoVaga = rdr["DescricaoVaga"].ToString(),
                                Estado = rdr["Estado"].ToString(),
                                Cep = rdr["Cep"].ToString(),
                                Logradouro = rdr["Logradouro"].ToString(),
                                Complemento = rdr["Complemento"].ToString()
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
                                continue;//é do While
                            else vm.Tecnologias.Add(NomeTecnologia);
                            // Adiciona a vaga criada à lista de vagas
                            listvagas.Add(vm);
                        }
                    }
                }
                return listvagas[0];
            }
            catch (Exception)
            {
                return null;
            }
        }


        public List<ListarVagasViewModel> ListarVagasArea(int idArea)
        {
            try
            {
                string stringConexao = "Data Source=DESKTOP-1CB35NO; Initial Catalog=Db_TechVagas;integrated Security=True";
                List<ListarVagasViewModel> listvagas = new List<ListarVagasViewModel>();
                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                   "SELECT are.NomeArea,v.TituloVaga,e.RazaoSocial,v.IdVaga,t.NomeTecnologia,v.Experiencia,v.TipoContrato,v.Salario,v.Localidade FROM VagaTecnologia" +
                   " INNER JOIN Vaga v on v.IdVaga = VagaTecnologia.IdVaga" +
                   " INNER JOIN Tecnologia t on t.IdTecnologia = VagaTecnologia.IdTecnologia" +
                   " INNER JOIN Empresa e on e.IdEmpresa = v.IdEmpresa" +
                   " INNER JOIN Area are on are.IdArea=v.IdArea" +
                   " WHERE are.IdArea=@IdArea";
                    con.Open();

                    // Declara o SqlDataReader para receber os dados do banco de dados
                    SqlDataReader rdr;

                    // Declara o SqlCommand passando o comando a ser executado e a conexão
                    using (SqlCommand cmd = new SqlCommand(querySelectAll, con))
                    {
                        cmd.Parameters.AddWithValue("@IdArea", idArea);

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
                                NomeArea = rdr["NomeArea"].ToString()
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
                                continue;//é do While
                            else vm.Tecnologias.Add(NomeTecnologia);
                            // Adiciona a vaga criada à lista de vagas
                            listvagas.Add(vm);
                        }
                    }
                }
                return listvagas;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public string VerificarSeCredencialJaFoiCadastrada(VerificacaoViewModel vm)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    var usuarioBuscado = ctx.Usuario.FirstOrDefault(x => x.Email == vm.Email);
                    if (usuarioBuscado != null)
                        return "O email ja foi cadastrado";

                    if (vm.Rg !=null || vm.Cpf!=null)
                    {
                        var candidatoBuscado = ctx.Candidato.FirstOrDefault(x => x.Cpf == vm.Cpf);
                        if (candidatoBuscado != null)
                            return "O cpf ja foi cadastrado";
                        var candidatoBuscadoLink = ctx.Candidato.FirstOrDefault(x => x.LinkLinkedinCandidato == vm.LinkLinkedinCandidato);
                        if (candidatoBuscadoLink != null)
                            return "O linkedin ja foi cadastrado";
                        var candidatoBuscadoTelefone = ctx.Candidato.FirstOrDefault(x => x.Telefone == vm.Telefone);
                        if (candidatoBuscadoTelefone!=null)
                            return "O telefone ja foi cadastrado";
                        var candidatoBuscadoRg = ctx.Candidato.FirstOrDefault(x => x.Rg == vm.Rg);
                        if (candidatoBuscado != null || candidatoBuscadoRg != null)
                            return "O rg ja foi cadastrado";
                        else
                            return null;
                    }                    
                    var empresaBuscada = ctx.Empresa.FirstOrDefault(x => x.Cnpj == vm.Cnpj);
                    if (empresaBuscada != null)
                        return "O cnpj ja foi cadastrado";
                    var empresaBuscadaRazao = ctx.Empresa.FirstOrDefault(x => x.RazaoSocial == vm.RazaoSocial);
                    if (empresaBuscadaRazao != null)
                        return "A razao social ja foi cadastrada";
                    var empresaBuscadaNomeFantasia = ctx.Empresa.FirstOrDefault(x => x.NomeFantasia == vm.NomeFantasia);
                    if (empresaBuscadaNomeFantasia != null)
                        return "O nome fantasia ja foi cadastrado";
                    else
                        return null;
                }
                catch (Exception)
                {
                    return "Erro no sistema";
                }
            }
        }

        public bool RecuperarSenha(AlterarSenhaViewModel vm)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    var usuario = ctx.Usuario.FirstOrDefault(u => u.Email == vm.Email && u.PerguntaSeguranca == vm.Pergunta && u.RespostaSeguranca == vm.Resposta);
                    if (usuario == null)
                       return false;         
                    usuario.Senha = Crypter.Criptografador(vm.NovaSenha);
                    ctx.Update(usuario);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public List<Area> ListarAreas()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Area.ToList();
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }

        public bool AlterarSenhaUsuarioLogado(string NovaSenha, int idUsuario)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Usuario usuarioBuscado = ctx.Usuario.Find(idUsuario);
                    if (usuarioBuscado == null)
                        return false;

                    usuarioBuscado.Senha = Crypter.Criptografador(NovaSenha);
                    ctx.Update(usuarioBuscado);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
    }
}
