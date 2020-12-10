using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class ListarInscricoesViewModel
    {
        public int idCandidato { get; set; }
        public int idInscricao { get; set; }
        public string NomeCandidato { get; set; }
        public string Telefone { get; set; }
        public string NomeCurso { get; set; }
        public string Email { get; set; }
    }
}
