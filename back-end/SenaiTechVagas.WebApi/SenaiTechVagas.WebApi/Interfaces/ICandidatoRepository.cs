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
        List<Candidato> ListarCandidatos();
        bool AtualizarCandidato(int IdCandidato, Candidato CandidatoAtualizado);
        bool DeletarCandidato(int IdCandidato);
        bool CadastrarCandidato(CadastrarCandidatoViewModel NovoCandidato);
        Candidato BuscarPorId(int IdCandidato);
    }
}
