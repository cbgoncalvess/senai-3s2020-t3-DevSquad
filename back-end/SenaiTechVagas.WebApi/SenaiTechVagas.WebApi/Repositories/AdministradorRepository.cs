using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.Utils;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class AdministradorRepository:IAdministradorRepository
    {
        string stringConexao = "Data Source=DESKTOP-1CB35NO; Initial Catalog=Db_TechVagas;integrated Security=True";
        public bool AtualizarCurso(int id, Curso curso)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Curso cursoBuscado = ctx.Curso.Find(id);
                    cursoBuscado.NomeCurso = curso.NomeCurso;
                    cursoBuscado.TipoCurso = curso.TipoCurso;
                    ctx.Curso.Update(cursoBuscado);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool CadastrarCurso(Curso curso)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    ctx.Add(curso);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
  
        public bool CadastrarEstagio(Estagio Estagio)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Estagio.DataCadastro = DateTime.Now;
                    ctx.Add(Estagio);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public bool AtualizarEstagio(int idEstagio, AtualizarEstagioViewModel estagioAtualizado)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Estagio estagioBuscado = ctx.Estagio.Find(idEstagio);
                    if (estagioBuscado == null)
                        return false;

                    if (estagioAtualizado.IdEmpresa >= 1)
                        estagioBuscado.IdEmpresa = estagioAtualizado.IdEmpresa;

                    if (estagioAtualizado.PeriodoEstagio < 36)
                        estagioBuscado.PeriodoEstagio = estagioAtualizado.PeriodoEstagio;

                    if (estagioAtualizado.IdCandidato >= 1)
                        estagioBuscado.IdCandidato = estagioAtualizado.IdCandidato;

                    ctx.Update(estagioBuscado);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
        public bool DeletarEstagioPorId(int idEstagio)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Estagio estagioBuscado = ctx.Estagio.Find(idEstagio);
                    if (estagioBuscado == null)
                        return false;

                    ctx.Remove(estagioBuscado);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public List<ListarEstagiosViewModel> ListarEstagios()
        {
            try
            {
                List<ListarEstagiosViewModel> listEstagios = new List<ListarEstagiosViewModel>();

                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                   " SELECT Estagio.DataCadastro,Curso.NomeCurso,Estagio.IdEstagio,PeriodoEstagio,E.RazaoSocial,C.NomeCompleto,A.NomeArea,C.Telefone,U.Email FROM Estagio" +
                   " INNER JOIN Empresa E on E.IdEmpresa = Estagio.IdEmpresa" +
                   " INNER JOIN Candidato C on C.IdCandidato = Estagio.IdCandidato" +
                   " INNER JOIN Area A on A.IdArea = C.IdArea" +
                   " INNER JOIN Usuario U on U.IdUsuario = C.IdUsuario"+
                   " INNER JOIN Curso ON Curso.idCurso=C.idCurso";
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
                            // Instancia um objeto jogo 
                            ListarEstagiosViewModel vm = new ListarEstagiosViewModel
                            {
                                // Atribui às propriedades os valores das colunas da tabela do banco
                                idEstagio = Convert.ToInt32(rdr["IdEstagio"]),
                                NomeCompleto = (rdr["NomeCompleto"]).ToString(),
                                EmailCandidato = (rdr["Email"]).ToString(),
                                PeriodoEstagio = Convert.ToInt32(rdr["PeriodoEstagio"]),
                                Telefone = (rdr["Telefone"]).ToString(),
                                RazaoSocial = (rdr["RazaoSocial"]).ToString(),
                                NomeArea = (rdr["NomeArea"]).ToString(),
                                NomeCurso=(rdr["NomeCurso"]).ToString()
                            };
                            var DataCadastro = Convert.ToDateTime(rdr["DataCadastro"]);
                            var resultado = tempoDeEstagio(DataCadastro,DateTime.Now);
                            vm.TempoEstagiado = resultado;
                            if (vm.TempoEstagiado >= vm.PeriodoEstagio)
                                vm.StatusEstagio = "Estagio encerrado";
                            else
                                vm.StatusEstagio = "Estagiando";
                            listEstagios.Add(vm);
                        }
                    }
                }
                // Retorna a lista de vagas
                return listEstagios;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        static int tempoDeEstagio(DateTime dataInicioEstagio, DateTime dataAtual)
        {
            long elapsedTicks = dataAtual.Ticks - dataInicioEstagio.Ticks;
            TimeSpan elapsedSpan = new TimeSpan(elapsedTicks);
            double tempoEmDiasDouble = elapsedSpan.TotalDays;
            int tempoEmDiasInt = Convert.ToInt32(tempoEmDiasDouble);
            return tempoEmDiasInt;
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
                catch (Exception)
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
                    return ctx.Estagio.Where(v => v.PeriodoEstagio == Periodo).ToList();
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }

        public int[] ContadorCadastros()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    var Empresa=ctx.Empresa.ToList().Count; 
                    var Candidato=ctx.Candidato.ToList().Count;
                    var Estagios=ctx.Estagio.ToList().Count;
                    List<int> Cont = new List<int>();
                    Cont.Add(Empresa);
                    Cont.Add(Estagios);
                    Cont.Add(Candidato);
                    return Cont.ToArray();
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }
    
        public bool AtualizarTipoUsuario(int id, TipoUsuario tipoUsuario)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    TipoUsuario tipoUsuarioBuscado = ctx.TipoUsuario.Find(id);
                    tipoUsuarioBuscado.NomeTipoUsuario = tipoUsuario.NomeTipoUsuario;
                    ctx.TipoUsuario.Update(tipoUsuarioBuscado);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool CadastrarTipoUsuario(TipoUsuario tipoUsuario)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    ctx.Add(tipoUsuario);
                    ctx.SaveChanges();
                    return true;

                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public List<TipoUsuario> ListarTipoUsuario()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.TipoUsuario.ToList();
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }
        public bool AtualizarStatusInscricao(int id, StatusInscricao status)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    var statusBuscado = ctx.StatusInscricao.Find(id);
                    if (statusBuscado == null)
                        return false;

                    if (status.NomeStatusInscricao != null)
                        statusBuscado.NomeStatusInscricao = status.NomeStatusInscricao;

                    ctx.Update(statusBuscado);
                    ctx.SaveChanges();

                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool CadastrarStatusInscricao(StatusInscricao statusInscricao)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    ctx.Add(statusInscricao);
                    ctx.SaveChanges();

                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
        public List<StatusInscricao> ListarStatusInscricao()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                return ctx.StatusInscricao.ToList();
            }
        }
        public bool AtualizarTecnologia(int id, Tecnologia tecnologia)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Tecnologia tecnologiaBuscada = ctx.Tecnologia.Find(id);
                    tecnologiaBuscada.NomeTecnologia = tecnologia.NomeTecnologia;
                    ctx.Tecnologia.Update(tecnologiaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        

        public bool CadastrarTecnologia(Tecnologia tecnologia)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    ctx.Add(tecnologia);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
        public List<Candidato> ListarCandidatos()
        {
            try
            {
                List<Candidato> listCandidatos = new List<Candidato>();

                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                   " SELECT NomeCompleto,Email,IdCandidato,U.IdUsuario,TU.IdTipoUsuario FROM Candidato" +
                   " INNER JOIN Usuario U on U.IdUsuario = Candidato.IdUsuario" +
                   " INNER JOIN TipoUsuario TU on TU.IdTipoUsuario=U.IdTipoUsuario";
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
                            // Instancia um objeto jogo 
                            Candidato vm = new Candidato
                            {
                                // Atribui às propriedades os valores das colunas da tabela do banco
                                IdCandidato = Convert.ToInt32(rdr["IdCandidato"]),
                                NomeCompleto = (rdr["NomeCompleto"]).ToString(),
                                IdUsuario = Convert.ToInt32(rdr["IdUsuario"])
                            };

                            Usuario U = new Usuario
                            {
                                Email = (rdr["Email"]).ToString()
                            };

                            TipoUsuario Tu = new TipoUsuario
                            {
                                IdTipoUsuario = Convert.ToInt32(rdr["IdTipoUsuario"])
                            };

                            U.IdTipoUsuarioNavigation = Tu;
                            vm.IdUsuarioNavigation = U;
                            if (Tu.IdTipoUsuario != 4)
                            {
                                listCandidatos.Add(vm);
                            }
                        }
                    }
                }
                // Retorna a lista de vagas
                return listCandidatos;
            }
            catch (Exception)
            {
                return null;
            }
        }
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
                       DeletarInscricao(listaDeInscricao[i].IdInscricao);
                    }
                    Estagio estagioBuscado = ctx.Estagio.FirstOrDefault(e => e.IdCandidato == CandidatoBuscado.IdCandidato);
                    if (estagioBuscado != null)
                    {
                        ctx.Remove(estagioBuscado);
                        ctx.SaveChanges();
                    }
                    DeletarUsuarioEmpresaCandidato(CandidatoBuscado.IdUsuario);
                    ctx.SaveChanges();    
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
        public bool DeletarInscricao(int idInscricao)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Inscricao inscricaoBuscada = ctx.Inscricao.Find(idInscricao);
                    if (inscricaoBuscada == null)
                        return false;

                    ctx.Remove(inscricaoBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
        public bool DeletarEmpresaPorId(int idEmpresa)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Empresa empresaBuscado =ctx.Empresa.Find(idEmpresa);
                    if (empresaBuscado == null)
                        return false;

                    List<Estagio> ListaDeEstagios = ctx.Estagio.Where(i => i.IdEmpresa == empresaBuscado.IdEmpresa).ToList();
                    for (int i = 0; i < ListaDeEstagios.Count; i++)
                    {

                        if (DeletarEstagioPorId(ListaDeEstagios[i].IdEmpresa))
                            continue;

                        break;
                    }
                    List<VagaTecnologia> ListaDeVagaTecnologia = ctx.VagaTecnologia.Where(i => i.IdVagaNavigation.IdEmpresa == empresaBuscado.IdEmpresa).ToList();
                    for (int i = 0; i < ListaDeVagaTecnologia.Count; i++)
                    {
                        if (DeletarVagaTecnologia(ListaDeVagaTecnologia[i].IdTecnologia, ListaDeVagaTecnologia[i].IdVaga))
                            continue;

                        break;
                    }

                    List<Vaga> ListaDeVaga = ctx.Vaga.Where(i => i.IdEmpresa == empresaBuscado.IdEmpresa).ToList();
                    for (int i = 0; i < ListaDeVaga.Count; i++)
                    {
                        if (DeletarVaga(ListaDeVaga[i].IdVaga))
                            continue;
                    }
                    DeletarUsuarioEmpresaCandidato(empresaBuscado.IdUsuario);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }



        /// <summary>
        /// Foi necessario criar esse metodo para poder deletar empresa/Candidato e usuario,no mesmo metodo estava dando erro
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        public bool DeletarUsuarioEmpresaCandidato(int idUsuario)
        {
            using(DbSenaiContext ctx=new DbSenaiContext())
            {
                try
                {
                    Usuario usuarioBuscado = ctx.Usuario.Find(idUsuario);
                    Empresa empresaBuscada = ctx.Empresa.FirstOrDefault(e => e.IdUsuario == idUsuario);
                    if (empresaBuscada != null)
                    {
                        ctx.Remove(empresaBuscada);
                        ctx.Remove(usuarioBuscado);
                        ctx.SaveChanges();
                        return true;
                    }

                    Candidato candidatoBuscado = ctx.Candidato.FirstOrDefault(e => e.IdUsuario == idUsuario);
                    if (candidatoBuscado!=null)
                    {
                        ctx.Remove(candidatoBuscado);
                        ctx.Remove(usuarioBuscado);
                        ctx.SaveChanges();
                        return true;
                    }
                    return false;
                }
                catch(Exception)
                {
                    return false;
                }
            }
        }
        public List<Empresa> ListarEmpresa()
        {
            try
            {
                List<Empresa> listEmpresas = new List<Empresa>();

                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                   " SELECT RazaoSocial,EmailContato,U.Email,IdEmpresa,U.IdUsuario,TU.IdTipoUsuario FROM Empresa" +
                   " INNER JOIN Usuario U on U.IdUsuario = Empresa.IdUsuario" +
                   " INNER JOIN TipoUsuario TU on TU.IdTipoUsuario=U.IdTipoUsuario";
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
                            // Instancia um objeto jogo 
                            Empresa vm = new Empresa
                            {
                                // Atribui às propriedades os valores das colunas da tabela do banco
                                IdEmpresa = Convert.ToInt32(rdr["IdEmpresa"]),
                                RazaoSocial = (rdr["RazaoSocial"]).ToString(),
                                EmailContato = (rdr["EmailContato"]).ToString(),
                                IdUsuario = Convert.ToInt32(rdr["IdUsuario"])
                            };

                            Usuario U = new Usuario
                            {
                                Email = (rdr["Email"]).ToString()
                            };

                            TipoUsuario Tu = new TipoUsuario
                            {
                                IdTipoUsuario = Convert.ToInt32(rdr["IdTipoUsuario"])
                            };

                            U.IdTipoUsuarioNavigation = Tu;
                            vm.IdUsuarioNavigation = U;
                            if (Tu.IdTipoUsuario != 4)
                            {
                                listEmpresas.Add(vm);
                            }
                        }
                    }
                }
                // Retorna a lista de vagas
                return listEmpresas;
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public bool DeletarVaga(int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    //Falta adicionar a empresa a que é publicadora da vaga
                    Vaga vagaBuscada = ctx.Vaga.Find(idVaga);
                    if (vagaBuscada == null)
                        return false;

                    List<Inscricao> BuscarInscricoes = ctx.Inscricao.Where(u => u.IdVaga == vagaBuscada.IdVaga).ToList();
                    for (int i = 0; i < BuscarInscricoes.Count; i++)
                    {
                        ctx.Remove(BuscarInscricoes[i]);
                    }
                    List<VagaTecnologia> VagaTecnologia = ctx.VagaTecnologia.Where(v => v.IdVaga == vagaBuscada.IdVaga).ToList();
                    for (int i = 0; i < VagaTecnologia.Count; i++)
                    {
                        ctx.Remove(VagaTecnologia[i]);
                    }
                    Empresa empresaBuscada = ctx.Empresa.Find(vagaBuscada.IdEmpresa);
                    ctx.Update(empresaBuscada);
                    ctx.Remove(vagaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
        public List<Usuario> ListaDebanidos()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Usuario.Where(u => u.IdTipoUsuario == 4).ToList();
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }
        public bool DesbanirUsuario(int idUsuario)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Empresa empresaBuscada = ctx.Empresa.Include(u=>u.IdUsuarioNavigation).FirstOrDefault(e => e.IdUsuario == idUsuario);
                    if (empresaBuscada != null)
                    {
                        if (empresaBuscada.IdUsuarioNavigation.IdTipoUsuario != 3)
                        {
                            empresaBuscada.IdUsuarioNavigation.IdTipoUsuario = 3;
                            ctx.Update(empresaBuscada);
                            ctx.SaveChanges();
                            return true;
                        }
                        return false;
                    }
                    Candidato candidatoBuscado = ctx.Candidato.Include(u => u.IdUsuarioNavigation).FirstOrDefault(e => e.IdUsuario == idUsuario);
                    if (candidatoBuscado!=null)
                    {
                        if (candidatoBuscado.IdUsuarioNavigation.IdTipoUsuario!=2 )
                        {
                            candidatoBuscado.IdUsuarioNavigation.IdTipoUsuario = 2;
                            ctx.Update(candidatoBuscado);
                            ctx.SaveChanges();
                            return true;
                        }
                    }
                    Usuario ColaboradorBuscado = ctx.Usuario.Find(idUsuario);
                    if (empresaBuscada==null && candidatoBuscado==null &&ColaboradorBuscado!=null&&ColaboradorBuscado.IdTipoUsuario==4)
                    {
                        ColaboradorBuscado.IdTipoUsuario = 1;
                        ctx.Update(ColaboradorBuscado);
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
        public bool BanirUsuario(int idUsuario)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Usuario usuarioBuscadoCandidato = ctx.Usuario.Include(u => u.Candidato).FirstOrDefault(u => u.IdUsuario == idUsuario);
                    Usuario usuarioBuscadoEmpresa = ctx.Usuario.Include(u => u.Empresa).FirstOrDefault(u => u.IdUsuario == idUsuario);
                    Usuario usuarioBuscadoColaborador = ctx.Usuario.Find(idUsuario);
                    if (usuarioBuscadoCandidato == null && usuarioBuscadoEmpresa == null && usuarioBuscadoColaborador == null)
                        return false;

                    if (usuarioBuscadoCandidato.IdTipoUsuario != 4&&usuarioBuscadoCandidato.Candidato!=null)
                    {
                        Candidato candidato = ctx.Candidato.Include(u => u.Inscricao).FirstOrDefault(u => u.IdUsuarioNavigation.IdUsuario == usuarioBuscadoCandidato.IdUsuario);
                        for(int i = 0; i < candidato.Inscricao.Count; i++)
                        {
                            Inscricao inscricao = ctx.Inscricao.FirstOrDefault(u => u.IdCandidato == candidato.IdCandidato);
                            if (inscricao == null)
                                break;
                            DeletarInscricao(inscricao.IdInscricao);
                        }
                        usuarioBuscadoCandidato.IdTipoUsuario = 4;
                        ctx.Update(usuarioBuscadoCandidato);
                        ctx.SaveChanges();
                        return true;
                    }
                    else if (usuarioBuscadoEmpresa.IdTipoUsuario != 4&&usuarioBuscadoEmpresa.Empresa!=null)
                    {
                        Empresa empresaBuscada = ctx.Empresa.Include(u => u.Vaga).FirstOrDefault(u => u.IdUsuarioNavigation.IdUsuario == usuarioBuscadoEmpresa.IdUsuario);
                        for (int i = 0; i < empresaBuscada.Vaga.Count; i++)
                        {
                            Vaga vagaBuscada = ctx.Vaga.FirstOrDefault(u => u.IdEmpresa == empresaBuscada.IdEmpresa);
                            if (vagaBuscada == null)
                                break;

                            DeletarVaga(vagaBuscada.IdVaga);
                        }
                        usuarioBuscadoEmpresa.IdTipoUsuario = 4;
                        ctx.Update(usuarioBuscadoEmpresa);
                        ctx.SaveChanges();
                        return true;
                    }
                    else if (usuarioBuscadoColaborador.IdTipoUsuario != 4 && usuarioBuscadoColaborador.IdTipoUsuario==1)
                    {
                        usuarioBuscadoColaborador.IdTipoUsuario = 4;
                        ctx.Update(usuarioBuscadoColaborador);
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

        public bool DeletarVagaTecnologia(int idTecnologia, int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    var BuscandoVagaTecnologia = ctx.VagaTecnologia.FirstOrDefault(u => u.IdVaga == idVaga && u.IdTecnologia == idTecnologia);
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

        public bool CadastrarAdministardor(Usuario usuario)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    usuario.IdTipoUsuario = 1;
                    ctx.Add(usuario);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool DeletarAdministrador(int id)
        {
            using(DbSenaiContext ctx=new DbSenaiContext())
            {
                try
                {
                    Usuario usuario = ctx.Usuario.Find(id);
                    if (usuario.IdTipoUsuario!=4||usuario == null||usuario.IdUsuario==1)
                        return false;

                    else
                    {
                        ctx.Remove(usuario);
                        ctx.SaveChanges();
                        return true;
                    }
                }
                catch (Exception)
                {
                   return false;
                }
            }
        }

        public List<Usuario> ListarAdministradores()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Usuario.Where(v=>v.IdTipoUsuario==1).ToList();
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }

        public bool CadastrarArea(Area area)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    ctx.Add(area);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool AtualizarArea(int idArea, Area area)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Area areaBuscada = ctx.Area.Find(idArea);
                    if (area.NomeArea != null)
                        areaBuscada.NomeArea = area.NomeArea;

                    ctx.Update(areaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool AlterarSenhaDoUsuario(string email, string NovaSenha)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    var usuario = ctx.Usuario.FirstOrDefault(u => u.Email == email);
                    if (usuario == null)
                        return false;
                    else
                    {
                        usuario.Senha = Crypter.Criptografador(NovaSenha);
                        ctx.Update(usuario);
                        ctx.SaveChanges();
                        return true;
                    }
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool AlterarSenhaDeQualquerUsuario(string Email,string senha)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Usuario usuarioBuscado = ctx.Usuario.FirstOrDefault(u => u.Email == Email);
                    if (usuarioBuscado == null)
                        return false;

                    usuarioBuscado.Senha =Crypter.Criptografador(senha);
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
                    " WHERE Inscricao.IdVaga = @IDVaga";
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
    }
}