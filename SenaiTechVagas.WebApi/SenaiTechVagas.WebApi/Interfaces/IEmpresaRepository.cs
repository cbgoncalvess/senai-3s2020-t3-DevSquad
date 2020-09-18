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
        bool AtualizarEmpresaPorIdCorpo(int idEmpresa, Empresa EmpresaAtualizada);
        bool AtualizarVaga(int idVaga, AtualizarVagaViewModel vaga);
        bool AdicionarVaga(Vaga vaga);
        bool AdicionarTecnologia(VagaTecnologia vagaTecnologia);
        bool DeletarVaga(int idVaga);
        void ExpirarVaga(Vaga vaga);
        bool VerificarSeTecnologiaFoiAdicionada(int idTecnologia, int idVaga);
        List<VagaTecnologia> ListarVagaTecnologia();
        bool CadastrarVagaTecnologia(VagaTecnologia vagaTecnologia);
        bool AtualizarVagaTecnologia(int id, VagaTecnologia vagatec);
        bool DeletarVagaTecnologia(VagaTecnologia vaga);
        bool VerificarSeExiste(int idEstagio);
        bool AprovarCandidato(int idInscricao);
        bool ReprovarCandidato(int idInscricao);
        List<VagaTecnologia> ListarVagasDaEmpresa(int idEmpresa);
        bool VerificarSeaVagaPertenceaEmpresa(int idEmpresa,int idVaga);
        List<Inscricao> ListarCandidatosInscritos(int idVaga);
    }
}
