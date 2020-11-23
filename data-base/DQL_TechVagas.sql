USE Db_TechVagas

USE MASTER
GO

SELECT * FROM Area
GO

SELECT * FROM Curso
GO

SELECT * FROM StatusInscricao
GO

SELECT * FROM Tecnologia
GO

SELECT * FROM TipoUsuario
GO

SELECT * FROM Empresa
GO

SELECT * FROM Candidato
GO

SELECT * FROM Inscricao
GO

SELECT * FROM Usuario
GO

SELECT * FROM Vaga
GO

Update Vaga set TipoContrato='Estágio' where IdVaga=2


SELECT * FROM VagaTecnologia
GO
INSERT INTO VagaTecnologia(IdVaga,IdTecnologia)
VALUES		(6,4),
			(7,4);
GO

SELECT * FROM Estagio
GO


update Usuario set idTipoUsuario=2 where idUsuario=4;



--Lista so os atributos necessarios
Select  v.IdVaga,NomeTecnologia,v.Experiencia, TipoContrato, Salario,RazaoSocial,v.Localidade from VagaTecnologia      
inner join Tecnologia on Tecnologia.IdTecnologia=VagaTecnologia.IdTecnologia
inner join Vaga v on v.IdVaga=VagaTecnologia.IdVaga 
inner join Empresa on Empresa.IdEmpresa=v.IdEmpresa



--Lista todos os atributos da vaga...
SELECT * FROM VagaTecnologia
inner join Vaga on Vaga.IdVaga=VagaTecnologia.IdVaga
inner join Tecnologia on Tecnologia.IdTecnologia=VagaTecnologia.IdTecnologia
inner join Empresa on Empresa.IdEmpresa=Vaga.IdEmpresa



INSERT INTO Area(NomeArea)Values
('Desenvolvimento'),('Infra-Estrutura'),('Designer')