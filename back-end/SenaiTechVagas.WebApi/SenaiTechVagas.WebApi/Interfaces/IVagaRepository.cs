using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
    interface IVagaRepository:InterfaceBase
    {
        VagaCompletaViewModel BuscarPorId(int id);
        List<ListarVagasViewModel> ListarVagas(int id);
        bool DeletarVaga(int idVaga);
        bool AtualizarVaga(int idVaga,AtualizarVagaViewModel vaga);
        bool AdicionarVaga(Vaga vaga);
        Vaga BuscarPorid(int idVaga);
        bool AdicionarTecnologia(VagaTecnologia vagaTecnologia);
        void ExpirarVaga(Vaga vaga);
        List<VagaTecnologia> ListarFiltroTipoContrato(string TipoContrato);
        List<VagaTecnologia> ListarFiltroNivelExperiencia(string NivelExperiencia);
        List<VagaTecnologia> ListarPesquisaTecnologia(string NomeTecnologia);
        bool VerificarSeTecnologiaFoiAdicionada(int idTecnologia,int idVaga);
    }
}
