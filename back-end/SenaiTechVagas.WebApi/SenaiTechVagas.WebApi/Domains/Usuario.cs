using System;
using System.Collections.Generic;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Candidato = new HashSet<Candidato>();
            Colaborador = new HashSet<Colaborador>();
            Empresa = new HashSet<Empresa>();
        }

        public int IdUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public int? IdTipoUsuario { get; set; }

        public virtual TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public virtual ICollection<Candidato> Candidato { get; set; }
        public virtual ICollection<Colaborador> Colaborador { get; set; }
        public virtual ICollection<Empresa> Empresa { get; set; }
    }
}
