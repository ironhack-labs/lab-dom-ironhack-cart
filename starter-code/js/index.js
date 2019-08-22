const calculatePriceButton = document.getElementById('calc-prices-button');
const createItemButton = document.getElementById('new-item-create');
const deleteButtons = document.getElementsByClassName('btn-delete');
const input = document.querySelectorAll('.get-price');
const unitPrice = document.querySelectorAll('.unit-price')
const totalPrice = document.querySelectorAll('.total-price')
const parent = document.querySelector('.allproducts')
const contener = document.querySelectorAll('.contener')
const productNew = document.querySelectorAll('.product-new')
const buttonNew = document.querySelector('.btn-create')

console.log(input)
console.log(deleteButtons)
calculatePriceButton.onclick = function () {

  // let cuantos;
  let inputv = []
  let unit = []
  let total = []


  for (let products = 0; products < unitPrice.length; products++) {
    inputv[products] = parseFloat(input[products].value)
    unit[products] = parseFloat(unitPrice[products].textContent)

    total[products] = inputv[products] * unit[products]
    console.log(total[products])

    //totalPrice[products].innerHTML
    totalPrice[products].innerHTML = total[products]
    //total[products]=totalPrice.innerHTML = inputv * unit
    console.log(inputv)
    console.log(unit)

    let todoTotal = total.reduce((act, acc) => {
      return act + acc
    })
    console.log(todoTotal)
    document.getElementById("the-total").innerHTML = todoTotal

  }





}


// for(i=0; i<deleteButtons.length; i++){  
// deleteButtons[i].onclick=function(){
//      parent.removeChild(contener[i])
// }}


for (let children = 0; children < deleteButtons.length; children++) {
  deleteButtons[children].onclick = function () {
    parent.removeChild(contener[children])
  }
}





buttonNew.onclick = function () {
  let newData = productNew[0].value
  let newData2 = productNew[1].value
  let introProduct = `
  <div class="contener one">
    <span class="product">${newData}</span>
    <span class="unit-price one">${newData2}</span>
    <input class="get-price one" type="number"></input>
    <span class="total-price one">${todoTotal}</span>
    <button class="btn-delete one">Delete</button>
  </div>`
  parent.insertAdjacentHTML("afterend", introProduct)


}

// function createQuantityInput(container){
//   let nuevoTexto = document.createElement("label")
//   nuevoTexto.setAttribute("for","quantity")
//   container.appendChild(nuevoTexto).innerHTML = "QTY "

//   let nuevoInput = document.createElement("input")
//   nuevoInput.setAttribute("class","qty")
//   nuevoInput.setAttribute("type","input")
//   nuevoInput.setAttribute("id","quantity")
//   container.appendChild(nuevoInput)
// }

// deleteButtons[0].onclick = function () {

// }

/*
function suma()


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



 var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.querySelector('.btn-delete');
  var unitPrice = document.getElementById('unit-price');
  var totalPrice = document.getElementById('total-price');

 const input = document.querySelector('.get-price')
 

 
 document.querySelector('calc-prices-button').onclick = () => {
   totalPrice.innerHTML=input.value*unitPrice
   console.log('holiiiii')
 }




function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var unitPrice = document.getElementById('unit-price');
  var totalPrice = document.getElementById('total-price');

 const input = document.querySelector('.get-price')
 


 
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;


   todo.innerText = input.value 
   input.value = ''




  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
} */