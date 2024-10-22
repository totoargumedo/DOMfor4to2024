const formulario = document.querySelector("#pokemon-form");

formulario.onsubmit = function (event) {
  event.preventDefault();

  const numero = document.querySelector("#pokemon-numero").value;
  const nombre = document.querySelector("#pokemon-nombre").value;
  const descripcion = document.querySelector("#pokemon-descripcion").value;
  const imagen = document.querySelector("#pokemon-imagen").value;
  const nivel = document.querySelector("#pokemon-nivel").value;
  const generacion = document.querySelector("#pokemon-generacion").value;

  const pokemon = {
    numero: numero,
    nombre: nombre,
    descripcion: descripcion,
    imagen: imagen,
    nivel: nivel,
    generacion: generacion,
  };
  pokemones.push(pokemon);
  llenarTablaPokemon(pokemones);
};

function llenarTablaPokemon(baseDeDatos) {
  for (let i = 0; i < baseDeDatos.length; i++) {
    crearFilaPokemon(baseDeDatos[i]);
  }
}

function crearFilaPokemon(pokemon) {
  const filaPokemon = document.createElement("tr");
  const celdaNumero = document.createElement("td");
  celdaNumero.innerText = pokemon.numero;
  filaPokemon.appendChild(celdaNumero);
  const celdaNombre = document.createElement("td");
  celdaNombre.innerText = pokemon.nombre;
  filaPokemon.appendChild(celdaNombre);
  const celdaDescripcion = document.createElement("td");
  celdaDescripcion.innerText = pokemon.descripcion;
  filaPokemon.appendChild(celdaDescripcion);
  const celdaImagen = document.createElement("td");
  celdaImagen.innerText = pokemon.imagen;
  filaPokemon.appendChild(celdaImagen);
  const tablaPokemon = document.querySelector("#pokemon-tabla");
  tablaPokemon.appendChild(filaPokemon);
}

llenarTablaPokemon(pokemones);
