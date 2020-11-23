using SenaiTechVagas.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class CadastrarCandidatoViewModel
    {
        public string NomeCompleto { get; set; }
        public string Rg { get; set; }
        public string Cpf { get; set; }
        public string Telefone { get; set; }
        public string LinkLinkedinCandidato { get; set; }
        public int IdCurso { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string PerguntaSeguranca { get; set; }
        public string RespostaSeguranca { get; set; }

    }
}
