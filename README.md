# Pagina demo de Hospital Nacional

## Contexto

En este proyecto, los estudiantes deberán implementar el consumo de una API para obtener y mostrar datos del sistema del hospital, como la información de doctores o servicios médicos.
Utilizando useEffect y useState, se espera que realicen peticiones asíncronas, gestionen el estado y manejen los errores de manera eficiente. Podrán utilizar Fetch API o Axios según su preferencia.

Trabajo práctico para desarrollar una página web de hospital que debe contener las siguientes páginas:

1. Vista Principal Home
2. Vista del About
3. Vista de Contact

## Cómo correr el proyecto:

1. Descargar el contenido de este repositorio en el computador. Puede ser clonando el repositorio o descargando el .zip:

   - **Clonar el repositorio**: Puede hacerlo con cualquier gestor de repositorios. Si tiene git instalado, puede abrir una terminal en algun diretorio y ejecutar:

   ```bash
   git clone url_de_este_repo
   ```

   - Si no tiene git instalado puede presionar el botón verde `<> Code` que está en esta página y seleccionar la opción `Download ZIP`.
     1. Descargue el archivo .zip en algun directorio conocido _(ej: Escritorio, Documentos, etc.)_.
     2. Descomprima el archivo .zip

2. Abrir una terminal denntro de la carpeta.
3. Ejecutar `yarn dev` y se mostrará el link para ver la pagina ejecutada en localhost.

## TO-DO (Rúbrica):

1. Uso de useState para la Gestión de Estado (1.5 puntos)

   - [ ] Implementa el Hook useState para gestionar el estado en los componentes del sistema, como:
     - [x] El manejo de formularios de pacientes o citas médicas.
     - [ ] Almacenar temporalmente la información ingresada por el usuario hasta que sea enviada o actualizada en la base de datos.

2. Uso de useEffect para la Gestión de Efectos Secundarios (1.5
   puntos)

   - [ ] Utiliza useEffect para manejar efectos secundarios como:
     - [x] Realizar peticiones a la API para obtener los datos del sistema del hospital (doctores, pacientes).
     - [ ] Controlar cuándo y cómo se deben ejecutar ciertos procesos, como la actualización automática de datos.

3. Construcción de un Hook Personalizado (1.5 puntos)

   - [ ] Crea un Hook personalizado para resolver una funcionalidad recurrente en la aplicación. Algunas ideas incluyen:
     - [ ] Un Hook que maneje el formulario de registro de doctores y pacientes, validando los datos y devolviendo errores si es necesario.
     - [ ] Un Hook para gestionar la autenticación del usuario, verificando si el usuario está autenticado o no.

4. Manejo de Errores en la Aplicación (1.5 puntos)

   - [ ] Implementa un mecanismo para el manejo de errores y excepciones en la aplicación React, asegurando que:
     - [ ] Los errores durante las peticiones a la API se capturen y manejen adecuadamente, mostrando mensajes claros al usuario.
     - [ ] Se manejen errores comunes en la interfaz, como la validación de formularios o la ausencia de datos requeridos.

5. Aplicación Correcta de las Reglas de los Hooks (1 punto)
   - [ ] Asegúrate de seguir correctamente las reglas de los Hooks, evitando:
     - [ ] Llamar Hooks de manera condicional o dentro de bucles.
     - [ ] Asegurarte de que los Hooks se llamen en el nivel superior del componente y respeten las mejores prácticas de ReactJS.
