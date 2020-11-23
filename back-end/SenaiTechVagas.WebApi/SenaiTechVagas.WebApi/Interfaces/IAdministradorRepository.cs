using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
    interface IAdministradorRepository
    {
        bool CadastrarArea(Area area);
        bool AtualizarArea(int idArea, Area area);
        bool CadastrarCurso(Curso curso);
        bool AtualizarCurso(int id, Curso curso);
        List<ListarEstagiosViewModel> ListarEstagios();
        bool CadastrarEstagio(CadastrarEstagioViewModel estagio);
        bool DeletarEstagioPorId(int idEstagio);
        bool AtualizarEstagio(int idEstagio, AtualizarEstagioViewModel estagioAtualizado);
        List<Estagio> ListarPorperiodo(int Periodo);
        int [] ContadorCadastros();
        List<TipoUsuario> ListarTipoUsuario();
        bool CadastrarTipoUsuario(TipoUsuario tipoUsuario);
        bool AtualizarTipoUsuario(int id, TipoUsuario tipoUsuario);
        List<StatusInscricao> ListarStatusInscricao();
        bool CadastrarStatusInscricao(StatusInscricao statusInscricao);
        bool AtualizarStatusInscricao(int id, StatusInscricao status);
        bool CadastrarTecnologia(Tecnologia tecnologia);
        bool AtualizarTecnologia(int id, Tecnologia tecnologia);
        List<Candidato> ListarCandidatos();
        bool DeletarCandidato(int IdCandidato);
        bool DeletarInscricao(int idInscricao);
        List<Empresa> ListarEmpresa();
        bool DeletarEmpresaPorId(int idEmpresa);
        bool DeletarVaga(int idVaga);
        bool BanirUsuario(int id);
        bool DesbanirUsuario(int id);
        List<Usuario>ListaDebanidos();
        bool CadastrarAdministardor(Usuario usuario);
        bool DeletarVagaTecnologia(int idTecnologia, int idVaga);
        bool DeletarAdministrador(int id);
        List<Usuario> ListarAdministradores();
        bool VerificarSeExiste(int idEstagio);
        bool AlterarSenhaDoUsuario(string email, string NovaSenha);
        bool AlterarSenhaDeQualquerUsuario(string Email,string Senha);
        List<ListarInscricoesViewModel> ListarCandidatosInscritos(int idVaga);
        List<Usuario> ListarEmailsCandidato();
        List<Empresa> ListarNomeEmpresas();
        bool AdicionarTipoPresenca(TipoRegimePresencial trp);
        bool AtualizarTipoPresenca(int id,TipoRegimePresencial trp);
        
    }
}
