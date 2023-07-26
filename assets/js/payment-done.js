var urlPage = window.location.search;
const urlParams = new URLSearchParams(urlPage);
const paramIdCurso = urlParams.get('idcurso');
const paramNombre = urlParams.get('nombre');
const paramEmail = urlParams.get('email');
const paramCurso = urlParams.get('curso');

fetch('../assets/data/superPack.json')
.then(response => response.json() )
.then(data => {
    const newArray = data.filter(filtra =>{
        return filtra.idCurso == paramIdCurso;
})
    

    const {idCurso, codigo, curso, lenguaje, main, nivel, Plataforma, Profesor, duracion, categoria, precio} = newArray[0];

        const codigoCurso = codigo;
        const nombreCurso = curso;
        const nombreLenguaje = lenguaje;
        const tema = main;
        const nivelCurso = nivel;
        const plataforma = Plataforma;
        const profesor = Profesor;
        const duracionCurso = duracion;
        const nombreCategoria = categoria;
        const precioCurso = precio;

        const subtotalPago = precioCurso;
        const totalPago = subtotalPago;

    
    
    
    document.getElementById('nombreCurso').innerHTML = nombreCurso;
    document.getElementById('amount').innerHTML = precioCurso ;
    document.getElementById('nombreCliente').innerHTML = paramNombre;
    document.getElementById('emailCliente').innerHTML = paramEmail;
    
    document.getElementById('codigoCategoria').innerHTML = codigoCurso;

    const num = Math.floor((Math.random() * (100000-5))+5);
    document.getElementById('idCompra').innerHTML = num ;

    // const directoPago = new DirectoPago('qiUKDIrsgaLlhhJbYFlHXqqepziuSxpL');

    // const params = {
    //     currency: 'USD',
    //     country: paramCountry,
    //     amount: precioSuperPack,
    //     text: moneda + " " + valorHoy
    // };

    // directoPago.createCheckout('id-button', params); 
   
    const btnconfirmarPagos = document.createElement('a');
    btnconfirmarPagos.href = 'https://api.whatsapp.com/send/?phone=%2B573242937510&text=Hola.+Envío+confirmacion+de+pago:+*Compra:*+'+nombreCurso+'+*Nombre:*+'+paramNombre+'+*Correo:*+'+paramEmail+'+*Referencia Compra:*+'+num+'.'
    btnconfirmarPagos.classList = 'col-6 mx-auto bg-success rounded text-white text-bolder py-1 move-on-hover shadow';
    btnconfirmarPagos.textContent = "Confirmar Pago";
    document.querySelector('.confirmarPago').appendChild(btnconfirmarPagos);

    const imgCurso = document.createElement('img');
    imgCurso.src = './assets/img/superpack-resumen.png' 
    imgCurso.alt = nombreCurso+ ' de ' + profesor
    imgCurso.title = nombreCurso+ ' de ' + profesor
    imgCurso.style = 'width:70%; padding: 8px;'
    imgCurso.classList = 'p-1 border rounded bg-bluedark'
    document.querySelector('.imgCompra').appendChild(imgCurso);
    


});




