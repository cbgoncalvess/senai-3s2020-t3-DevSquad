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
        [Required(ErrorMessage = "O campo nome completo é obrigatorio")]
        [StringLength(35, MinimumLength = 9, ErrorMessage = "O nome deve ter entre 9 e 35 caracteres")]
        public string NomeCompleto { get; set; }

        [Required(ErrorMessage = "O campo rg é obrigatorio")]
        [StringLength(9, MinimumLength = 8, ErrorMessage = "O rg deve ter entre 8 e 9 caracteres")]
        public string Rg { get; set; }

        [Required(ErrorMessage = "O campo cpf é obrigatorio")]
        [StringLength(14, MinimumLength = 9, ErrorMessage = "O cpf deve ter entre 9 e 14 caracteres")]
        public string Cpf { get; set; }

        [Required(ErrorMessage = "O campo telefone é obrigatorio")]
        [StringLength(14, MinimumLength = 9, ErrorMessage = "O telefone deve ter entre 9 e 14 caracteres")]
        public string Telefone { get; set; }

        [StringLength(150, MinimumLength = 9, ErrorMessage = "O telefone deve ter entre 9 e 150 caracteres")]
        public string LinkLinkedinCandidato { get; set; }
        public int IdArea { get; set; }
        public int IdCurso { get; set; }

        [Required(ErrorMessage = "O email é obrigatorio")]
        [StringLength(254, MinimumLength = 10, ErrorMessage = "O email deve ter deve ter entre 10 e 235 caracteres")]
        public string Email { get; set; }

        [Required(ErrorMessage = "A senha é obrigatoria")]
        [StringLength(20, MinimumLength = 10, ErrorMessage = "A senha deve ter entre 10 e 20 caracteres")]
        public string Senha { get; set; }

        [Required]
        public string PerguntaSeguranca { get; set; }

        [Required]
        public string RespostaSeguranca { get; set; }

    }
}
