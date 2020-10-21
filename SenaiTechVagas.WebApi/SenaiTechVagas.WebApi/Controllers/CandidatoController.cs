using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
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
       /// Atualiza informações do candidato
       /// </summary>
       /// <param name="candidato"></param>
       /// <returns></returns>
        [Authorize(Roles="2")]
        [HttpPut("AtualizarCandidato")]
        public IActionResult AtualizarCandidato(AtualizarCandidatoViewModel candidato)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Candidato candidatoBuscado = _candidatoRepository.BuscarCandidatoPorIdUsuario(idUsuario);
                if (candidatoBuscado == null)
                    return BadRequest();

                if (_candidatoRepository.AtualizarCandidato(idUsuario, candidato))
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
        [Authorize(Roles = "2")]
        [HttpPost("AdicionarInscricao")]
        public IActionResult AdicionarInscricao(Inscricao InscricaoNovo)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Candidato candidatoBuscado = _candidatoRepository.BuscarCandidatoPorIdUsuario(idUsuario);
                if (candidatoBuscado == null)
                    return BadRequest();

                if (_candidatoRepository.VerificarSeInscricaoExiste(InscricaoNovo.IdVaga, candidatoBuscado.IdCandidato))
                    return BadRequest("Inscricao ja existe");

                InscricaoNovo.IdCandidato = candidatoBuscado.IdCandidato;
                if (_candidatoRepository.SeInscrever(InscricaoNovo))
                    return Ok("Inscricao cadastrada com sucesso");
                else
                    return BadRequest("Não foi possivel cadastrar a inscricao");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// O  candidato podera remover a inscricao
        /// </summary>
        /// <param name="idInscricao"></param>
        /// <returns></returns>
        [Authorize(Roles = "2")]
        [HttpDelete("RevogarInscricao/{idInscricao}")]
        public IActionResult DeletarInscricao(int idInscricao)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Candidato candidatoBuscado = _candidatoRepository.BuscarCandidatoPorIdUsuario(idUsuario);
                if (candidatoBuscado == null)
                    return BadRequest();

                if (_candidatoRepository.RevogarInscricao(idInscricao,candidatoBuscado.IdCandidato))
                    return Ok("Inscricao deletada com sucesso");
                else
                    return BadRequest("Não foi possivel deletar o Inscricao");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Lista todas as vagas em que o candidato se inscreveu
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles ="2")]
        [HttpGet("ListarVagasInscritas")]
        public IActionResult ListarVagasInscritas()
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                
                return Ok(_candidatoRepository.ListarInscricoes(idUsuario));
            }
            catch(Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }
    }
}
