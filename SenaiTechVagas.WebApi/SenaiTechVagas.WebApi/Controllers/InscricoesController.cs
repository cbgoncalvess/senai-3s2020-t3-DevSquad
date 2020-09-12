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
    public class InscricoesController : ControllerBase
    {
        IInscricaoRepository _Inscricao { get; set; }
        public InscricoesController()
        {
            _Inscricao = new InscricaoRepository();
        }

        [HttpPost]
        public IActionResult AdicionarInscricao(Inscricao InscricaoNovo)
        {
            try
            {
                if (_Inscricao.VerificarSeInscricaoExiste(InscricaoNovo.IdVaga, InscricaoNovo.IdCandidato))
                    return BadRequest("Inscricao ja existe");

                if (_Inscricao.SeInscrever(InscricaoNovo))
                {
                    return Ok("Inscricao cadastrado com sucesso");
                }
                else
                {
                    return BadRequest("Não foi possivel cadastrar o Inscricao");
                }
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarInscricao(int id)
        {
            try
            {
                if (_Inscricao.RevogarInscricao(id))
                {
                    return Ok("Inscricao deletada com sucesso");
                }
                else
                {
                    return BadRequest("Não foi possivel deletar o Inscricao");
                }
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        public IActionResult ListarInscricaos()
        {
            try
            {
                return Ok(_Inscricao.ListarInscricoes());
            }
            catch (Exception e)
            {
                return BadRequest();
            }       
        }
    }
}
