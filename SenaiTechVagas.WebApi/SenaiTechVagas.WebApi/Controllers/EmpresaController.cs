using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
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
    public class EmpresaController : ControllerBase
    {
        private IEmpresaRepository _empresaIRepository { get; set; }

        public EmpresaController()
        {
            _empresaIRepository = new EmpresaRepository();
        }


        /// <summary>
        /// Atualiza todas as informações de um objeto da tabela Empresa.
        /// </summary>
        /// <param name="id">Identificador único de um objeto da tabela Empresa</param>
        /// <param name="empresa">Informações do objeto, passado na requisição, da tabela 
        /// Empresa, recebidas e que passarão a vigorar</param>
        /// <returns>Retorna um HTTP Code (201) e a mensagem: true, caso ocorra um erro na 
        /// informação passada, retorna-se, então, false, caso haja uma exceção, retorna-se,
        /// então, um HTTP Code (400) e a mensagem: "Uma exceção ocorreu. Tente novamente."</returns>
        [Authorize(Roles="3")]
        [HttpPut("AtualizarEmpresa/{id}")]
        public IActionResult AtualizarEmpresa(int id, Empresa empresa)
        {
            try
            {
                return Ok(_empresaIRepository.AtualizarEmpresaPorIdCorpo(id, empresa));
            }
            catch(Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        [Authorize(Roles = "3")]
        [HttpPost("AdVaga")]
        public IActionResult AdicionarVaga(Vaga VagaNovo)
        {
            try
            {
                if (_empresaIRepository.AdicionarVaga(VagaNovo))
                    return Ok("Vaga cadastrado com sucesso");

                else
                    return BadRequest("Não foi possivel cadastrar a vaga,verifique se as informaçoes foram preenchidas corretamente");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Adiciona uma tecnologia a vaga
        /// </summary>
        /// <param name="vagaTecnologia"></param>
        /// <returns></returns>
        [Authorize(Roles = "3")]
        [HttpPost("AdicionarTecnologia")]
        public IActionResult AdicionarTecnologia(VagaTecnologia vagaTecnologia)
        {
            try
            {
                if (_empresaIRepository.VerificarSeExiste(vagaTecnologia.IdTecnologia))
                    return BadRequest("Tecnologia indisponivel ou não existe");

                if (_empresaIRepository.VerificarSeTecnologiaFoiAdicionada(vagaTecnologia.IdTecnologia, vagaTecnologia.IdVaga))
                    return BadRequest("Essa tecnologia ja foi adicionada");

                if (_empresaIRepository.AdicionarTecnologia(vagaTecnologia))
                    return Ok("Tecnologia adicionada com sucesso");

                else
                    return BadRequest("Não foi possivel cadastrar a tecnologia");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        /// <summary>
        /// Deleta a vaga por id
        /// </summary>
        /// <param name="idVaga"></param>
        /// <returns></returns>
        [Authorize(Roles = "3")]
        [HttpDelete("{idVaga}")]
        public IActionResult DeletarVaga(int idVaga)
        {
            try
            {
                    if (_empresaIRepository.DeletarVaga(idVaga))
                        return Ok("Vaga deletada com sucesso");
                    else
                        return BadRequest("Não foi possivel cadastrar a Vaga");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "3")]
        [HttpPut("Aprovar/{idInscricao}")]
        public IActionResult AprovarCandidato(int idInscricao)
        {
            try
            {
                if (_empresaIRepository.AprovarCandidato(idInscricao))
                    return Ok("Candidato aprovado");

                else
                    return BadRequest("Erro ao aprovar esse candidato");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "3")]
        [HttpPut("Reprovar/{idInscricao}")]
        public IActionResult ReprovarCandidato(int idInscricao)
        {
            try
            {
                if (_empresaIRepository.ReprovarCandidato(idInscricao))
                    return Ok("Candidato reprovado");

                else
                    return BadRequest("Erro ao reprovar esse candidato");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Lista todas as vagas que a empresa publicou
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "3")]
        [HttpGet("ListarVagas/{idEmpresa}")]
        public IActionResult ListarVagas(int idEmpresa)
        {
            try
            {
                return Ok(_empresaIRepository.ListarVagasDaEmpresa(idEmpresa));
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpGet("ListarCandidatosInscritos/{idVaga}")]
        public IActionResult ListarCandidatosInscritos(int idVaga)
        {
            try
            {
                return Ok(_empresaIRepository.ListarVagasDaEmpresa(idVaga));
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        ///Atualiza a vaga que a empresa publicou
        /// </summary>
        /// <param name="id"></param>
        /// <param name="Vaga"></param>
        /// <returns></returns>
        [Authorize(Roles = "3")]
        [HttpPut("AtualizarVagaEmpresa/{id}")]
        public IActionResult AtualizarVaga(int id, AtualizarVagaViewModel Vaga)
        {
            try
            {
                if (_empresaIRepository.AtualizarVaga(id, Vaga))
                    return Ok("Vaga atualizada com sucesso");

                else
                    return BadRequest("Não foi possivel atualizar");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "3")]
        [HttpPost("CadastrarTecnologiaEmpresa")]
        public IActionResult AdicionarVagaTecnologia(VagaTecnologia vagatec)
        {
            try
            {
                if (_empresaIRepository.CadastrarVagaTecnologia(vagatec))
                    return StatusCode(201);

                else
                    return BadRequest();
            }
            catch (Exception)
            {
                return BadRequest("Erro no sistema");
            }
        }

        [Authorize(Roles = "3")]
        [HttpDelete("DeletarVagaTecnologiaEmpresa/{id}")]
        public IActionResult DeletarVagaTecnologia(VagaTecnologia vaga)
        {
            try
            {
                if (_empresaIRepository.DeletarVagaTecnologia(vaga))
                    return StatusCode(201);

                else
                    return BadRequest();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}