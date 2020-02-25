var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

let prodPrice = document.querySelectorAll(".pu span");
let prodQty = document.querySelectorAll(".qty input");

function updateSubtot($product) {
  let result = prodPrice[$product].innerHTML * prodQty[$product].value;

  return (document.querySelectorAll(".subtot span")[
    $product
  ].innerHTML = result);

  // return subTotalPost;
  // Iteration 1.1
}

function calcAll() {

  let subTotSum = updateSubtot(0);

  return document.querySelector("h2 span").innerHTML = subTotSum;

  // Iteration 1.2
}
$calc.onclick = calcAll;


function addProduct() {



}

function createRow(){

  const name = document.querySelector('.new input').value
  const price = document.querySelectorAll('.new input')[1].value

  let table = document.querySelector("tbody")
  let newRow = document.querySelector("tbody tr").cloneNode(true)
  
  newRow.querySelector(".name span").innerHTML = name;
  newRow.querySelector(".pu span").innerHTML = price;
  
  table.appendChild(newRow)

  // setDeleteEventListener()
}