using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.Repositories;

namespace SenaiTechVagas.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CursoController : ControllerBase
    {
        ICursoRepository _cursoRepository { get; set; }

        public CursoController()
        {
            _cursoRepository = new CursoRepository();
        }

        [Authorize]
        [HttpGet]
        public IActionResult ListarCurso()
        {
            try
            {
                return Ok(_cursoRepository.ListarCurso());
            }
            catch (Exception e)
            {

                return BadRequest();
            }
        }

        [Authorize]
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            try
            {
                return Ok(_cursoRepository.BuscarPorId(id));
            }
            catch (Exception e)
            {

                return BadRequest();
            }
        }

        [Authorize]
        [HttpPost]
        public IActionResult CadastrarCurso(Curso novoCurso)
        {
            try
            {
                _cursoRepository.CadastrarCurso(novoCurso);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest();
            }
        }
        /// <summary>
        /// Este metodo esta fora por enquanto ,justificativa no repositorio
        /// </summary>
        /// <param name="curso"></param>
        /// <param name="id"></param>
        /// <returns></returns>
        //[Authorize]
        //[HttpDelete("{id}")]
        //public IActionResult DeletarCurso(int id)
        //{
        //    try
        //    {
        //        Curso cursoBuscado = _cursoRepository.BuscarPorId(id);
        //        if (cursoBuscado != null)
        //        {
        //            _cursoRepository.DeletarCurso(id);
        //        }
        //        return Ok();
               
        //    }
        //    catch (Exception e)
        //    {

        //        return BadRequest();
        //    }
        //}

        [Authorize]
        [HttpPut("{id}")]
        public IActionResult AtualizarCurso(Curso curso, int id)
        {
            try
            {
                _cursoRepository.AtualizarCurso(id, curso);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }
    }
}
