using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class CursoRepository : ICursoRepository
    {
        public bool AtualizarCurso(int id, Curso curso)
        {
            using(DbSenaiContext ctx=new DbSenaiContext())
            {
                try
                {
                    Curso cursoBuscado = ctx.Curso.Find(id);
                    cursoBuscado.NomeCurso = curso.NomeCurso;
                    cursoBuscado.TipoCurso = curso.TipoCurso;
                    ctx.Curso.Update(cursoBuscado);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {

                    return false;
                }
            }
        }

        public Curso BuscarPorId(int id)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                 return ctx.Curso.Find(id);  
                }
                catch (Exception e)
                {

                    return null;
                }
            }
        }

        public bool CadastrarCurso(Curso curso)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    ctx.Add(curso);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        /// <summary>
        /// Este deletar pode acabar prejudicando o sistema por enqt ele fica comentado
        /// </summary>
        /// <returns></returns>

        //public bool DeletarCurso(int id)
        //{
        //    try
        //    {
        //        using (DbSenaiContext ctx = new DbSenaiContext())
        //        {
        //            Curso cursoBuscado = ctx.Curso.Find(id);
        //            ctx.Curso.Remove(cursoBuscado);
        //            ctx.SaveChanges();
        //            return true;
        //        }
        //    }
        //    catch (Exception e)
        //    {
        //        return false;
        //    }
        //}

        public List<Curso> ListarCurso()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Curso.ToList();
                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }
    }
}
