using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class VagaRepository : IVagaRepository
    {
        public bool AdicionarVaga(Vaga vaga)
        {
            using(DbSenaiContext ctx=new DbSenaiContext())
            {
                try
                {
                        ctx.Add(vaga);
                        ctx.SaveChanges();
                        return true;
                }catch(Exception e)
                {
                    return false;
                }
            }
        }

        public bool AtualizarVaga(int idVaga,Vaga vaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Vaga vagaBuscada = BuscarPorid(idVaga);
                    if (vagaBuscada == null)
                        return false;

                    else if(vaga.Cep != null)
                    {
                        vagaBuscada.Cep = vaga.Cep;
                    }

                    if (vaga.Complemento != null)
                    {
                        vagaBuscada.Complemento = vaga.Complemento;
                    }

                    else if(vaga.DescricaoBeneficio != null)
                    {
                        vagaBuscada.DescricaoBeneficio = vaga.DescricaoBeneficio;
                    }

                    if (vaga.DescricaoEmpresa != null)
                    {
                        vagaBuscada.DescricaoEmpresa = vaga.DescricaoEmpresa;
                    }

                    else if(vaga.DescricaoVaga != null)
                    {
                        vagaBuscada.DescricaoVaga = vaga.DescricaoVaga;
                    }

                    if (vaga.Estado != null)
                    {
                        vagaBuscada.Estado = vaga.Estado;
                    }

                    else if (vaga.Experiencia != null)
                    {
                        vagaBuscada.Experiencia = vaga.Experiencia;
                    }

                    else if(vaga.Localidade != null)
                    {
                        vagaBuscada.Localidade = vaga.Localidade;
                    }

                    else if(vaga.Logradouro != null)
                    {
                        vagaBuscada.Logradouro = vaga.Logradouro;
                    }

                    else if(vaga.Salario != 0)
                    {
                        vagaBuscada.Salario = vaga.Salario;
                    }

                    else if (vaga.TipoContrato != null)
                    {
                        vagaBuscada.TipoContrato = vaga.TipoContrato;
                    }

                    ctx.Update(vagaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public Vaga BuscarPorid(int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Vaga.Find(idVaga);
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }

        public bool DeletarVaga(int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    //Falta adicionar a empresa a que é publicadora da vaga
                    Vaga vagaBuscada = BuscarPorid(idVaga);
                    if (vagaBuscada == null)
                    {
                        return false;
                    }

                    List<Inscricao> BuscarInscricoes = ctx.Inscricao.Where(u=>u.IdVaga==vagaBuscada.IdVaga).ToList();
                    for (int i = 0; i < BuscarInscricoes.Count; i++)
                    {
                        ctx.Remove(BuscarInscricoes[i]);
                        ctx.SaveChanges();
                    }
                    List < VagaTecnologia >VagaTecnologia= ctx.VagaTecnologia.Where(v => v.IdVaga == vagaBuscada.IdVaga).ToList();
                    for(int i = 0; i < VagaTecnologia.Count; i++)
                    {
                        ctx.Remove(VagaTecnologia[i]);
                        ctx.SaveChanges();
                    }

                    ctx.Remove(vagaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public List<Vaga> ListarVagas()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Vaga.ToList();
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }

        bool TemAlgumaPropriedadeComValor(object Vaga)
        {
            foreach (PropertyInfo pi in Vaga.GetType().GetProperties())
            {
                if (pi.PropertyType == typeof(string))
                {
                    string value = (string)pi.GetValue(Vaga);
                    if (!string.IsNullOrEmpty(value))
                        return true;
                }
            }
            return false;
        }
    }
}
