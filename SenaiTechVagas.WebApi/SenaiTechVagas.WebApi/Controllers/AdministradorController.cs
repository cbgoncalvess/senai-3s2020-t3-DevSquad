using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.Repositories;
using SenaiTechVagas.WebApi.Utils;
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
        [HttpGet("ListarBanidos")]
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
            catch (Exception)
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
            catch (Exception)
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
            catch (Exception)
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
            catch (Exception)
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
            catch (Exception)
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
        [Authorize(Roles = "1")]
        [HttpDelete("DeletarCandidato/{id}")]
        public IActionResult DeletarCandidato(int id)
        {
            try
            {
                if (_Admin.DeletarCandidato(id))
                    return Ok("Candidato deletado com sucesso");
                else
                    return BadRequest("Não foi possivel deletar o usuario");
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
                if (_Admin.DeletarEmpresaPorId(idEmpresa))
                    return Ok("Empresa deletada com sucesso");
                else
                    return BadRequest("Não foi possivel deletar a empresa");
            }
            catch(Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// O administrador podera eletar os estagios
        /// </summary>
        /// <param name="idEstagio"></param>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpDelete("DeletarEstagio/{idEstagio}")]
        public IActionResult DeletarEstagio(int idEstagio)
        {
            try
            {
                if (_Admin.DeletarEstagioPorId(idEstagio))
                    return Ok("Estagio deletado com sucesso");
                else
                    return BadRequest("Não foi possivel deletar este estagio");
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
        [Authorize(Roles = "1")]
        [HttpDelete("DeletarInscricao/{idInscricao}")]
        public IActionResult DeletarInscricao(int idInscricao)
        {
            try
            {
                if (_Admin.DeletarInscricao(idInscricao))
                    return Ok("Inscricao deletada com sucesso");
                else
                    return BadRequest("Não foi possivel deletar a Inscricao");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Deleta um usuario do tipo administrador passando o id de usuario dele,o idUsuario 1 não pode ser deletado
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpDelete("DeletarAdminstrador/{idUsuario}")]
        public IActionResult DeletarAdministrador(int idUsuario)
        {
            try
            {
                if (_Admin.DeletarInscricao(idUsuario))
                    return Ok("Administrador deletado com sucesso");
                else
                    return BadRequest("Não foi possivel deletar o adminstrador");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Deleta a vaga por id
        /// </summary>
        /// <param name="idVaga"></param>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpDelete("DeletarVaga/{idVaga}")]
        public IActionResult DeletarVaga(int idVaga)
        {
            try
            {
                if (_Admin.DeletarVaga(idVaga))
                    return Ok("Vaga deletada com sucesso");
                else
                    return BadRequest("Não foi possivel deletar a Vaga");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        /*----------------------------------------DELETE END---------------------------------*/


        /*----------------------------------------POST START---------------------------------*/
        /// <summary>
        /// Adciona um curso novo
        /// </summary>
        /// <param name="novoCurso"></param>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpPost("AdicionarCurso")]
        public IActionResult CadastrarCurso(Curso novoCurso)
        {
            try
            {
                if (_Admin.CadastrarCurso(novoCurso))
                    return StatusCode(201);
                else
                    return BadRequest();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Cadastra uma nova area
        /// </summary>
        /// <param name="NovaArea"></param>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpPost("AdicionarArea")]
        public IActionResult CadastrarArea(Area NovaArea)
        {
            try
            {
                if (_Admin.CadastrarArea(NovaArea))
                    return StatusCode(201);
                else
                    return BadRequest();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Cadastra um adminsitrador
        /// </summary>
        /// <param name="usuarioAdmin"></param>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpPost("AdicionarAdministrador")]
        public IActionResult CadastrarAdministrador(Usuario usuarioAdmin)
        {
            try
            {
                usuarioAdmin.Senha = Crypter.Criptografador(usuarioAdmin.Senha);
                if (_Admin.CadastrarAdministardor(usuarioAdmin))
                    return StatusCode(201);
                else
                    return BadRequest();
            }
            catch (Exception)
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
                    return StatusCode(201);

                else
                    return BadRequest("Não foi possivel cadastrar o estagio");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        ///Adiciona um novo tipo de status de inscricao
        /// </summary>
        /// <param name="status"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Adicona uma nova tecnologia 
        /// </summary>
        /// <param name="novaTecnologia"></param>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpPost("AdicionarTecnologia")]
        public IActionResult CadastrarTecnologia(Tecnologia novaTecnologia)
        {
            try
            {
                if (_Admin.CadastrarTecnologia(novaTecnologia))
                    return StatusCode(201);

                else
                    return BadRequest("Não foi possivel adicionar essa tecnologia");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        /// <summary>
        /// Adiciona um novo tipo de usuario
        /// </summary>
        /// <param name="novoTipoUsuario"></param>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpPost("AdicionarTipoUsuario")]
        public IActionResult CadastrarTipoUsuario(TipoUsuario novoTipoUsuario)
        {
            try
            {
                if (_Admin.CadastrarTipoUsuario(novoTipoUsuario))
                    return StatusCode(201);
                else
                    return BadRequest("Não foi possivel adicionar um novo tipo de usuario");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        /*----------------------------------------POST END---------------------------------*/


        /*----------------------------------------PUT START---------------------------------*/
        /// <summary>
        /// Atualiza o nome de um curso na tabela cursos passando o id
        /// </summary>
        /// <param name="idCurso"></param>
        /// <param name="curso"></param>
        /// <returns></returns>
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
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Atualiza a area
        /// </summary>
        /// <param name="idArea"></param>
        /// <param name="area"></param>
        /// <returns></returns>
        [Authorize(Roles = "1")]
        [HttpPut("AtualizarArea/{id}")]
        public IActionResult AtualizarArea(int idArea,Area area)
        {
            try
            {
                if (_Admin.AtualizarArea(idArea, area))
                    return Ok("Area atualizado com sucesso");
                else
                    return BadRequest("Não foi possivel atualizar a area");
            }
            catch (Exception)
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
        [Authorize(Roles = "1")]
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
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Atualiza o nome de um status da inscricao
        /// </summary>
        /// <param name="id"></param>
        /// <param name="status"></param>
        /// <returns></returns>
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
        /// <summary>
        /// A  atualiza o nome de uma tecnologia
        /// </summary>
        /// <param name="tecnologia"></param>
        /// <param name="id"></param>
        /// <returns></returns>
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
            catch (Exception)
            {
                return BadRequest();
            }
        }
        /// <summary>
        ///Atualiza o nome de um tipo de usuario
        /// </summary>
        /// <param name="id"></param>
        /// <param name="tipoUsuario"></param>
        /// <returns></returns>
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
            catch (Exception)
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
            try
            {
                if (_Admin.BanirUsuario(id))
                    return Ok("Usuário banido");
                else
                    return NotFound("Erro ao banir esse usuário ");
            }
            catch (Exception)
            {
                return BadRequest();
            }
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
            try
            {
                if (_Admin.DesbanirUsuario(id))
                    return Ok("Usuário desbanido");
                else
                    return NotFound("Erro ao banir esse usuário ");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }/*----------------------------------------PUT END------------------------------------*/
}