using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class AtualizarCandidatoViewModel
    {
        public string NomeCompleto { get; set; }
        public string Rg { get; set; }
        public string Cpf { get; set; }
        public string Telefone { get; set; }
        public string LinkLinkedinCandidato { get; set; }
        public string Area { get; set; }
        public int IdCurso { get; set; }
    }
}
