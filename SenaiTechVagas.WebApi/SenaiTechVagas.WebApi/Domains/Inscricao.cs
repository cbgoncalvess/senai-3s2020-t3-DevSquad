using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Inscricao
    {
        public int IdInscricao { get; set; }
        public DateTime DataInscricao { get; set; }

        [Required]
        public int IdCandidato { get; set; }

        [Required]
        public int IdVaga { get; set; }
        public int? IdStatusInscricao { get; set; }

        public virtual Candidato IdCandidatoNavigation { get; set; }
        public virtual StatusInscricao IdStatusInscricaoNavigation { get; set; }
        public virtual Vaga IdVagaNavigation { get; set; }
    }
}
