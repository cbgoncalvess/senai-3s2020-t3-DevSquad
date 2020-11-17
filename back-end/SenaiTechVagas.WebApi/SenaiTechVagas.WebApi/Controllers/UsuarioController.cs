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

        [Authorize]
        [HttpPut("AlterarSenha")]
        public IActionResult AlterarSenha(Usuario usuario)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                if (usuarioRepository.AlterarSenhaUsuarioLogado(usuario.Senha,idUsuario))
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

        [Authorize]
        [HttpPut("RecuperarSenha")]
        public IActionResult RecuperarSenha(AlterarSenhaViewModel vm)
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
        /// Lista todas as vagas publicadas
        /// </summary>
        /// <returns></returns>
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
        /// Lista a vaga pelo id area
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
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
        /// Listar todas as areas
        /// </summary>
        /// <returns></returns>
        //[Authorize]
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
        /// Busca a vaga pelo id
        /// </summary>
        /// <param name="idVaga"></param>
        /// <returns></returns>
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
        /// Lista vagas pelo filtro tipo de contrato
        /// </summary>
        /// <param name="NomeTipoContrato"></param>
        /// <returns></returns>
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
        /// Lista vagas pelo filtro por nivel de experiencia
        /// </summary>
        /// <param name="NivelExperiencia"></param>
        /// <returns></returns>
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
        /// Lista vagas pela barra de pesquisa nome da tecnologia
        /// </summary>
        /// <param name="NomeTecnologia"></param>
        /// <returns></returns>
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
        /// Lista todas as tecnologias
        /// </summary>
        /// <returns></returns>
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
        /// Lista todos os cursos
        /// </summary>
        /// <returns></returns>
        //[Authorize]
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
