using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.Repositories;

namespace SenaiTechVagas.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresaController : ControllerBase
    {
        private IEmpresaRepository _empresaIRepository { get; set; }

        public EmpresaController()
        {
            _empresaIRepository = new EmpresaRepository();
        }

        /// <summary>
        /// Insere um novo objeto empresa na tabela Empresa com as informações 
        /// passadas na requisição
        /// </summary>
        /// <param name="empresa">Dados de um objeto, do tipo empresa, que é 
        /// passado na requisição.</param>
        /// <returns>Retorna um HTTP Code (201) e a mensagem: Novo candidato 
        /// inserido com sucesso!, caso contrário, retorna um HTTP Code (400)
        /// e a mensagem,podendo ser "Uma exceção ocorreu. Tente novamente.", 
        /// caso ocorra uma exceção, ou "Um erro ocorreu ao receber a sua 
        /// requisição.", caso algum erro tenha acontecido ao executar o método
        /// implementado em ../Repositories/EmpresaRepository.cs.</returns>
        [HttpPost]
        public IActionResult CadastrarEmpresa(Empresa empresa)
        {
            try
            {
                if (_empresaIRepository.CadastrarEmpresa(empresa))
                {
                    return Ok("Novo candidato inserido com sucesso!");
                }
                else
                {
                    return BadRequest("Um erro ocorreu ao receber a sua requisição.");
                }

            }
            catch (Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// Lista todos os objetos da tabela Empresa
        /// </summary>
        /// <returns>Retorna um HTTP Code (201) e a mensagem "true", caso contrário,
        /// retorna um HTTP Code (400)e a mensagem "Uma exceção ocorreu. Tente novamente."
        /// </returns>
        [Authorize(Roles="1,2")]
        [HttpGet]
        public IActionResult ListarEmpresa()
        {
            try
            {
                return Ok(_empresaIRepository.ListarEmpresa());
            }
            catch (Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// Busca um objeto na tabela Empresa, recebendo o identificador único do objeto.
        /// </summary>
        /// <parameter name="id">Identificador único de cada objeto da tabela Emmpresa, do tipo inteiro.</parameter>
        /// <returns>>Retorna um HTTP Code (201) e o objeto da tabela Candidato que bata com o
        /// identificador passado, caso contrário, retorna um HTTP Code (400) e a mensagem: 
        /// "Uma exceção ocorreu. Tente novamente."</returns>
        [Authorize(Roles="1")]
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            try
            {
                return Ok(_empresaIRepository.BuscarPorId(id));
            }
            catch (Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// Atualiza todas as informações de um objeto da tabela Empresa.
        /// </summary>
        /// <param name="id">Identificador único de um objeto da tabela Empresa</param>
        /// <param name="empresa">Informações do objeto, passado na requisição, da tabela 
        /// Empresa, recebidas e que passarão a vigorar</param>
        /// <returns>Retorna um HTTP Code (201) e a mensagem: true, caso ocorra um erro na 
        /// informação passada, retorna-se, então, false, caso haja uma exceção, retorna-se,
        /// então, um HTTP Code (400) e a mensagem: "Uma exceção ocorreu. Tente novamente."</returns>
        [Authorize(Roles="3")]
        [HttpPut("{id}")]
        public IActionResult AtualizarEmpresa(int id, Empresa empresa)
        {
            try
            {
                return Ok(_empresaIRepository.AtualizarPorIdCorpo(id, empresa));
            }
            catch(Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// Apagar um objeto da tabela Empresa em que seu identificador único corresponda 
        /// a informação passada na requisição.
        /// </summary>
        /// <param name="id">Identificador único de cada objeto da tabela candidato, do 
        /// tipo inteiro.</param>
        /// <returns>Retorna um HTTP Code (201) e a mensagem: true, caso ocorra um erro na 
        /// informação passada, retorna-se, então, false, caso haja uma exceção, retorna-se,
        /// então, um HTTP Code (400) e a mensagem: "Uma exceção ocorreu. Tente novamente."</returns>
        [Authorize(Roles="1")]
        [HttpDelete("{id}")]
        public IActionResult DeletarEmpresa(int id)
        {
            try
            {
                return Ok(_empresaIRepository.DeletarPorId(id));
            }
            catch
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }
    }
}