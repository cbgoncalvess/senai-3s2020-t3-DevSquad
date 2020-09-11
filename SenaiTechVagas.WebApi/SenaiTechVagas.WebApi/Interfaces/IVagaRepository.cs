using SenaiTechVagas.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
    interface IVagaRepository
    {
        List<Vaga> ListarVagas();
        bool DeletarVaga(int idVaga);
        bool AtualizarVaga(int idVaga,Vaga vaga);
        bool AdicionarVaga(Vaga vaga);
        Vaga BuscarPorid(int idVaga);
    }
}
