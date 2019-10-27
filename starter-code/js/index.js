//Variables inciales
var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $product = document.querySelectorAll(".product");
let $delete = document.querySelector("body");
let $newProduct = document.querySelector("#cart");

//Eventos
$calc.onclick = calcAll;
$delete.addEventListener("click", removeProduct);
$newProduct.addEventListener("click", createProduct);

//Funciones
function updateSubtot($product) {
  // Iteration 1.1
  let total = [];
  for (let i = 0; i < $product.length; i++) {
    let priceUnit = $product[i].querySelector(".pu span").innerText;
    let quantity = $product[i].querySelector(".qty input").value;
    let subTotal = priceUnit * quantity;
    total.push(subTotal);
    console.log(subTotal);
  }
  return total;
}

function calcAll() {
  // Iteration 1.2

  //Actualiza SubTotal de cada Producto.
  let subTotal = updateSubtot($product);
  for (let i = 0; i < subTotal.length; i++) {
    let changeSubtot = $product[i].querySelector(".subtot span");
    changeSubtot.innerText = subTotal[i];
  }
  //Iteration 3
  //Suma y Actualiza el Total.
  let total = 0;
  let totalNum = document.querySelectorAll(".product .subtot > span");
  for (let i = 0; i < totalNum.length; i++) {
    total += parseFloat(totalNum[i].textContent);
  }
  document.querySelector("#total").innerText = total;
}

//Remove Iteration 4
function removeProduct(e) {
  let product = e.target.parentNode.parentNode;
  if (e.target.matches(".btn-delete")) {
    console.log("funciona!")
    product.parentNode.removeChild(product);
  }
}
//Create Iteration 5
function createProduct(e) {

  let tbody = document.querySelector("tbody");

  if (e.target.matches("#create")) {
    console.log("Vamos que si Funciona!")
    let dataName = document.querySelector("#inputName").value;
    let dataNum = parseInt(document.querySelector("#inputNum").value).toFixed(2);
    let template = document.querySelector("template");
    let useTemplate = document.importNode(template.content, true);

    useTemplate.querySelector(".name span").innerText = dataName;
    useTemplate.querySelector(".pu span").innerText = dataNum;

    tbody.insertBefore(useTemplate, tbody.lastChild)

    $product = document.querySelectorAll(".product");
  }
}
