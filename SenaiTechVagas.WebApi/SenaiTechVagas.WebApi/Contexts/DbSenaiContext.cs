using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using SenaiTechVagas.WebApi.Domains;

namespace SenaiTechVagas.WebApi.Contexts
{
    public partial class DbSenaiContext : DbContext
    {
        public DbSenaiContext()
        {
        }

        public DbSenaiContext(DbContextOptions<DbSenaiContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Candidato> Candidato { get; set; }
        public virtual DbSet<Curso> Curso { get; set; }
        public virtual DbSet<Empresa> Empresa { get; set; }
        public virtual DbSet<Estagio> Estagio { get; set; }
        public virtual DbSet<Inscricao> Inscricao { get; set; }
        public virtual DbSet<StatusInscricao> StatusInscricao { get; set; }
        public virtual DbSet<Tecnologia> Tecnologia { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuario { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }
        public virtual DbSet<Vaga> Vaga { get; set; }
        public virtual DbSet<VagaTecnologia> VagaTecnologia { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-0VF65US\\SQLEXPRESS; Initial Catalog=Db_TechVagas;integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Candidato>(entity =>
            {
                entity.HasKey(e => e.IdCandidato)
                    .HasName("PK__Candidat__D559890504BEA700");

                entity.HasIndex(e => e.Area)
                    .HasName("UQ__Candidat__02BC0304185D3734")
                    .IsUnique();

                entity.HasIndex(e => e.Cpf)
                    .HasName("UQ__Candidat__C1F89731B8D0B32E")
                    .IsUnique();

                entity.HasIndex(e => e.LinkLinkedinCandidato)
                    .HasName("UQ__Candidat__79BE91BD5240FEC4")
                    .IsUnique();

                entity.HasIndex(e => e.NomeCompleto)
                    .HasName("UQ__Candidat__7D5FBFE35856384E")
                    .IsUnique();

                entity.HasIndex(e => e.Rg)
                    .HasName("UQ__Candidat__321537C862022E5F")
                    .IsUnique();

                entity.HasIndex(e => e.Telefone)
                    .HasName("UQ__Candidat__4EC504B6BD63EB15")
                    .IsUnique();

                entity.Property(e => e.Area)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasColumnName("CPF")
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.LinkLinkedinCandidato)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.NomeCompleto)
                    .IsRequired()
                    .HasMaxLength(35)
                    .IsUnicode(false);

                entity.Property(e => e.Rg)
                    .IsRequired()
                    .HasColumnName("RG")
                    .HasMaxLength(9)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.Telefone)
                    .IsRequired()
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.HasOne(d => d.IdCursoNavigation)
                    .WithMany(p => p.Candidato)
                    .HasForeignKey(d => d.IdCurso)
                    .HasConstraintName("FK__Candidato__IdCur__5165187F");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Candidato)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Candidato__IdUsu__52593CB8");
            });

            modelBuilder.Entity<Curso>(entity =>
            {
                entity.HasKey(e => e.IdCurso)
                    .HasName("PK__Curso__085F27D66DD4AE2C");

                entity.HasIndex(e => e.NomeCurso)
                    .HasName("UQ__Curso__E7E2B05244166532")
                    .IsUnique();

                entity.Property(e => e.NomeCurso)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.TipoCurso)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Empresa>(entity =>
            {
                entity.HasKey(e => e.IdEmpresa)
                    .HasName("PK__Empresa__5EF4033E35F3D34F");

                entity.HasIndex(e => e.Cnpj)
                    .HasName("UQ__Empresa__AA57D6B400B39C27")
                    .IsUnique();

                entity.HasIndex(e => e.NomeFantasia)
                    .HasName("UQ__Empresa__F5389F31E8833363")
                    .IsUnique();

                entity.HasIndex(e => e.RazaoSocial)
                    .HasName("UQ__Empresa__448779F0CEF9AD03")
                    .IsUnique();

                entity.Property(e => e.Cep)
                    .IsRequired()
                    .HasColumnName("CEP")
                    .HasMaxLength(8)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.Cnpj)
                    .IsRequired()
                    .HasColumnName("CNPJ")
                    .HasMaxLength(11)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.Complemento)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.EmailContato)
                    .IsRequired()
                    .HasMaxLength(254)
                    .IsUnicode(false);

                entity.Property(e => e.Localidade)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Logradouro)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.NomeFantasia)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.NomeReponsavel)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.NumCnae)
                    .HasColumnName("NumCNAE")
                    .HasMaxLength(7)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.RazaoSocial)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Telefone)
                    .IsRequired()
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.Uf)
                    .IsRequired()
                    .HasColumnName("UF")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Empresa)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Empresa__IdUsuar__48CFD27E");
            });

            modelBuilder.Entity<Estagio>(entity =>
            {
                entity.HasKey(e => e.IdEstagio)
                    .HasName("PK__Estagio__C70AD76CD4D96056");

                entity.Property(e => e.DataCadastro).HasColumnType("datetime");

                entity.HasOne(d => d.IdCandidatoNavigation)
                    .WithMany(p => p.Estagio)
                    .HasForeignKey(d => d.IdCandidato)
                    .HasConstraintName("FK__Estagio__IdCandi__5812160E");

                entity.HasOne(d => d.IdEmpresaNavigation)
                    .WithMany(p => p.Estagio)
                    .HasForeignKey(d => d.IdEmpresa)
                    .HasConstraintName("FK__Estagio__IdEmpre__59063A47");
            });

            modelBuilder.Entity<Inscricao>(entity =>
            {
                entity.HasKey(e => e.IdInscricao)
                    .HasName("PK__Inscrica__6209444B0AC6436F");

                entity.Property(e => e.DataInscricao).HasColumnType("datetime");

                entity.HasOne(d => d.IdCandidatoNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.IdCandidato)
                    .HasConstraintName("FK__Inscricao__IdCan__5BE2A6F2");

                entity.HasOne(d => d.IdStatusInscricaoNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.IdStatusInscricao)
                    .HasConstraintName("FK__Inscricao__IdSta__5DCAEF64");

                entity.HasOne(d => d.IdVagaNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.IdVaga)
                    .HasConstraintName("FK__Inscricao__IdVag__5CD6CB2B");
            });

            modelBuilder.Entity<StatusInscricao>(entity =>
            {
                entity.HasKey(e => e.IdStatusInscricao)
                    .HasName("PK__StatusIn__4F419FD7633420E8");

                entity.HasIndex(e => e.NomeStatusInscricao)
                    .HasName("UQ__StatusIn__3F94F1AB1D166251")
                    .IsUnique();

                entity.Property(e => e.NomeStatusInscricao)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Tecnologia>(entity =>
            {
                entity.HasKey(e => e.IdTecnologia)
                    .HasName("PK__Tecnolog__5ECD2D1176F103FC");

                entity.HasIndex(e => e.NomeTecnologia)
                    .HasName("UQ__Tecnolog__3210D7ECACAE04C3")
                    .IsUnique();

                entity.Property(e => e.NomeTecnologia)
                    .HasMaxLength(35)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__TipoUsua__CA04062B8B0584FC");

                entity.HasIndex(e => e.NomeTipoUsuario)
                    .HasName("UQ__TipoUsua__C6FB90A846006052")
                    .IsUnique();

                entity.Property(e => e.NomeTipoUsuario)
                    .IsRequired()
                    .HasMaxLength(35)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__5B65BF97AC15F3AD");

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuario__A9D1053433968C2B")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(254)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__Usuario__IdTipoU__4316F928");
            });

            modelBuilder.Entity<Vaga>(entity =>
            {
                entity.HasKey(e => e.IdVaga)
                    .HasName("PK__Vaga__A848DC3E90413978");

                entity.Property(e => e.Cep)
                    .IsRequired()
                    .HasColumnName("CEP")
                    .HasMaxLength(8)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.Complemento)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.DataExpiracao).HasColumnType("datetime");

                entity.Property(e => e.DataPublicacao).HasColumnType("datetime");

                entity.Property(e => e.DescricaoBeneficio)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.DescricaoEmpresa)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.DescricaoVaga)
                    .IsRequired()
                    .HasMaxLength(700)
                    .IsUnicode(false);

                entity.Property(e => e.Estado)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Experiencia)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Localidade)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Logradouro)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Salario).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.TipoContrato)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdEmpresaNavigation)
                    .WithMany(p => p.Vaga)
                    .HasForeignKey(d => d.IdEmpresa)
                    .HasConstraintName("FK__Vaga__IdEmpresa__5535A963");
            });

            modelBuilder.Entity<VagaTecnologia>(entity =>
            {
                entity.HasKey(e => new { e.IdTecnologia, e.IdVaga })
                    .HasName("IdVagaTecnologia");

                entity.HasOne(d => d.IdTecnologiaNavigation)
                    .WithMany(p => p.VagaTecnologia)
                    .HasForeignKey(d => d.IdTecnologia)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__VagaTecno__IdTec__60A75C0F");

                entity.HasOne(d => d.IdVagaNavigation)
                    .WithMany(p => p.VagaTecnologia)
                    .HasForeignKey(d => d.IdVaga)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__VagaTecno__IdVag__619B8048");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
