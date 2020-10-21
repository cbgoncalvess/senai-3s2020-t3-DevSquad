USE Db_TechVagas

use master
GO
SELECT * FROM Area
Go
SELECT * FROM Curso
GO

SELECT * FROM StatusInscricao
GO

update Inscricao set IdStatusInscricao=2 where IdStatusInscricao=1

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

SELECT * FROM VagaTecnologia
GO


--Lista so os atributos necessarios
Select  v.IdVaga,NomeTecnologia,v.Experiencia, TipoContrato, Salario,RazaoSocial,v.Localidade from VagaTecnologia      
inner join Tecnologia on Tecnologia.IdTecnologia=VagaTecnologia.IdTecnologia
inner join Vaga v on v.IdVaga=VagaTecnologia.IdVaga 
inner join Empresa on Empresa.IdEmpresa=v.IdEmpresa
Where v.IdVaga=52


--Lista todos os atributos da vaga...
SELECT * FROM VagaTecnologia
inner join Vaga on Vaga.IdVaga=VagaTecnologia.IdVaga
inner join Tecnologia on Tecnologia.IdTecnologia=VagaTecnologia.IdTecnologia
inner join Empresa on Empresa.IdEmpresa=Vaga.IdEmpresa



INSERT INTO Area(NomeArea)Values
('Desenvolvimento'),('Infra-Estrutura'),('Designer')