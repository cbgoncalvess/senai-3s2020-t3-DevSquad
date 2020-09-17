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
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class InscricoesController : ControllerBase
    {
        IInscricaoRepository _Inscricao { get; set; }
        public InscricoesController()
        {
            _Inscricao = new InscricaoRepository();
        }

        /// <summary>
        /// O candidato podera se inscrever
        /// </summary>
        /// <param name="InscricaoNovo"></param>
        /// <returns></returns>
        [Authorize(Roles = "idCandidato")]
        [HttpPost]
        public IActionResult AdicionarInscricao(Inscricao InscricaoNovo)
        {
            try
            {
                if (_Inscricao.VerificarSeInscricaoExiste(InscricaoNovo.IdVaga, InscricaoNovo.IdCandidato))
                    return BadRequest("Inscricao ja existe");

                if (_Inscricao.SeInscrever(InscricaoNovo))
                    return Ok("Inscricao cadastrada com sucesso");

                else
                    return BadRequest("Não foi possivel cadastrar a inscricao");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// O  candidato podera remover a inscricao
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize(Roles = "idCandidato")]
        [HttpDelete("{id}")]        
        public IActionResult DeletarInscricao(int id)
        {
            try
            {
                if (_Inscricao.RevogarInscricao(id))
                    return Ok("Inscricao deletada com sucesso");

                else
                    return BadRequest("Não foi possivel deletar o Inscricao");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Lista todas as inscricoes do candidato
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        [Authorize(Roles = "idCandidato")]
        [HttpGet("{idUsuario}")]
        
        public IActionResult ListarInscricaos(int idUsuario)
        {
            try
            {
                return Ok(_Inscricao.ListarInscricoes(idUsuario));
            }
            catch (Exception e)
            {
                return BadRequest();
            }       
        }
    }
}
