var urlPage = window.location.search;
const urlParams = new URLSearchParams(urlPage);
const cat = urlParams.get('categoria');

const catIngles = 'in';

  if (cat == catIngles) {
    document.getElementById('volverSuperPack').classList.remove("d-none");
    document.getElementById('bonoGratisIngles').classList.add("d-none");
  } else{

  }


if (!cat) {
  function redirect(){
    window.location.assign('https://masterclub30.digital/superpack-lista?categoria=dw');
  };    
  setTimeout("redirect()", 1000);
} else {
  


          fetch('./assets/data/superPack.json')
          .then(response => response.json() )
          .then(data => {

            const newArray = data.filter(filtro =>{
              return filtro.codigo == cat;
          })
            
                  const {codigo, curso, lenguaje, main, nivel, Plataforma, Profesor, duracion, categoria} = newArray[0];

                  const nombreCurso = curso;
                  const nombreLenguaje = lenguaje;
                  const tema = main;
                  const nivelCurso = nivel;
                  const plataforma = Plataforma;
                  const profesor = Profesor;
                  const duracionCurso = duracion;
                  const nombreCategoria = categoria;
                  const codigoCategoria = codigo;
          
              document.getElementById('categoryName').innerHTML = nombreCategoria;          

              let li = "";   
                newArray.forEach(function(curso){
                  li += `
                  <small class="tarjeta">
                  <li class="d-flex justify-content-between " ${curso.Plataforma} ${curso.Profesor}>
                    <div class="w-70 border-bottom py-1 d-flex">
                      <div><img class=" shadow rounded-2" src="./assets/img/icons/${curso.main}.png" alt="${curso.main}" title="${curso.main}"></div>
                      <div class="ms-2"><a href="https://api.whatsapp.com/send/?phone=%2B573242793938&text=Hola%2C+Master.+Quiero+la+Promo+del+Super+Pack+de+Desarrollo+Web+por+37.000" >${curso.curso}</a></div>
                    </div>
                    <span class="rounded px-1 w-30 text-left border-bottom"><small>${curso.lenguaje}<span class="opacity-0 miniText"> ${curso.Plataforma}</span></small></span>
                    
                    <span class="rounded px-1 w-30 text-center border-bottom"><small>${curso.nivel}</small></span>
                    <span class="rounded px-1 w-30 text-center border-bottom"><small>${curso.duracion} Hs<span class="opacity-2 miniText"> ${curso.Profesor}</span></small><span></span></span>
                  </li>
                  </small>
                  `;
                });
              document.getElementById('listaTodos').innerHTML = li;
              
              const numCursos = newArray.length;
              document.getElementById('numCursos').innerHTML = numCursos;
              
              
              class horas extends Array {
              sum(key){
                    return this.reduce((a, b) => a + (b[key] || 0), 0);
                  }
                }

              const totalDuracion = new horas(...newArray);
              const totalHoras= totalDuracion.sum('duracion');

              document.getElementById('total_horas').innerHTML = totalHoras;
              
          });


}; // Cierre del condicional If de redirección

// Filtro de cursos

const d = document;

function searchFilters(input, selector) {
    d.addEventListener("keyup", e => {
        if (e.target.matches(input)){
              
            d.querySelectorAll(selector).forEach(el => (el.textContent.toLowerCase().includes(e.target.value))?el.classList.remove("filtro"):el.classList.add("filtro"));
        }
    }) 
}

searchFilters(".filtro-tarjetas", ".tarjeta");




