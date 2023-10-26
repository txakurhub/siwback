<p align="center">
<h1 style="text-align: center;">Prueba Técnica - Siw Cargo</h1>

## Demo

Puedes ver una versión actual del proyecto [aquí](https://siw-front.vercel.app/)

## Cómo instalarlo y correr el proyecto localmente

Detalles importantes a tener en cuenta:

- **Deberás tener instalado un editor de código, por ejemplo VSCode (https://code.visualstudio.com/)**
- **Deberás tener instalado Git (https://git-scm.com/)**
- **Deberás tener instalado Node.js (https://nodejs.org)**
- **En caso de modificaciones en el front, revisar el repositorio (https://github.com/txakurhub/siw_front)**

### 1. Clonar el proyecto

```
$ git clone https://github.com/txakurhub/siwback
```

### 2. Instalar dependencias (en el directorio raíz)

```
$ npm install
```

### 3. Configurar las variables de entorno

Deberá crear o tener creada una base de datos, deberá cargar los siguientes datos para la correcta conexión con la misma.

```
$ DB_USER
$ DB_HOST
$ DB_PASSWORD
$ DB_NAME
$ DB_PORT
```

A su vez, deberá crear una nueva variable para la clave para el JWT Secret con el nombre

```
$ SECRET
```

### 4. Levantar el proyecto

```
$ npm run dev
```

### Felicitaciones, el proyecto está corriendo localmente.

<br/>

## Ficha Técnica

Esta ficha técnica describe los diferentes comportamientos y funcionalidades del proyecto realizado para Siw Cargo. Proporciona una guía detallada sobre las acciones que los usuarios pueden realizar y cómo el sistema debe responder a esas acciones.

### 1. Descripción general

El proyecto consta de una aplicación web que permite a los usuarios, registrarse, logearse, editar sus datos, ver y explorar sobre una colección de facturas. Los usuarios pueden ver información detallada de cada factura, incluyendo su id, el id del cliente, la fecha, y el monto total.

### 2. Endopoints

### Auth:

- POST /auth/login -> Login del usuario en la API - espera {"email":"correo@dom.com", "password":"contraseña"}
- POST /auth/signup -> Sign up del usuario en la API - espera { "username": "nombredeusuario","email": "correo@dom.com", "password": "password"}
- POST /auth/getuser -> Devuelve la información del usuario en la API - espera {"email":"correo@dom.com"}
- PUT /auth/update -> Modifica la información del usuario en la API - espera {"email":"correo@dom.com", "newUsername":"nuevonombre", "newEmail":"nuevo@correo.com" }
- PUT /auth/recovery -> Modifica la contraseña del usuario en la API - espera {"email":"correo@dom.com"}

### Tickets:

- GET /tickets -> Obtiene todos las facturas en la base de datos
- POST /tickets -> Crea una nueva factura en la API - espera {"cliente":"id", "total":"123" }
