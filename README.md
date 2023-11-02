# blog-delfos
# Pase Prod Blog
-Creacion Workspace
-Nginx
-Mysql
-Node

# comandos Mysql

## instalar
       sudo apt update
       sudo apt install mysql-server
       mysql --version
       sudo systemctl status mysql
       sudo mysql -u root -p

## create table

       ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Delfos123.,';

## flush privileges;

       CREATE TABLE comment (name VARCHAR(20), owner VARCHAR(20),
       species VARCHAR(20), sex CHAR(1), birth DATE, death DATE);
       

## Create database
       CREATE DATABASE delfos;

## Use DB
       USE delfos;

##Querys       
       # Consultas SQL

## Crear una tabla 'comment' con las siguientes columnas:
```sql

CREATE TABLE comment (
  id INT NOT NULL AUTO_INCREMENT,
  details VARCHAR(1200) NOT NULL,
  section VARCHAR(25) NOT NULL,
  username VARCHAR(300) NOT NULL,
  email VARCHAR(120),
  day DATETIME,
  PRIMARY KEY(id)
);
```
## Insertar un registro en la tabla 'comment':

```sql
INSERT INTO comment (details, section, username, day) 
VALUES (
  'Desde el punto de vista psicológico Desde el punto de vista psicológico Desde el punto de vista psicológicoDesde el punto de vista psicológicoDesde el punto de vista psicológico Desde el punto de vista psicológicoDesde el punto de vista psicológico Desde el punto de vista psicológico ',
  'fa',
  'steen001',
  '2021-03-15'
);
```

## Referencias

### BD Mysql
- [Documentación oficial de NGINX](https://docs.nginx.com/nginx/admin-guide/web-server/web-server/)
- [Guía para utilizar NGINX en sitios web estáticos](https://jgefroh.medium.com/a-guide-to-using-nginx-for-static-websites-d96a9d034940)
- [Definición de IIFE en Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

### Diferencia entre expresión y sentencia
- [Explicación de la diferencia entre expresión y sentencia](https://www.onemathematicalcat.org/algebra_book/online_problems/exp_vs_sen.htm)

### JavaScript Asíncrono
- [Introducción a la programación asíncrona en JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

### Promesas
- [Guía sobre el uso de promesas en JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

### Proyecto
- [Tutorial para crear una API REST con Node.js y SQL Server](https://www.telerik.com/blogs/step-by-step-create-node-js-rest-api-sql-server-database)
