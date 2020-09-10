USE Db_TechVagas
GO

INSERT INTO TipoUsuario (NomeTipoUsuario)
VALUES		('Administrador'), ('Candidato'), ('Empresa');
GO

INSERT INTO Curso (NomeCurso, TipoCurso)
VALUES		('Desenvolvimento de Sistemas - 1T - M', 'Técnico'),
			('Desenvolvimento de Sistemas - 2T - M', 'Técnico'),
			('Desenvolvimento de Sistemas - 3T - M', 'Técnico'),
			('Desenvolvimento de Sistemas - 1T - T', 'Técnico'),
			('Desenvolvimento de Sistemas - 2T - T', 'Técnico'),
			('Desenvolvimento de Sistemas - 3T - T', 'Técnico'),
			('Redes de Computadores - 1T - M', 'Técnico'),
			('Redes de Computadores - 2T - M', 'Técnico'),
			('Redes de Computadores - 3T - M', 'Técnico'),
			('Redes de Computadores - 1T - T', 'Técnico'),
			('Redes de Computadores - 2T - T', 'Técnico'),
			('Redes de Computadores - 3T - T', 'Técnico'),
			('Multimídia - 1T - M', 'Técnico'),
			('Multimídia - 2T - M', 'Técnico'),
			('Multimídia - 3T - M', 'Técnico'),
			('Multimídia - 1T - T', 'Técnico'),
			('Multimídia - 2T - T', 'Técnico'),
			('Multimídia - 3T - T', 'Técnico');
GO

INSERT INTO StatusInscricao (NomeStatusInscricao)
VALUES		('Aprovado'),
			('Em Andamento'),
			('Recusado');
GO

INSERT INTO Tecnologia (NomeTecnologia)
VALUES		('C#'),
			('C++'),
			('Flutter'),
			('React'),
			('Xanarin'),
			('JavaScript'),
			('Dart'),
			('Ruby'),
			('.NET');
GO

INSERT INTO Usuario (Email, Senha, IdTipoUsuario)
VALUES		('possarle@email.com', 'possarle1243', 1),
			('douglas@email.com', 'douglas1243', 2),
			('alexia@email.com', 'alexia1243', 2),
			('marcos@email.com', 'marcos1243', 3);
GO


/*CONSERTAR COLUNA NOMERESPONSAVEL*/
INSERT INTO Empresa (NomeResponsavel, CNPJ, EmailContato. NomeFantasia, RazaoSocial, Telefone, NumFuncionario,
						NumCNAE, CEP, Logradouro, Complemento, Localidade, UF, IdUsuario)

VALUES				('Marcos', '3242432433', 'Marcos@gmail.com', 'TechVagas', 'TechVagas', '40028922', 150, '23232342', '01001000', 
						'Praça da Sé, 345', 'São Paulo', 'SP', 4);
