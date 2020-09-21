using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class TipoUsuario
    {
        public TipoUsuario()
        {
            Usuario = new HashSet<Usuario>();
        }

        public int IdTipoUsuario { get; set; }

        [Required(ErrorMessage = "O campo nome do tipo de usuario é obrigatorio")]
        [StringLength(35, MinimumLength = 5, ErrorMessage = "A nome do tipo de usuario deve ter entre 5 e 35 caracteres")]
        public string NomeTipoUsuario { get; set; }

        public virtual ICollection<Usuario> Usuario { get; set; }
    }
}
