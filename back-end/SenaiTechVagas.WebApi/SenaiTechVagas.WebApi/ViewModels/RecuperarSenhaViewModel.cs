using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class RecuperarSenhaViewModel
    {

        [StringLength(254, MinimumLength = 5)]
        public string Email { get; set; }
        public string Pergunta { get; set; }

        [StringLength(20, MinimumLength = 5)]
        public string Resposta { get; set; }

        [StringLength(15, MinimumLength = 9)]
        public string NovaSenha { get; set; }
    }
}
