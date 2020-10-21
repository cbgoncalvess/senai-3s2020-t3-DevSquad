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
    public class VagaTecnologiaController : ControllerBase
    {
        IVagaTecnologiaRepository ChamandoVagaTecnologia { get; set; }
        public VagaTecnologiaController()
        {
            ChamandoVagaTecnologia = new VagaTecnologiaRepository();
        }
        [HttpGet]
        public IActionResult ListarVagaTecnologia()
        {
            try
            {
                return Ok(ChamandoVagaTecnologia.ListarVagaTecnologia());
            }
            catch (Exception)
            {
                return BadRequest("Erro no sistema");
            }        
        }

        [HttpPost]
        public IActionResult AdicionarVagaTecnologia(VagaTecnologia vagatec)
        {
            try
            {
                if (ChamandoVagaTecnologia.CadastrarVagaTecnologia(vagatec))
                {
                    return StatusCode(201);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception)
            {
                return BadRequest("Erro no sistema");
            }
            
        }

        [HttpPut("{id}")]
        public IActionResult AtualizarVagaTecnologia(int id, VagaTecnologia vagatec)
        {
            if (ChamandoVagaTecnologia.AtualizarVagaTecnologia(id, vagatec))
            {
                return StatusCode(201);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarVagaTecnologia(int idTecnologia,int idVaga)
        {
            try
            {
                if (ChamandoVagaTecnologia.DeletarVagaTecnologia(idTecnologia, idVaga))
                {
                    return StatusCode(201);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
           
        }
    }
}
