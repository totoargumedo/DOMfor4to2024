function crearTarjetaPokemon(pokemon) {
  //creamos el contenedor de la tarjeta
  let tarjeta = document.createElement("div");
  //le damos la clase card
  tarjeta.classList.add("card");
  //creamos la imagen
  let imagen = document.createElement("img");
  //le damos la clase card-img
  imagen.classList.add("card-img");
  //le damos la ruta de la imagen
  imagen.src = pokemon.imagen;
  //le damos el alt a la imagen
  imagen.alt = "Imagen de Pokemon";
  //creamos el numero de pokemon
  let numero = document.createElement("p");
  //le damos la clase card-number
  numero.classList.add("card-number");
  //le damos el contenido al parrafo de numero
  numero.innerText = pokemon.numero;
  //creamos el nombre del pokemon
  let nombre = document.createElement("h2");
  //le damos la clase card-title
  nombre.classList.add("card-title");
  //le damos el contenido al h2 de nombre
  nombre.innerText = pokemon.nombre;
  //creamos el tipo de pokemon
  const descripcion = document.createElement("p");
  descripcion.innerText = pokemon.descripcion;
  descripcion.classList.add("card-texto");
  //agregamos los elementos al contenedor de la tarjeta en orden
  tarjeta.appendChild(imagen);
  tarjeta.appendChild(numero);
  tarjeta.appendChild(nombre);
  tarjeta.appendChild(descripcion);
  //seleccionamos el contenedor principal y agregamos la tarjeta
  let galeria = document.querySelector(".main-container");
  galeria.appendChild(tarjeta);
}
for (let i = 0; i < pokemones.length; i++) {
  crearTarjetaPokemon(pokemones[i]);
}
