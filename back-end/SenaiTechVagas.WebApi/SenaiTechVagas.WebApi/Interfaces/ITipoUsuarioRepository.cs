using SenaiTechVagas.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
    interface ITipoUsuarioRepository
    {

        List<TipoUsuario> ListarTipoUsuario();

        bool CadastrarTipoUsuario(TipoUsuario tipoUsuario);

        bool AtualizarTipoUsuario(int id, TipoUsuario tipoUsuario);

        //bool DeletarTipoUsuario(int id);

        TipoUsuario BuscarPorId(int id);
    }
}
