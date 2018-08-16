/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [Id]
      ,[Name]
  FROM [EmployeeSystem].[dbo].[RequestTypes]

INSERT INTO [EmployeeSystem].[dbo].[RequestTypes] (Name)
VALUES ('Paid Leave')

INSERT INTO [EmployeeSystem].[dbo].[RequestTypes] (Name)
VALUES ('Unpaid Leave')

INSERT INTO [EmployeeSystem].[dbo].[RequestTypes] (Name)
VALUES ('Sick Leave')