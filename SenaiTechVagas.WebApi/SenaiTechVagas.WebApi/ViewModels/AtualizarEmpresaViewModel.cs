using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class AtualizarEmpresaViewModel
    {
        [StringLength(50, MinimumLength = 5, ErrorMessage = "A nome do responsavel deve ter entre 5 e 50 caracteres")]
        public string NomeReponsavel { get; set; }

        [StringLength(11, MinimumLength = 11, ErrorMessage = "A cnpj deve ter entre 5 e 35 caracteres")]
        public string Cnpj { get; set; }

        [StringLength(254, MinimumLength = 5, ErrorMessage = "O Email deve ter entre 5 e 254 caracteres")]
        [DataType(DataType.EmailAddress)]
        public string EmailContato { get; set; }

        [StringLength(100, MinimumLength = 5, ErrorMessage = "O nome fantasia deve ter entre 5 e 100 caracteres")]
        public string NomeFantasia { get; set; }

        [StringLength(100, MinimumLength = 5, ErrorMessage = "A razao social deve ter entre 5 e 100 caracteres")]
        public string RazaoSocial { get; set; }

        [StringLength(14, MinimumLength = 9, ErrorMessage = "O telefone deve ter entre 5 e 14 caracteres")]
        [DataType(DataType.PhoneNumber)]
        public string Telefone { get; set; }
        public int NumFuncionario { get; set; }

        [StringLength(7, MinimumLength = 5, ErrorMessage = "O Numero do cnae deve ter entre 5 e 7 caracteres")]
        public string NumCnae { get; set; }

        [StringLength(255, MinimumLength = 5, ErrorMessage = "A localidade deve ter entre 5 e 500 caracteres")]
        public string Localidade { get; set; }

        [StringLength(50, MinimumLength = 5, ErrorMessage = "O estado deve ter entre 5 e 50 caracteres")]
        public string Estado { get; set; }

        [StringLength(8, MinimumLength = 5, ErrorMessage = "O cep deve ter 8 caracteres")]
        public string Cep { get; set; }

        [StringLength(255, MinimumLength = 5, ErrorMessage = "O logradouro deve ter entre 5 e 255 caracteres")]
        public string Logradouro { get; set; }

        [StringLength(255, MinimumLength = 5, ErrorMessage = "O complento deve ter entre 5 e 500 caracteres")]
        public string Complemento { get; set; }
    }
}
