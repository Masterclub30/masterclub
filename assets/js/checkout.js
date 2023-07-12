
var urlPage = window.location.search;
const urlParams = new URLSearchParams(urlPage);
const paramCurso = urlParams.get('idCurso');

fetch('./assets/data/superPack.json')
.then(response => response.json() )
.then(data => {
    const newArray = data.filter(filtra =>{
        return filtra.idCurso == paramCurso;
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
    document.getElementById('pago').innerHTML = precioCurso ;
    document.getElementById('subtotalPago').innerHTML = subtotalPago;
    document.getElementById('totalPago').innerHTML = totalPago;
    document.getElementById('duracion').innerHTML = duracionCurso;
    document.getElementById('profesor').innerHTML = profesor;
    document.getElementById('nivel').innerHTML = nivelCurso;



    // const directoPago = new DirectoPago('qiUKDIrsgaLlhhJbYFlHXqqepziuSxpL');

    // const params = {
    //     currency: 'USD',
    //     country: paramCountry,
    //     amount: precioSuperPack,
    //     text: moneda + " " + valorHoy
    // };

    // directoPago.createCheckout('id-button', params); 

    


});



    
// Botónes de pago de Paypal
var urlPrice = window.location.search;
const urlParams2 = new URLSearchParams(urlPrice);
const paramPrecio = urlParams2.get('precio');
const product = urlParams2.get('Curso');
const nombreCliente = "Fredy Moreno";
const emailCliente = "giovanny58@gmail.es";

function initPayPalButton() {
    paypal.Buttons({
        style: {
        shape: 'pill',
        color: 'gold',
        layout: 'vertical',
        label: 'paypal',
        
        },

        // createOrder: function(data, actions) {
        // return actions.order.create({
        //     purchase_units: [{
        //         "amount":{
        //             "currency_code":"USD",
        //             "value":paramPaypal
        //             }
        //          },
        //     ]
        // });
        // },

        createOrder: (data, actions) => {
            return actions.order.create({
               "purchase_units": [{
                  "amount": {
                    "currency_code": "USD",
                    "value": paramPrecio,
                    "breakdown": {
                      "item_total": {  /* Required when including the items array */
                        "currency_code": "USD",
                        "value": paramPrecio
                      }
                    }
                  },
                  "items": [
                    {
                      "name": product, /* Shows within upper-right dropdown during payment approval */
                      "description": emailCliente, /* Item details will also be in the completed paypal.com transaction view */
                      "unit_amount": {
                        "currency_code": "USD",
                        "value": paramPrecio
                      },
                      "quantity": "1"
                    },
                  ]
                }]
            });
          },

        onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
            
            // Full available details
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            // Show a success message within this page, e.g.
            // const element = document.getElementById('paypal-button-container');
            // element.innerHTML = '';
            actions.redirect('payment-done.html?nombre='+nombreCliente+'&email='+emailCliente+'&idcurso='+paramCurso+'&curso='+product);

            // Or go to another URL:  actions.redirect('thank_you.html');
            
        });
        },

        onError: function(err) {
        console.log(err);
        }
    }).render('#paypal-button-container');
    
    }
    
    initPayPalButton();



