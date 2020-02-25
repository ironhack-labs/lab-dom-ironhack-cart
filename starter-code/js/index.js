var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
var $create = document.getElementById('create');
var $delete = document.getElementsByClassName('btn btn-delete');

let prodPrice = document.querySelectorAll(".pu span");
let prodQty = document.querySelectorAll(".qty input");
let table = document.querySelector("tbody");

// let whatever = document.querySelectorAll('.subtot span')


function updateSubtot($product) {
  let result = prodPrice[$product].innerHTML * prodQty[$product].value;

  return (document.querySelectorAll(".subtot span")[
    $product
  ].innerHTML = result);

  // return subTotalPost;
  // Iteration 1.1
}

function calcAll() {
  allSubs();
  sumSubs();


  return document.querySelector("h2 span").innerHTML = sum;

  // Iteration 1.2
}
$calc.onclick = calcAll;
$create.onclick = addProduct;

function addProduct() {
  const name = document.querySelector(".new input").value;
  const price = document.querySelectorAll(".new input")[1].value;

  let newRow = document.querySelector("tbody tr").cloneNode(true);

  newRow.querySelector(".name span").innerHTML = name;
  newRow.querySelector(".pu span").innerHTML = price;

  table.appendChild(newRow);

  // setDeleteEventListener()
}


function allSubs() {
  for (i = 0; i <= table.rows.length - 1; i++) {
    updateSubtot(i);
  }
}

let sum = 0;
function sumSubs() {
  for (i = 0; i< table.rows.length; i++) {
    const rowValue = document.querySelectorAll('.subtot span')[i].innerHTML;
    sum = sum + parseInt(rowValue)    
  }
  return sum;
}

// $delete.onclick = document.getElementById('cart').deleteRow(????)


// El cálculo de subtotales y precios funcionan hasta el momento en el que se añade un producto nuevo con el botón, después ya no. 