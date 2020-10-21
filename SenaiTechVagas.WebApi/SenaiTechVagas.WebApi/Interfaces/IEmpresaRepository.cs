using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
    interface IEmpresaRepository
    {
        bool AtualizarEmpresaPorIdCorpo(int idUsuario, AtualizarEmpresaViewModel EmpresaAtualizada);
        bool AtualizarVaga(int idVaga, AtualizarVagaViewModel vaga);
        bool AdicionarVaga(Vaga vaga);
        bool AdicionarTecnologiaNaVaga(VagaTecnologia vagaTecnologia);
        bool DeletarVaga(int idVaga);
        void ExpirarVaga();
        void AdicionarTecnologiaPadrao(int idVaga);
        bool RemoverTecnologiaDaVaga(VagaTecnologia vaga);
        bool VerificarSeTecnologiaExiste(int idTecnologia);
        bool AprovarCandidato(int idInscricao);
        bool ReprovarCandidato(int idInscricao);
        List<VagaTecnologia> ListarVagasDaEmpresa(int idEmpresa);
        List<Inscricao> ListarCandidatosInscritos(int idVaga);
        List<Inscricao> ListarCandidatosAprovados(int idVaga);
        Empresa BuscarEmpresaPorIdUsuario(int idUsuario);
        List<Candidato> ListarCandidatosEstagiandoNaEmpresa(int idEmpresa);
        /*------------VERIFICAÇÕES INICIO-------------*/
        bool VerificarSeaVagaPertenceaEmpresa(int idEmpresa, int idVaga);
        bool VerificarSeTecnologiaFoiAdicionada(int idTecnologia, int idVaga);
        /*------------VERIFICAÇÕES FIM------------------*/
    }
}
