using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class CandidatoCompletoViewModel
    {
        public int IdCandidato { get; set; }
        public string NomeCompleto { get; set; }
        public string Rg { get; set; }
        public string Cpf { get; set; }
        public string Telefone { get; set; }
        public string LinkLinkedinCandidato { get; set; }
        public int idCurso{ get; set; }
        public string NomeCurso { get; set; }
        public string NomeArea { get; set; }
        public int IdArea { get; set; }
        public string CaminhoImagem { get; set; }
    }
}
