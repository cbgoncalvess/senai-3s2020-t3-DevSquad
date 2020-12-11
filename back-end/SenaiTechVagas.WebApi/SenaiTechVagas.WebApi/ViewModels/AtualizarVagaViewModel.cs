using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class AtualizarVagaViewModel
    {
        [StringLength(50,MinimumLength =5)]
        public string TituloVaga { get; set; }

        [StringLength(750, MinimumLength = 5)]
        public string DescricaoVaga { get; set; }
        public int IdArea { get; set; }

        [StringLength(750, MinimumLength = 5)]
        public string DescricaoEmpresa { get; set; }

        [StringLength(750, MinimumLength = 5)]
        public string DescricaoBeneficio { get; set; }

        [StringLength(50, MinimumLength = 2)]
        public string Experiencia { get; set; }

        [StringLength(50, MinimumLength = 2)]
        public string TipoContrato { get; set; }
        public decimal Salario { get; set; }

        [StringLength(255, MinimumLength = 5)]
        public string Localidade { get; set; }

        [StringLength(2, MinimumLength = 2)]
        public string Estado { get; set; }

        [StringLength(8, MinimumLength = 8)]
        public string Cep { get; set; }

        [StringLength(150, MinimumLength = 5)]
        public string Logradouro { get; set; }

        [StringLength(255, MinimumLength = 5)]
        public string Complemento { get; set; }
        public int idTipoPresenca { get; set; }
    }
}
