using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class AtualizarUsuarioViewModel
    {
        [DataType(DataType.EmailAddress)]
        [StringLength(254, MinimumLength = 10, ErrorMessage = "O email deve ter deve ter entre 10 e 254 caracteres")]
        public string Email { get; set; }

        [DataType(DataType.Password)]
        [StringLength(20, MinimumLength = 10, ErrorMessage = "A senha deve ter entre 10 e 20 caracteres")]
        public string Senha { get; set; }
    }
}
