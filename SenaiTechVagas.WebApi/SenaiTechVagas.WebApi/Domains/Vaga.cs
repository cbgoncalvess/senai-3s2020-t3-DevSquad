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

        [Required(ErrorMessage = "O campo descricao é obrigatorio")]
        public string DescricaoVaga { get; set; }

        [Required(ErrorMessage = "O campo descricao é obrigatorio")]
        public string DescricaoEmpresa { get; set; }

        [Required(ErrorMessage = "O campo descricao é obrigatorio")]
        public string DescricaoBeneficio { get; set; }
        public DateTime DataPublicacao { get; set; }
        public DateTime DataExpiracao { get; set; }

        [Required(ErrorMessage = "O campo experiencia é obrigatorio")]
        public string Experiencia { get; set; }

        [Required(ErrorMessage = "O campo tipo de contrato é obrigatorio")]
        public string TipoContrato { get; set; }

        [Required(ErrorMessage = "O campo salario é obrigatorio")]
        public decimal Salario { get; set; }

        [Required(ErrorMessage = "O campo localidade é obrigatorio")]
        public string Localidade { get; set; }

        [Required(ErrorMessage = "O campo estado é obrigatorio")]
        public string Estado { get; set; }

        [Required(ErrorMessage = "O campo cep é obrigatorio")]
        public string Cep { get; set; }

        [Required(ErrorMessage = "O campo logradouro é obrigatorio")]
        public string Logradouro { get; set; }

        [Required(ErrorMessage = "O campo complemento é obrigatorio")]
        public string Complemento { get; set; }
        public int? IdEmpresa { get; set; }

        public virtual Empresa IdEmpresaNavigation { get; set; }
        public virtual ICollection<Inscricao> Inscricao { get; set; }
        public virtual ICollection<VagaTecnologia> VagaTecnologia { get; set; }
    }
}
