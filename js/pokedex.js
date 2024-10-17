//creamos el contenedor de la tarjeta
let tarjeta = document.createElement("div");
//le damos la clase card
tarjeta.classList.add("card");
//creamos la imagen
let imagen = document.createElement("img");
//le damos la clase card-img
imagen.classList.add("card-img");
//le damos la ruta de la imagen
imagen.src =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
//le damos el alt a la imagen
imagen.alt = "Imagen de Pokemon";
//creamos el numero de pokemon
let numero = document.createElement("p");
//le damos la clase card-number
numero.classList.add("card-number");
//le damos el contenido al parrafo de numero
numero.innerText = "001";
//creamos el nombre del pokemon
let nombre = document.createElement("h2");
//le damos la clase card-title
nombre.classList.add("card-title");
//le damos el contenido al h2 de nombre
nombre.innerText = "Bulbasaur";
//creamos el tipo de pokemon
let tipo = document.createElement("p");
//le damos la clase card-type-text
tipo.classList = "card-type-text";
//le damos el contenido al parrafo de tipo
tipo.innerText = "Planta, Veneno";
//agregamos los elementos al contenedor de la tarjeta en orden
tarjeta.appendChild(imagen);
tarjeta.appendChild(numero);
tarjeta.appendChild(nombre);
tarjeta.appendChild(tipo);
//seleccionamos el contenedor principal y agregamos la tarjeta
let galeria = document.querySelector(".main-container");
galeria.appendChild(tarjeta);

//Mostramos la
console.log(tarjeta);
