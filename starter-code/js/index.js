
var elemCarritoNumQ;
var elemCarritoMonto;

window.onload = function () {
    // var calculatePriceButton = document.getElementById('calc-prices-button');
    // var createItemButton = document.getElementById('new-item-create');
    // var deleteButtons = document.getElementsByClassName('btn-delete');
    //
    // calculatePriceButton.onclick = getTotalPrice;
    // createItemButton.onclick = createNewItem;
    //
    // for(var i = 0; i<deleteButtons.length ; i++){
    //   deleteButtons[i].onclick = deleteItem;
    // }

    var carrito = {
        listaItems: [],
        numItems: null,
        granTotal: null,
        calcularTotal: ( ) => {
            let qTotal = 0;
            let montoTotal = 0;


            carrito.listaItems
                .forEach((item => {

                        let q = parseInt(item.element.value);
                        let pu = item.pu;
                        let subtotal = q * pu;

                        qTotal += q;
                        montoTotal += subtotal;

                        item.setSubTotal(subtotal);

                    })
                );

            elemCarritoNumQ.innerHTML = qTotal.toString();
            elemCarritoMonto.innerHTML = montoTotal.toString();


        }
    };


    function onChangeTxt(event) {
        carrito.calcularTotal( );
    };

    /* pra guardar la lisa de inputs txt*/


    for (let txt of document.getElementsByClassName('txtQ')) {

        txt.onchange = onChangeTxt;

        //Buscar el label para subtotal
        let elemSubtotal=txt.parentNode.querySelector(".subtotal");


        carrito.listaItems.push(
            {
                element: txt,
                pu:  parseFloat(txt.dataset.pu),
                setSubTotal:(subtotal=>elemSubtotal.innerHTML= "$ " + subtotal.toString())
            }
        );
    }

    elemCarritoNumQ = document.getElementById("labCarritoNumQ");
    elemCarritoMonto = document.getElementById("labCarritoMonto");

};

console.log('LOADED');