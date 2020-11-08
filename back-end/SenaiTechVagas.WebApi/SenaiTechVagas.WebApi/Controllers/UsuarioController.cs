using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Repositories;

namespace SenaiTechVagas.WebApi.Controllers
{
    [Produces("application/json")]

    [Route("api/[controller]")]

    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private UsuarioRepository usuarioRepository { get; set; }

        public UsuarioController()
        {
            usuarioRepository = new UsuarioRepository();
        }


        /// <summary>
        /// Método que lista os usuários cadastrados 
        /// </summary>
        /// <returns>Retorna lista de usuários cadastrados</returns>
        
        [HttpGet]
        public IActionResult ListaUsuario()
        {
            return Ok(usuarioRepository.ListarUsuario());
        }

        /// <summary>
        /// Método que lista os usuários banidos
        /// </summary>
        /// <returns>Retorna lista de usuários banidos</returns>
        
        [HttpGet("Banidos")]
        public IActionResult ListaBanidos()
        {
            return Ok(usuarioRepository.banidos());
        }

        [HttpGet("Colaboradores")]
        public IActionResult ListaColaboradores()
        {
            return Ok(usuarioRepository.Colaboradores());
        }

        /// <summary>
        /// Método que busca usuário por seu identificador 
        /// </summary>
        /// <param name="id">Identificador do usuário</param>
        /// <returns>Retorna usuário pelo seu Id</returns>
        [Authorize(Roles = "1")]
        [HttpGet("{id}")]
        public IActionResult BuscarUsuarioPorId(int id)
        {
            return Ok(usuarioRepository.BuscarPorId(id));
        }

        /// <summary>
        /// Método que atualiza a senha do usuário pelo identificador e o objeto.
        /// </summary>
        /// <param name="id">Identificador do usuário</param>
        /// <param name="usuarioAtualizado">Objeto do usuário</param>
        /// <returns>Retorna um usuário atualizado pelo id e o objeto</returns>
        [Authorize(Roles = "1,2,3")]
        [HttpPut("{id}")]
        public IActionResult AtualizaDadosUsuario(int id, Usuario usuarioAtualizado)
        {
            Usuario usuarioBuscado = usuarioRepository.BuscarPorId(id);

            if (usuarioBuscado != null)
            {
                usuarioRepository.AtualizarUsuario(id, usuarioAtualizado);

                return Ok(usuarioAtualizado);
            }
            return NotFound("Usuário não encontrado para ser atualizado");
        }


        /// <summary>
        /// Método que bani usuário pelo seu identificador 
        /// </summary>
        /// <param name="id">Identificador do usuário</param>
        [Authorize(Roles = "1")]
        [HttpPut("Banir/{id}")]
        public IActionResult BanirUsuario(int id)
        {
            if (usuarioRepository.BanirUsuario(id))
            {
                return Ok("Usuário banido");
            }
            return NotFound("Usuário não encontrado para ser Banido");
        }

        /// <summary>
        /// Método que desbane usuário pelo seu identificador 
        /// </summary>
        /// <param name="id">Identificador do usuário</param>
        /// <returns>retorna um usuário no estado normal de seu tipo usuário</returns>
        [Authorize(Roles = "1")]
        [HttpPut("Desbanir/{id}")]
        public IActionResult DesbanirUsuario(int id)
        {

            if (usuarioRepository.DesbanirUsuario(id))
            {
                return Ok("Usuário desbanido");
            }
            return NotFound("Usuário não encontrado para ser Desbanido");
        }


        /// <summary>
        /// Método que cadastra usuário do tipo colaborador
        /// </summary>
        /// <param name="colaborador">Dados do tipo de usuário do tipo colaborador</param>
        /// <returns>Novo usuário do tipo colaborador</returns>
        [HttpPost("Colaborador")]
        public IActionResult CadastrarColaborador(Usuario colaborador)
        {
            try
            {
                if (usuarioRepository.CadastrarColaborador(colaborador))
                {
                    return Ok("Colaborador cadastrado com sucesso.");
                }
                else
                {
                    return BadRequest("Erro ao cadastrar colaborador, tente novamente.");
                }
            }
            catch (Exception e)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

    }
}
