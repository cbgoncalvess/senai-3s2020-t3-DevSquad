using SenaiTechVagas.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
    interface ICursoRepository
    {
        List<Curso> ListarCurso();

        bool CadastrarCurso(Curso curso);

        bool AtualizarCurso(int id, Curso curso);

        //bool DeletarCurso(int id);

        Curso BuscarPorId(int id);

    }
}
