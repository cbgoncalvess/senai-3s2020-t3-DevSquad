/*
MANTENHA A LÍNGUA - DO SEU SQL SERVER - EM PORTUGUÊS DO BRASIL


1. Comando para verificar a linguagem atual do SQL Server ↓
	Select @@langid, @@language

2.	Comando para verificar as linguagens disponíveis no SQL Server ↓
	EXEC sp_helplanguage

3. Comando para alterar a linguagem do usuário 'sa' para Português do Brasil ↓
	Exec sp_defaultlanguage 'sa', 'Português (Brasil)'
	Reconfigure

*/
USE Db_TechVagas
GO

select * from Usuario	

INSERT INTO TipoUsuario (NomeTipoUsuario)
VALUES		('Administrador'),
			('Candidato'),
			('Empresa'),
			('Banido');
GO

<<<<<<< HEAD
INSERT INTO Curso (NomeCurso, TipoCurso,IdArea)
VALUES		('Desenvolvimento de Sistemas - 1T - M', 'Técnico',1),
			('Desenvolvimento de Sistemas - 2T - M', 'Técnico',1),
			('Desenvolvimento de Sistemas - 3T - M', 'Técnico',1),
			('Desenvolvimento de Sistemas - 1T - T', 'Técnico',1),
			('Desenvolvimento de Sistemas - 2T - T', 'Técnico',1),
			('Desenvolvimento de Sistemas - 3T - T', 'Técnico',1),
			('Redes de Computadores - 1T - M', 'Técnico',2),
			('Redes de Computadores - 2T - M', 'Técnico',2),
			('Redes de Computadores - 3T - M', 'Técnico',2),
			('Redes de Computadores - 1T - T', 'Técnico',2),
			('Redes de Computadores - 2T - T', 'Técnico',2),
			('Redes de Computadores - 3T - T', 'Técnico',2),
			('Multimídia - 1T - M', 'Técnico',3),
			('Multimídia - 2T - M', 'Técnico',3),
			('Multimídia - 3T - M', 'Técnico',3),
			('Multimídia - 1T - T', 'Técnico',3),
			('Multimídia - 2T - T', 'Técnico',3),
			('Multimídia - 3T - T', 'Técnico',3);
GO


=======
>>>>>>> 19686b013cfc78c3baf7abaee64b6df293093df6
INSERT INTO StatusInscricao (NomeStatusInscricao)
VALUES		('Aprovado'),
			('Em Andamento'),
			('Recusado');
GO

INSERT INTO Tecnologia (NomeTecnologia)
VALUES		('Não definido'),
			('CSharp'),
			('C++'),
			('Flutter'),
			('React'),
			('Xanarin'),
			('JavaScript'),
			('Dart'),
			('Ruby'),
			('.NET');
GO

INSERT INTO Usuario (Email, Senha, IdTipoUsuario,PerguntaSeguranca,RespostaSeguranca)
<<<<<<< HEAD
VALUES	('irineu@email.com', 'irineu1243', 1,'Qual o nome do administrador','Irineu');
=======
VALUES		('possarle@gmail.com', '932f3c1b56257ce8539ac269d7aab42550dacf8818d075f0bdf1990562aae3ef', 1,'Qual o nome do administrador','Roberto possarle');
>>>>>>> 19686b013cfc78c3baf7abaee64b6df293093df6
GO

INSERT INTO Area (NomeArea)
VALUES		('Desenvolvimento'),
			('Redes'),
			('Multimídia');
GO

<<<<<<< HEAD
update Usuario set Senha = 'dd1fccc335a3deb18d71e28fb8aab8d49639280bf569a2d84c40185e9e1e274d' where IdUsuario = 1
=======
INSERT INTO Curso (NomeCurso, TipoCurso,IdArea)
VALUES		('Desenvolvimento de Sistemas - 1T - M', 'Técnico',1),
			('Desenvolvimento de Sistemas - 2T - M', 'Técnico',1),
			('Desenvolvimento de Sistemas - 3T - M', 'Técnico',1),
			('Desenvolvimento de Sistemas - 1T - T', 'Técnico',1),
			('Desenvolvimento de Sistemas - 2T - T', 'Técnico',1),
			('Desenvolvimento de Sistemas - 3T - T', 'Técnico',1),
			('Redes de Computadores - 1T - M', 'Técnico',2),
			('Redes de Computadores - 2T - M', 'Técnico',2),
			('Redes de Computadores - 3T - M', 'Técnico',2),
			('Redes de Computadores - 1T - T', 'Técnico',2),
			('Redes de Computadores - 2T - T', 'Técnico',2),
			('Redes de Computadores - 3T - T', 'Técnico',2),
			('Multimídia - 1T - M', 'Técnico',3),
			('Multimídia - 2T - M', 'Técnico',3),
			('Multimídia - 3T - M', 'Técnico',3),
			('Multimídia - 1T - T', 'Técnico',3),
			('Multimídia - 2T - T', 'Técnico',3),
			('Multimídia - 3T - T', 'Técnico',3);
GO

INSERT INTO TipoRegimePresencial(NomeTipoRegimePresencial)
VALUES		('Presencial'),
			('Semipresencial'),
			('Remoto');
GO
>>>>>>> 19686b013cfc78c3baf7abaee64b6df293093df6
