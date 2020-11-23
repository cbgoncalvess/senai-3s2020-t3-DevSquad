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

INSERT INTO TipoUsuario (NomeTipoUsuario)
VALUES		('Administrador'),
			('Candidato'),
			('Empresa'),
			('Banido');
GO

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
VALUES		('possarle@gmail.com', '932f3c1b56257ce8539ac269d7aab42550dacf8818d075f0bdf1990562aae3ef', 1,'Qual o nome do administrador','Roberto possarle');
GO

INSERT INTO Area (NomeArea)
VALUES		('Desenvolvimento'),
			('Redes'),
			('Multimídia');
GO

