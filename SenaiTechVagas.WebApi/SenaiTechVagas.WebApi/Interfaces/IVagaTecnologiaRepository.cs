using SenaiTechVagas.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
    interface IVagaTecnologiaRepository
    {
        List<VagaTecnologia> ListarVagaTecnologia();
        bool CadastrarVagaTecnologia(VagaTecnologia vagaTecnologia);
        bool AtualizarVagaTecnologia(int id, VagaTecnologia vagatec);
        bool DeletarVagaTecnologia(int idTecnologia,int idVaga);
    }
}
