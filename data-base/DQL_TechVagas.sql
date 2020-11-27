USE Db_TechVagas
GO

SELECT * FROM TipoUsuario
GO

SELECT * FROM StatusInscricao
GO

SELECT * FROM Tecnologia
GO

SELECT * FROM Usuario
GO

SELECT * FROM Area
GO

SELECT * FROM Curso
GO

SELECT * FROM TipoRegimePresencial
GO

SELECT * FROM Empresa
GO

SELECT * FROM Candidato
GO

SELECT * FROM Inscricao
GO

SELECT * FROM Vaga
GO

SELECT * FROM VagaTecnologia
GO

SELECT * FROM Estagio
GO

Update Estagio set DataCadastro='02-03-2020' where IdEstagio=10

--Lista so os atributos necessarios
SELECT  v.IdVaga,NomeTecnologia,v.Experiencia, TipoContrato, Salario,RazaoSocial,v.Localidade FROM VagaTecnologia      
INNER JOIN Tecnologia ON Tecnologia.IdTecnologia=VagaTecnologia.IdTecnologia
INNER JOIN Vaga v ON v.IdVaga=VagaTecnologia.IdVaga 
INNER JOIN Empresa ON Empresa.IdEmpresa=v.IdEmpresa
GO

--Lista todos os atributos da vaga...
SELECT * FROM VagaTecnologia
INNER JOIN Vaga ON Vaga.IdVaga=VagaTecnologia.IdVaga
INNER JOIN Tecnologia ON Tecnologia.IdTecnologia=VagaTecnologia.IdTecnologia
INNER JOIN Empresa ON Empresa.IdEmpresa=Vaga.IdEmpresa
GO