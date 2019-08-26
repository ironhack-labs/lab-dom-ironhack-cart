let name = document.querySelectorAll(".name span")
let price = document.querySelectorAll(".price span")
let form = document.querySelectorAll(".formulario input")
let total = document.querySelectorAll(".total")
let deleteBtn = document.querySelectorAll(".btn-delete")
let calculateBtn = document.querySelectorAll(".calculate")[0]
let final = document.querySelectorAll("h2")[0]
let container = document.querySelectorAll(".container")
let anadirBtn = document.querySelectorAll(".btn-anadir")[0]
let grande = document.querySelectorAll(".grande")[0]
let newProd
let contador


//CALULA LOS PRECIOS
calculateBtn.addEventListener("click", function () {
  contador = 0
  for (let i = 0; i < container.length; i++) {
    total[i].innerHTML = parseInt(price[i].innerHTML) * parseInt(form[i].value)
    contador += parseInt(price[i].innerHTML) * parseInt(form[i].value)
  }
  final.innerHTML = "Total Price: $" + contador
})


//ELIMINA ELEMENTOS
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", function () {
    let x = this.parentElement.parentElement
    x.parentElement.removeChild(x)
    resetVar()
  })

}

//NO SE POR QUE PERO EL CONSOLE LOG LO HACE Y LUEGO SE VA MUY RAPIDO
//Y SI PONGO QUE CREE EL DIV.CONTAINER HACE LO MISMO ,ES COMO QUE SE CREA Y LUEGO SE BORRA SOLO

anadirBtn.addEventListener("click",function () {
  console.log("hola")
  
  // newProd = document.querySelectorAll(".anadir input")
  // createElement()
  // name[name.length - 1].innerHTML = newProd[0].value
  // price[name.length - 1].innerHTML = newProd[1].value
})





//RESETEA LAS VARS DE ELEMENTOS
function resetVar() {
  container = document.querySelectorAll(".container")
  name = document.querySelectorAll(".name span")
  form = document.querySelectorAll(".formulario input")
  price = document.querySelectorAll(".price span")
  total = document.querySelectorAll(".total")
}



// function createElement() {
//   let newDiv = document.createElement("div")
//   let newSpan = document.createElement("span")
//   console.log(newDiv)
//   grande.appendChild(newDiv)
//   newDiv.classList.add("container")

// }



function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
