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
        DbSenaiContext ctx = new DbSenaiContext();
        public bool AtualizarCurso(int id, Curso curso)
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

                throw;
            }
        }

        public Curso BuscarPorId(int id)
        {
            try
            {
                Curso cursoBuscado = ctx.Curso.Find(id);
                return cursoBuscado;
            }
            catch (Exception e)
            {

                return null;
            }
        }

        public bool CadastrarCurso(Curso curso)
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

        public bool DeletarCurso(int id)
        {
            try
            {
                Curso cursoBuscado = ctx.Curso.Find(id);
                ctx.Curso.Remove(cursoBuscado);
                ctx.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                return false;
            }
        }

        public List<Curso> ListarCurso()
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
