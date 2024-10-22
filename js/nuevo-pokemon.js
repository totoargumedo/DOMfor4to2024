// const formulario = document.querySelector("#pokemon-form");

// formulario.onsubmit = function (event) {
//   event.preventDefault();

//   const numero = document.querySelector("#pokemon-numero").value;
//   const nombre = document.querySelector("#pokemon-nombre").value;
//   const descripcion = document.querySelector("#pokemon-descripcion").value;
//   const imagen = document.querySelector("#pokemon-imagen").value;
//   const nivel = document.querySelector("#pokemon-nivel").value;
//   const generacion = document.querySelector("#pokemon-generacion").value;

//   const pokemon = {
//     numero: numero,
//     nombre: nombre,
//     descripcion: descripcion,
//     imagen: imagen,
//     nivel: nivel,
//     generacion: generacion,
//   };

//   pokemones.push(pokemon);

//   mostrarPokemon(pokemon);
//   formulario.reset();
//   document.querySelector("#pokemon-numero").focus();
// };

// function renderTabla(baseDeDatos) {
//   for (let i = 0; i < baseDeDatos.length; i++) {
//     mostrarPokemon(baseDeDatos[i]);
//   }
// }

// function mostrarPokemon(pokemon) {
//   let fila = document.createElement("tr");
//   let celdaNumero = document.createElement("td");
//   celdaNumero.innerText = pokemon.numero;
//   let celdaNombre = document.createElement("td");
//   celdaNombre.innerText = pokemon.nombre;
//   let celdaDescripcion = document.createElement("td");
//   celdaDescripcion.innerText = pokemon.descripcion;
//   let celdaImagen = document.createElement("td");
//   celdaImagen.innerText = pokemon.imagen;
//   let celdaNivel = document.createElement("td");
//   celdaNivel.innerText = pokemon.nivel;
//   let celdaGeneracion = document.createElement("td");
//   celdaGeneracion.innerText = pokemon.generacion;

//   fila.appendChild(celdaNumero);
//   fila.appendChild(celdaNombre);
//   fila.appendChild(celdaDescripcion);
//   fila.appendChild(celdaImagen);
//   fila.appendChild(celdaNivel);
//   fila.appendChild(celdaGeneracion);

//   let tabla = document.querySelector("#pokemon-tabla");
//   tabla.appendChild(fila);
// }

// renderTabla(pokemones);
