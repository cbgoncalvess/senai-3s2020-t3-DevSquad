using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Usuario
    {
        public int IdUsuario { get; set; }

        [StringLength(254, MinimumLength = 10, ErrorMessage = "O email deve ter deve ter entre 10 e 235 caracteres")]
        public string Email { get; set; }

        [StringLength(20, MinimumLength = 10, ErrorMessage = "A senha deve ter entre 10 e 20 caracteres")]
        public string Senha { get; set; }
        public int IdTipoUsuario { get; set; }

        public virtual TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public virtual Candidato Candidato { get; set; }
        public virtual Empresa Empresa { get; set; }
    }
}
