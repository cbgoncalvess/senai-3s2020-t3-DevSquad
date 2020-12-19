using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SenaiTechVagas.WebApi.Repositories;
using SenaiTechVagas.WebApi.ViewModels;

namespace SenaiTechVagas.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        UploadRepository rep = new UploadRepository();


        /// <summary>
        /// Método que armazena as imagens que o ususario seleciona na hora do cadastro
        /// </summary>
        /// <param name="e"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post([FromForm] string e)
        {
            try
            {
             var arquivo = Request.Form.Files[0];

                var NomeArquivo = arquivo.FileName;
                string Extensao = NomeArquivo.Split('.')[1].Trim();
                if (Extensao == "jpg" || Extensao == "png" || Extensao == "webp" || Extensao == "jpeg" || Extensao == "svg" || Extensao == "jfif")
                {
                    var Imagem = rep.Upload(arquivo, "ImageBackUp");
                    return Ok(Imagem.ToString());
                }
                return BadRequest("Este formato não é aceito");
            }
            catch (Exception)
            {
               return BadRequest();
            }
        }
    }
}
