// Define la fecha límite
const finPromo = "Jan 24, 2022 23:59:59"

const countDownDate = new Date(finPromo).getTime();

// Actualiza la cuenta cada segundo
const x = setInterval(function() {
  const now = new Date().getTime(); // Obtiene la fecha y la hora actual
  const distance = countDownDate - now;// La diferencia entre la fecha límite y la fecha actual
  // Cálculos de tiempo para días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Muestra el resultado en los elementos con id definido
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  // Mensaje cuando la cuenta termina
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "OFERTA TERMINADA";
  }
}, 1000);



window.onload=()=> {
  
   // Links footer
  
  const linkcreator = document.getElementById("linkCreator");
  linkcreator.href = "https://google.com";

  const linkmasterclub = document.getElementById("linkMasterClub");
  linkmasterclub.href = "https://google.com";

  const linkpagos = document.getElementById("linkPagos");
  linkpagos.href = "https://google.com";

  const linkgarantia = document.getElementById("linkGarantia");
  linkgarantia.href = "https://google.com";

  const linkprivacidad = document.getElementById("linkPrivacidad");
  linkprivacidad.href = "https://google.com";

  // links ctas

  const linkpdf = document.getElementById("linkPdf");
  linkpdf.href = "https://docs.google.com/spreadsheets/d/1vCU5k-KBjvuusu-i98EPFo6F4Rk-xE1ykMLA6et1R4E/edit?usp=sharing"

  const linkprueba = document.getElementById("linkPrueba");
  linkprueba.href = "https://masterclub30.digital/prueba-gratis"

  const linkpreciocategoria = document.getElementById("linkPrecioCategoria");
  linkpreciocategoria.href = "hotmail.com"

  const linkoferta = document.getElementById("linkOferta");
  linkoferta.href = "super-oferta.html";


  // Lnks Menu

  
  const linkautores = document.getElementById("linkAutores");
  linkautores.href = "https://masterclub30.digital#mainauthors"

  const linkcategorias = document.getElementById("linkCategorias");
  linkcategorias.href = "https://masterclub30.digital#maincategories"

  const linkinicio = document.getElementById("linkInicio");
  linkinicio.href = "https://masterclub30.digital"

  const linkhome = document.getElementById("linkHome");
  linkhome.href = "https://masterclub30.digital"
};





