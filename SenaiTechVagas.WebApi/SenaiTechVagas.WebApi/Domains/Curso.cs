using System;
using System.Collections.Generic;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Curso
    {
        public Curso()
        {
            Candidato = new HashSet<Candidato>();
        }

        public int IdCurso { get; set; }
        public string NomeCurso { get; set; }
        public string TipoCurso { get; set; }

        public virtual ICollection<Candidato> Candidato { get; set; }
    }
}
