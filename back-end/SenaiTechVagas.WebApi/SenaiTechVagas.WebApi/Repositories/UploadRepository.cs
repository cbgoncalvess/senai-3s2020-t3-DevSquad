using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class UploadRepository
    {
        public string Upload(IFormFile arquivo, string savingFolder)
        {

            if (savingFolder == null)
            {
                savingFolder = Path.Combine("imagens");
            }

            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), savingFolder);

            if (arquivo.Length > 0)
            {
                var fileName = ContentDispositionHeaderValue.Parse(arquivo.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(pathToSave, fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    arquivo.CopyTo(stream);
                }

                return fileName;
            }
            else
            {
                return null;
            }
        }
    }
}
