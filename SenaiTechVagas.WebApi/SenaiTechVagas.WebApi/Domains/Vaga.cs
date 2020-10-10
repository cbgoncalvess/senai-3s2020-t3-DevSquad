using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Vaga
    {
        public Vaga()
        {
            Inscricao = new HashSet<Inscricao>();
            VagaTecnologia = new HashSet<VagaTecnologia>();
        }

        public int IdVaga { get; set; }

        [Required(ErrorMessage = "O campo descricao da vaga é obrigatorio")]
        [StringLength(700, MinimumLength = 5, ErrorMessage = "A descricao da vaga deve ter entre 5 e 700 caracteres")]
        public string DescricaoVaga { get; set; }

        [Required(ErrorMessage = "O campo descricao da empresa é obrigatorio")]
        [StringLength(255, MinimumLength = 5, ErrorMessage = "A descricao da empresa deve ter entre 5 e 255 caracteres")]
        public string DescricaoEmpresa { get; set; }

        [Required(ErrorMessage = "O campo descricao dos beneficios é obrigatorio")]
        [StringLength(255, MinimumLength = 5, ErrorMessage = "A descricao dos beneficios deve ter entre 5 e 255 caracteres")]
        public string DescricaoBeneficio { get; set; }
        public DateTime DataPublicacao { get; set; }
        public DateTime DataExpiracao { get; set; }

        [Required(ErrorMessage = "O campo nivel de experirncia é obrigatorio")]
        [StringLength(50, MinimumLength = 5, ErrorMessage = "O nivel de experiencia deve ter entre 5 e 50 caracteres")]
        public string Experiencia { get; set; }

        [Required(ErrorMessage = "O campo tipo de contrato é obrigatorio")]
        [StringLength(50, MinimumLength = 5, ErrorMessage = "O tipo de contrato deve ter entre 5 e 50 caracteres")]
        public string TipoContrato { get; set; }
        public decimal Salario { get; set; }

        [Required(ErrorMessage = "O campo localidade é obrigatorio")]
        [StringLength(255, MinimumLength = 5, ErrorMessage = "A localidade deve ter entre 5 e 500 caracteres")]
        public string Localidade { get; set; }

        [Required(ErrorMessage = "O campo estado é obrigatorio")]
        [StringLength(50, MinimumLength = 5, ErrorMessage = "O estado deve ter entre 5 e 50 caracteres")]
        public string Estado { get; set; }

        [Required(ErrorMessage = "O campo cep é obrigatorio")]
        [StringLength(8, ErrorMessage = "O cep deve ter 8 caracteres")]
        public string Cep { get; set; }

        [Required(ErrorMessage = "O campo logradouro é obrigatorio")]
        [StringLength(255, MinimumLength = 5, ErrorMessage = "O logradouro deve ter entre 5 e 255 caracteres")]
        public string Logradouro { get; set; }

        [Required(ErrorMessage = "O complemento é obrigatorio")]
        [StringLength(255, MinimumLength = 5, ErrorMessage = "O complento deve ter entre 5 e 500 caracteres")]
        public string Complemento { get; set; }
        public int IdEmpresa { get; set; }

        public virtual Empresa IdEmpresaNavigation { get; set; }
        public virtual ICollection<Inscricao> Inscricao { get; set; }
        public virtual ICollection<VagaTecnologia> VagaTecnologia { get; set; }
    }
}
