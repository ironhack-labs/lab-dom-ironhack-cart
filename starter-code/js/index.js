var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var createButton = document.getElementById("create")
var subTot = document.querySelector(".subtot span")

function updateSubtot($product) {
  // Iteration 1.1
  var producto = document.querySelector(".pu span").innerText * document.querySelector(".qty input").value
subTot.innerHTML = producto
}

function createRow(){
  const name = document.querySelector('.new td input').innerText
  const price = document.querySelector('.new td .price').value
  let table = document.querySelector("tbody")
  let newRow = document.querySelector("tbody tr").cloneNode(true)
  newRow.querySelector(".name span").innerHTML = name;
  newRow.querySelector(".pu span").innerHTML = price;
  table.appendChild(newRow)
  deleteProduct()
}

function calcAll() {
  updateSubtot()
  // subTotals()
  // Iteration 1.2
}

function deleteProduct(){
  var deleteButton = document.querySelectorAll(".btn-delete")
  for (var i = 0; i< deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", cancItem, false)
  }
}
function cancItem (e) {
e.currentTarget.parentElement.parentElement.remove()
}


deleteProduct()
$calc.onclick = calcAll;
createButton.onclick = createRow;

