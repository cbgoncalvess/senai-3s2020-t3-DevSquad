using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class CadastrarEstagioViewModel
    {
        public int PeriodoEstagio { get; set; }
        public string RazaoSocial { get; set; }
        public int IdEmpresa { get; set; }
        public int IdUsuario { get; set; }
    }
}
