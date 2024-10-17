//Capturar el elemento con la clase "main-container" y almacenarlo en una variable.
let contenedorPrincipal = document.querySelector(".main-container");

//Crear un elemento h1 y almacenarlo en una variable.
let titulo = document.createElement("h1");
//Asignar el texto "Hello World" al elemento h1.
titulo.innerText = "Hello World";
titulo.classList.add("titulo-principal");
// titulo.classList = "titulo-principal";
// titulo.style.color = "red";
//Borrar el contenido del contenedor
contenedorPrincipal.innerHTML = "";
//Agregar el elemento h1 al contenedor principal.
contenedorPrincipal.appendChild(titulo);
