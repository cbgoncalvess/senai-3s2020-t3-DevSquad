using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class CadastrarEmpresaViewModel
    {
        [Required(ErrorMessage = "O campo nome do responsavel é obrigatorio")]
        [StringLength(50, MinimumLength = 5, ErrorMessage = "A nome do responsavel deve ter entre 5 e 50 caracteres")]
        public string NomeReponsavel { get; set; }

        [Required(ErrorMessage = "O campo Cnpj é obrigatorio")]
        [StringLength(11, MinimumLength = 11, ErrorMessage = "A cnpj deve ter 11 caracteres")]
        public string Cnpj { get; set; }

        [Required(ErrorMessage = "O campo email pra contato obrigatorio")]
        [StringLength(254, MinimumLength = 5, ErrorMessage = "O Email deve ter entre 5 e 254 caracteres")]
        public string EmailContato { get; set; }

        [Required(ErrorMessage = "O campo nome fantasia obrigatorio")]
        [StringLength(100, MinimumLength = 5, ErrorMessage = "O nome fantasia deve ter entre 5 e 100 caracteres")]
        public string NomeFantasia { get; set; }

        [Required(ErrorMessage = "O campo razao social é obrigatorio")]
        [StringLength(100, MinimumLength = 5, ErrorMessage = "A razao social deve ter entre 5 e 100 caracteres")]
        public string RazaoSocial { get; set; }

        [Required(ErrorMessage = "O campo telefone é obrigatorio")]
        [StringLength(14, MinimumLength = 9, ErrorMessage = "O telefone deve ter entre 9 e 14 caracteres")]
        public string Telefone { get; set; }
        public int NumFuncionario { get; set; }

        [Required(ErrorMessage = "O campo numero do cnae é obrigatorio")]
        [StringLength(7, MinimumLength = 5, ErrorMessage = "O Numero do cnae deve ter entre 5 e 7 caracteres")]
        public string NumCnae { get; set; }

        [Required(ErrorMessage = "O campo localidade é obrigatorio")]
        [StringLength(255, MinimumLength = 5, ErrorMessage = "A localidade deve ter entre 5 e 500 caracteres")]
        public string Localidade { get; set; }

        [Required(ErrorMessage = "O campo estado é obrigatorio")]
        [StringLength(50, MinimumLength = 5, ErrorMessage = "O estado deve ter entre 5 e 50 caracteres")]
        public string Estado { get; set; }

        [Required(ErrorMessage = "O campo cep é obrigatorio")]
        [StringLength(8, MinimumLength = 5, ErrorMessage = "O cep deve ter 8 caracteres")]
        public string Cep { get; set; }

        [Required(ErrorMessage = "O campo logradouro é obrigatorio")]
        [StringLength(255, MinimumLength = 5, ErrorMessage = "O logradouro deve ter entre 5 e 255 caracteres")]
        public string Logradouro { get; set; }

        [Required(ErrorMessage = "O complemento é obrigatorio")]
        [StringLength(255, MinimumLength = 5, ErrorMessage = "O complento deve ter entre 5 e 255 caracteres")]
        public string Complemento { get; set; }

        [Required(ErrorMessage = "O email é obrigatorio")]
        [DataType(DataType.EmailAddress)]
        [StringLength(254, MinimumLength = 10, ErrorMessage = "O email deve ter deve ter entre 10 e 235 caracteres")]
        public string Email { get; set; }

        [Required(ErrorMessage = "A senha é obrigatoria")]
        [DataType(DataType.Password)]
        [StringLength(20, MinimumLength = 10, ErrorMessage = "A senha deve ter entre 10 e 20 caracteres")]
        public string Senha { get; set; }
    }
}
