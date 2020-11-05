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
<<<<<<< HEAD
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-1CB35NO; Initial Catalog=Db_TechVagas;integrated Security=True");
=======
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-7H5DJOO; Initial Catalog=Db_TechVagas; Integrated Security=True");
>>>>>>> 352eebb0c6995f45b86d94de3bb5ba231ef4e8f8
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Candidato>(entity =>
            {
                entity.HasKey(e => e.IdCandidato)
<<<<<<< HEAD
                    .HasName("PK__Candidat__D559890574D1F535");

                entity.HasIndex(e => e.Cpf)
                    .HasName("UQ__Candidat__C1F897310643786E")
                    .IsUnique();

                entity.HasIndex(e => e.LinkLinkedinCandidato)
                    .HasName("UQ__Candidat__79BE91BDC6BBDB07")
                    .IsUnique();

                entity.HasIndex(e => e.NomeCompleto)
                    .HasName("UQ__Candidat__7D5FBFE3F803935C")
                    .IsUnique();

                entity.HasIndex(e => e.Rg)
                    .HasName("UQ__Candidat__321537C81E30EFE1")
                    .IsUnique();

                entity.HasIndex(e => e.Telefone)
                    .HasName("UQ__Candidat__4EC504B6E9E1989D")
=======
                    .HasName("PK__Candidat__D5598905CBA395FA");

                entity.HasIndex(e => e.Cpf)
                    .HasName("UQ__Candidat__C1F897313830D2D4")
                    .IsUnique();

                entity.HasIndex(e => e.LinkLinkedinCandidato)
                    .HasName("UQ__Candidat__79BE91BDC0EEED97")
                    .IsUnique();

                entity.HasIndex(e => e.NomeCompleto)
                    .HasName("UQ__Candidat__7D5FBFE3E7F7C88C")
                    .IsUnique();

                entity.HasIndex(e => e.Rg)
                    .HasName("UQ__Candidat__321537C80BDE8072")
                    .IsUnique();

                entity.HasIndex(e => e.Telefone)
                    .HasName("UQ__Candidat__4EC504B6AA23D3E5")
>>>>>>> 352eebb0c6995f45b86d94de3bb5ba231ef4e8f8
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
                    .HasConstraintName("FK__Candidato__IdCur__3E52440B");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Candidato)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Candidato__IdUsu__3F466844");
            });

            modelBuilder.Entity<Curso>(entity =>
            {
                entity.HasKey(e => e.IdCurso)
<<<<<<< HEAD
                    .HasName("PK__Curso__085F27D643E15A66");

                entity.HasIndex(e => e.NomeCurso)
                    .HasName("UQ__Curso__E7E2B05248F35B21")
=======
                    .HasName("PK__Curso__085F27D613801B43");

                entity.HasIndex(e => e.NomeCurso)
                    .HasName("UQ__Curso__E7E2B052E1B67FA3")
>>>>>>> 352eebb0c6995f45b86d94de3bb5ba231ef4e8f8
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
<<<<<<< HEAD
                    .HasName("PK__Empresa__5EF4033EE3390546");

                entity.HasIndex(e => e.Cnpj)
                    .HasName("UQ__Empresa__AA57D6B41D3EC34F")
                    .IsUnique();

                entity.HasIndex(e => e.NomeFantasia)
                    .HasName("UQ__Empresa__F5389F31224FC697")
                    .IsUnique();

                entity.HasIndex(e => e.RazaoSocial)
                    .HasName("UQ__Empresa__448779F0E7C13C78")
=======
                    .HasName("PK__Empresa__5EF4033EC6DEEEDB");

                entity.HasIndex(e => e.Cnpj)
                    .HasName("UQ__Empresa__AA57D6B45403A6E7")
                    .IsUnique();

                entity.HasIndex(e => e.NomeFantasia)
                    .HasName("UQ__Empresa__F5389F318E94A66A")
                    .IsUnique();

                entity.HasIndex(e => e.RazaoSocial)
                    .HasName("UQ__Empresa__448779F0E3BEBC58")
>>>>>>> 352eebb0c6995f45b86d94de3bb5ba231ef4e8f8
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
                    .HasConstraintName("FK__Empresa__IdUsuar__36B12243");
            });

            modelBuilder.Entity<Estagio>(entity =>
            {
                entity.HasKey(e => e.IdEstagio)
<<<<<<< HEAD
                    .HasName("PK__Estagio__C70AD76C54763E81");
=======
                    .HasName("PK__Estagio__C70AD76C6FF8850F");
>>>>>>> 352eebb0c6995f45b86d94de3bb5ba231ef4e8f8

                entity.Property(e => e.DataCadastro).HasColumnType("datetime");

                entity.HasOne(d => d.IdCandidatoNavigation)
                    .WithMany(p => p.Estagio)
                    .HasForeignKey(d => d.IdCandidato)
                    .HasConstraintName("FK__Estagio__IdCandi__44FF419A");

                entity.HasOne(d => d.IdEmpresaNavigation)
                    .WithMany(p => p.Estagio)
                    .HasForeignKey(d => d.IdEmpresa)
                    .HasConstraintName("FK__Estagio__IdEmpre__45F365D3");
            });

            modelBuilder.Entity<Inscricao>(entity =>
            {
                entity.HasKey(e => e.IdInscricao)
<<<<<<< HEAD
                    .HasName("PK__Inscrica__6209444BD2C7BBF4");
=======
                    .HasName("PK__Inscrica__6209444BBC16D76F");
>>>>>>> 352eebb0c6995f45b86d94de3bb5ba231ef4e8f8

                entity.Property(e => e.DataInscricao).HasColumnType("datetime");

                entity.HasOne(d => d.IdCandidatoNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.IdCandidato)
                    .HasConstraintName("FK__Inscricao__IdCan__48CFD27E");

                entity.HasOne(d => d.IdStatusInscricaoNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.IdStatusInscricao)
                    .HasConstraintName("FK__Inscricao__IdSta__4AB81AF0");

                entity.HasOne(d => d.IdVagaNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.IdVaga)
                    .HasConstraintName("FK__Inscricao__IdVag__49C3F6B7");
            });

            modelBuilder.Entity<StatusInscricao>(entity =>
            {
                entity.HasKey(e => e.IdStatusInscricao)
<<<<<<< HEAD
                    .HasName("PK__StatusIn__4F419FD7DCF0A516");

                entity.HasIndex(e => e.NomeStatusInscricao)
                    .HasName("UQ__StatusIn__3F94F1ABAC29A421")
=======
                    .HasName("PK__StatusIn__4F419FD7DB234AA9");

                entity.HasIndex(e => e.NomeStatusInscricao)
                    .HasName("UQ__StatusIn__3F94F1ABFEAEFEFA")
>>>>>>> 352eebb0c6995f45b86d94de3bb5ba231ef4e8f8
                    .IsUnique();

                entity.Property(e => e.NomeStatusInscricao)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Tecnologia>(entity =>
            {
                entity.HasKey(e => e.IdTecnologia)
<<<<<<< HEAD
                    .HasName("PK__Tecnolog__5ECD2D112B6DFD17");

                entity.HasIndex(e => e.NomeTecnologia)
                    .HasName("UQ__Tecnolog__3210D7ECFDFFAF16")
=======
                    .HasName("PK__Tecnolog__5ECD2D115CDF2BB1");

                entity.HasIndex(e => e.NomeTecnologia)
                    .HasName("UQ__Tecnolog__3210D7ECEDAD8C9B")
>>>>>>> 352eebb0c6995f45b86d94de3bb5ba231ef4e8f8
                    .IsUnique();

                entity.Property(e => e.NomeTecnologia)
                    .HasMaxLength(35)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
<<<<<<< HEAD
                    .HasName("PK__TipoUsua__CA04062B62A2106E");

                entity.HasIndex(e => e.NomeTipoUsuario)
                    .HasName("UQ__TipoUsua__C6FB90A8EBBCE5FF")
=======
                    .HasName("PK__TipoUsua__CA04062B3BF04FCA");

                entity.HasIndex(e => e.NomeTipoUsuario)
                    .HasName("UQ__TipoUsua__C6FB90A884B6C05B")
>>>>>>> 352eebb0c6995f45b86d94de3bb5ba231ef4e8f8
                    .IsUnique();

                entity.Property(e => e.NomeTipoUsuario)
                    .IsRequired()
                    .HasMaxLength(35)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
<<<<<<< HEAD
                    .HasName("PK__Usuario__5B65BF9771BF7E9F");

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuario__A9D1053403CE579F")
=======
                    .HasName("PK__Usuario__5B65BF9791CAFAAA");

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuario__A9D105347B7C2B13")
>>>>>>> 352eebb0c6995f45b86d94de3bb5ba231ef4e8f8
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
                    .HasConstraintName("FK__Usuario__IdTipoU__30F848ED");
            });

            modelBuilder.Entity<Vaga>(entity =>
            {
                entity.HasKey(e => e.IdVaga)
<<<<<<< HEAD
                    .HasName("PK__Vaga__A848DC3EB57C823A");
=======
                    .HasName("PK__Vaga__A848DC3EAB07F89D");
>>>>>>> 352eebb0c6995f45b86d94de3bb5ba231ef4e8f8

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
                    .HasConstraintName("FK__Vaga__IdEmpresa__4222D4EF");
            });

            modelBuilder.Entity<VagaTecnologia>(entity =>
            {
                entity.HasKey(e => new { e.IdTecnologia, e.IdVaga })
                    .HasName("IdVagaTecnologia");

                entity.HasOne(d => d.IdTecnologiaNavigation)
                    .WithMany(p => p.VagaTecnologia)
                    .HasForeignKey(d => d.IdTecnologia)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__VagaTecno__IdTec__4D94879B");

                entity.HasOne(d => d.IdVagaNavigation)
                    .WithMany(p => p.VagaTecnologia)
                    .HasForeignKey(d => d.IdVaga)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__VagaTecno__IdVag__4E88ABD4");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
