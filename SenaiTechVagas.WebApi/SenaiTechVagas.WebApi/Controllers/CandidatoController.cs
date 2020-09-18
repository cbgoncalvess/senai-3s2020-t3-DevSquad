using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.Repositories;
using SenaiTechVagas.WebApi.ViewModels;

namespace SenaiTechVagas.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatoController : ControllerBase
    {
        // Este controlador está na sequência CRUD -  Criar, Ler, Atualizar e Deletar

        private ICandidatoRepository _candidatoRepository { get; set; }

        public CandidatoController()
        {
            _candidatoRepository = new CandidatoRepository();
        }

        /// <summary>
        /// Atualiza todas as informações de um objeto da tabela Candidato.
        /// </summary>
        /// <param name="id">Identificador único de um objeto da tabela Candidato</param>
        /// <param name="candidato">Informações do objeto, passado na requisição, da tabela 
        /// Candidato, recebidas e que passarão a vigorar</param>
        /// <returns>Retorna um HTTP Code (201) e a mensagem: true, caso contrário, retorna 
        /// um HTTP Code (400) e a mensagem: Uma exceção ocorreu. Tente novamente.</returns>
        [Authorize(Roles="2")]
        [HttpPut("AtualizarCandidato/{id}")]
        public IActionResult AtualizarCandidato(int id, Candidato candidato)
        {
            try
            {
                if (_candidatoRepository.AtualizarCandidato(id, candidato))
                    return Ok();

                else
                    return BadRequest();
            }
            catch
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// O candidato podera se inscrever
        /// </summary>
        /// <param name="InscricaoNovo"></param>
        /// <returns></returns>
        //[Authorize(Roles = "2")]
        [HttpPost("AdicionarInscricao")]
        public IActionResult AdicionarInscricao(Inscricao InscricaoNovo)
        {
            try
            {
                if (_candidatoRepository.VerificarSeInscricaoExiste(InscricaoNovo.IdVaga, InscricaoNovo.IdCandidato))
                    return BadRequest("Inscricao ja existe");

                if (_candidatoRepository.SeInscrever(InscricaoNovo))
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
        [Authorize(Roles = "2")]
        [HttpDelete("RevogarInscricao/{id}")]
        public IActionResult DeletarInscricao(int id)
        {
            try
            {
                if (_candidatoRepository.RevogarInscricao(id))
                    return Ok("Inscricao deletada com sucesso");

                else
                    return BadRequest("Não foi possivel deletar o Inscricao");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        //[Authorize(Roles ="2")]
        [HttpGet("ListarVagasInscritas/{idUsuario}")]
        public IActionResult ListarVagasInscritas(int idUsuario)
        {
            try
            {
                return Ok(_candidatoRepository.ListarInscricoes(idUsuario));
            }
            catch
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }
    }
}
