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
        public string NomeResponsavel { get; set; }

        [StringLength(14, MinimumLength = 14)]
        public string Cnpj { get; set; }

        [StringLength(254, MinimumLength = 5)]
        public string EmailContato { get; set; }

        [StringLength(50, MinimumLength = 5)]
        public string NomeFantasia { get; set; }

        [StringLength(50, MinimumLength = 5)]
        public string RazaoSocial { get; set; }

        [StringLength(11, MinimumLength = 10)]
        public string Telefone { get; set; }

        public int NumFuncionario { get; set; }

        [StringLength(7, MinimumLength = 7)]
        public string NumCnae { get; set; }

        [StringLength(150, MinimumLength = 5)]
        public string Localidade { get; set; }

        [StringLength(2, MinimumLength = 2)]
        public string Estado { get; set; }

        [StringLength(8, MinimumLength = 8)]
        public string Cep { get; set; }

        [StringLength(150, MinimumLength = 5)]
        public string Logradouro { get; set; }

        [StringLength(255, MinimumLength = 5)]
        public string Complemento { get; set; }
    }
}
