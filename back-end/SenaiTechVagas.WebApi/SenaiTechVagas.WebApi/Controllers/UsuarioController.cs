using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
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
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository usuarioRepository { get; set; }

        public UsuarioController()
        {
            usuarioRepository = new UsuarioRepository();
        }
   
        /// <summary>
        /// Método que adiciona um novo candidato.
        /// </summary>
        /// <param name="NovoCandidato"></param>
        /// <returns></returns>
        [HttpPost("Candidato")]
        public IActionResult CadastrarCandidato(CadastrarCandidatoViewModel NovoCandidato)
        {
            try
            {
                VerificacaoViewModel vm = new VerificacaoViewModel()
                {
                    Email = NovoCandidato.Email,
                    Rg = NovoCandidato.Email,
                    Cpf = NovoCandidato.Cpf,
                    Telefone = NovoCandidato.Telefone,
                    LinkLinkedinCandidato= NovoCandidato.LinkLinkedinCandidato
                };

                var Response = usuarioRepository.VerificarSeCredencialJaFoiCadastrada(vm);
                if (Response == null)
                {
                    NovoCandidato.Senha = Crypter.Criptografador(NovoCandidato.Senha);
                    if(usuarioRepository.CadastrarCandidato(NovoCandidato))
                        return Ok("Novo candidato inserido com sucesso!");
                    else
                        return BadRequest("Um erro ocorreu ao receber a sua requisição.");
                }
                else
                    return BadRequest(Response);
            }
            catch (Exception )
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

       /// <summary>
       /// Método que adiciona uma nova empresa
       /// </summary>
       /// <param name="empresa"></param>
       /// <returns></returns>
        [HttpPost("Empresa")]
        public IActionResult CadastrarEmpresa(CadastrarEmpresaViewModel empresa)
        {
            try
            {
                VerificacaoViewModel vm = new VerificacaoViewModel()
                {
                    Email = empresa.Email,
                    RazaoSocial = empresa.RazaoSocial,
                    NomeFantasia=empresa.NomeFantasia,
                    Cnpj=empresa.Cnpj
                };
                var Response = usuarioRepository.VerificarSeCredencialJaFoiCadastrada(vm);
                if (Response == null)
                {
                    empresa.Senha = Crypter.Criptografador(empresa.Senha);
                    if (usuarioRepository.CadastrarEmpresa(empresa))
                        return Ok("Nova empresa cadastrada com sucesso!");
                    else
                        return BadRequest("Um erro ocorreu e nao foi possivel efetuar o cadastro.");
                }
                else
                    return BadRequest(Response);
            }
            catch (Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="usuario"></param>
        /// <returns></returns>
        [Authorize]
        [HttpPut("AlterarSenha")]
        public IActionResult AlterarSenha(AlterarSenhaUsuarioLogadoViewModel vm)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                if (usuarioRepository.AlterarSenhaUsuarioLogado(vm,idUsuario))
                {
                    return Ok("Senha alterada");
                }
                else
                {
                    return BadRequest("Não foi possivel alterar a senha");
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que recupera senha
        /// </summary>
        /// <param name="vm"></param>
        /// <returns></returns>
        [Authorize]
        [HttpPut("RecuperarSenha")]
        public IActionResult RecuperarSenha(RecuperarSenhaViewModel vm)
        {
            try
            { 
                if (usuarioRepository.RecuperarSenha(vm))
                {
                    return Ok("Senha alterada");
                }
                else
                {
                    return BadRequest("Não foi possivel alterar a senha");
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Métedo que lista Vagas publicadas.
        /// </summary>
        /// <returns>Retorna vagas publicadas</returns>
        [Authorize]
        [HttpGet("ListarTodasAsVagas")]
        public IActionResult ListarVagasEmGeral()
        {
            try
            {
                return Ok(usuarioRepository.ListarVagasEmGeral());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que lista Vagas da área.
        /// </summary>
        /// <param name="id">Identificador ListarVagasArea</param>
        /// <returns>Retorna lista de VagasArea</returns>
        [Authorize]
        [HttpGet("ListarVagasArea/{id}")]
        public IActionResult ListarVagasArea(int id)
        {
            try
            {
                return Ok(usuarioRepository.ListarVagasArea(id));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que lista área.
        /// </summary>
        /// <returns>Retorna lista de área cadastradas</returns>
        [Authorize]
        [HttpGet("ListarArea")]
        public IActionResult ListarArea()
        {
            try
            {
                return Ok(usuarioRepository.ListarAreas());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que busca Vaga
        /// </summary>
        /// <param name="idVaga">Identificador Vaga</param>
        /// <returns>REtorna Vaga buscada.</returns>
        [Authorize]
        [HttpGet("BuscarPorId/{idVaga}")]
        public IActionResult BuscarVagaPeloId(int idVaga)
        {
            try
            {
                return Ok(usuarioRepository.BuscarVagaPeloId(idVaga));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que lista filtro tipo de contrato
        /// </summary>
        /// <param name="NomeTipoContrato">Objeto NomeTipoContrato</param>
        /// <returns>Retorna lista filtro tipo de contrato.</returns>
        [Authorize]
        [HttpGet("TipoContrato/{NomeTipoContrato}")]
        public IActionResult ListarVagasFiltroTipoContarto(string NomeTipoContrato)
        {
            try
            {
                return Ok(usuarioRepository.ListarFiltroTipoContrato(NomeTipoContrato));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que lista filtro de vaga, por nível de experiência.
        /// </summary>
        /// <param name="NivelExperiencia">Objeto NivelExperiencia</param>
        /// <returns>Retorna lista de nível de experiência.</returns>
        [Authorize]
        [HttpGet("NivelExperiencia/{NivelExperiencia}")]
        public IActionResult ListarVagas(string NivelExperiencia)
        {
            try
            {
                return Ok(usuarioRepository.ListarFiltroNivelExperiencia(NivelExperiencia));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que lista tecnologias.
        /// </summary>
        /// <param name="NomeTecnologia">Objeto Tecnologia</param>
        /// <returns>Retorna lista de tecnologia.</returns>
        [Authorize]
        [HttpGet("Tecnologia/{NomeTecnologia}")]
        public IActionResult ListarVagasPelaTecnologia(string NomeTecnologia)
        {
            try
            {
                return Ok(usuarioRepository.ListarPesquisaTecnologia(NomeTecnologia));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que lista tecnologia cadastrados
        /// </summary>
        /// <returns>Retorna tecnogias.</returns>
        [Authorize]
        [HttpGet("ListarTecnologia")]
        public IActionResult ListarTecnologia()
        {
            try
            {
                return Ok(usuarioRepository.ListarTecnologia());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que lista cursos cadastrados
        /// </summary>
        /// <returns>Retorna cursos cadastrados.</returns>
        [Authorize]
        [HttpGet("ListarCurso")]
        public IActionResult ListarCurso()
        {
            try
            {
                return Ok(usuarioRepository.ListarCurso());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
