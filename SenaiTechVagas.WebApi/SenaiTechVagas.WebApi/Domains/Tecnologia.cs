using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Tecnologia
    {
        public Tecnologia()
        {
            VagaTecnologia = new HashSet<VagaTecnologia>();
        }

        public int IdTecnologia { get; set; }

        [Required(ErrorMessage ="O campo nome da tecnologia é obrigatorio")]
        [StringLength(35, MinimumLength = 5, ErrorMessage = "A senha deve ter entre 5 e 35 caracteres")]
        public string NomeTecnologia { get; set; }

        public virtual ICollection<VagaTecnologia> VagaTecnologia { get; set; }
    }
}
