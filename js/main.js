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