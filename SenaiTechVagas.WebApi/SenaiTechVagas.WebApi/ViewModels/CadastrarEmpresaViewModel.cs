using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class CadastrarEmpresaViewModel
    {
        public string NomeReponsavel { get; set; }
        public string Cnpj { get; set; }
        public string EmailContato { get; set; }
        public string NomeFantasia { get; set; }
        public string RazaoSocial { get; set; }
        public string Telefone { get; set; }
        public int NumFuncionario { get; set; }
        public string NumCnae { get; set; }
        public string Cep { get; set; }
        public string Logradouro { get; set; }
        public string Complemento { get; set; }
        public string Localidade { get; set; }
        public string Uf { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}
