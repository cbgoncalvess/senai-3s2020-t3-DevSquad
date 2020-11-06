using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.Repositories;
using SenaiTechVagas.WebApi.ViewModels;

namespace SenaiTechVagas.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository usuarioRepository { get; set; }

        public LoginController() { usuarioRepository = new UsuarioRepository(); }

        [HttpPost]
        public IActionResult LoginUsuario(LoginViewModel login)
        {
           
            Usuario usuarioLogar = usuarioRepository.Logar(login.Email, login.Senha);

            if(usuarioLogar == null)
            {
                return BadRequest("Se fudeu mano");
            }
            
            var claims = new[]
              {
                new Claim(JwtRegisteredClaimNames.Email, usuarioLogar.Email),
                new Claim(JwtRegisteredClaimNames.Jti, usuarioLogar.IdUsuario.ToString()),
                new Claim(ClaimTypes.Role, usuarioLogar.IdTipoUsuario.ToString())
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("SenaiTechVagas-chave-autenticacao"));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: "SenaiTechVagas.WebApi",         // emissor do token
                audience: "SenaiTechVagas.WebApi",       // destinatário do token
                claims: claims,                          // dados definidos acima
                expires: DateTime.Now.AddMinutes(30),    // tempo de expiração
                signingCredentials: creds                // credenciais do token
            );


            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            });
        }

    }

}