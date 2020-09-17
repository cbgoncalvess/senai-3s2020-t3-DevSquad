using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.Repositories;

namespace SenaiTechVagas.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoUsuarioController : ControllerBase
    {
        ITipoUsuarioRepository _tipoUsuarioRepository { get; set; }

        public TipoUsuarioController()
        {
            _tipoUsuarioRepository = new TipoUsuarioRepository();
        }

        [HttpGet]
        public IActionResult ListarTipoUsuario()
        {
            try
            {
                return Ok(_tipoUsuarioRepository.ListarTipoUsuario()); 
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            try
            {
                return Ok(_tipoUsuarioRepository.BuscarPorId(id));
            }
            catch (Exception e)
            {

                return BadRequest();
            }
            
        }

        [HttpPost]
        public IActionResult CadastrarTipoUsuario(TipoUsuario novoTipoUsuario)
        {
            try
            {
                _tipoUsuarioRepository.CadastrarTipoUsuario(novoTipoUsuario);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarTipoUsuario(int id)
        {
            try
            {
                TipoUsuario tipoUsuarioBuscado = _tipoUsuarioRepository.BuscarPorId(id);

                if (tipoUsuarioBuscado != null)
                {
                    _tipoUsuarioRepository.DeletarTipoUsuario(id);  
                }
                return Ok();

            }
            catch (Exception e)
            {

                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public IActionResult AtualizarTipoUsuario(TipoUsuario tipoUsuario, int id)
        {
            try
            {
                _tipoUsuarioRepository.AtualizarTipoUsuario(id, tipoUsuario);
                return Ok();
        
            }
            catch (Exception e )
            {

                return BadRequest();
            }
        }
    }
}
