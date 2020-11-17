using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class CadastrarEstagioViewModel
    {
        public DateTime DataCadastro { get; set; }
        public int PeriodoEstagio { get; set; }
        public string EmailCandidato { get; set; }
        public string RazaoSocial { get; set; }
    }
}
