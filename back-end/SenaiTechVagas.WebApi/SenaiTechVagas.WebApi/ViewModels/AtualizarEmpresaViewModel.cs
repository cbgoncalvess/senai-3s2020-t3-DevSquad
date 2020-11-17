using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class AtualizarEmpresaViewModel
    { 
        public string NomeResponsavel { get; set; }
        public string Cnpj { get; set; }
        public string EmailContato { get; set; }
        public string NomeFantasia { get; set; }
        public string RazaoSocial { get; set; }
        public string Telefone { get; set; }
        public int NumFuncionario { get; set; }
        public string NumCnae { get; set; }
        public string Localidade { get; set; }
        public string Estado { get; set; }
        public string Cep { get; set; }
        public string Logradouro { get; set; }
        public string Complemento { get; set; }
    }
}
