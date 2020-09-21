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
        List<VagaTecnologia> ListarVagasEmGeral();
        List<VagaTecnologia> ListarFiltroTipoContrato(string TipoContrato);
        List<VagaTecnologia> ListarFiltroNivelExperiencia(string NivelExperiencia);
        List<VagaTecnologia> ListarPesquisaTecnologia(string NomeTecnologia);
        bool VerificarSeEmailJaFoiCadastrado(string Credencial);
        bool VerificarSeCandidatoJaFoiCadastrado(string credencial);
        bool VerificarSeEmpresaJaFoiCadastrada(string credencial);
    }
}
