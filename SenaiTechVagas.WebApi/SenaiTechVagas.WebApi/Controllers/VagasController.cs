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
    public class VagasController : ControllerBase
    {
        IVagaRepository _Vaga { get; set; }
        public VagasController()
        {
            _Vaga = new VagaRepository();
        }

        [HttpPost]
        public IActionResult AdicionarVaga(Vaga VagaNovo)
        {
            try
            {
                if (_Vaga.AdicionarVaga(VagaNovo))
                {
                    return Ok("Vaga cadastrado com sucesso");
                }
                else
                {
                    return BadRequest("Não foi possivel cadastrar o Vaga");
                }
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarVaga(int id)
        {
            try
            {
                if (_Vaga.DeletarVaga(id))
                {
                    return Ok("Vaga deletado com sucesso");
                }
                else
                {
                    return BadRequest("Não foi possivel cadastrar o Vaga");
                }
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        public IActionResult ListarVagas()
        {
            try
            {
                return Ok(_Vaga.ListarVagas());
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }
    }
}
