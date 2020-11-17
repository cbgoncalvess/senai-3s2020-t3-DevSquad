CREATE DATABASE Db_TechVagas;
GO

USE Db_TechVagas;
GO

--DDL

CREATE TABLE TipoUsuario (
	IdTipoUsuario   INT PRIMARY KEY IDENTITY,
	NomeTipoUsuario VARCHAR (35) NOT NULL UNIQUE
);
GO

CREATE TABLE Area(
	IdArea INT PRIMARY KEY IDENTITY,
	NomeArea VARCHAR(35)NOT NULL UNIQUE
);
GO

CREATE TABLE Curso (
	IdCurso	  INT PRIMARY KEY IDENTITY,
	NomeCurso VARCHAR (100) NOT NULL UNIQUE,
	TipoCurso VARCHAR (20) NOT NULL
);
GO

CREATE TABLE StatusInscricao (
	IdStatusInscricao   INT PRIMARY KEY IDENTITY,
	NomeStatusInscricao VARCHAR (30) NOT NULL UNIQUE
);
GO

CREATE TABLE Tecnologia (
	IdTecnologia   INT PRIMARY KEY IDENTITY,
	NomeTecnologia VARCHAR (35) UNIQUE NOT NULL
);
GO

CREATE TABLE Usuario (
	IdUsuario	  INT PRIMARY KEY IDENTITY,
	Email		  VARCHAR (254) NOT NULL UNIQUE,
	Senha		  VARCHAR (100) NOT NULL,
	PerguntaSeguranca VARCHAR(130) NOT NULL,
	RespostaSeguranca VARCHAR (35) NOT NULL,
	IdTipoUsuario INT FOREIGN KEY REFERENCES TipoUsuario (IdTipoUsuario) NOT NULL
); 
GO

CREATE TABLE Empresa (
	IdEmpresa	   INT PRIMARY KEY IDENTITY,
	NomeReponsavel VARCHAR (35) NOT NULL,
	CNPJ		   CHAR (11) NOT NULL UNIQUE,
	EmailContato   VARCHAR (254) NOT NULL,
	NomeFantasia   VARCHAR (50) NOT NULL UNIQUE,
	RazaoSocial    VARCHAR (50) NOT NULL UNIQUE,
	Telefone	   CHAR (14) NOT NULL,
	NumFuncionario INT NOT NULL,
	NumCNAE		   CHAR (7),
	CEP			   CHAR (8) NOT NULL,
	Logradouro	   VARCHAR (50) NOT NULL,
	Complemento	   VARCHAR (30) NOT NULL,
	Localidade	   VARCHAR (30) NOT NULL,
	UF			   VARCHAR (50) NOT NULL,
	IdUsuario	   INT FOREIGN KEY REFERENCES Usuario (IdUsuario)not null unique
);
GO

CREATE TABLE Candidato (
	IdCandidato			  INT PRIMARY KEY IDENTITY,
	NomeCompleto		  VARCHAR (35) NOT NULL UNIQUE,
	RG					  CHAR (9) NOT NULL UNIQUE,
	CPF					  CHAR (14) NOT NULL UNIQUE,
	Telefone			  CHAR (14) NOT NULL UNIQUE,
	LinkLinkedinCandidato VARCHAR (150) NOT NULL UNIQUE,
	IdCurso				  INT FOREIGN KEY REFERENCES Curso (IdCurso),
	IdArea				  INT FOREIGN KEY REFERENCES Area (IdArea)NOT NULL,
	IdUsuario			  INT FOREIGN KEY REFERENCES Usuario (IdUsuario) NOT NULL UNIQUE,
);
GO


CREATE TABLE Vaga (
	IdVaga			   INT PRIMARY KEY IDENTITY,
	TituloVaga         VARCHAR(40) NOT NULL,
	DescricaoVaga	   VARCHAR (700) NOT NULL,
	DescricaoEmpresa   VARCHAR (255) NOT NULL,
	DescricaoBeneficio VARCHAR (255) NOT NULL,
	DataPublicacao	   DATETIME NOT NULL,
	DataExpiracao	   DATETIME NOT NULL,
	Experiencia		   VARCHAR (50) NOT NULL,
	TipoContrato	   VARCHAR (50) NOT NULL,
	Salario			   DECIMAL NOT NULL,
	Localidade		   VARCHAR (255) NOT NULL,
	Estado			   VARCHAR (50) NOT NULL,
	CEP				   CHAR (8) NOT NULL,
	Logradouro		   VARCHAR (255) NOT NULL,
	Complemento		   VARCHAR (255) NOT NULL,
	IdEmpresa		   INT FOREIGN KEY REFERENCES Empresa (IdEmpresa)NOT NULL,
	IdArea		       INT FOREIGN KEY REFERENCES Area (IdArea)NOT NULL
);
GO

CREATE TABLE Estagio (
	IdEstagio	 INT PRIMARY KEY IDENTITY,
	DataCadastro DATETIME NOT NULL,
	PeriodoEstagio INT NOT NULL,
	IdCandidato  INT FOREIGN KEY REFERENCES Candidato (IdCandidato),
	IdEmpresa	 INT FOREIGN KEY REFERENCES Empresa (IdEmpresa)
);
GO

CREATE TABLE Inscricao (
	IdInscricao		  INT PRIMARY KEY IDENTITY,
	DataInscricao	  DATETIME NOT NULL,
	IdCandidato		  INT FOREIGN KEY REFERENCES Candidato (IdCandidato),
	IdVaga			  INT FOREIGN KEY REFERENCES Vaga (IdVaga),
	IdStatusInscricao INT FOREIGN KEY REFERENCES StatusInscricao (IdStatusInscricao)
);
GO

CREATE TABLE VagaTecnologia (
	 IdTecnologia INT FOREIGN KEY REFERENCES Tecnologia (IdTecnologia),
	 IdVaga		  INT FOREIGN KEY REFERENCES Vaga (IdVaga),
	 CONSTRAINT IdVagaTecnologia PRIMARY KEY (IdTecnologia, IdVaga)
);
GO

USE MASTER
DROP DATABASE Db_TechVagas