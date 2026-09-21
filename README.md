# Taller JavaScript - Web 1

## 📌 Instrucciones

Antes de desarrollar los ejercicios, debes cumplir con los siguientes requisitos:

- Aplicar el patrón **MVC (Modelo - Vista - Controlador)**.
- Utilizar el **scaffolding trabajado en clase**.
- Configurar correctamente el archivo principal de JavaScript.
- Distribuir las responsabilidades correctamente entre **Model, View y Controller**.
- Mantener una adecuada organización y separación del código.
- Implementar las funcionalidades utilizando **JavaScript y manipulación del DOM**.
- No concentrar toda la lógica en un único archivo.
- **No deben existir errores en la consola del navegador.**

Una vez cumplidos estos requisitos, desarrolla los siguientes ejercicios.

## 1. Saludar al usuario 👋

Implementa mediante **JavaScript** la funcionalidad del botón **"Saludar"**.

1. El usuario debe ingresar su nombre en el campo de texto.
2. Al hacer clic en **"Saludar"**, debes obtener el nombre ingresado.
3. Si el campo contiene información, muestra un `alert` con el mensaje **"Bienvenido: [nombre]"**.
4. Si el campo está vacío, muestra un `alert` indicando **"Por favor, ingrese su nombre."**.

**Resultado esperado:** el botón debe validar el campo y mostrar el saludo correspondiente según la información ingresada.


## 2. Cambiar un mensaje 💬

Implementa la funcionalidad del botón **"Mostrar mensaje"**.

1. El usuario debe ingresar un mensaje en un campo de texto.
2. Al hacer clic en el botón, debes obtener el texto ingresado.
3. El mensaje debe mostrarse dentro de un elemento `<p>` de la página.
4. Si el campo está vacío, muestra un `alert` indicando **"Debe ingresar un mensaje."**.

**Resultado esperado:** el texto ingresado por el usuario debe aparecer dinámicamente en la página sin utilizar `alert()`.


## 3. Contador 🔢

Implementa un contador utilizando los botones **"Incrementar"**, **"Decrementar"** y **"Reiniciar"**.

1. Al hacer clic en **"Incrementar"**, aumenta el contador en 1.
2. Al hacer clic en **"Decrementar"**, disminuye el contador en 1.
3. Al hacer clic en **"Reiniciar"**, el contador debe volver a 0.
4. El valor actualizado debe mostrarse directamente en la página.

**Resultado esperado:** el valor del contador debe cambiar dinámicamente mediante la manipulación del DOM.


## 4. Mostrar y ocultar información 👁️

Implementa la funcionalidad de los botones **"Mostrar"** y **"Ocultar"**.

1. La página debe contener una sección con información.
2. Crea en CSS una clase que permita ocultar la sección utilizando `display: none`.
3. Al hacer clic en **"Ocultar"**, agrega la clase a la sección utilizando JavaScript.
4. Al hacer clic en **"Mostrar"**, elimina la clase utilizando JavaScript.
5. Utiliza `classList.add()` y `classList.remove()` para agregar y remover la clase.

**Resultado esperado:** el usuario debe poder mostrar y ocultar la sección utilizando los botones y mediante la manipulación de clases CSS desde JavaScript.