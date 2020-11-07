using System;
using System.Collections.Generic;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Candidato
    {
        public Candidato()
        {
            Estagio = new HashSet<Estagio>();
            Inscricao = new HashSet<Inscricao>();
        }

        public int IdCandidato { get; set; }
        public string NomeCompleto { get; set; }
        public string Rg { get; set; }
        public string Cpf { get; set; }
        public string Telefone { get; set; }
        public string LinkLinkedinCandidato { get; set; }
        public string Area { get; set; }
        public int IdCurso { get; set; }
        public int IdUsuario { get; set; }

        public virtual Curso IdCursoNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Estagio> Estagio { get; set; }
        public virtual ICollection<Inscricao> Inscricao { get; set; }
    }
}
