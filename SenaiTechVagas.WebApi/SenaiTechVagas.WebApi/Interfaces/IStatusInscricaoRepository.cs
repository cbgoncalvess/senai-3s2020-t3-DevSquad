using SenaiTechVagas.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
    interface IStatusInscricaoRepository
    {
        List<StatusInscricao>ListarStatusInscricao();
        bool CadastrarStatusInscricao(StatusInscricao statusInscricao);
        bool AtualizarStatusInscricao(int id, StatusInscricao status);
    }
}
