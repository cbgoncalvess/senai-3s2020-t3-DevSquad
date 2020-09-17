using SenaiTechVagas.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
    interface ITecnologiaRepository
    {
        List<Tecnologia> ListarTecnologia();

        bool CadastrarTecnologia(Tecnologia tecnologia);

        bool AtualizarTecnologia(int id, Tecnologia tecnologia);

        bool DeletarTecnologia(int id);

        Tecnologia BuscarPorId(int id);
    }
}
