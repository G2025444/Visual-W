const btnMenu = document.querySelector("#btnMenu"); 

const menu = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("abierto");
  btnMenu.classList.toggle("activo");    // anima las rayitas
});

// cerrar el menú al hacer clic en un enlace
document.querySelectorAll(".menu a").forEach(enlace => {
    enlace.addEventListener("click", () => {
    menu.classList.remove("abierto");
    btnMenu.classList.remove("activo");
    });
});

//Accordion functionality 

const titulos = document.querySelectorAll(".accordion .titulo");

titulos.forEach(titulo => {
  titulo.addEventListener("click", () => {
    const item = titulo.parentElement;

    // cerrar los demás (quitar esta línea si se quieren varios abiertos)

    document.querySelectorAll(".accordion .item").forEach(otro => {
      if (otro !== item) otro.classList.remove("activo");
    });

    item.classList.toggle("activo");
  });
});

const servicios = [
  { titulo: "Lavado",   precio: 8000,  img: "img/s1.png" },
  { titulo: "Pulido",   precio: 15000, img: "img/s2.jpg" },
  { titulo: "Encerado", precio: 12000, img: "img/s3.webp" }
  
  // agrega más objetos hasta tener las seis tarjetas
];

const contenedor = document.querySelector("#cards");

function pintarCards(lista) {
  contenedor.innerHTML = "";           // limpiar antes de dibujar
  lista.forEach(s => {
    const art = document.createElement("article");
    art.classList.add("tarjeta");
    art.innerHTML = `
      <img src="${s.img}" alt="${s.titulo}">
      <h3>${s.titulo}</h3>
      <p>₡${s.precio}</p>`;
    contenedor.appendChild(art);
  });
}

if (contenedor) pintarCards(servicios);   // solo en la página que tiene #cards