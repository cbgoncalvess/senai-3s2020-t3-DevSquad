using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class AtualizarEmpresaViewModel
    {
        [StringLength(35, MinimumLength = 5)]
        public string NomeResponsavel { get; set; }

        [StringLength(14, MinimumLength = 14)]
        public string Cnpj { get; set; }

        [StringLength(254, MinimumLength = 5)]
        public string EmailContato { get; set; }

        [StringLength(50, MinimumLength = 5)]
        public string NomeFantasia { get; set; }

        [StringLength(50, MinimumLength = 5)]
        public string RazaoSocial { get; set; }

        [StringLength(14, MinimumLength = 11)]
        public string Telefone { get; set; }

        public int NumFuncionario { get; set; }

        [StringLength(7, MinimumLength = 7)]
        public string NumCnae { get; set; }

        public string Localidade { get; set; }

        public string Estado { get; set; }

        [StringLength(8, MinimumLength = 8)]
        public string Cep { get; set; }
        public string Logradouro { get; set; }
        public string Complemento { get; set; }
    }
}
