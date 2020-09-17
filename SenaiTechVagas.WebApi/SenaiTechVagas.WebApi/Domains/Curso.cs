using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Curso
    {
        public Curso()
        {
            Candidato = new HashSet<Candidato>();
        }

        public int IdCurso { get; set; }

        [Required(ErrorMessage = "O campo nome do curso é obrigatorio")]
        [StringLength(100, MinimumLength = 5, ErrorMessage = "O nome do curso deve ter entre 5 e 100 caracteres")]
        public string NomeCurso { get; set; }

        [StringLength(35, MinimumLength = 5, ErrorMessage = "tipo de curso deve ter entre 5 e 35 caracteres")]
        public string TipoCurso { get; set; }

        public virtual ICollection<Candidato> Candidato { get; set; }
    }
}
