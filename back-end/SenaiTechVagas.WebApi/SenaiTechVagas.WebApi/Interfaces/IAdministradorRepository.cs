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
        CandidatoCompletoViewModel BuscarCandidatoPorIdUsuario(int idUsuario);
        List<ListarVagasViewModel> ListarVagasDaEmpresaAdm(int idEmpresa);
        bool AtualizarArea(int idArea, Area area);
        bool CadastrarCurso(Curso curso);
        EmpresaCompletaViewModel BuscarEmpresaPorIdUsuarioAdm(int idUsuario);
        bool AtualizarCurso(int id, Curso curso);
        List<ListarEstagiosViewModel> ListarEstagios();
        string CadastrarEstagio(CadastrarEstagioViewModel estagio);
        bool DeletarEstagioPorId(int idEstagio);
        bool AtualizarEstagio(int idEstagio, AtualizarEstagioViewModel estagioAtualizado);
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
        bool DeletarVagaEmpresa(int idVaga);
        bool BanirUsuario(int id);
        bool DesbanirUsuario(int id);
        List<Usuario>ListaDebanidos();
        bool CadastrarAdministardor(Usuario usuario);
        bool DeletarAdministrador(int id);
        List<Usuario> ListarAdministradores();
        bool VerificarSeExiste(int idCandidato);
        bool AlterarSenhaDoUsuario(string email, string NovaSenha);
        List<ListarInscricoesViewModel> ListarCandidatosInscritosEmpresa(int idVaga);
        List<Usuario> ListarEmailsCandidato();
        List<Empresa> ListarNomeEmpresas();
        bool AdicionarTipoPresenca(TipoRegimePresencial trp);
        bool AtualizarTipoPresenca(int id,TipoRegimePresencial trp);
        UploadImagem BuscarImagemPerfilAdm(int idAms);
        List<Vaga> ListarInscricoes(int idUsuario);
    }
}
