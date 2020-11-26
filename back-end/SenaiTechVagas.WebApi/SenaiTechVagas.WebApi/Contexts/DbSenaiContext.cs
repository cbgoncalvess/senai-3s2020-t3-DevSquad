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

        public virtual DbSet<Area> Area { get; set; }
        public virtual DbSet<Candidato> Candidato { get; set; }
        public virtual DbSet<Curso> Curso { get; set; }
        public virtual DbSet<Empresa> Empresa { get; set; }
        public virtual DbSet<Estagio> Estagio { get; set; }
        public virtual DbSet<Inscricao> Inscricao { get; set; }
        public virtual DbSet<StatusInscricao> StatusInscricao { get; set; }
        public virtual DbSet<Tecnologia> Tecnologia { get; set; }
        public virtual DbSet<TipoRegimePresencial> TipoRegimePresencial { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuario { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }
        public virtual DbSet<Vaga> Vaga { get; set; }
        public virtual DbSet<VagaTecnologia> VagaTecnologia { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESK-02-10-14\\SQLEXPRESS2019; Initial Catalog=Db_TechVagas; user Id=sa; pwd=sa@132");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Area>(entity =>
            {
                entity.HasKey(e => e.IdArea)
                    .HasName("PK__Area__2FC141AA8518E9A3");

                entity.HasIndex(e => e.NomeArea)
                    .HasName("UQ__Area__9A779760CFCEE89D")
                    .IsUnique();

                entity.Property(e => e.NomeArea)
                    .IsRequired()
                    .HasMaxLength(35)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Candidato>(entity =>
            {
                entity.HasKey(e => e.IdCandidato)
                    .HasName("PK__Candidat__D55989056FA6BF7C");

                entity.HasIndex(e => e.Cpf)
                    .HasName("UQ__Candidat__C1F89731CB7FBCAF")
                    .IsUnique();

                entity.HasIndex(e => e.IdUsuario)
                    .HasName("UQ__Candidat__5B65BF9658EC7058")
                    .IsUnique();

                entity.HasIndex(e => e.LinkLinkedinCandidato)
                    .HasName("UQ__Candidat__79BE91BDC4F45DAB")
                    .IsUnique();

                entity.HasIndex(e => e.NomeCompleto)
                    .HasName("UQ__Candidat__7D5FBFE3A4970BBA")
                    .IsUnique();

                entity.HasIndex(e => e.Rg)
                    .HasName("UQ__Candidat__321537C8DDABB1A5")
                    .IsUnique();

                entity.HasIndex(e => e.Telefone)
                    .HasName("UQ__Candidat__4EC504B692D1F68C")
                    .IsUnique();

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasColumnName("CPF")
                    .HasMaxLength(11)
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
                    .HasConstraintName("FK__Candidato__IdCur__45F365D3");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithOne(p => p.Candidato)
                    .HasForeignKey<Candidato>(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Candidato__IdUsu__46E78A0C");
            });

            modelBuilder.Entity<Curso>(entity =>
            {
                entity.HasKey(e => e.IdCurso)
                    .HasName("PK__Curso__085F27D6C7AD82C7");

                entity.HasIndex(e => e.NomeCurso)
                    .HasName("UQ__Curso__E7E2B05270C97546")
                    .IsUnique();

                entity.Property(e => e.NomeCurso)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.TipoCurso)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdAreaNavigation)
                    .WithMany(p => p.Curso)
                    .HasForeignKey(d => d.IdArea)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Curso__IdArea__2D27B809");
            });

            modelBuilder.Entity<Empresa>(entity =>
            {
                entity.HasKey(e => e.IdEmpresa)
                    .HasName("PK__Empresa__5EF4033E974B61C9");

                entity.HasIndex(e => e.Cnpj)
                    .HasName("UQ__Empresa__AA57D6B42F42D82A")
                    .IsUnique();

                entity.HasIndex(e => e.IdUsuario)
                    .HasName("UQ__Empresa__5B65BF9622000E35")
                    .IsUnique();

                entity.HasIndex(e => e.NomeFantasia)
                    .HasName("UQ__Empresa__F5389F315FC3AB3A")
                    .IsUnique();

                entity.HasIndex(e => e.RazaoSocial)
                    .HasName("UQ__Empresa__448779F04D068F69")
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
                    .HasMaxLength(14)
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
                    .HasMaxLength(35)
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
                    .WithOne(p => p.Empresa)
                    .HasForeignKey<Empresa>(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Empresa__IdUsuar__3D5E1FD2");
            });

            modelBuilder.Entity<Estagio>(entity =>
            {
                entity.HasKey(e => e.IdEstagio)
                    .HasName("PK__Estagio__C70AD76CE65ADFEA");

                entity.Property(e => e.DataCadastro).HasColumnType("datetime");

                entity.HasOne(d => d.IdCandidatoNavigation)
                    .WithMany(p => p.Estagio)
                    .HasForeignKey(d => d.IdCandidato)
                    .HasConstraintName("FK__Estagio__IdCandi__4E88ABD4");

                entity.HasOne(d => d.IdEmpresaNavigation)
                    .WithMany(p => p.Estagio)
                    .HasForeignKey(d => d.IdEmpresa)
                    .HasConstraintName("FK__Estagio__IdEmpre__4F7CD00D");
            });

            modelBuilder.Entity<Inscricao>(entity =>
            {
                entity.HasKey(e => e.IdInscricao)
                    .HasName("PK__Inscrica__6209444B05EF413C");

                entity.Property(e => e.DataInscricao).HasColumnType("datetime");

                entity.HasOne(d => d.IdCandidatoNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.IdCandidato)
                    .HasConstraintName("FK__Inscricao__IdCan__52593CB8");

                entity.HasOne(d => d.IdStatusInscricaoNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.IdStatusInscricao)
                    .HasConstraintName("FK__Inscricao__IdSta__5441852A");

                entity.HasOne(d => d.IdVagaNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.IdVaga)
                    .HasConstraintName("FK__Inscricao__IdVag__534D60F1");
            });

            modelBuilder.Entity<StatusInscricao>(entity =>
            {
                entity.HasKey(e => e.IdStatusInscricao)
                    .HasName("PK__StatusIn__4F419FD7FAA2D264");

                entity.HasIndex(e => e.NomeStatusInscricao)
                    .HasName("UQ__StatusIn__3F94F1AB21D68451")
                    .IsUnique();

                entity.Property(e => e.NomeStatusInscricao)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Tecnologia>(entity =>
            {
                entity.HasKey(e => e.IdTecnologia)
                    .HasName("PK__Tecnolog__5ECD2D117834EC1F");

                entity.HasIndex(e => e.NomeTecnologia)
                    .HasName("UQ__Tecnolog__3210D7EC7283E6E2")
                    .IsUnique();

                entity.Property(e => e.NomeTecnologia)
                    .IsRequired()
                    .HasMaxLength(35)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TipoRegimePresencial>(entity =>
            {
                entity.HasKey(e => e.IdTipoRegimePresencial)
                    .HasName("PK__TipoRegi__878F8F8C96EBD386");

                entity.Property(e => e.NomeTipoRegimePresencial)
                    .HasMaxLength(40)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__TipoUsua__CA04062BBE8E1AA2");

                entity.HasIndex(e => e.NomeTipoUsuario)
                    .HasName("UQ__TipoUsua__C6FB90A8C904C538")
                    .IsUnique();

                entity.Property(e => e.NomeTipoUsuario)
                    .IsRequired()
                    .HasMaxLength(35)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__5B65BF97D9761B3B");

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuario__A9D105348910ECD3")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(254)
                    .IsUnicode(false);

                entity.Property(e => e.PerguntaSeguranca)
                    .IsRequired()
                    .HasMaxLength(130)
                    .IsUnicode(false);

                entity.Property(e => e.RespostaSeguranca)
                    .IsRequired()
                    .HasMaxLength(35)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Usuario__IdTipoU__36B12243");
            });

            modelBuilder.Entity<Vaga>(entity =>
            {
                entity.HasKey(e => e.IdVaga)
                    .HasName("PK__Vaga__A848DC3EF0B1A727");

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

                entity.Property(e => e.TituloVaga)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdAreaNavigation)
                    .WithMany(p => p.Vaga)
                    .HasForeignKey(d => d.IdArea)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Vaga__IdArea__4BAC3F29");

                entity.HasOne(d => d.IdEmpresaNavigation)
                    .WithMany(p => p.Vaga)
                    .HasForeignKey(d => d.IdEmpresa)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Vaga__IdEmpresa__4AB81AF0");

                entity.HasOne(d => d.IdTipoRegimePresencialNavigation)
                    .WithMany(p => p.Vaga)
                    .HasForeignKey(d => d.IdTipoRegimePresencial)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Vaga__IdTipoRegi__49C3F6B7");
            });

            modelBuilder.Entity<VagaTecnologia>(entity =>
            {
                entity.HasKey(e => new { e.IdTecnologia, e.IdVaga })
                    .HasName("IdVagaTecnologia");

                entity.HasOne(d => d.IdTecnologiaNavigation)
                    .WithMany(p => p.VagaTecnologia)
                    .HasForeignKey(d => d.IdTecnologia)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__VagaTecno__IdTec__571DF1D5");

                entity.HasOne(d => d.IdVagaNavigation)
                    .WithMany(p => p.VagaTecnologia)
                    .HasForeignKey(d => d.IdVaga)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__VagaTecno__IdVag__5812160E");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
