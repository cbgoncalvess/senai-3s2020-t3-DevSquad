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
    public class EstagiosController : ControllerBase
    {
        IEstagioRepository _Estagio { get; set; }
        public EstagiosController()
        {
            _Estagio = new EstagioRepository();
        }

        [HttpPost]
        public IActionResult AdicionarEstagio(Estagio estagioNovo)
        {
            try
            {
                if (estagioNovo.PeriodoEstagio > 36)
                    return BadRequest("O periodo nao pode ser maior que 36 meses");

                if (_Estagio.VerificarSeExiste(estagioNovo.IdCandidato))
                    return BadRequest("Estagio ja existe");

                if (_Estagio.CadastrarEstagio(estagioNovo))
                    return Ok("Estagio cadastrado com sucesso");

                else
                    return BadRequest("Não foi possivel cadastrar o estagio");

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
                    return Ok("Estagio deletado com sucesso");

                else
                    return BadRequest("Não foi possivel deletar este estagio");
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

        [HttpGet("{NumeroDeMeses}")]
        public IActionResult ListarFiltroPeriodo(int NumeroDeMeses)
        {
            try
            {
                return Ok(_Estagio.ListarPorperiodo(NumeroDeMeses));
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpPut("{idEstagio}")]
       public IActionResult AtualizarPorIdCorpo(int idEstagio,AtualizarEstagioViewModel estagio)
        {
            try
            {
                if (_Estagio.VerificarSeExiste(estagio.IdCandidato))
                    return BadRequest("Estagio ja existe");

                if (_Estagio.AtualizarPorIdCorpo(idEstagio, estagio))
                    return Ok("Estagio atualizado");

                else
                return BadRequest("Não foi possivel atualizar este estagio,verifique se todas as informaçoes sao validas");

            }catch(Exception e)
            {
                return BadRequest();
            }
        }
    }
}
