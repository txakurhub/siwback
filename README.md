<p align="center">
<h1 style="text-align: center;">Prueba Técnica - Siw Cargo</h1>

## Demo

Puedes ver una versión actual del proyecto [aquí](https://siw-front.vercel.app/)

## Cómo instalarlo y correr el proyecto localmente

Detalles importantes a tener en cuenta:

- **Deberás tener instalado un editor de código, por ejemplo VSCode (https://code.visualstudio.com/)**
- **Deberás tener instalado Git (https://git-scm.com/)**
- **Deberás tener instalado Node.js (https://nodejs.org)**
- **En caso de modificaciones en el front, revisar el repositorio (https://github.com/txakurhub/siwback)**

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

### 2. Casos de Uso

### Caso de Uso 1: Ordenamientos
El usuario puede ordenar la tabla, por cada item ya sea idFactura, Cliente, Fecha o Total con sólo hacer click en cada título.

### Caso de Uso 2: Visualización de Datos del Usuario

El usuario puede hacer clic el ícono de perfil para ver y/o editar su propia información.
El sistema debe mostrar una página con sus datos, incluyendo el acceso a el formulario de edición.

### 3. Interacciones del Usuario

El usuario puede editar sus datos incluyendo nombre de usuario y email.
El usuario puede cerrar sesión y volver a la pantalla de inicio (Landing).

### 4. Escenarios de Error

En caso de no poseer credenciales para el ingreso el usuario no podrá visualizar la tabla con datos de facturas. El sistema muestra el error en el cuadro de inicio de sesión. <br/>
En caso de no haber datos de facturas cargadas, el sistema muestra un mensaje indicando el escenario.<br/>
Si no se logra editar la información del usuario satisfactoriamente, el sistema muestra una alerta indicando el fallo.

