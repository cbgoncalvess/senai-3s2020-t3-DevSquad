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
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class StatusInscricaoController : ControllerBase
    {
        IStatusInscricaoRepository ChamandoStatusInscricao { get; set; }
        public StatusInscricaoController()
        {
            ChamandoStatusInscricao = new StatusInscricaoRepository();
        }
        [HttpGet]
        public IActionResult ListarStatusInscricao()
        {
            return Ok(ChamandoStatusInscricao.ListarStatusInscricao());
        }

        [HttpPost]
        public IActionResult AdicionarStatusInscricao(StatusInscricao status)
        {
            if (ChamandoStatusInscricao.CadastrarStatusInscricao(status))
            {
                return StatusCode(201);
            }
            else
            {
                return BadRequest();
            }
        }



        [HttpPut("{id}")]
        public IActionResult AtualizarStatusInscricao(int id, StatusInscricao status)
        {
            if (ChamandoStatusInscricao.AtualizarStatusInscricao(id, status))
            {
                return StatusCode(201);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
