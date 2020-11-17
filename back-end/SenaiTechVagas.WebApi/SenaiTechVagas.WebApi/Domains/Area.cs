using System;
using System.Collections.Generic;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Area
    {
        public Area()
        {
            Candidato = new HashSet<Candidato>();
            Vaga = new HashSet<Vaga>();
        }

        public int IdArea { get; set; }
        public string NomeArea { get; set; }

        public virtual ICollection<Candidato> Candidato { get; set; }
        public virtual ICollection<Vaga> Vaga { get; set; }
    }
}
