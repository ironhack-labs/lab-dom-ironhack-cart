var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
var $create = document.getElementById("create");
let $delete = document.getElementsByClassName("btn btn-delete");


function updateSubtot($product) {
  // Iteration 1.1
  let $pu = document.querySelectorAll(".pu span")[$product].textContent;

  let $qty = document.querySelectorAll(".qty input")[$product].value;
  let subtotal = $pu * $qty;
  let $subtotal = document.querySelectorAll(".subtot span")[$product];

  $subtotal.textContent = subtotal;

  return subtotal;
}

// Iteration 1.2

function calcAll() {
  let precioUni = document.querySelectorAll(".subtot span");

  let resultado = 0;

  for (let i = 0; i < precioUni.length; i++) {
    resultado += updateSubtot(i);
  }

  let precioTot = document.querySelectorAll("h2 span")[0];
  precioTot.innerHTML = resultado;

  return precioTot;
}


function createRow() {
  const name = document.querySelectorAll(".new input")[0].value;
  const price = document.querySelectorAll(".new input")[1].value;
  let table = document.querySelector("tbody");
  let newRow = document.querySelector("tbody tr").cloneNode(true);
  newRow.querySelector(".name span").innerHTML = name;
  newRow.querySelector(".pu span").innerHTML = price;
  table.appendChild(newRow);
  deleteItem();
}

function deleteItem() {
  for (let i = 0; i < $delete.length; i++) {
    $delete[i].onclick = e => {
      if ($delete.length === 1) {
        alert(`You need to have 1 item at least!!`);
        return $cart
      } else {
        e.currentTarget.parentElement.parentElement.remove();
        calcAll();
      }
    };
  }
}

$calc.onclick = calcAll;
$create.onclick = createRow;
