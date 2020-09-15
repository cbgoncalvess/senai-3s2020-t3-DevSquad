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

        [Required]
        public string DescricaoVaga { get; set; }

        [Required]
        public string DescricaoEmpresa { get; set; }

        [Required]
        public string DescricaoBeneficio { get; set; }

       
        public DateTime DataPublicacao { get; set; }
        public DateTime DataExpiracao { get; set; }

        [Required]
        public string Experiencia { get; set; }

        [Required]
        public string TipoContrato { get; set; }

        [Required]
        public decimal Salario { get; set; }

        [Required]
        public string Localidade { get; set; }

        [Required]
        public string Estado { get; set; }

        [Required]
        public string Cep { get; set; }

        [Required]
        public string Logradouro { get; set; }

        [Required]
        public string Complemento { get; set; }
        public int? IdEmpresa { get; set; }

        public virtual Empresa IdEmpresaNavigation { get; set; }
        public virtual ICollection<Inscricao> Inscricao { get; set; }
        public virtual ICollection<VagaTecnologia> VagaTecnologia { get; set; }
    }
}
