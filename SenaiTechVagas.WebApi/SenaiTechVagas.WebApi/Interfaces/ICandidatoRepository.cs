using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
    interface ICandidatoRepository
    {
        bool AtualizarCandidato(int IdCandidato, Candidato CandidatoAtualizado);             
        List<VagaTecnologia> ListarInscricoes(int idUsuario);
        bool SeInscrever(Inscricao NovaInscricao);
        bool RevogarInscricao(int idInscricao);
        bool VerificarSeInscricaoExiste(int idVaga, int idCandidato);
        
    }
}
