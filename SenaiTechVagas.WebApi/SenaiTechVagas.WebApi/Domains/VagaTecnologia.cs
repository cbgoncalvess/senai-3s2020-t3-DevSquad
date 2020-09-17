using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class VagaTecnologia
    {
        [Required]
        public int IdTecnologia { get; set; }

        [Required]
        public int IdVaga { get; set; }

        public virtual Tecnologia IdTecnologiaNavigation { get; set; }
        public virtual Vaga IdVagaNavigation { get; set; }
    }
}
