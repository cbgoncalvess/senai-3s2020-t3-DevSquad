using SenaiTechVagas.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class CadastrarCandidatoViewModel
    {

        [StringLength(35, MinimumLength = 5)]
        public string NomeCompleto { get; set; }

        [StringLength(9, MinimumLength = 9)]
        public string Rg { get; set; }

        [StringLength(11, MinimumLength = 11)]
        public string Cpf { get; set; }

        [StringLength(14, MinimumLength = 11)]
        public string Telefone { get; set; }
        public string LinkLinkedinCandidato { get; set; }
        public int IdCurso { get; set; }

        [StringLength(254, MinimumLength = 5)]
        public string Email { get; set; }

        [StringLength(15, MinimumLength = 9)]
        public string Senha { get; set; }
        public string PerguntaSeguranca { get; set; }

        [StringLength(20, MinimumLength = 5)]
        public string RespostaSeguranca { get; set; }

    }
}
