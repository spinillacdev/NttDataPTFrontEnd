# Proyecto: Aplicación de Consulta de Cliente

Este es un proyecto Angular 17 que muestra la información básica de un cliente. Los datos que maneja la aplicación se encuentran en un archivo JSON dentro del proyecto.

## Requisitos

Para ejecutar este proyecto en tu máquina, asegúrate de tener instalados los siguientes requisitos:

- **Node.js** y **npm**:
  - Puedes verificar si tienes Node.js y npm instalados ejecutando los siguientes comandos:
    ```bash
    node -v
    npm -v
    ```
  - Si no los tienes, puedes descargarlos desde [aquí](https://nodejs.org/).

- **Angular 17** y **Angular CLI** (opcional, pero recomendado para desarrollo):
  - Este proyecto utiliza **Angular 17**. Si no tienes **Angular CLI** instalado, puedes hacerlo globalmente con el siguiente comando:
    ```bash
    npm install -g @angular/cli
    ```
  - Puedes verificar que tienes la versión correcta de Angular CLI ejecutando:
    ```bash
    ng version
    ```

## Instalación

1. **Clona el repositorio** o **descarga el código fuente**:
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. **Instala las dependencias** utilizando npm:
    ```bash
    npm install
    ```

3. **Ubicación de los datos**:
   - Los datos que usa la aplicación están almacenados en un archivo JSON ubicado en la carpeta `assets/data/` dentro del proyecto. Este archivo contiene la información de los clientes que la aplicación debe utilizar para mostrar los detalles en la interfaz de usuario.
   - Asegúrate de que este archivo esté presente y correctamente formateado.

## Ejecución del Proyecto

Una vez que hayas instalado las dependencias, puedes ejecutar la aplicación localmente con el siguiente comando:

```bash
ng serve
