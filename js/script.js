// Burger menu
document.getElementById("boton-menu").onclick = () => {
  document.getElementById("menu").classList.toggle("visible");
};
//classList:es una caja donde están guardados los nombres de las clases de ese elemento.
//toggle:significa alternar,Si el elemento ya tiene la clase "visible",la quita,si el elemento no la tiene, la agrega.


// Volver arriba
const volverArriba = document.getElementById("volver-arriba"); 
window.onscroll = () => { // Asigna función que se ejecuta al hacer scroll
  volverArriba.style.display = window.scrollY > 200 ? "block" : "none"; // Muestra el botón si se baja más de 200px, sino lo oculta
};
volverArriba.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" }); // Al hacer clic, sube al inicio con desplazamiento suave


// Carrusel
let fotos = [
  "assets/img/foto_app_alfa_gym.jpeg",
  "assets/img/foto_app_futbol.jpeg",
  "assets/img/foto_app_movieapp.jpeg"
];

let i = 0; // empieza en la primera imagen

function cambiar(direccion) {
  // suma o resta al índice y lo ajusta para que no se salga del array,%(operador modulo) calcula el resto para que i siempre sea un índice válido del array (0..length-1).
  if (direccion === 1) {
    i = (i + 1) % fotos.length; // siguiente
  } else {
    i = (i - 1 + fotos.length) % fotos.length; // anterior
  }

  document.getElementById("carrusel").src = fotos[i];
}


// Toggle oscuro/claro
document.getElementById("MODO-CLARO-OSCURO").onclick = () => { 
  document.body.classList.toggle("claro"); // Alterna la clase 'claro' en <body> (activa/desactiva modo claro)
};
