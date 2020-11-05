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
VALUES		('Administrador'), ('Candidato'), ('Empresa'), ('Banido');
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
VALUES		('CSharp'),
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

INSERT INTO Empresa (NomeReponsavel, CNPJ, EmailContato, NomeFantasia, RazaoSocial, Telefone, 
						NumFuncionario,NumCNAE, CEP, Logradouro, Complemento, Localidade, UF, IdUsuario)
VALUES		('Marcos', '3242432433', 'Marcos@gmail.com', 'TechVagas', 'TechVagas', '40028922', 
					150, '2323234', '01001000', 'Praça da Sé, 345', 'Dentro da Catedral','São Paulo', 'SP', 4);
GO

INSERT INTO Candidato (NomeCompleto, RG, CPF, Telefone, LinkLinkedinCandidato, Area, IdCurso, IdUsuario)
VALUES		('Douglas Mantovani', '311233752', '73829940076', '1198529874', 'https://www.linkedin.com/feed/', 'Developer', 2, 3),
			('Aléxia Vitória', '214002391', '97616998038', '1195246587', 'https://www.linkedin.com/feed/teste', 'Desenvolvedor', 3 , 4);
GO

INSERT INTO Vaga (DescricaoVaga, DescricaoEmpresa, DescricaoBeneficio, DataPublicacao, DataExpiracao,
					Experiencia, TipoContrato, Salario, Localidade, Estado, CEP, Logradouro, Complemento, IdEmpresa)
VALUES		('Vaga de Front-end', 'Muito Maneira', 'Tenha a honra de trabalhar conosco', '1-3-2020', '01-1-2001', 
				'Júnior', 'CLT', 3000.00, 'São Paulo', 'SP', '08295005','Avenida Miguel Ignácio Curi, 100', 'Ao lado de sua casa!', 1),
			
			('Banco de Talentos', 'Temos Puffs', 'Tenha a honra de trabalhar conosco', '1-1-2020', '1-1-2020', 
				'Gênios', 'PJ', 1000.00, 'Rio de Janeiro', 'RJ', '22640085','Av. Pref. Dulcídio Cardoso, 800', 'Na casa de vossa excelência!', 1),
			
			('Vaga para Back-end', 'Somos os Melhores', 'Terá direito à metade de seu salário!', '05-1-2020', '06-1-2020', 
				'Estagiário', 'Estágio', 4000.00, 'Salvador', 'BA', '41500660','Av. Aliomar Baleeiro, 43', 'Perto do Aeroporto', 1);
GO

INSERT INTO Estagio (DataCadastro, PeriodoEstagio, IdCandidato, IdEmpresa)
VALUES		('1-9-2020', 26, 1, 1),
			('1-1-2020', 12, 2, 1);
GO

INSERT INTO Inscricao (DataInscricao, IdCandidato, IdVaga, IdStatusInscricao)
VALUES		('8-8-2020', 1, 4, 1),
			('4-8-2019', 2, 6, 2),
			('4-8-2019', 1, 5, 3);
GO

INSERT INTO VagaTecnologia (IdTecnologia, IdVaga)
VALUES		(2, 4),
			(1, 4),
			(4, 5),
			(5, 5),
			(6, 6),
			(7, 6),
			(9, 4);
GO