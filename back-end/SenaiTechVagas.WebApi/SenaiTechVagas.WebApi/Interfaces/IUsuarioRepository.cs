using SenaiTechVagas.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
     interface IUsuarioRepository
    {
        Usuario Logar(string email, string senha);

        List<Usuario> ListarUsuario();

        Usuario BuscarPorId(int id);

        void AtualizarUsuario(int id, Usuario usuarioAtualizado);

        bool BanirUsuario(int id);

        bool DesbanirUsuario(int id);

        List<Usuario> banidos();

        List<Usuario> Colaboradores();


    }
}
