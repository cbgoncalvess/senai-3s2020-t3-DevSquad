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
        [Required]
        public string NomeCompleto { get; set;}

        [StringLength(9, MinimumLength = 9)]
        [Required]
        public string Rg { get; set; }

        [StringLength(11, MinimumLength = 11)]
        [Required]
        public string Cpf { get; set; }

        [StringLength(11, MinimumLength = 10)]
        [DataType(DataType.PhoneNumber)]
        [Required]
        public string Telefone { get; set; }

        [StringLength(150)]
        public string LinkLinkedinCandidato { get; set; }

        [Required]
        public int IdArea { get; set; }

        [Required]
        public int IdCurso { get; set; }
    }
}
