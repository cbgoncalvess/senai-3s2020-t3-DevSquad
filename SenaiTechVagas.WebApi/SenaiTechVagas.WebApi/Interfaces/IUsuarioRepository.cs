using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
     interface IUsuarioRepository
    {
        Usuario Logar(string email, string senha);
        bool AtualizarUsuario(int idUsuario,AtualizarUsuarioViewModel usuario);
        bool CadastrarCandidato(CadastrarCandidatoViewModel NovoCandidato);
        bool CadastrarEmpresa(CadastrarEmpresaViewModel empresa);
        List<ListarVagasViewModel> ListarVagasEmGeral();
        List<ListarVagasViewModel> ListarFiltroTipoContrato(string TipoContrato);
        List<ListarVagasViewModel> ListarFiltroNivelExperiencia(string NivelExperiencia);
        List<ListarVagasViewModel> ListarPesquisaTecnologia(string NomeTecnologia);
        bool VerificarSeEmailJaFoiCadastrado(string Credencial);
        bool VerificarSeCandidatoJaFoiCadastrado(string credencial);
        bool VerificarSeEmpresaJaFoiCadastrada(string credencial);
        VagaTecnologia BuscarVagaPeloId(int id);
    }
}
