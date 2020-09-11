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
    public class EstagioController : ControllerBase
    {
        IEstagioRepository _Estagio { get; set; }
        public EstagioController()
        {
            _Estagio = new EstagioRepository();
        }

        [HttpPost]
        public IActionResult AdicionarEstagio(EstagioViewModel estagioNovo)
        {
            try
            {
                if (_Estagio.CadastrarEstagio(estagioNovo.IdCandidato,estagioNovo.IdEmpresa,estagioNovo.PeriodoEstagio))
                {
                    return Ok("Estagio cadastrado com sucesso");
                }
                else
                {
                    return BadRequest("Não foi possivel cadastrar o estagio");
                }
            } catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarEstagio(int id)
        {
            try
            {
                if (_Estagio.DeletarPorId(id))
                {
                    return Ok("Estagio deletado com sucesso");
                }
                else
                {
                    return BadRequest("Não foi possivel cadastrar o estagio");
                }
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        public IActionResult ListarEstagios()
        {
            try
            {
                return Ok(_Estagio.ListarEstagios());
            } catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
       public IActionResult AtualizarPorIdCorpo(int id,Estagio estagio)
        {
            try
            {
                if (_Estagio.AtualizarPorIdCorpo(id, estagio))
                {
                    return Ok("Estagio atualizado");
                }

                return BadRequest("Não foi possivel atualizar");

            }catch(Exception e)
            {
                return BadRequest();
            }
        }
    }
}
