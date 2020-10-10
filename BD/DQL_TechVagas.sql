USE Db_TechVagas
GO

SELECT * FROM Curso
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

insert into VagaTecnologia(idVaga,idTecnologia)Values
(50,8);
update Vaga set DataExpiracao ='22/10/2020' where DescricaoVaga='Desenvolvimento'
SELECT * FROM Estagio
GO

SELECT * FROM StatusInscricao
GO

SELECT * FROM Tecnologia
GO

SELECT * FROM TipoUsuario
GO

SELECT * FROM VagaTecnologia
GO


--Lista so os atributos necessarios
Select  v.IdVaga,NomeTecnologia,v.Experiencia, TipoContrato, Salario,RazaoSocial,v.Localidade from VagaTecnologia      
inner join Tecnologia on Tecnologia.IdTecnologia=VagaTecnologia.IdTecnologia
inner join Vaga v on v.IdVaga=VagaTecnologia.IdVaga 
inner join Empresa on Empresa.IdEmpresa=v.IdEmpresa
Where Tecnologia.NomeTecnologia='CSharp'


--Lista todos os atributos da vaga...
SELECT * FROM VagaTecnologia
inner join Vaga on Vaga.IdVaga=VagaTecnologia.IdVaga
inner join Tecnologia on Tecnologia.IdTecnologia=VagaTecnologia.IdTecnologia
inner join Empresa on Empresa.IdEmpresa=Vaga.IdEmpresa