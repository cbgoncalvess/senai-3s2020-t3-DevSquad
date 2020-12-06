using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class CadastrarEstagioViewModel
    {
        [Required]
        public int PeriodoEstagio { get; set; }

        [Required]
        public int IdEmpresa { get; set; }

        [Required]
        public int IdUsuario { get; set; }
    }
}
