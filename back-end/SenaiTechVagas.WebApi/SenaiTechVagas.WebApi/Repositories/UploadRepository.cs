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
            try
            {
                if (savingFolder == null)
                {
                    savingFolder = Path.Combine("ImageBackUp");
                }

                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), savingFolder);

                //Se a pasta estiver com mais de um numero de imagens determinado ele faz a limpa para não ter problema de desempenho
                if (savingFolder == "ImageBackUp")
                {
                    string[] fileEntries = Directory.GetFiles(pathToSave);
                    if (fileEntries.Length >= 10)
                    {
                        for(int i=0;i<fileEntries.Length; i++)
                        {
                            File.Delete(fileEntries[i]);
                        }
                    }
                }

                if (arquivo.FileName.Length >3)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(arquivo.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        arquivo.CopyTo(stream);
                    }
                    var NomeArquivo = arquivo.FileName;
                    string Extensao = NomeArquivo.Split('.')[1].Trim();
                    string Nome = Guid.NewGuid().ToString() + "." + Extensao;
                    string sourceFile = Path.Combine(Directory.GetCurrentDirectory(), savingFolder+"/"+ arquivo.FileName);
                     string source =Path.Combine(Directory.GetCurrentDirectory(), savingFolder + "/" );  
                     FileInfo fi = new FileInfo(sourceFile);   
                     fi.MoveTo(source+Nome);  
                    return Nome;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
