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

INSERT INTO Area(NomeArea)
VALUES		('Desenvolvimento'),
			('Redes'),
			('Multimidia');

GO


INSERT INTO Empresa (NomeReponsavel, CNPJ, EmailContato, NomeFantasia, RazaoSocial, Telefone, 
						NumFuncionario,NumCNAE, CEP, Logradouro, Complemento, Localidade, UF, IdUsuario)
VALUES		('Marcos', '3242432433', 'Marcos@gmail.com', 'TechVagas', 'TechVagas', '40028922', 
					150, '2323234', '01001000', 'Praça da Sé, 345', 'Dentro da Catedral','São Paulo', 'SP', 1);
GO

INSERT INTO Area (NomeArea)
VALUES		('Desenvolvimento'),
			('Redes'),
			('Multimídia');

GO
/*
	Para Consertar:
	INSERT INTO Candidato (NomeCompleto, RG, CPF, Telefone, LinkLinkedinCandidato, Area, IdCurso, IdUsuario)
	VALUES		('Douglas Mantovani', '311233752', '73829940076', '1198529874', 'https://www.linkedin.com/feed/', 'Developer', 2, 3),
				('Aléxia Vitória', '214002391', '97616998038', '1195246587', 'https://www.linkedin.com/feed/teste', 'Desenvolvedor', 3 , 4);
	GO
*/

INSERT INTO Vaga (TituloVaga, DescricaoVaga, DescricaoEmpresa, DescricaoBeneficio, DataPublicacao, DataExpiracao,
					Experiencia, TipoContrato, Salario, Localidade, Estado, CEP, Logradouro, Complemento, IdEmpresa, IdArea)
VALUES		('Desenvolvedor Front-end em São Paulo','A empresa que paga menos, para o candidato que trabalha mais!', 'Muito Maneira', 'Tenha a honra de trabalhar conosco', '27-11-2020', '27-01-2021', 
				'Senior', 'Estagio', 3000.00, 'São Paulo', 'SP', '08295005','Avenida Miguel Ignácio Curi, 100', 'Ao lado de sua casa!', 1, 1),
			
			('Seja parte do nosso banco de talentos', 'Banco de Talentos', 'Temos Puffs', 'Tenha a honra de trabalhar conosco', '15-10-2020', '15-11-2021', 
				'Gênios', 'PJ', 1000.00, 'Rio de Janeiro', 'RJ', '22640085','Av. Pref. Dulcídio Cardoso, 800', 'Na casa de vossa excelência!', 1, 2),
			
			('Venha ser nosso estagiário','Venha trabalhar como um escravo, jovem!', 'Somos os Melhores', 'Terá direito à metade de seu salário!', '30-05-2020', '30-06-2021', 
				'Estagiário', 'Estágio', 4000.00, 'Salvador', 'BA', '41500660','Av. Aliomar Baleeiro, 43', 'Perto do Aeroporto', 1, 3);
GO

INSERT INTO Estagio (DataCadastro, PeriodoEstagio, IdCandidato, IdEmpresa)
VALUES		('29-05-2020', 26, 4, 5);
GO

INSERT INTO Inscricao (DataInscricao, IdCandidato, IdVaga, IdStatusInscricao)
VALUES		('08-08-2020', 3, 10, 2);		
GO

UPDATE Inscricao SET IdStatusInscricao=2 WHERE IdInscricao=5

INSERT INTO VagaTecnologia (IdTecnologia, IdVaga)
VALUES		(2, 1),
			(1, 2),
			(4, 3),
			(5, 1),
			(6, 2),
			(7, 3),
			(9, 1);
GO

use master
drop database Db_TechVagas

