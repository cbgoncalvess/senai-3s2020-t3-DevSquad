using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

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

        [Required(ErrorMessage = "O campo nome completo é obrigatorio")]
        [StringLength(35, MinimumLength = 9, ErrorMessage = "O nome deve ter entre 9 e 35 caracteres")]
        public string NomeCompleto { get; set; }

        [Required(ErrorMessage = "O campo rg é obrigatorio")]
        [StringLength(9, MinimumLength = 8, ErrorMessage = "O rg deve ter entre 8 e 9 caracteres")]
        public string Rg { get; set; }

        [Required(ErrorMessage = "O campo cpf é obrigatorio")]
        [StringLength(14, MinimumLength = 9, ErrorMessage = "O cpf deve ter entre 9 e 14 caracteres")]
        public string Cpf { get; set; }

        [Required(ErrorMessage = "O campo telefone é obrigatorio")]
        [StringLength(14, MinimumLength = 9, ErrorMessage = "O telefone deve ter entre 9 e 14 caracteres")]
        public string Telefone { get; set; }

        [Required(ErrorMessage = "O campo link do linkedin é obrigatorio")]
        [StringLength(150, MinimumLength = 9, ErrorMessage = "O telefone deve ter entre 9 e 150 caracteres")]
        public string LinkLinkedinCandidato { get; set; }

        [Required(ErrorMessage = "O campo link do linkedin é obrigatorio")]
        public string Area { get; set; }
        public int IdCurso { get; set; }
        public int IdUsuario { get; set; }

        public virtual Curso IdCursoNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Estagio> Estagio { get; set; }
        public virtual ICollection<Inscricao> Inscricao { get; set; }
    }
}
