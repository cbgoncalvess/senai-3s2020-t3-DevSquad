using SenaiTechVagas.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class ListarVagasViewModel
    {
        public int IdVaga { get; set; }
        public string Experiencia { get; set; }
        public string TipoContrato { get; set; }
        public decimal Salario { get; set; }
        public string Localidade { get; set; }
        public Empresa Empresa { get; set; }
        public List<string> Tecnologias { get; set; }

    }
}
