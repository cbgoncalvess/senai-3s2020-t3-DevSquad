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
    public class AdministradorController : ControllerBase
    {
        IAdministradorRepository _Admin { get; set; }

        public AdministradorController()
        {
            _Admin = new AdministradorRepository();
        }

        /*----------------------------------------GET START-----------------------------*/
        /// <summary>
        /// Lista todos os objetos da tabela Empresa
        /// </summary>
        /// <returns>Retorna um HTTP Code (201) e a mensagem "true", caso contrário,
        /// retorna um HTTP Code (400)e a mensagem "Uma exceção ocorreu. Tente novamente."
        /// </returns>
        [Authorize(Roles = "1")]
        [HttpGet("ListarEmpresas")]
        public IActionResult ListaEmpresas()
        {
            try
            {
                return Ok(_Admin.ListarEmpresa());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que lista os usuários banidos
        /// </summary>
        /// <returns>Retorna lista de usuários banidos</returns>
        [Authorize(Roles = "1")]
        [HttpGet("Banidos")]
        public IActionResult ListaBanidos()
        {
            try
            {
                return Ok(_Admin.ListaDebanidos());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Lista todos os candidatos
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpGet("ListarCandidatos")]
        public IActionResult ListarCandidatos()
        {
            try
            {
                return Ok(_Admin.ListarCandidatos());
            }
            catch (Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// Lista todos os cursos
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpGet("ListarCurso")]
        public IActionResult ListarCurso()
        {
            try
            {
                return Ok(_Admin.ListarCurso());
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// O administrador podera listar os estagios
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpGet("ListarEstagios")]
        public IActionResult ListarEstagios()
        {
            try
            {
                return Ok(_Admin.ListarEstagios());
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// O administrador podera listar os estagios por filtro meses
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpGet("ListarEstagio/{NumeroDeMeses}")]
        public IActionResult ListarFiltroPeriodo(int NumeroDeMeses)
        {
            try
            {
                return Ok(_Admin.ListarPorperiodo(NumeroDeMeses));
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Lista todos os statusInscricao
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles ="1")]
        [HttpGet("ListarStatusInscricao")]
        public IActionResult ListarStatusInscricao()
        {
            try
            {
                return Ok(_Admin.ListarStatusInscricao());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Lista todas as tecnologias
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpGet("ListarTecnologia")]
        public IActionResult ListarTecnologia()
        {
            try
            {
                return Ok(_Admin.ListarTecnologia());
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Lista Todos os Tipos de usuario
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpGet("ListarTipoUsuario")]
        public IActionResult ListarTipoUsuario()
        {
            try
            {
                return Ok(_Admin.ListarTipoUsuario());
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Lista todos os administradores
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpGet("ListarAdministradores")]
        public IActionResult ListaAdministradores()
        {
            try
            {
                return Ok(_Admin.ListarAdministradores());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        /*----------------------------------------GET END------------------------------*/

        /*----------------------------------------DELETE START------------------------------*/
        /// <summary>
        /// Apaga as informações de um objeto único da tabela candidato.
        /// </summary>
        /// <param name="id">Identificador único de cada objeto da tabela candidato, 
        /// do tipo inteiro.</param>
        /// <returns>Retorna um HTTP Code (201) e a mensagem: true, caso contrário, retorna 
        /// um HTTP Code (400) e a mensagem: Uma exceção ocorreu. Tente novamente.</returns>
        [Authorize(Roles = "1,2")]
        [HttpDelete("DeletarCandidato/{id}")]
        public IActionResult DeletarCandidato(int id)
        {
            try
            {
                return Ok(_Admin.DeletarCandidato(id));
            }
            catch
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// Apagar um objeto da tabela Empresa em que seu identificador único corresponda 
        /// a informação passada na requisição.
        /// </summary>
        /// <param name="idEmpresa">Identificador único de cada objeto da tabela candidato, do 
        /// tipo inteiro.</param>
        /// <returns>Retorna um HTTP Code (201) e a mensagem: true, caso ocorra um erro na 
        /// informação passada, retorna-se, então, false, caso haja uma exceção, retorna-se,
        /// então, um HTTP Code (400) e a mensagem: "Uma exceção ocorreu. Tente novamente."</returns>
        [Authorize(Roles = "1")]
        [HttpDelete("DeletarEmpresa/{idEmpresa}")]
        public IActionResult DeletarEmpresa(int idEmpresa)
        {
            try
            {
                return Ok(_Admin.DeletarEmpresaPorId(idEmpresa));
            }
            catch
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// O administrador podera eletar os estagios
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpDelete("DeletarEstagio/{id}")]
        public IActionResult DeletarEstagio(int id)
        {
            try
            {
                if (_Admin.DeletarEstagioPorId(id))
                    return Ok("Estagio deletado com sucesso");

                else
                    return BadRequest("Não foi possivel deletar este estagio");
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
        [Authorize(Roles = "1")]
        [HttpDelete("DeletarInscricao/{id}")]
        public IActionResult DeletarInscricao(int id)
        {
            try
            {
                if (_Admin.DeletarInscricao(id))
                    return Ok("Inscricao deletada com sucesso");

                else
                    return BadRequest("Não foi possivel deletar a Inscricao");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "1")]
        [HttpDelete("DeletarAdminstrador/{id}")]
        public IActionResult DeletarAdministrador(int id)
        {
            try
            {
                if (_Admin.DeletarInscricao(id))
                    return Ok("Administrador deletado com sucesso");

                else
                    return BadRequest("Não foi possivel deletar o adminstrador");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Deleta a vaga por id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpDelete("DeletarVaga/{id}")]
        public IActionResult DeletarVaga(int id)
        {
            try
            {
                if (_Admin.DeletarVaga(id))
                    return Ok("Vaga deletada com sucesso");

                else
                    return BadRequest("Não foi possivel deletar a Vaga");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }
        /*----------------------------------------DELETE END---------------------------------*/


        /*----------------------------------------POST START---------------------------------*/
        [Authorize(Roles = "1")]
        [HttpPost("AdicionarCurso")]
        public IActionResult CadastrarCurso(Curso novoCurso)
        {
            try
            {
                if (_Admin.CadastrarCurso(novoCurso))
                    return Ok("Curso cadastrado com sucesso");

                else
                    return BadRequest();
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// O admininistrador podera cadastrar um novo estagio
        /// </summary>
        /// <param name="estagioNovo"></param>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpPost("AdicionarEstagio")]
        public IActionResult AdicionarEstagio(Estagio estagioNovo)
        {
            try
            {
                if (estagioNovo.PeriodoEstagio > 36)
                    return BadRequest("O periodo nao pode ser maior que 36 meses");

                if (_Admin.VerificarSeExiste(estagioNovo.IdCandidato))
                    return BadRequest("Estagio ja existe");

                if (_Admin.CadastrarEstagio(estagioNovo))
                    return Ok("Estagio cadastrado com sucesso");

                else
                    return BadRequest("Não foi possivel cadastrar o estagio");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "1")]
        [HttpPost("AdicionarStatusInscricao")]
        public IActionResult AdicionarStatusInscricao(StatusInscricao status)
        {
            try
            {
                if (_Admin.CadastrarStatusInscricao(status))
                    return StatusCode(201);

                else
                    return BadRequest();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "1")]
        [HttpPost("AdicionarTecnologia")]
        public IActionResult CadastrarTecnologia(Tecnologia novaTecnologia)
        {
            try
            {
                if (_Admin.CadastrarTecnologia(novaTecnologia))
                    return Ok("Tecnologia adicionada com sucesso");

                else
                    return BadRequest("Não foi possivel adicionar essa tecnologia");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "1")]
        [HttpPost("AdicionarTipoUsuario")]
        public IActionResult CadastrarTipoUsuario(TipoUsuario novoTipoUsuario)
        {
            try
            {
                if (_Admin.CadastrarTipoUsuario(novoTipoUsuario))
                    return Ok("Tipo de usuario adicionado");

                else
                    return BadRequest("Não foi possivel adicionar um novo tipo de usuario");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }
        /*----------------------------------------POST END---------------------------------*/


        /*----------------------------------------PUT START---------------------------------*/
        [Authorize(Roles ="1")]
        [HttpPut("AtualizarCurso/{id}")]
        public IActionResult AtualizarCurso(int idCurso,Curso curso) 
        {
            try
            {
                if (_Admin.AtualizarCurso(idCurso, curso))
                    return Ok("Curso atualizado com sucesso");

                else
                    return BadRequest("Não foi possivel atualizar o curso");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// O adminstrador podera atualizar o estagio
        /// </summary>
        /// <param name="idEstagio"></param>
        /// <param name="estagio"></param>
        /// <returns></returns>
        [Authorize(Roles = "idAdminnistrador")]
        [HttpPut("AtualizarEstagio/{idEstagio}")]
        public IActionResult AtualizarEstagio(int idEstagio, AtualizarEstagioViewModel estagio)
        {
            try
            {
                if (_Admin.VerificarSeExiste(estagio.IdCandidato))
                    return BadRequest("Estagio ja existe");

                if (_Admin.AtualizarEstagio(idEstagio, estagio))
                    return Ok("Estagio atualizado");

                else
                    return BadRequest("Não foi possivel atualizar este estagio,verifique se todas as informaçoes sao validas");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "1")]
        [HttpPut("AtualizarStatusInscricao/{id}")]
        public IActionResult AtualizarStatusInscricao(int id, StatusInscricao status)
        {
            try
            {
                if (_Admin.AtualizarStatusInscricao(id, status))
                    return StatusCode(201);
                else
                    return BadRequest();
            }
            catch (Exception)
            {
               return BadRequest();
            }
        }

        [Authorize(Roles = "1")]
        [HttpPut("AtualizarTecnologia/{id}")]
        public IActionResult AtualizarTecnologia(Tecnologia tecnologia, int id)
        {
            try
            {
                if (_Admin.AtualizarTecnologia(id, tecnologia))
                    return Ok("Tecnologia atualizada com sucesso");

                else
                    return BadRequest("Não foi possivel atualizar essa tecnologia");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "1")]
        [HttpPut("AtualizarTipoUsuario/{id}")]
        public IActionResult AtualizarTipoUsuario(int id, TipoUsuario tipoUsuario)
        {
            try
            {
                if (_Admin.AtualizarTipoUsuario(id, tipoUsuario))
                    return Ok("Tipo usuario atualizado com sucesso");

                else
                    return BadRequest("Não foi possivel atualizar o tipo de usuario");
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que bani usuário pelo seu identificador 
        /// </summary>
        /// <param name="id">Identificador do usuário</param>
        [Authorize(Roles = "1")]
        [HttpPut("Banir/{id}")]
        public IActionResult BanirUsuario(int id)
        {
            if (_Admin.BanirUsuario(id))
                return Ok("Usuário banido");

            else
            return NotFound("Usuário não encontrado para ser Banido");
        }

        /// <summary>
        /// Método que desbane usuário pelo seu identificador 
        /// </summary>
        /// <param name="id">Identificador do usuário</param>
        /// <returns>retorna um usuário no estado normal de seu tipo usuário</returns>
        [Authorize(Roles = "1")]
        [HttpPut("Desbanir/{id}")]
        public IActionResult DesbanirUsuario(int id)
        {
            if (_Admin.DesbanirUsuario(id))
                return Ok("Usuário desbanido");

            else
            return NotFound("Usuário não encontrado para ser Desbanido");
        }
        /*----------------------------------------PUT END---------------------------------*/
    }
}