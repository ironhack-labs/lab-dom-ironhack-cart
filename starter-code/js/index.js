var elemCarritoNumQ;
var elemCarritoMonto;
var elemCarritoBlockItems;
var carrito;

window.onload = function () {

    carrito = {
        listaProductos: [],
        numItems: null,
        granTotal: null,
        calcularTotal: () => {
            let qTotal = 0;
            let montoTotal = 0;

            carrito.listaProductos
                .forEach((item => {

                        let q = item.getQ();
                        let pu = item.getPU();
                        let subtotal = q * pu;

                        qTotal += q;
                        montoTotal += subtotal;

                        item.setTextoSubTotal(subtotal);

                    })
                );

            carrito.numItems = qTotal;
            carrito.granTotal = montoTotal;

        },
        getMaxId: () => {
            /*necesitamos un Id para poder eliminar el item del carrito - deberia ser un pk del producto */
            let maxIdItem = 0;

            carrito.listaProductos
                .forEach(o => {

                    if (o.id > maxIdItem) {
                        maxIdItem = o.id;
                    }

                });

            return maxIdItem;
        },
        factoryItem: (contenedor, pu, q, nombre, desc, urlImg) => {

            urlImg = urlImg || 'http://placehold.it/120x80';
            desc = desc || `Superawesome ${nombre}`;

            let puTxt = pu; /*TODO poner el precio con formato currency*/

            let newIdItem = carrito.getMaxId() + 1;


            let htmlNewItem = `  
            
                <div class="col-12 col-sm-12 col-md-2 text-center" style="padding-bottom: 10px">
                    <img class="img-responsive" src="${urlImg}" alt="prewiew" width="120" height="80">
                </div>

                <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-5">
                    <h4 class="product-name nombre"><strong>${nombre}</strong></h4>
                    <h4>
                        <small>${desc}</small>
                    </h4>
                </div>
                
                 <div class="col-12 col-sm-12 text-sm-center  col-md-5 text-md-right row">
                    <div class="col-3 col-sm-2 col-md-3 text-md-right" title="Unit Price" style="padding-top: 5px">
                        <strong class="pu">$ ${puTxt} </strong>
                    </div>
                    <div class="col-9 col-sm-10 col-md-9">
                        <span>X</span>
                        <input type="text" value="${q}" class="form-control txtQ" data-pu="${pu}" title="Quantity"/>
                        <span >  Subtotal :   </span>
                         <span class="subtotal">${q * pu}</span>
                        <button type="button" class="btn btn-outline-danger btn-xs cmdDelete"
                                style="float: right; margin-left: 10px"
                                data-iditem="${newIdItem}"
                                
                        >
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>            

            `;


            let newItemCarrito = document.createElement("div");
            newItemCarrito.innerHTML = htmlNewItem;
            newItemCarrito.className = "row itemCarrito";

            /*asociar elmentos del itemCarrito a nuestro modelo "carrito" */


            //Buscar el label para subtotal
            let elemSubtotal = newItemCarrito.querySelector(".subtotal");
            let elemTxtQ = newItemCarrito.querySelector(".txtQ");

            elemTxtQ.onchange = onChangeTxt;

            carrito.listaProductos.push(
                {
                    id: newIdItem,
                    elementItemCarrito: newItemCarrito,
                    getPU: () => {
                        return pu;
                    },
                    getQ: () => {
                        return parseInt(elemTxtQ.value);
                    },
                    setTextoSubTotal: (subtotal) => {
                        elemSubtotal.innerHTML = "$ " + subtotal.toString();
                    }

                }
            )
            ;


            let elemCmdDelete = newItemCarrito.querySelector(".cmdDelete");

            elemCmdDelete.onclick = onDeleteItem;

            contenedor.appendChild(newItemCarrito);


        },
        removeItem: (contenedor, idItem) => {

            /* primero quitamos el elemnto del dom*/

            let elemItemCarrito = carrito.listaProductos
                .filter(o => {
                    return o.id === idItem
                }).map(o => {
                    return o.elementItemCarrito;
                })[0]
            ;

            contenedor.removeChild(elemItemCarrito);

            /* segundo - quitamos el elemento del array */
            let index = carrito.listaProductos.findIndex(o => {
                return o.id === idItem
            });

            carrito.listaProductos.splice(index, 1);

            /*mandamos a recalcular el carrito*/
            actualizarTotalCarrito();

        }
    };


    function actualizarTotalCarrito() {
        carrito.calcularTotal();
        elemCarritoNumQ.innerHTML = carrito.numItems.toString();
        elemCarritoMonto.innerHTML = carrito.granTotal.toString();
    }

    function onChangeTxt(event) {
        actualizarTotalCarrito();
    }

    function onDeleteItem(event) {
        let idItem = this.dataset.iditem;
        /*el dataset tiene todos los datos como stirng y guardamos el id como int - si pasamos string no lo encontrará*/
        idItem = parseInt(idItem);
        carrito.removeItem(elemCarritoBlockItems, idItem);
    }

    elemCarritoNumQ = document.getElementById("labCarritoNumQ");
    elemCarritoMonto = document.getElementById("labCarritoMonto");
    elemCarritoBlockItems = document.getElementById("panItems");

    carrito.factoryItem(elemCarritoBlockItems, 25, 1, 'Iron Buble-head');
    carrito.factoryItem(elemCarritoBlockItems, 15, 2, 'Iron T-Shirt');
    actualizarTotalCarrito();
};
