using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.Repositories;

namespace SenaiTechVagas.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresaController : ControllerBase
    {
        private IEmpresaRepository _empresaIRepository { get; set; }

        public EmpresaController()
        {
            _empresaIRepository = new EmpresaRepository();
        }

        [HttpPost]
        public IActionResult CadastrarEmpresa(Empresa empresa)
        {
            try
            {
                if (_empresaIRepository.CadastrarEmpresa(empresa))
                {
                    return Ok("Novo candidato inserido com sucesso!");
                }
                else
                {
                    return BadRequest("Um erro ocorreu ao receber a sua requisição.");
                }

            }
            catch (Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        [HttpGet]
        public IActionResult ListarEmpresa()
        {
            try
            {
                return Ok(_empresaIRepository.ListarEmpresa());
            }
            catch (Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            try
            {
                return Ok(_empresaIRepository.BuscarPorId(id));
            }
            catch (Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        [HttpPut("{id}")]
        public IActionResult AtualizarEmpresa(int id, Empresa empresa)
        {
            try
            {
                return Ok(_empresaIRepository.AtualizarPorIdCorpo(id, empresa));
            }
            catch
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarEmpresa(int id)
        {
            try
            {
                return Ok(_empresaIRepository.DeletarPorId(id));
            }
            catch
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }
    }
}