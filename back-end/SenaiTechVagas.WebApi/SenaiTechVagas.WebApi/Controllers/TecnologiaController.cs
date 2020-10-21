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
    public class TecnologiaController : ControllerBase
    {
        ITecnologiaRepository _tecnologiaRepository { get; set; }

        public TecnologiaController()
        {
            _tecnologiaRepository = new TecnologiaRepository();
        }

        [HttpGet]
        public IActionResult ListarTecnologia()
        {
            try
            {
                return Ok(_tecnologiaRepository.ListarTecnologia());
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
                return Ok(_tecnologiaRepository.BuscarPorId(id));
            }
            catch (Exception e)
            {

                return BadRequest();
            }
        }

        [HttpPost]
        public IActionResult CadastrarTecnologia(Tecnologia novaTecnologia)
        {
            try
            {
                _tecnologiaRepository.CadastrarTecnologia(novaTecnologia);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest();
            }
        }

        /// <summary>
        /// Justificativa no repository
        /// </summary>
        /// <param name="tecnologia"></param>
        /// <param name="id"></param>
        /// <returns></returns>
        //[HttpDelete("{id}")]
        //public IActionResult DeletarTecnologia(int id)
        //{
        //    try
        //    {
        //        Tecnologia tecnologiaBuscada = _tecnologiaRepository.BuscarPorId(id);
        //        if (tecnologiaBuscada != null)
        //        {
        //            _tecnologiaRepository.DeletarTecnologia(id);
        //        }
        //        return Ok();
        //    }
        //    catch (Exception e)
        //    {

        //        return BadRequest();
        //    }      
        //}

        [HttpPut("{id}")]
        public IActionResult AtualizarTecnologia(Tecnologia tecnologia, int id)
        {
            try
            {
                _tecnologiaRepository.AtualizarTecnologia(id, tecnologia);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest();
            }
        }
    }
}
