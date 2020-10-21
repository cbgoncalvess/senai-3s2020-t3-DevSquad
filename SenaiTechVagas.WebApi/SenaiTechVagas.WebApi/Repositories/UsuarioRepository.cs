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
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Sockets;
using System.Security.Cryptography.Xml;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        public Usuario Logar(string email, string senha)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Usuario.FirstOrDefault(u => u.Email == email && u.Senha == senha);
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }

        public bool AtualizarUsuario(int idUsuario, AtualizarUsuarioViewModel usuario)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Usuario usuarioBuscado = ctx.Usuario.Find(idUsuario);

                    if (usuario.Email != null)
                        usuarioBuscado.Email = usuario.Email;

                    if (usuario.Senha != null)
                        usuarioBuscado.Senha = usuario.Senha;
                    return true;
                }
                catch (Exception)
                {
                    return false;
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
                        Senha = empresa.Senha
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
                catch (Exception e)
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
                string stringConexao = "Data Source=DESKTOP-0VF65US\\SQLEXPRESS;Initial Catalog=Db_TechVagas;integrated Security=True";
                List<ListarVagasViewModel> listvagas = new List<ListarVagasViewModel>();

                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                    "SELECT e.RazaoSocial,v.IdVaga,t.NomeTecnologia,v.Experiencia,v.TipoContrato,v.Salario,v.Localidade FROM VagaTecnologia" +
                    " INNER JOIN Vaga v on v.IdVaga = VagaTecnologia.IdVaga" +
                    " INNER JOIN Tecnologia t on t.IdTecnologia = VagaTecnologia.IdTecnologia"+
                    " INNER JOIN Empresa e on e.IdEmpresa = v.IdEmpresa";
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
                                Experiencia = rdr["Experiencia"].ToString(),
                                TipoContrato = rdr["TipoContrato"].ToString(),
                                Localidade = rdr["Localidade"].ToString(),
                                Salario = Convert.ToDecimal(rdr["Salario"]),
                                Empresa = new Empresa
                                {
                                    RazaoSocial = rdr["RazaoSocial"].ToString()
                                }
                            };
                            var NomeTecnologia = rdr["NomeTecnologia"].ToString();
                            vm.Tecnologias=new List<string>();

                            for (int i = 0; i<listvagas.Count; i++)
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
                    " INNER JOIN Empresa e on e.IdEmpresa = v.IdEmpresa"+
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
                                Empresa = new Empresa
                                {
                                    RazaoSocial = rdr["RazaoSocial"].ToString()
                                }
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
                                Empresa = new Empresa
                                {
                                    RazaoSocial = rdr["RazaoSocial"].ToString()
                                }
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
                string stringConexao = "Data Source=DESKTOP-0VF65US\\SQLEXPRESS;Initial Catalog=Db_TechVagas;integrated Security=True";
                List<ListarVagasViewModel> listvagas = new List<ListarVagasViewModel>();
                List<ListarVagasViewModel> listvagasBuscadas = new List<ListarVagasViewModel>();

                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                   "SELECT e.RazaoSocial,v.IdVaga,t.NomeTecnologia,v.Experiencia,v.TipoContrato,v.Salario,v.Localidade FROM VagaTecnologia" +
                   " INNER JOIN Vaga v on v.IdVaga = VagaTecnologia.IdVaga" +
                   " INNER JOIN Tecnologia t on t.IdTecnologia = VagaTecnologia.IdTecnologia" +
                   " INNER JOIN Empresa e on e.IdEmpresa = v.IdEmpresa" +
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
                                Empresa = new Empresa
                                {
                                    RazaoSocial = rdr["RazaoSocial"].ToString()
                                }
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

        public bool VerificarSeEmailJaFoiCadastrado(string email)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Usuario usuarioBuscado = ctx.Usuario.First(x => x.Email == email);
                    if (usuarioBuscado != null)
                        return true;

                    return false;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
        public bool VerificarSeCandidatoJaFoiCadastrado(string credencial)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Candidato candidatoBuscado = ctx.Candidato.FirstOrDefault(x => x.Cpf == credencial);
                    if(candidatoBuscado!=null)
                        return true;

                    return false;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool VerificarSeEmpresaJaFoiCadastrada(string credencial)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                   Empresa empresaBuscada = ctx.Empresa.FirstOrDefault(x => x.Cnpj == credencial);
                    if (empresaBuscada != null)
                        return true;

                    return false;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public VagaTecnologia BuscarVagaPeloId(int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.VagaTecnologia.Include(u => u.IdTecnologiaNavigation).Include(U => U.IdVagaNavigation).FirstOrDefault(u=>u.IdVaga==idVaga);
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }
        //List<VagaTecnologia> VagasRecomendadasDesenvolvimento(int idCurso)
        //{
        //    using(DbSenaiContext ctx=new DbSenaiContext())
        //    {
        //        try
        //        {
        //            if(idCurso==2|| idCurso == 1 || idCurso == 4 || idCurso == 5)
        //            {
        //                return ctx.VagaTecnologia.Include(u => u.IdTecnologiaNavigation)
        //                .Include(u => u.IdVagaNavigation)
        //                .Where(u => u.IdVagaNavigation.TipoContrato == "Estagio" || u.IdVagaNavigation.Experiencia == "Estagiario")
        //                .ToList();
        //            }

        //            if(idCurso == 3 || idCurso == 6)
        //            {
        //                return ctx.VagaTecnologia.Include(u => u.IdTecnologiaNavigation)
        //                .Include(u => u.IdVagaNavigation)
        //                .Where(u => u.IdVagaNavigation.TipoContrato == "CLT" || u.IdVagaNavigation.Experiencia == "Júnior")
        //                .ToList();
        //            }
        //            return null;
        //        }
        //        catch (Exception)
        //        {
        //            return null;
        //        }
        //    }
        //}
    }
}
