var elemCarritoNumQ;
var elemCarritoMonto;
var elemCarritoBlockItems;

window.onload = function () {

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
                        let subtotal = q * pu;

                        qTotal += q;
                        montoTotal += subtotal;

                        item.setSubTotal(subtotal);

                    })
                );

            carrito.numItems = qTotal;
            carrito.granTotal = montoTotal;

        },
        getMaxId: () => {
            /*necesitamos un Id para poder eliminar el item del carrito - deberia ser un pk del producto */
            let maxIdItem = 0;

            carrito.listaItems
                .forEach(o => {

                    if (o.id > maxIdItem) {
                        maxIdItem = o.id;
                    }

                });

            return maxIdItem;
        },
        factoryItem: (contenedor,pu, nombre, desc, urlImg) => {

            urlImg = urlImg || 'http://placehold.it/120x80';
            desc = desc || `Superawesome ${nombre}`;

            let puTxt = pu;

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
                        <input type="text" value="0" class="form-control txtQ" data-pu="${pu}" title="Quantity"/>
                        <span >  Subtotal :   </span>
                         <span class="subtotal">$0</span>
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

            /*asociar eventos al item*/


            //Buscar el label para subtotal
            let elemSubtotal = newItemCarrito.querySelector(".subtotal");
            let elemTxtQ = newItemCarrito.querySelector(".txtQ");

            elemTxtQ.onchange = onChangeTxt;

            carrito.listaItems.push(
                {
                    id: newIdItem,
                    element: elemTxtQ,
                    pu: pu,
                    setSubTotal: (subtotal => elemSubtotal.innerHTML = "$ " + subtotal.toString())
                }
            );


            let elemCmdDelete = newItemCarrito.querySelector(".cmdDelete");

            elemCmdDelete.onclick = onDeleteItem;

            contenedor.appendChild(newItemCarrito);


        },
        removeItem: (idItem) => {
            let index = carrito.listaItems.indexOf(o => {
                return o.id === idIem
            });

            console.log(index);

            carrito.listaItems.splice(index, 1);
        }
    };


    function onChangeTxt(event) {
        carrito.calcularTotal();
        elemCarritoNumQ.innerHTML = carrito.numItems.toString();
        elemCarritoMonto.innerHTML = carrito.granTotal.toString();
    };

    function onDeleteItem(event) {

        /*esta a 3 niveles; si se cambia el html del carrito se debe actualizar esto*/
        let rowItem = this.parentElement.parentElement.parentElement;
        elemCarritoBlockItems.removeChild(rowItem);

        /* quitar el elemtno del array*/
        let idItem = this.dataset.iditem;
        carrito.removeItem(idItem);

    }


    elemCarritoNumQ = document.getElementById("labCarritoNumQ");
    elemCarritoMonto = document.getElementById("labCarritoMonto");
    elemCarritoBlockItems = document.getElementById("panItems");


    carrito.factoryItem(elemCarritoBlockItems,25, 'Iron Buble-head');
    carrito.factoryItem(elemCarritoBlockItems,15, 'Iron T-Shirt');


};


