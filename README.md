# Bounty API - Sistema de Recompensas de la Marina

## Descripción

API desarrollada con NestJS para gestionar piratas y sus recompensas (bounties).
Permite crear, consultar, actualizar y eliminar registros, aplicando arquitectura modular, validación de datos y testing.

---

## Tecnologías utilizadas

* NestJS
* MongoDB + Mongoose
* TypeScript
* Jest (Unit Testing)
* class-validator / class-transformer

---

## Estructura del proyecto

* `pirate/` → gestión de piratas
* `bounties/` → gestión de recompensas
* `database/` → conexión a MongoDB

---

## Instalación

1. Clonar repositorio:
  - Ir a la siguiente URL de Github https://github.com/LuisSipps/Modulo3-Bounty-API.git
  - Presionar el boton verde <> code y apretamos Download ZIP.
  - Extraemos el archivo ZIP y la abrimos en Visual Studio Code.

2. Instalar dependencias
    - Abrimos un CMD como administrador y abrimos nuestro proyecto
    - Ahora ejecutamos > npm install

3. Crear archivo .env en Visual Studio Code
Crear un archivo llamado `.env` en la raíz del proyecto con el siguiente contenido:

PORT=3000
MONGODB_URI=tu_uri_de_mongodb
JWT_SECRET=tu_clave_secreta


4.  Ejecución:
En el CMD o en una terminal de Visual Studio Code ejecutaremos nuestro código con:

npm run start:dev

5. Testing:
Para ver las pruebas unitarias es necesario ejecutar lo siguiente en la terminal:

npm run test

---

## Endpoints principales

### Pirates

* POST http://localhost:3000/pirates
* GET http://localhost:3000/pirates
* GET http://localhost:3000/pirates/69c94af28106c9bc7372ee63
* PATCH http://localhost:3000/pirates/69c94af28106c9bc7372ee63
* DELETE /pirate/:id

---

### Bounties

* POST http://localhost:3000/bounties
* GET http://localhost:3000/bounties
* GET http://localhost:3000/bounties/69c94b338106c9bc7372ee65
* PATCH http://localhost:3000/bounties/69c4829db138d17581365d3a
* DELETE 
* GET ACTIVE http://localhost:3000/bounties/active

---

## Autor

Luis Sepúlveda Villarroel
