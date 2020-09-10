CREATE DATABASE Db_TechVagas;

USE Db_TechVagas;

--DDL

CREATE TABLE TipoUsuario (
	IdTipoUsuario   INT PRIMARY KEY IDENTITY,
	NomeTipoUsuario VARCHAR (35) NOT NULL UNIQUE
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
	NomeTecnologia VARCHAR (35) 
);
GO

CREATE TABLE Usuario (
	IdUsuario	  INT PRIMARY KEY IDENTITY,
	Email		  VARCHAR (254) NOT NULL UNIQUE,
	Senha		  VARCHAR (20) NOT NULL,
	IdTipoUsuario INT FOREIGN KEY REFERENCES TipoUsuario (IdTipoUsuario)
); 
GO

CREATE TABLE Empresa (
	IdEmpresa	   INT PRIMARY KEY IDENTITY,
	NomeReponsavel VARCHAR (100) NOT NULL,
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
	IdUsuario	   INT FOREIGN KEY REFERENCES Usuario (IdUsuario)
);
GO

CREATE TABLE Candidato (
	IdCandidato			  INT PRIMARY KEY IDENTITY,
	NomeCompleto		  VARCHAR (35) NOT NULL UNIQUE,
	RG					  CHAR (9) NOT NULL UNIQUE,
	CPF					  CHAR (14) NOT NULL UNIQUE,
	Telefone			  CHAR (14) NOT NULL UNIQUE,
	LinkLinkedinCandidato VARCHAR (150) NOT NULL UNIQUE,
	Area				  VARCHAR (40) NOT NULL UNIQUE,
	IdCurso				  INT FOREIGN KEY REFERENCES Curso (IdCurso),
	IdUsuario			  INT FOREIGN KEY REFERENCES Usuario (IdUsuario)
);
GO

CREATE TABLE Vaga (
	IdVaga			   INT PRIMARY KEY IDENTITY,
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
	IdEmpresa		   INT FOREIGN KEY REFERENCES Empresa (IdEmpresa)
);
GO

CREATE TABLE Estagio (
	IdEstagio	 INT PRIMARY KEY IDENTITY,
	DataCadastro DATETIME NOT NULL,
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