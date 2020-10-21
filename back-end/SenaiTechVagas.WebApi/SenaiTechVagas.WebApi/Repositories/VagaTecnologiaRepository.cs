using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{
    public class VagaTecnologiaRepository : IVagaTecnologiaRepository
    {
        public bool AtualizarVagaTecnologia(int id, VagaTecnologia vagatec)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    var vagatecBuscado = ctx.VagaTecnologia.Find(id);
                    if (vagatecBuscado == null)
                        return false;

                    if (vagatecBuscado.IdTecnologia >= 1)
                        vagatecBuscado.IdTecnologia = vagatec.IdTecnologia;

                    if (vagatecBuscado.IdVaga >= 1)
                        vagatecBuscado.IdVaga = vagatec.IdVaga;

                    ctx.Update(vagatecBuscado);
                    ctx.SaveChanges();

                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool CadastrarVagaTecnologia(VagaTecnologia VagaTecnologia)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    ctx.Add(VagaTecnologia);
                    ctx.SaveChanges();

                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool DeletarVagaTecnologia(int idTecnologia,int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    var BuscandoVagaTecnologia = ctx.VagaTecnologia.FirstOrDefault(u=>u.IdVaga==idVaga&&u.IdTecnologia==idTecnologia);
                    if(BuscandoVagaTecnologia == null)              
                        return false;

                    ctx.Remove(BuscandoVagaTecnologia);
                    ctx.SaveChanges();

                    return true;
                }
                catch (Exception)
                {

                    return false;
                }
            }
        }

        public List<VagaTecnologia> ListarVagaTecnologia()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                return ctx.VagaTecnologia.ToList();
            }
        }

    }
}