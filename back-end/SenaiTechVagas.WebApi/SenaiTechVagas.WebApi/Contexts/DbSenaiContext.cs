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
        public virtual DbSet<Colaborador> Colaborador { get; set; }
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
                optionsBuilder.UseSqlServer("Data Source=.\\SQLEXPRESS; Initial Catalog=Db_TechVagas;integrated Security=True");
=======
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-0VF65US\\SQLEXPRESS; Initial Catalog=Db_TechVagas;integrated Security=True");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Candidato>(entity =>
            {
                entity.HasKey(e => e.IdCandidato)
<<<<<<< HEAD
                    .HasName("PK__Candidat__D55989051E7EE865");
=======
                    .HasName("PK__Candidat__D5598905A7967BB5");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7

                entity.HasIndex(e => e.Cpf)
                    .HasName("UQ__Candidat__C1F8973130031C1E")
                    .IsUnique();

                entity.HasIndex(e => e.LinkLinkedinCandidato)
                    .HasName("UQ__Candidat__79BE91BD88EB8A76")
                    .IsUnique();

                entity.HasIndex(e => e.NomeCompleto)
                    .HasName("UQ__Candidat__7D5FBFE358C9EE05")
                    .IsUnique();

                entity.HasIndex(e => e.Rg)
                    .HasName("UQ__Candidat__321537C8C5221605")
                    .IsUnique();

                entity.HasIndex(e => e.Telefone)
<<<<<<< HEAD
                    .HasName("UQ__Candidat__4EC504B6CA143E69")
=======
                    .HasName("UQ__Candidat__4EC504B66B02042E")
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7
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
<<<<<<< HEAD
=======
            });

            modelBuilder.Entity<Colaborador>(entity =>
            {
                entity.HasKey(e => e.IdColaborador)
                    .HasName("PK__Colabora__3D2CA51261C58BB6");

                entity.HasIndex(e => e.NomeCompleto)
                    .HasName("UQ__Colabora__7D5FBFE3745B038A")
                    .IsUnique();

                entity.Property(e => e.NomeCompleto)
                    .IsRequired()
                    .HasMaxLength(35)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Colaborador)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Colaborad__IdUsu__4316F928");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7
            });

            modelBuilder.Entity<Curso>(entity =>
            {
                entity.HasKey(e => e.IdCurso)
<<<<<<< HEAD
                    .HasName("PK__Curso__085F27D6462CDB4F");

                entity.HasIndex(e => e.NomeCurso)
                    .HasName("UQ__Curso__E7E2B05205C8CB40")
=======
                    .HasName("PK__Curso__085F27D691D8F372");

                entity.HasIndex(e => e.NomeCurso)
                    .HasName("UQ__Curso__E7E2B052532E8495")
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7
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
                    .HasName("PK__Empresa__5EF4033E4849CFF1");
=======
                    .HasName("PK__Empresa__5EF4033E446DAEEA");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7

                entity.HasIndex(e => e.Cnpj)
                    .HasName("UQ__Empresa__AA57D6B4FF654F1B")
                    .IsUnique();

                entity.HasIndex(e => e.NomeFantasia)
                    .HasName("UQ__Empresa__F5389F31E1D1D224")
                    .IsUnique();

                entity.HasIndex(e => e.RazaoSocial)
<<<<<<< HEAD
                    .HasName("UQ__Empresa__448779F03B030A94")
=======
                    .HasName("UQ__Empresa__448779F07AA2E827")
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7
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
                    .HasName("PK__Estagio__C70AD76CD61FBD7E");
=======
                    .HasName("PK__Estagio__C70AD76C904A7B0E");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7

                entity.Property(e => e.DataCadastro).HasColumnType("datetime");

                entity.HasOne(d => d.IdCandidatoNavigation)
                    .WithMany(p => p.Estagio)
                    .HasForeignKey(d => d.IdCandidato)
<<<<<<< HEAD
                    .HasConstraintName("FK__Estagio__IdCandi__44FF419A");
=======
                    .HasConstraintName("FK__Estagio__IdCandi__48CFD27E");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7

                entity.HasOne(d => d.IdEmpresaNavigation)
                    .WithMany(p => p.Estagio)
                    .HasForeignKey(d => d.IdEmpresa)
<<<<<<< HEAD
                    .HasConstraintName("FK__Estagio__IdEmpre__45F365D3");
=======
                    .HasConstraintName("FK__Estagio__IdEmpre__49C3F6B7");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7
            });

            modelBuilder.Entity<Inscricao>(entity =>
            {
                entity.HasKey(e => e.IdInscricao)
<<<<<<< HEAD
                    .HasName("PK__Inscrica__6209444BFD162D5E");
=======
                    .HasName("PK__Inscrica__6209444B80069A62");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7

                entity.Property(e => e.DataInscricao).HasColumnType("datetime");

                entity.HasOne(d => d.IdCandidatoNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.IdCandidato)
<<<<<<< HEAD
                    .HasConstraintName("FK__Inscricao__IdCan__48CFD27E");
=======
                    .HasConstraintName("FK__Inscricao__IdCan__4CA06362");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7

                entity.HasOne(d => d.IdStatusInscricaoNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.IdStatusInscricao)
<<<<<<< HEAD
                    .HasConstraintName("FK__Inscricao__IdSta__4AB81AF0");
=======
                    .HasConstraintName("FK__Inscricao__IdSta__4E88ABD4");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7

                entity.HasOne(d => d.IdVagaNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.IdVaga)
<<<<<<< HEAD
                    .HasConstraintName("FK__Inscricao__IdVag__49C3F6B7");
=======
                    .HasConstraintName("FK__Inscricao__IdVag__4D94879B");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7
            });

            modelBuilder.Entity<StatusInscricao>(entity =>
            {
                entity.HasKey(e => e.IdStatusInscricao)
<<<<<<< HEAD
                    .HasName("PK__StatusIn__4F419FD72E0EE607");

                entity.HasIndex(e => e.NomeStatusInscricao)
                    .HasName("UQ__StatusIn__3F94F1AB177A1B88")
=======
                    .HasName("PK__StatusIn__4F419FD7C90460AE");

                entity.HasIndex(e => e.NomeStatusInscricao)
                    .HasName("UQ__StatusIn__3F94F1AB4347549B")
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7
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
                    .HasName("PK__Tecnolog__5ECD2D11BDB79D52");

                entity.HasIndex(e => e.NomeTecnologia)
                    .HasName("UQ__Tecnolog__3210D7EC19A7EC19")
=======
                    .HasName("PK__Tecnolog__5ECD2D11F3F40F19");

                entity.HasIndex(e => e.NomeTecnologia)
                    .HasName("UQ__Tecnolog__3210D7ECF574412F")
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7
                    .IsUnique();

                entity.Property(e => e.NomeTecnologia)
                    .HasMaxLength(35)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
<<<<<<< HEAD
                    .HasName("PK__TipoUsua__CA04062BD77E6A2F");

                entity.HasIndex(e => e.NomeTipoUsuario)
                    .HasName("UQ__TipoUsua__C6FB90A8EC9B7F3A")
=======
                    .HasName("PK__TipoUsua__CA04062BBD5C3055");

                entity.HasIndex(e => e.NomeTipoUsuario)
                    .HasName("UQ__TipoUsua__C6FB90A8CCFD2EF8")
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7
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
                    .HasName("PK__Usuario__5B65BF97FEC591EC");

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuario__A9D1053469D7967E")
=======
                    .HasName("PK__Usuario__5B65BF97E99D3F2C");

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuario__A9D1053482AB51CF")
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7
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
                    .HasName("PK__Vaga__A848DC3E6E83BA81");
=======
                    .HasName("PK__Vaga__A848DC3EF84382A9");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7

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
<<<<<<< HEAD
                    .HasConstraintName("FK__Vaga__IdEmpresa__4222D4EF");
=======
                    .HasConstraintName("FK__Vaga__IdEmpresa__45F365D3");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7
            });

            modelBuilder.Entity<VagaTecnologia>(entity =>
            {
                entity.HasKey(e => new { e.IdTecnologia, e.IdVaga })
                    .HasName("IdVagaTecnologia");

                entity.HasOne(d => d.IdTecnologiaNavigation)
                    .WithMany(p => p.VagaTecnologia)
                    .HasForeignKey(d => d.IdTecnologia)
                    .OnDelete(DeleteBehavior.ClientSetNull)
<<<<<<< HEAD
                    .HasConstraintName("FK__VagaTecno__IdTec__4D94879B");
=======
                    .HasConstraintName("FK__VagaTecno__IdTec__5165187F");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7

                entity.HasOne(d => d.IdVagaNavigation)
                    .WithMany(p => p.VagaTecnologia)
                    .HasForeignKey(d => d.IdVaga)
                    .OnDelete(DeleteBehavior.ClientSetNull)
<<<<<<< HEAD
                    .HasConstraintName("FK__VagaTecno__IdVag__4E88ABD4");
=======
                    .HasConstraintName("FK__VagaTecno__IdVag__52593CB8");
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
