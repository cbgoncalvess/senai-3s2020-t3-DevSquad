using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        [HttpPost]
        public IActionResult AdicionarVaga(Vaga VagaNovo)
        {
            try
            {
                if (_Vaga.AdicionarVaga(VagaNovo))
                {
                    return Ok("Vaga cadastrado com sucesso");
                }
                else
                {
                    return BadRequest("Não foi possivel cadastrar o Vaga");
                }
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

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
                {
                    return Ok("Tecnologia adicionada com sucesso");
                }
                else
                {
                    return BadRequest("Não foi possivel cadastrar a tecnologia");
                }
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarVaga(int id)
        {
            try
            {
                if (_Vaga.DeletarVaga(id))
                {
                    return Ok("Vaga deletado com sucesso");
                }
                else
                {
                    return BadRequest("Não foi possivel cadastrar a Vaga");
                }
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        public IActionResult ListarVagas()
        {
            try
            {
                return Ok(_Vaga.ListarVagas());
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public IActionResult AtualizarPorIdCorpo(int id, AtualizarVagaViewModel Vaga)
        {
            try
            {
                if (_Vaga.AtualizarVaga(id, Vaga))
                {
                    return Ok("Vaga atualizado");
                }

                return BadRequest("Não foi possivel atualizar");

            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

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
