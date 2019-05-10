function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

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
        calcularTotal: () => {
            let qTotal = 0;
            let montoTotal = 0;

            carrito.listaItems
                .forEach((item => {

                        let q = parseInt(item.element.value);
                        let pu = item.pu;
                        let monto = q * pu;

                        qTotal += q;
                        montoTotal += monto;
                    })
                );


            console.log(`num items ${qTotal}`);
            console.log(`monto total  ${montoTotal}`);

            elemCarritoNumQ.innerHTML = qTotal.toString();
            elemCarritoMonto.innerHTML = montoTotal.toString();

        }
    };


    function onChangeTxt(event) {
        // let valor=this.value;
        // console.log(event);
        carrito.calcularTotal();
    };

    /* pra guardar la lisa de inputs txt*/


    for (let txt of document.getElementsByClassName('txtQ')) {

        txt.onchange = onChangeTxt;

        //Buscar el data


        carrito.listaItems.push(
            {
                element: txt,
                pu:  parseFloat(txt.dataset.pu)
            }
        );
    }

    elemCarritoNumQ = document.getElementById("labCarritoNumQ");
    elemCarritoMonto = document.getElementById("labCarritoMonto");

};

console.log('LOADED');