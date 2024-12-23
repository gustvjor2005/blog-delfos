# blog-delfos v2

## Install && Config
```bash
#nginx
sudo apt-get update
sudo apt-get install nginx
sudo systemctl restart nginx
sudo systemctl status nginx

#firewall 
sudo ufw allow 'Nginx Full'
sudo ufw reload

#configure nginx
cd /etc/nginx/
sudo cp nginx.conf nginx.conf.backup
cd /etc/nginx/sites-available/
sudo vim odin.com
       server {
              #change port of nginx default config to 90
              listen 80;
              server_name odin.com;
              root /var/www/odin.com/html/;
              index gcd.html;
       }
sudo ln -s /etc/nginx/sites-available/odin.com /etc/nginx/sites-enabled/
sudo mkdir -p /var/www/odin.com/html
sudo chown -R $USER:$USER /var/www/odin.com/html
sudo chmod -R 755 /var/www

#copy gdc.html and other files to /var/www/odin.com/html/ directory

```

add this config to domain config
```bash
location = /comment {
		proxy_pass http://127.0.0.1:8091/api/comment;
	}

```

## comandos Mysql

### install
       sudo apt update
       sudo apt install mysql-server
       mysql --version
       sudo systemctl status mysql
       sudo mysql -u root -p

### create table

       ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Delfos123.,';

### Create database
       CREATE DATABASE delfos;

### Use DB
       USE delfos;

### Querys       

#### Crear una tabla 'comment' con las siguientes columnas:
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
#### Insertar un registro en la tabla 'comment':

```sql
INSERT INTO comment (details, section, username, day) 
VALUES (
  'Desde el punto de vista psicológico Desde el punto de vista psicológico Desde el punto de vista psicológicoDesde el punto de vista psicológicoDesde el punto de vista psicológico Desde el punto de vista psicológicoDesde el punto de vista psicológico Desde el punto de vista psicológico ',
  'fa',
  'steen001',
  '2021-03-15'
);
```



### Referencias


### AWS

- [Elastic IP]https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html

#### BD Mysql
- [Documentación oficial de NGINX](https://docs.nginx.com/nginx/admin-guide/web-server/web-server/)
- [Guía para utilizar NGINX en sitios web estáticos](https://jgefroh.medium.com/a-guide-to-using-nginx-for-static-websites-d96a9d034940)
- [Definición de IIFE en Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

#### Diferencia entre expresión y sentencia
- [Explicación de la diferencia entre expresión y sentencia](https://www.onemathematicalcat.org/algebra_book/online_problems/exp_vs_sen.htm)

#### JavaScript Asíncrono
- [Introducción a la programación asíncrona en JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

#### Promesas
- [Guía sobre el uso de promesas en JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

#### Proyecto
- [Tutorial para crear una API REST con Node.js y SQL Server](https://www.telerik.com/blogs/step-by-step-create-node-js-rest-api-sql-server-database)
