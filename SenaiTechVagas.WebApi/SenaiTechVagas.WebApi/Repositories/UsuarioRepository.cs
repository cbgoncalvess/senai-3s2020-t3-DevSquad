using Microsoft.EntityFrameworkCore;
using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {

        DbSenaiContext ctx = new DbSenaiContext();

        public Usuario Logar(string email, string senha)
        {
            return ctx.Usuario.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }

        public bool AtualizarUsuario(int id, Usuario usuarioAtualizado)
        {
            Usuario usuarioBuscado = ctx.Usuario.Find(id);

            if (usuarioBuscado != null)
            {
                usuarioBuscado.Senha = usuarioAtualizado.Senha;
                ctx.Update(usuarioBuscado);
                ctx.SaveChanges();
                return true;
            }
            return false;
        }
        public bool CadastrarEmpresa(Empresa empresa)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Empresa NovaEmpresa = new Empresa()
                    {
                        NomeReponsavel = empresa.NomeReponsavel,
                        Cnpj = empresa.Cnpj,
                        EmailContato = empresa.EmailContato,
                        NomeFantasia = empresa.NomeFantasia,
                        RazaoSocial = empresa.RazaoSocial,
                        Telefone = empresa.Telefone,
                        NumFuncionario = empresa.NumFuncionario,
                        NumCnae = empresa.NumCnae,
                        Cep = empresa.Cep,
                        Logradouro = empresa.Logradouro,
                        Complemento = empresa.Complemento,
                        Localidade = empresa.Localidade,
                        Uf = empresa.Uf,
                    };
                    ctx.Add(NovaEmpresa);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }       
        }
        public bool CadastrarCandidato(CadastrarCandidatoViewModel NovoCandidato)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Usuario user = new Usuario()
                    {
                        Email = NovoCandidato.Email,
                        Senha = NovoCandidato.Senha,
                        IdTipoUsuario = 2
                    };
                    Candidato applicant = new Candidato()
                    {
                        IdUsuarioNavigation = user,
                        NomeCompleto = NovoCandidato.NomeCompleto,
                        Rg = NovoCandidato.Rg,
                        Cpf = NovoCandidato.Cpf,
                        Telefone = NovoCandidato.Telefone,
                        LinkLinkedinCandidato = NovoCandidato.LinkLinkedinCandidato,
                        Area = NovoCandidato.Area,
                        IdCurso = NovoCandidato.IdCurso
                    };

                    ctx.Add(applicant);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }


        public List<VagaTecnologia> ListarVagasEmGeral()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.VagaTecnologia.Include(u => u.IdVagaNavigation).Include(u => u.IdTecnologiaNavigation).ToList();
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }
        public List<VagaTecnologia> ListarFiltroNivelExperiencia(string NivelExperiencia)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.VagaTecnologia.Include(V => V.IdTecnologiaNavigation).Include(V => V.IdVagaNavigation)
                        .Where(v => v.IdVagaNavigation.Experiencia == NivelExperiencia).ToList();
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }

        public List<VagaTecnologia> ListarFiltroTipoContrato(string TipoContrato)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.VagaTecnologia.Include(V => V.IdTecnologiaNavigation).Include(V => V.IdVagaNavigation)
                        .Where(v => v.IdVagaNavigation.TipoContrato == TipoContrato).ToList();
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }

        public List<VagaTecnologia> ListarPesquisaTecnologia(string NomeTecnologia)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.VagaTecnologia.Include(V => V.IdTecnologiaNavigation).Include(V => V.IdVagaNavigation).Where(v => v.IdTecnologiaNavigation.NomeTecnologia == NomeTecnologia).ToList();
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }
    }
}
