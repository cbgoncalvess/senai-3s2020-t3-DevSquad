using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class EmpresaRepository : IEmpresaRepository
    {
        public bool AtualizarPorIdCorpo(int idEmpresa, Empresa EmpresaAtualizada)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Empresa empresaBuscada = BuscarPorId(idEmpresa);
                    if (empresaBuscada == null)
                    {
                        return false;
                    }

                    if (empresaBuscada.NomeReponsavel != null)
                    {
                        empresaBuscada.NomeReponsavel = EmpresaAtualizada.NomeReponsavel;
                    }
                    if (EmpresaAtualizada.Cnpj != null)
                    {
                        empresaBuscada.Cnpj = EmpresaAtualizada.Cnpj;
                    }
                    if (EmpresaAtualizada.EmailContato != null)
                    {
                        empresaBuscada.EmailContato = EmpresaAtualizada.EmailContato;
                    }
                    if (EmpresaAtualizada.NomeFantasia != null)
                    {
                        empresaBuscada.NomeFantasia = EmpresaAtualizada.NomeFantasia;
                    }
                    if (EmpresaAtualizada.RazaoSocial != null)
                    {
                        empresaBuscada.RazaoSocial = EmpresaAtualizada.RazaoSocial;
                    }
                    if (EmpresaAtualizada.Telefone != null)
                    {
                        empresaBuscada.Telefone = EmpresaAtualizada.Telefone;
                    }
                    if (EmpresaAtualizada.NumFuncionario != empresaBuscada.NumFuncionario)
                    {
                        empresaBuscada.NumFuncionario = EmpresaAtualizada.NumFuncionario;
                    }
                    if (EmpresaAtualizada.NumCnae != null)
                    {
                        empresaBuscada.NumCnae = EmpresaAtualizada.NumCnae;
                    }
                    if (EmpresaAtualizada.Cep != null)
                    {
                        empresaBuscada.Cep = EmpresaAtualizada.Cep;
                    }
                    if (EmpresaAtualizada.Logradouro != null)
                    {
                        empresaBuscada.Logradouro = EmpresaAtualizada.Logradouro;
                    }
                    if (EmpresaAtualizada.Complemento != null)
                    {
                        empresaBuscada.Complemento = EmpresaAtualizada.Complemento;
                    }
                    if (EmpresaAtualizada.Localidade != null)
                    {
                        empresaBuscada.Localidade = EmpresaAtualizada.Localidade;
                    }
                    if (EmpresaAtualizada.Uf != null)
                    {
                        empresaBuscada.Uf = EmpresaAtualizada.Uf;
                    }

                    ctx.Update(empresaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public Empresa BuscarPorId(int idEmpresa)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Empresa empresaBuscada = ctx.Empresa.Find(idEmpresa);
                    return empresaBuscada;
                }
                catch (Exception e)
                {
                    return null;
                }
            }
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

        //TODO: Falta Terminar
        public bool DeletarPorId(int idEmpresa)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Empresa empresaBuscado = BuscarPorId(idEmpresa);
                    if (empresaBuscado == null)
                    {
                        return false;
                    }
                    ctx.Remove(empresaBuscado);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public List<Empresa> ListarEmpresa()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Empresa.ToList();
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }
    }
}
