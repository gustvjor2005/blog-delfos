# blog-delfos
# Pase Prod Blog
-Creacion Workspace
-Nginx
-Mysql
-Node
       ssh -i "Projects/aws/atila/hermes.pem" ubuntu@ec2-15-229-12-247.sa-east-1.compute.amazonaws.com

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
       CREATE TABLE comment (id INT NOT NULL AUTO_INCREMENT, details VARCHAR(1200) NOT NULL, section VARCHAR(25) NOT NULL, username VARCHAR(300) NOT NULL, email VARCHAR(120), day DATETIME, PRIMARY KEY(id));

       INSERT INTO comment( details, section, username, day) VALUES ('Desde el punto de vista psicologico Desde el punto de vista psicologico Desde el punto de vista psicologicoDesde el punto de vista psicologicoDesde el punto de vista psicologico Desde el punto de vista psicologicoDesde el punto de vista psicologico Desde el punto de vista psicologico ', 'fa', 'steen001', '2021-03-15');

       ALTER TABLE comment ADD COLUMN email VARCHAR(25) AFTER username;

#git ssh config 

       git remote set-url origin git@github.com:gustvjor2005/blog-backend
       ls -al ~/.ssh
       ssh-keygen -t rsa -b 4096 -C "gustvjor2005@gmail.com"
       ls -al ~/.ssh
       eval "$(ssh-agent -s)"
       ssh-add ~/.ssh/id_rsa
       cat ~/.ssh/id_rsa.pub

## Referencias

### BD Mysql
https://docs.nginx.com/nginx/admin-guide/web-server/web-server/
https://jgefroh.medium.com/a-guide-to-using-nginx-for-static-websites-d96a9d034940
https://developer.mozilla.org/en-US/docs/Glossary/IIFE
### Diferencia entre expresion y sentencia 
https://www.onemathematicalcat.org/algebra_book/online_problems/exp_vs_sen.htm
### Javascript asincrono
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
### Promesas
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
### Proyecto
https://www.telerik.com/blogs/step-by-step-create-node-js-rest-api-sql-server-database
