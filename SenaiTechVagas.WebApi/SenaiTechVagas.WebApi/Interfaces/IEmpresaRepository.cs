using SenaiTechVagas.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
    interface IEmpresaRepository
    {
        List<Empresa> ListarEmpresa();
        bool CadastrarEmpresa(Empresa empresa);
        bool DeletarPorId(int idEmpresa);
        Empresa BuscarPorId(int idEmpresa);
        bool AtualizarPorIdCorpo(int idEmpresa, Empresa EmpresaAtualizada);
    }
}
