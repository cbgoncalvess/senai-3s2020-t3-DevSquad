using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class StatusInscricao
    {
        public StatusInscricao()
        {
            Inscricao = new HashSet<Inscricao>();
        }

        public int IdStatusInscricao { get; set; }

        [Required(ErrorMessage = "O campo nome do status  é obrigatorio")]
        public string NomeStatusInscricao { get; set; }

        public virtual ICollection<Inscricao> Inscricao { get; set; }
    }
}
