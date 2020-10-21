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

        [Required(ErrorMessage = "O campo nome status da inscricao é obrigatorio")]
        [StringLength(35, MinimumLength = 5, ErrorMessage = "A nome do status da inscricao deve ter entre 5 e 35 caracteres")]
        public string NomeStatusInscricao { get; set; }

        public virtual ICollection<Inscricao> Inscricao { get; set; }
    }
}
