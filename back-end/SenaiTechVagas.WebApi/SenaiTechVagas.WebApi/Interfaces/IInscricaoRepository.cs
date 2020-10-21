using SenaiTechVagas.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
    interface IInscricaoRepository
    {
        List<Inscricao> ListarInscricoes(int id);
        bool SeInscrever(Inscricao NovaInscricao);
        bool RevogarInscricao(int idInscricao);
        Inscricao BuscarPorId(int idInscricao);
        bool VerificarSeInscricaoExiste(int idVaga,int idCandidato);
    }
}
