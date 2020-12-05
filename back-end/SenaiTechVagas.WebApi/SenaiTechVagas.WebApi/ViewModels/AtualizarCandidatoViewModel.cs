using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class AtualizarCandidatoViewModel
    {
        [StringLength(65, MinimumLength = 5)]
        public string NomeCompleto { get; set;}

        [StringLength(9, MinimumLength = 9)]
        public string Rg { get; set; }

        [StringLength(11, MinimumLength = 11)]
        public string Cpf { get; set; }

        [StringLength(11, MinimumLength = 10)]
        [DataType(DataType.PhoneNumber)]
        public string Telefone { get; set; }

        [StringLength(150, MinimumLength = 5)]
        public string LinkLinkedinCandidato { get; set; }
        public int IdArea { get; set; }
        public int IdCurso { get; set; }
    }
}
