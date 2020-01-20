var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

/*he usado queryselectorall para pedir los botones delete del html 
(ya que hay varios y tienen la clase btn-delete), me he fijado en como se creaba 
la variable para calcular el total y he usado queryselectorAll ya que no se puede 
usar Id porque son varios y no tiene id*/
var $delete = document.querySelectorAll(".btn-delete");

/*he usado getelmentbyid para traerme el boton create, usando como en calc de argumento el id*/
var $create = document.getElementById("create");
//console.log($create);

function updateSubtot($product) {
  // Iteration 1.1
  console.log($product);
  let price = $product.querySelector(".pu").children[0].innerHTML;
  let quantity = $product.querySelector(".qty input").value;
  let result = price * quantity;
  $product.querySelector(".subtot").children[0].innerHTML = result;

  return result;
}
function calcAll() {
  let products = document.querySelectorAll(".product");
  console.log(products);

  let total = 0;
  products.forEach(product => {
    // console.log(product)
    const subTotalProduct = updateSubtot(product);
    total += subTotalProduct;
  });
  document.querySelector("h2 span").innerHTML = total;

  // Iteration 1.2
}

function deleteProduct(e) {
  //Con esto se busca el botón al que le hemos hecho click en web y la guarda en esta variable
  let delButton = e.currentTarget;

  /*lo que se guarda en esta variable es la fila y al ponerle 2 veces parentNode accedemos 
  a la celda y después a la fila (que es la fila del producto entero)*/
  let parentRow = delButton.parentNode.parentNode;

  /* lo que se guarda en esta variable es el tbody ya que al ponerle 1 vez parentNode 
  accedemos a el(que es el carrito entero)*/
  let parentBody = parentRow.parentNode;
  //console.log(parentRow);

  /*al usar removechild como indican en la documentación del github, al borrar el hijo de 
  parent.body, borramos la fila que le pasamos como argumento*/
  parentBody.removeChild(parentRow);
}

/* Esta función recibe 1 evento como parametro al darle al boton create*/
function createProduct(e) {
  //console.log("nuevo producto");

  //Estas variables contienen los valores de los inputs del nuevo producto
  let nameNewProduct = document.querySelectorAll(".new input")[0].value;
  let priceNewProduct = document.querySelectorAll(".new input")[1].value;
  //console.log(nameNewProduct, priceNewProduct);


  let newRow = document.createElement("tr");

  //De esta forma le ponemos la clase product a la fila
  newRow.setAttribute("class", "product");

  //de esta forma se crea cada celda
  let newCell1 = document.createElement("td");
  newCell1.setAttribute("class", "name");

  // Crea el span con el nombre del producto dentro de la celda
  let newName = document.createElement("span");
  newName.innerHTML = nameNewProduct;
  newCell1.appendChild(newName);

  let newCell2 = document.createElement("td");
  newCell2.setAttribute("class", "pu");

  //Crea el span con el nombre de precio dentro de la celda y antes de meterselo al hijo, metemos el $ como string
  let newPrice = document.createElement("span");
  newPrice.innerHTML = priceNewProduct;
  newCell2.innerHTML = "$";
  newCell2.appendChild(newPrice);

  let newCell3 = document.createElement("td");
  newCell3.setAttribute("class", "qty");
  //Crea el label y el input para meterselo al padre que es la celda Quantity
  let newLabel = document.createElement("label");
  let newQty = document.createElement("input");
  newQty.setAttribute("type", "number");
  newQty.setAttribute("value", "0");
  newQty.setAttribute("min", "0");
  newLabel.appendChild(newQty);
  newCell3.appendChild(newLabel);

  let newCell4 = document.createElement("td");
  newCell4.setAttribute("class", "subtot");
  //Crea el span, que contienen el $ y la cantidad del subtotal de la nueva celda
  let newSubtot = document.createElement("span");
  newSubtot.innerHTML = "0";
  newCell4.innerHTML = "$";
  newCell4.appendChild(newSubtot);

  let newCell5 = document.createElement("td");
  newCell5.setAttribute("class", "rm");
  //Crea el botón con sus atributos (class y btn ...) y el evento
  let newDelete = document.createElement("button");
  newDelete.setAttribute("class", "btn btn-delete");
  newDelete.innerHTML = "Delete";
  newDelete.onclick = deleteProduct;
  newCell5.appendChild(newDelete);

  //se añaden las celdas dentro de la fila
  newRow.appendChild(newCell1);
  newRow.appendChild(newCell2);
  newRow.appendChild(newCell3);
  newRow.appendChild(newCell4);
  newRow.appendChild(newCell5);



  //con esto se inserta un tr nuevo (osea una fila)
  $cart.appendChild(newRow);

}


$calc.onclick = calcAll;

$delete.forEach(elm => {
  /*he puesto el foreach para recorrer el array que se ha creado al hacer queryselectorall y 
  asignando la función a elm.onclick como en el ejemplo que hizo German y como he visto 
  que se hacia el calculo del total*/
  elm.onclick = deleteProduct;
});

//esto dispara el evento del botón create
$create.onclick = createProduct;
