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
        /// Método 
        /// </summary>
        /// <param name="e"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post([FromForm] string e)
        {
            try
            {
             var arquivo = Request.Form.Files[0];

             var Imagem= rep.Upload(arquivo, "ImageBackUp");
            UploadImagem test = new UploadImagem();
            test.CaminhoImagem = Imagem;
            
            return Ok(test);
            }
            catch (Exception)
            {
               return BadRequest();
            }
        }
    }
}
