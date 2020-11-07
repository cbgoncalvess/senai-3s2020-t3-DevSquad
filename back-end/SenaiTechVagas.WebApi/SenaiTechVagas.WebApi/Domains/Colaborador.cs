using System;
using System.Collections.Generic;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Colaborador
    {
        public int IdColaborador { get; set; }
        public string NomeCompleto { get; set; }
        public int? IdUsuario { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
