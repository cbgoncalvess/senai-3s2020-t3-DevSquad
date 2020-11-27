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
        /// Método que lista as empresas cadastradas com suas informações.
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

        [Authorize(Roles = "1")]
        [HttpGet("listaEmpresaRazaoSocial")]
        public IActionResult ListaEmpresasRazaoSocial()
        {
            try
            {
                return Ok(_Admin.ListarNomeEmpresas());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "1")]
        [HttpGet("listaEmailCandidato")]
        public IActionResult ListaEmailsCandidato()
        {
            try
            {
                return Ok(_Admin.ListarEmailsCandidato());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "1")]
        [HttpGet("ListarCandidatosInscritosAdm/{idVaga}")]
        public IActionResult ListarCandidatosInscritos(int idVaga)
        {
            try
            {
                return Ok(_Admin.ListarCandidatosInscritos(idVaga));
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
        /// Lista todos os candidatos cadastrados.
        /// </summary>
        /// <returns>Retorna todos candidatos cadastrados.</returns>
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
        /// Método que faz quantidade de usuários/estágios cadastrados.
        /// <returns>Retorna uma quantidade de usuários/estágios cadastrados.</returns>
        [Authorize(Roles = "1")]
        [HttpGet("Estatisticas")]
        public IActionResult ListarEstatisticas()
        {
            try
            {
                return Ok(_Admin.ContadorCadastros());
            }
            catch (Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// Método para Administrador que lista estágios cadastrados.
        /// </summary>
        /// <returns>Retorna lista de estágios cadastrados.</returns>
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
        /// Método Administrador que lista estágios cadastrados por filtro meses.
        /// </summary>
        /// <returns>Retorna lista estágios cadastrados por filtro meses.</returns>
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
        /// Método que lista todos os statusInscricao.
        /// </summary>
        /// <returns>Retorna lista todos os statusInscricao.</returns>
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
        /// Método que lista os tipos de usuários.
        /// </summary>
        /// <returns>Retorna lista os tipos de usuários.</returns>
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
        /// Método que lista todos os Administradores cadastrados.
        /// </summary>
        /// <returns>Retorna que lista todos os Administradores cadastrados.</returns>
        [Authorize(Roles = "1")]
        [HttpGet("ListarColaboradores")]
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
        /// Método que remove candidato pelo seu identificador, do sistema.
        /// </summary>
        /// <param name="id">Identificador do candidato.</param>
        /// <returns>Retorna uma remoção de candidato do sistema.</returns>
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

        /// <summary>Método que remove Empresa pelo seu identificador, do sistema./// </summary>
        /// <param name="idEmpresa">Identificador único de cada objeto da tabela candidato, do 
        /// tipo inteiro.</param>
        /// <returns>Identificador do Empresa.</returns>
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
        /// Método para Administrador remover estagios cadastrados./// </summary>
        /// <param name="idEstagio">Identificador do estágio.</param>
        /// <returns>Retorna uma remoção de Estágio.</returns>
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
        /// Método para Candidato remover sua inscrição da vaga.
        /// </summary>
        /// <param name="idInscricao">Identificador de inscrição.</param>
        /// <returns>Retorna revogação de inscrição.</returns>
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
        /// Método que remove Administrador do sistema.
        /// </summary>
        /// <param name="idUsuario">Identificador Administrador</param>
        /// <returns>Retorna uma remoção de Ádministrador</returns>
        [Authorize(Roles = "1")]
        [HttpDelete("DeletarAdminstrador/{idUsuario}")]
        public IActionResult DeletarAdministrador(int idUsuario)
        {
            try
            {
                if (_Admin.DeletarAdministrador(idUsuario))
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
        /// Método para Administrador que remove Vaga./// </summary>
        /// <param name="idVaga">Identificador de vaga</param>
        /// <returns>Retorna vaga removida.</returns>
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
        /// Método para Administrador adicionar novo curso
        /// </summary>
        /// <param name="novoCurso">Objeto novo curso</param>
        /// <returns>Retorna um novo curso cadastrado.</returns>
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
        /// Método para Administrador adicionar uma nova área.
        /// </summary>
        /// <param name="NovaArea">Objeto novaArea</param>
        /// <returns>Retorna NovaArea cadastrada</returns>
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

        [Authorize(Roles = "1")]
        [HttpPost("AdicionarTipoPresenca")]
        public IActionResult AdicionarTipoPresenca(TipoRegimePresencial trp)
        {
            try
            {
                return Ok(_Admin.AdicionarTipoPresenca(trp));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método para Administrador, adicionar novo Adminsitrador
        /// </summary>
        /// <param name="usuarioAdmin">Objeto novoAdmin</param>
        /// <returns>Retorna um novo Administrador cadastrados.</returns>
        [Authorize(Roles = "1")]
        [HttpPost("AdicionarColaborador")]
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
        /// Método para Admininistrador adicionar novo estágio.
        /// </summary>
        /// <param name="estagioNovo">Objeto novoEstagio</param>
        /// <returns>Retorna um novo estágio cadastrado.</returns>
        [Authorize(Roles = "1")]
        [HttpPost("AdicionarEstagio")]
        public IActionResult AdicionarEstagio(CadastrarEstagioViewModel estagioNovo)
        {
            try
            {
                if (estagioNovo.PeriodoEstagio > 36)
                    return BadRequest("O periodo nao pode ser maior que 36 meses");

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
        ///Método para Admnistrador adiciona novo tipo de status de inscrição.
        /// </summary>
        /// <param name="status">Objeto novoTipoInscrição</param>
        /// <returns>Retorna uma novo tipo de inscrição cadastrada.</returns>
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
        /// Método para Administrador adicionar nova tecnologia.
        /// </summary>
        /// <param name="novaTecnologia">Objeto novaTecnologia</param>
        /// <returns>Retorna uma nova Tecnologia cadastrada.</returns>
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
        /// Método para Administrador adicionar novo tipo de usuario.
        /// </summary>
        /// <param name="novoTipoUsuario">Objeto novoTipoUsuario</param>
        /// <returns>Retorna um novo tipo de usuário cadastrado.</returns>
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
        /// Método que atualiza informações do curso.
        /// </summary>
        /// <param name="idCurso">Identificador do curso</param>
        /// <param name="curso">Objeto curso</param>
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

        [Authorize(Roles = "1")]
        [HttpPut("AtualizarTipoPresenca/{id}")]
        public IActionResult AtualizarTipoPresenca(int id,TipoRegimePresencial trp)
        {
            try
            {
                return Ok(_Admin.AtualizarTipoPresenca(id,trp));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que altera password de Administrador
        /// </summary>
        /// <param name="usuario">Objeto usuario</param>
        /// <returns>Retorna uma nova senha atualizada.</returns>
        [Authorize(Roles ="1")]
        [HttpPut("AlterarSenhaDeQualquerUsuario")]
        public IActionResult AterarSenhaDeQualquerUsuario(Usuario usuario)
        {
            try
            {
                if (_Admin.AlterarSenhaDoUsuario(usuario.Email,usuario.Senha))
                    return Ok("Senha alterada com sucesso");
                else
                    return BadRequest("Não foi possivel alterar a senha para o email informado");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que atualiza informações de Área.
        /// </summary>
        /// <param name="idArea">Identificador de área</param>
        /// <param name="area">Objeto área</param>
        /// <returns>Retorna área atualizada</returns>
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
        /// Método que atualizar informações de estágio.
        /// </summary>
        /// <param name="idEstagio">Identificador de estágio.</param>
        /// <param name="estagio">Objeto de estágio.</param>
        /// <returns>Retorna atualização de estágio.</returns>
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
        /// Método que atualiza informações de status da inscrição.
        /// </summary>
        /// <param name="id">Identificador status de inscrição</param>
        /// <param name="status">Objeto status de inscrição</param>
        /// <returns>Retorna status de inscrição atualizado.</returns>
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
        /// Método que atualiza informações de tecnologia.
        /// </summary>
        /// <param name="tecnologia">Objeto tecnologia</param>
        /// <param name="id">Identificador de Tecnologia</param>
        /// <returns>Retorna tecnologia atualizada.</returns>
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
        ///Método que atualiza informações de tipo de usuário.
        /// </summary>
        /// <param name="id">Identificador tipo de usuário</param>
        /// <param name="tipoUsuario">Objeto tipo de usuário</param>
        /// <returns>Retorna tipo de usuário atualizado.</returns>
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
        /// Método que bani usuário
        /// </summary>
        /// <param name="id">Identificador de usuário</param>
        /// <returns>Retorna usuário banido.</returns>
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
        /// Método que desbane usuário.
        /// </summary>
        /// <param name="id">Identificador do usuário</param>
        /// <returns>Retorna usuário no seu estado normal de tipo usuário.</returns>
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