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
        List<Curso> ListarCurso();
        bool CadastrarArea(Area area);
        bool AtualizarArea(int idArea, Area area);
        bool CadastrarCurso(Curso curso);
        bool AtualizarCurso(int id, Curso curso);
        List<Estagio> ListarEstagios();
        bool CadastrarEstagio(Estagio estagio);
        bool DeletarEstagioPorId(int idEstagio);
        bool AtualizarEstagio(int idEstagio, AtualizarEstagioViewModel estagioAtualizado);
        List<Estagio> ListarPorperiodo(int Periodo);
        int ContadorEmpresasCadastradas();
        int ContadorCandidatoCadastrados();
        int ContadorCandidatoContratados();
        List<TipoUsuario> ListarTipoUsuario();
        bool CadastrarTipoUsuario(TipoUsuario tipoUsuario);
        bool AtualizarTipoUsuario(int id, TipoUsuario tipoUsuario);
        List<StatusInscricao> ListarStatusInscricao();
        bool CadastrarStatusInscricao(StatusInscricao statusInscricao);
        bool AtualizarStatusInscricao(int id, StatusInscricao status);
        List<Tecnologia> ListarTecnologia();
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
    }
}
