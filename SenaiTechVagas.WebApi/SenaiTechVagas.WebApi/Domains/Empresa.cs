using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Empresa
    {
        public Empresa()
        {
            Estagio = new HashSet<Estagio>();
            Vaga = new HashSet<Vaga>();
        }

        public int IdEmpresa { get; set; }

        [Required(ErrorMessage = "O campo nome do responsavel é obrigatorio")]
        [StringLength(50, MinimumLength = 5, ErrorMessage = "A nome do responsavel deve ter entre 5 e 50 caracteres")]
        public string NomeReponsavel { get; set; }

        [Required(ErrorMessage = "O campo Cnpj é obrigatorio")]
        [StringLength(11, MinimumLength = 11, ErrorMessage = "A cnpj deve ter entre 5 e 35 caracteres")]
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
        [StringLength(14, MinimumLength = 9, ErrorMessage = "O telefone deve ter entre 5 e 14 caracteres")]
        public string Telefone { get; set; }
        public int NumFuncionario { get; set; }

        [Required(ErrorMessage = "O campo numero do cnae é obrigatorio")]
        [StringLength(7, MinimumLength = 5, ErrorMessage = "O Numero do cnae deve ter entre 5 e 7 caracteres")]
        public string NumCnae { get; set; }

        [Required(ErrorMessage = "O campo CEP é obrigatorio")]
        [StringLength(8, MinimumLength = 5, ErrorMessage = "O cep deve ter 8 caracteres")]
        public string Cep { get; set; }

        [Required(ErrorMessage = "O campo logradouro é obrigatorio")]
        public string Logradouro { get; set; }

        [Required(ErrorMessage = "O campo complemento é obrigatorio")]
        public string Complemento { get; set; }

        [Required(ErrorMessage = "O campo localidade é obrigatorio")]
        public string Localidade { get; set; }

        [Required(ErrorMessage = "O campo estado é obrigatorio")]
        public string Uf { get; set; }
        public int IdUsuario { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Estagio> Estagio { get; set; }
        public virtual ICollection<Vaga> Vaga { get; set; }
    }
}
