var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');
let deleteButtons = document.getElementsByClassName("btn-delete");
let createButton = document.getElementById("create")



function updateSubtot() {
for (let i = 0; i <= document.getElementsByClassName("pu").length -1; i++ )
{ 

  let unitPrice = document.getElementsByClassName("pu")[i].innerText
  let unitQuantity = document.getElementsByClassName("qty")[i].value
  subtot = unitPrice * unitQuantity
document.getElementsByClassName("subtot")[i].innerText = subtot
total += subtot
} 
}


function calcAll() {
total = 0
updateSubtot()
document.getElementsByClassName("total")[0].innerText = total 
}

function deleteHandler(event) {
 let deletedRow = event.currentTarget.parentNode.parentNode
 deletedRow.remove()
}


function create() {

var oldRow = document.getElementsByClassName("product")[0];
;

let newItem = document.getElementsByClassName("new")[0].parentNode.prepend(oldRow.cloneNode(true));
document.getElementsByClassName("name")[document.getElementsByClassName("name").length -1].innerText = document.getElementById("newItem").value
document.getElementsByClassName("pu")[document.getElementsByClassName("name").length -1].innerText = document.getElementById("newPrice").value
}


createButton.onclick = create
calc.onclick = calcAll


deleteButtons[0].onclick = deleteHandler
deleteButtons[1].onclick = deleteHandler







