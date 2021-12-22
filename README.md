# Sistema-de-Usuario
Descripción
La empresa Soft Life Chile Spa es una Start Up de desarrollo de software creada por ex
estudiantes de la carrera Full Stack Developer en Javascript de Desafío Latam. Anualmente
la empresa abre puestos de trabajo para contratar perfiles junior que quieran empezar a
trabajar en desarrollo web y colaborar con su visión de mejorar la calidad de vida cotidiana
con software.
Para postular al puesto disponible se requiere desarrollar un sistema básico de usuarios que
permita guardar usuarios e iniciar sesión, persistiendo la data en PostgreSQL con el paquete
pg y usando un servidor en Node para el desarrollo backend.
Para iniciar con el desarrollo de este desafío, ocupa las siguientes instrucciones SQL para
crear una base de datos softlife y una tabla usuarios.
CREATE DATABASE softlife;
CREATE TABLE usuarios (email varchar(25), password varchar(25));
Recuerda devolver el archivo HTML disponibilizado, a través de la ruta raíz del servidor.

Requerimientos
1. Disponibilizar una ruta POST /usuario que utilice una función asíncrona para emitir
una consulta SQL y almacenar un nuevo usuario en la tabla usuarios.
2. Disponibilizar una ruta POST /login que utilice una función asíncrona para emitir una
consulta SQL, valide el correo y contraseña recibido en la consulta.
3. Disponibilizar una ruta GET /usuarios que utilice una función asíncrona para emitir
una consulta SQL y devolver todos los usuarios de la tabla usuarios.


