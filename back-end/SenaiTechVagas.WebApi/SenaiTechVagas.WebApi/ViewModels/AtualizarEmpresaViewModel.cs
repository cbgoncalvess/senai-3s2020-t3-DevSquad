using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class AtualizarEmpresaViewModel
    {
        [StringLength(65, MinimumLength = 5)]
        [Required]
        public string NomeResponsavel { get; set; }

        [StringLength(14, MinimumLength = 14)]
        [Required]
        public string Cnpj { get; set; }

        [StringLength(254, MinimumLength = 5)]
        [Required]
        public string EmailContato { get; set; }

        [StringLength(50, MinimumLength = 5)]
        [Required]
        public string NomeFantasia { get; set; }

        [StringLength(50, MinimumLength = 5)]
        [Required]
        public string RazaoSocial { get; set; }

        [StringLength(11, MinimumLength = 10)]
        [Required]
        public string Telefone { get; set; }

        [Required]
        public int NumFuncionario { get; set; }

        [StringLength(7, MinimumLength = 7)]
        [Required]
        public string NumCnae { get; set; }

        [StringLength(150, MinimumLength = 5)]
        [Required]
        public string Localidade { get; set; }

        [StringLength(2, MinimumLength = 2)]
        [Required]
        public string Estado { get; set; }

        [StringLength(8, MinimumLength = 8)]
        [Required]
        public string Cep { get; set; }

        [StringLength(150, MinimumLength = 5)]
        [Required]
        public string Logradouro { get; set; }

        [StringLength(255)]
        public string Complemento { get; set; }
    }
}
