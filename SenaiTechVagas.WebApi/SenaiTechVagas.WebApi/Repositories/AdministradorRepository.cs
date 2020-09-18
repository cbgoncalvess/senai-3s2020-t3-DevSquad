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
    public class AdministradorRepository:IAdministradorRepository
    {
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
                catch (Exception e)
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
                catch (Exception e)
                {
                    return false;
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
                catch (Exception e)
                {
                    return null;
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
                catch (Exception e)
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

        public List<Estagio> ListarPorperiodo(int Periodo)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Estagio.Where(v => v.PeriodoEstagio == Periodo).ToList();
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }

        public int ContadorEmpresasCadastradas()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Empresa.ToList().Count;
                }
                catch (Exception e)
                {
                    return 0;
                }
            }
        }

        public int ContadorCandidatoCadastrados()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Candidato.ToList().Count;
                }
                catch (Exception e)
                {
                    return 0;
                }
            }
        }

        public int ContadorCandidatoContratados()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Estagio.ToList().Count;
                }
                catch (Exception e)
                {
                    return 0;
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
                catch (Exception e)
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
                catch (Exception e)
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
                catch (Exception e)
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
                catch (Exception e)
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
                catch (Exception e)
                {
                    return false;
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
                catch (Exception e)
                {
                    return null;
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
                catch (Exception e)
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
                catch (Exception e)
                {
                    return null;
                }
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
                catch (Exception e)
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

                        break;
                    }

                    ctx.Remove(empresaBuscado);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public List<Empresa> ListarEmpresa()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Empresa.ToList();
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
                catch (Exception e)
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
        public bool DesbanirUsuario(int id)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Usuario candidatoBuscado = ctx.Usuario.Include(u => u.Candidato).FirstOrDefault(u => u.IdUsuario == id);
                    Usuario empresaBuscada = ctx.Usuario.Include(u => u.Empresa).FirstOrDefault(u => u.IdUsuario == id);
                    if (empresaBuscada == null && candidatoBuscado == null)
                        return false;

                    if (candidatoBuscado.Candidato.Count == 1 && candidatoBuscado.IdTipoUsuario == 4)
                    {
                        candidatoBuscado.IdTipoUsuario = 2;
                        ctx.Update(candidatoBuscado);
                        ctx.SaveChanges();
                        return true;
                    }
                    if (empresaBuscada.Empresa.Count == 1 && empresaBuscada.IdTipoUsuario == 4)
                    {
                        empresaBuscada.IdTipoUsuario = 3;
                        ctx.Update(empresaBuscada);
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
        public bool BanirUsuario(int id)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Usuario usuarioBuscado = ctx.Usuario.Find(id);
                    usuarioBuscado.IdTipoUsuario = 4;
                    ctx.Update(usuarioBuscado);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
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
                catch (Exception e)
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
                catch (Exception e)
                {
                    return null;
                }
            }
        }
    }
}