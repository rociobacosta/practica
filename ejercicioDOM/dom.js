//
const div = document.getElementById("app");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
let page = 1;

window.onload = function () {
  CallServer();
};

btnNext.addEventListener("click", function () {
  page++;
  CallServer();
});

btnPrev.addEventListener("click", function () {
  page--;
  CallServer();
});

function DrawCard(nuevoPersonaje) {
  return `<div class="card" style="width: 18rem;">
    <img src="${nuevoPersonaje.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${nuevoPersonaje.nombre}</h5>
    </div>
  </div>`;
}

const array = []
array.forEach((element) => {
  console.log(element)
})


function CallServer() {
  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then((res) => res.json())
    .then((response) => {
      let htmlString = "";
      response.results.forEach((element) => {
        const nuevoPersonaje = new Personaje(element.image, element.name);
        htmlString += DrawCard(nuevoPersonaje);
      });

      div.innerHTML = htmlString;
    })
    .catch((err) => console.log(err));
}

class Personaje {
  nombre = "";
  imagen = "";

  constructor(nombre, imagen) {
    this.nombre = nombre;
    this.image = imagen;
  }
}