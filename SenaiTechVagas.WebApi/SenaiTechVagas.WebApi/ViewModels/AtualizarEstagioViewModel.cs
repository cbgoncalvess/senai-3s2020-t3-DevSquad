using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class AtualizarEstagioViewModel
    {
        public int PeriodoEstagio { get; set; }
        public int IdCandidato { get; set; }
        public int IdEmpresa { get; set; }
    }
}
