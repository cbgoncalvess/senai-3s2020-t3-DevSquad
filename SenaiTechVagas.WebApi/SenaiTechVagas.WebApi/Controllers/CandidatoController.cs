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
        /// Recebe um tipo cadastrar 'CandidatoCandidatoViewModel' preenchendo os dados 
        /// necessários para que, então, seja adicionado um novo objeto no banco de dados.
        /// </summary>
        /// <param name="NovoCandidato">Do tipo 'CadastrarCandidatoViewModel', que se refere
        /// ao dados inseridos pelo usuário na requisição
        /// </param>
        /// <returns>Retorna um HTTP Code (201) e a menssagem: Novo candidato inserido com
        /// sucesso, caso contrário, retorna um HTTP Code (400) e a mensagem: Um erro 
        /// ocorreu ao receber a sua requisição.
        /// </returns>
        [Authorize(Roles="2")]
        [HttpPost]
        public IActionResult CadastrarCandidato(CadastrarCandidatoViewModel NovoCandidato)
        {
            try
            {
                if (_candidatoRepository.CadastrarCandidato(NovoCandidato))
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

        /// <summary>
        /// Lista todos os objetos da tabela candidato.
        /// </summary>
        /// <returns>Retorna um HTTP Code (201) e os objetos da tabela Candidato, 
        /// caso contrário, retorna um HTTP Code (400) e a mensagem: Uma exceção 
        /// ocorreu. Tente novamente.
        /// </returns>
        [Authorize(Roles="3")]
        [HttpGet]
        public IActionResult ListarCandidatos()
        {
            try
            {
                return Ok(_candidatoRepository.ListarCandidatos());
            }
            catch(Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// Busca um objeto na tabela Candidato, recebendo o identificador único do objeto.
        /// </summary>
        /// <param name="id">Identificador único de cada objeto da tabela Candidato, do tipo inteiro.</param>
        /// <returns>Retorna um HTTP Code (201) e o objeto da tabela Candidato que bata com o
        /// identificador passado, caso contrário, retorna um HTTP Code (400) e a mensagem: 
        /// Uma exceção ocorreu. Tente novamente.
        /// </returns>
        [Authorize(Roles="1")]
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            try
            {
                return Ok(_candidatoRepository.BuscarPorId(id));
            }
            catch(Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
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
        [HttpPut("{id}")]
        public IActionResult AtualizarCandidato(int id, Candidato candidato)
        {
            try
            {
                return Ok(_candidatoRepository.AtualizarCandidato(id, candidato));
            }
            catch
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// Apaga as informações de um objeto único da tabela candidato.
        /// </summary>
        /// <param name="id">Identificador único de cada objeto da tabela candidato, 
        /// do tipo inteiro.</param>
        /// <returns>Retorna um HTTP Code (201) e a mensagem: true, caso contrário, retorna 
        /// um HTTP Code (400) e a mensagem: Uma exceção ocorreu. Tente novamente.</returns>
        [Authorize(Roles="1,3")]
        [HttpDelete("{id}")]
        public IActionResult DeltarCandidato(int id)
        {
            try
            {
                return Ok(_candidatoRepository.DeletarCandidato(id));
            }
            catch
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }
    }
}
