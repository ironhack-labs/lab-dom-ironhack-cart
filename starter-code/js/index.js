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

function createProduct(e) {

}


$calc.onclick = calcAll;

$delete.forEach(elm => {
  /*he puesto el foreach para recorrer el array que se ha creado al hacer queryselectorall y 
  asignando la función a elm.onclick como en el ejemplo que hizo German y como he visto 
  que se hacia el calculo del total*/
  elm.onclick = deleteProduct;
});
