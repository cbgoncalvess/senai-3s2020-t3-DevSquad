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
        [StringLength(254, MinimumLength =5)]
        public string Email { get; set; }

        [DataType(DataType.Password)]
        [StringLength(15, MinimumLength = 9)]
        public string Senha { get; set; }
    }
}
