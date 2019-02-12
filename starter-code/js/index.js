
//FUNCION DE BORRAR
function deleteItem(e) {
  console.log("entra");
  var productDelete = e.currentTarget.parentNode.parentNode; //Selecciona La linea a Borrar
  var parent = productDelete.parentNode; //Le definimos el Padre que contiene a la línea a borrar
  parent.removeChild(productDelete); //Aplicamos Metodo.Se traduce como quitame este hijo de este Padre?
  getTotalPrice(); // Ejecuta la funcion de volver a calcular el precio
}



// getTotal Price() HACE UN BUCLE POR CADA LINEA DE PRODUCTO PARA OBTENER EL PRECIO
function getTotalPrice() {
  var totalPrice = 0;
  for (var i = 0;i < document.getElementsByClassName("product-line").length;i++) {
    var productPrice = document.getElementsByClassName("product-price")[i].innerHTML;
    var productQuantity = document.getElementsByClassName("quantity")[i].value;
    var totalLinePrice = parseFloat(productPrice) * productQuantity;
    //Asignamos a la etiqueta el resultado de la multiplicion de Precio*Cantidad
    document.getElementsByClassName("product-line-price")[i].innerHTML = totalLinePrice.toFixed(2);
    //Sumamos en cada vuelta de bucle, el valor de cada articulo, que haya en la cesta
    totalPrice += totalLinePrice;
  }
  document.querySelector(".total-price").innerHTML = totalPrice.toFixed(2);
  //Aqui es importante que solo haya una clase ".total-price", puesto que el .querySelector, busca todos y arroja
  // la primera coincidencia.
}



//ENTRAMOS A CREAR LOS NUEVOS ARTICULOS

function createNewItem() { //CREA NUEVO ITEM, Y DESENCADENA LA FUNCION QUE CREA LA FILA
  var newProductName = document.querySelector(".product-name-input").value;
  var newProductPrice = document.querySelector(".product-price-input").value;
  createNewItemRow(newProductName, newProductPrice);
  document.querySelector(".product-name-input").value = "";
  document.querySelector(".product-price-input").value = "";
}
          //CREA LA FILA, Y DESENCADENA LA FUNCION QUE CREA LOS ELEMENTOS DE ESTA
          function createNewItemRow(itemName, itemUnitPrice) { 
          var divProductLine = document.createElement("div");
          divProductLine.setAttribute("class", "product-line");
          var before = document.querySelector(".product-line-input");
          var parent = document.querySelector("body");
          parent.insertBefore(divProductLine, before);
          createItemNode(itemName, divProductLine);
          createPriceNode(itemUnitPrice, divProductLine);
          createQuantityNode(divProductLine);
          createTotalPriceNode(divProductLine);
          createDeleteButton(divProductLine);
        }
                  //FUNCION PARA CREAR NODO ARTICULO NUEVO
                  function createItemNode(itemData, parent) { 
                    var divProductName = document.createElement("div");
                    var spanProductName = document.createElement("span");
                    spanProductName.classList.add("product-name");
                    spanProductName.innerText = itemData;
                    divProductName.appendChild(spanProductName);
                    parent.appendChild(divProductName);
                  }

                  //FUNCION PARA CREAR NODO PRECIO NUEVO
                  function createPriceNode(itemData, parent) { 
                    var divProductPrice = document.createElement("div");
                    var spanProductPrice = document.createElement("span");
                    spanProductPrice.classList.add("product-price");
                    spanProductPrice.innerText = itemData;
                    divProductPrice.innerText = "$";
                    divProductPrice.appendChild(spanProductPrice);
                    parent.appendChild(divProductPrice);
                  }

                  //FUNCION PARA CREAR NODO QUANTITY
                  function createQuantityNode(parent) { 
                    var divProductQuantity = document.createElement("div");
                    var labelProductQuantity = document.createElement("label");
                    var inputProductQuantity = document.createElement("input");
                    labelProductQuantity.setAttribute("for", "quantity");
                    labelProductQuantity.innerText = "QTY";
                    createQuantityInput(inputProductQuantity);
                    divProductQuantity.appendChild(labelProductQuantity);
                    divProductQuantity.appendChild(inputProductQuantity);
                    parent.appendChild(divProductQuantity);
                  }

                            //FUNCION QUE CREA LOS DIFERENTES ATRIBUTOS DEL NODO QUANTITY
                            function createQuantityInput(input) {
                              input.setAttribute("type", "number"); //Crea un input de type="number"
                              input.setAttribute("class", "quantity"); //Crea una class "quantity"
                              input.setAttribute("value", "0"); //Crea un atributo Value="0";
                            }


                   //FUNCION PARA CREAR EL NODO DONDE VA A APARECER EL TOTAL DE ESE ARTICULO
                  function createTotalPriceNode(parent) {
                    var divTotalProductPrice = document.createElement("div"); //Creas Div que contiene al span. EN MEMORIA
                    var spanTotalProductPrice = document.createElement("span");  //Creas el Span. EN MEMORIA
                    spanTotalProductPrice.classList.add("product-line-price"); //Le añades la "product-line-price". EN MEMORIA
                    spanTotalProductPrice.innerText = "0.00"; //Le añades el contenido al span, a traves de la variable. EN MEMORIA
                    divTotalProductPrice.innerText = "$";  //Le añades el contenido al div, a traves de la variable. EN MEMORIA
                    divTotalProductPrice.appendChild(spanTotalProductPrice); //Creas el nodo Span(hijo) por debajo del div(Padre).
                    parent.appendChild(divTotalProductPrice);
                  }

                  //FUNCION PARA CREAR NODO BOTON BORRADO
                  function createDeleteButton(parent) { 
                    var divDeleteButton = document.createElement("div"); //Creas Div que contiene al Button.EN MEMORIA
                    var buttonDeleteButton = document.createElement("button"); //Creas el "Button Delete";EN MEMORIA
                    buttonDeleteButton.classList.add("btn", "btn-delete"); //Añades 2 tipos de clases.EN MEMORIA
                    buttonDeleteButton.innerText = "Delete"; //Añades el texto al Boton.EN MEMORIA
                    divDeleteButton.appendChild(buttonDeleteButton); //Creas el Boton en pantalla
                    parent.appendChild(divDeleteButton); //Creas el Div en pantalla
                    buttonDeleteButton.addEventListener("click", deleteItem); //Le añades el evento de escucha para cuando Pulsen,
                    //y acciones la funcion de borrado
                    }






window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice; //Cuando se hace click, se ejecuta la funcion getTotalPrice
  createItemButton.onclick = createNewItem; //Cuando damos a boton de crear, se ejecuta la funcion.

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem; //porque Si le ponemos el parentesis a deleteItem, el programa
  }
};
var deleteButtons = document.getElementsByClassName("btn-delete");
var productUnitPrice = document.getElementsByClassName("product-line");
// var pUP=[].slice.call(productUnitPrice);
//Poniendo esto en consola se con que estoy jugando
console.log(productUnitPrice.item(0).innerHTML);
