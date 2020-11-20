using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class RecuperarSenhaViewModel
    {
        public string Email { get; set; }
        public string Pergunta { get; set; }
        public string Resposta { get; set; }
        public string NovaSenha { get; set; }
    }
}
