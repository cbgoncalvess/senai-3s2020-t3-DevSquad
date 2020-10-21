using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class AtualizarCandidatoViewModel
    {
        [StringLength(35, MinimumLength = 9, ErrorMessage = "O nome deve ter entre 5 e 35 caracteres")]
        public string NomeCompleto { get; set; }

        [StringLength(9, MinimumLength = 8, ErrorMessage = "O rg deve ter entre 8 e 9 caracteres")]
        public string Rg { get; set; }

        [StringLength(14, MinimumLength = 9, ErrorMessage = "O cpf deve ter entre 9 e 14 caracteres")]
        public string Cpf { get; set; }

        [StringLength(14, MinimumLength = 9, ErrorMessage = "O telefone deve ter entre 9 e 14 caracteres")]
        [DataType(DataType.PhoneNumber)]
        public string Telefone { get; set; }

        [StringLength(150, MinimumLength = 9, ErrorMessage = "O likindin deve ter entre 5 e 150 caracteres")]
        [DataType(DataType.Url)]
        public string LinkLinkedinCandidato { get; set; }
        public string Area { get; set; }
        public int IdCurso { get; set; }
    }
}
