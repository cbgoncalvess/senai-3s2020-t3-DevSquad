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
using SenaiTechVagas.WebApi.ViewModels;

namespace SenaiTechVagas.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class VagasController : ControllerBase
    {
        IVagaRepository _Vaga { get; set; }
        public VagasController()
        {
            _Vaga = new VagaRepository();
        }

        /// <summary>
        /// Adiciona uma nova vaga
        /// </summary>
        /// <param name="VagaNovo"></param>
        /// <returns></returns>
        //[Authorize(Roles = "idEmpresa")]
        [HttpPost("adcVaga")]
        public IActionResult AdicionarVaga(Vaga VagaNovo)
        {
            try
            {
                VagaNovo.IdEmpresa = 1;
                if (_Vaga.AdicionarVaga(VagaNovo))
                    return Ok("Vaga cadastrado com sucesso");

                else
                    return BadRequest("Não foi possivel cadastrar a vaga,verifique se as informaçoes foram preenchidas corretamente");
            }
            catch (Exception e)
            {
                return BadRequest("nao foi cuzon");
            }
        }

        /// <summary>
        /// Adiciona uma tecnologia a vaga
        /// </summary>
        /// <param name="vagaTecnologia"></param>
        /// <returns></returns>
        [Authorize(Roles = "idEmpresa")]
        [HttpPost("AdicionarTecnologia")]
        public IActionResult AdicionarTecnologia(VagaTecnologia vagaTecnologia)
        {
            try
            {
                if (_Vaga.VerificarSeExiste(vagaTecnologia.IdTecnologia))
                    return BadRequest("Tecnologia indisponivel ou não existe");

                Vaga vagaBuscada = _Vaga.BuscarPorid(vagaTecnologia.IdVaga);
                if (vagaBuscada == null)
                    return BadRequest("Não foi possivel encontrar a vaga,tente novamente");

                if (_Vaga.VerificarSeTecnologiaFoiAdicionada(vagaTecnologia.IdTecnologia, vagaTecnologia.IdVaga))
                    return BadRequest("Essa tecnologia ja foi adicionada");

                if (_Vaga.AdicionarTecnologia(vagaTecnologia))
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
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize(Roles = "idEmpresa")]
        [HttpDelete("{id}")]
        public IActionResult DeletarVaga(int id)
        {
            try
            {
                if (_Vaga.DeletarVaga(id))
                    return Ok("Vaga deletada com sucesso");

                else
                    return BadRequest("Não foi possivel cadastrar a Vaga");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }


        /// <summary>
        /// Lista todas as vagas que vc publicou
        /// </summary>
        /// <returns></returns>
        [HttpGet("ListarVaga")]
        public IActionResult ListarVagas()
        {
            try
            {
                //colocar algo aqui
                return Ok(_Vaga.ListarVagas());
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        ///Atualiza a vaga
        /// </summary>
        /// <param name="id"></param>
        /// <param name="Vaga"></param>
        /// <returns></returns>
        [Authorize(Roles = "idEmpresa")]
        [HttpPut("{id}")]
        public IActionResult AtualizarVaga(int id, AtualizarVagaViewModel Vaga)
        {
            try
            {
                if (_Vaga.AtualizarVaga(id, Vaga))
                    return Ok("Vaga atualizada com sucesso");

                else
                return BadRequest("Não foi possivel atualizar");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Lista vagas pelo filtro tipo de contrato
        /// </summary>
        /// <param name="TipoContrato"></param>
        /// <returns></returns>
        //[Authorize(Roles = "idCandidato")]
        [HttpGet("TipoContrato/{TipoContrato}")]
        public IActionResult ListarVagasFiltroTipoContarto(string TipoContrato)
        {
            try
            {
                return Ok(_Vaga.ListarFiltroTipoContrato(TipoContrato));
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Lista vagas pelo filtro por nivel de experiencia
        /// </summary>
        /// <param name="NivelExperiencia"></param>
        /// <returns></returns>
        [Authorize(Roles = "idCandidato")]
        [HttpGet("NivelExperiencia/{NivelExperiencia}")]
        public IActionResult ListarVagas(string NivelExperiencia)
        {
            try
            {
                return Ok(_Vaga.ListarFiltroNivelExperiencia(NivelExperiencia));
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Lista vagas pela barra de pesquisa nome da tecnologia
        /// </summary>
        /// <param name="NomeTecnologia"></param>
        /// <returns></returns>
        [Authorize(Roles = "idCandidato")]
        [HttpGet("Tecnologia/{NomeTecnologia}")]
        public IActionResult ListarVagasPelaTecnologia(string NomeTecnologia)
        {
            try
            {
                return Ok(_Vaga.ListarPesquisaTecnologia(NomeTecnologia));
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }
    }
}
