document.getElementById('shopping').onclick = function(e){
  if(e.target.className.includes('btn-delete')){
    e.target.parentNode.remove()
  }
}

function createNewItemRow(itemName, itemUnitPrice){
  console.log (itemName, itemUnitPrice)
  let html = `<div class="row">
  <p class="col"> IronShirt</p>
  <p class="col"> $15.00</p>
  <form class="col">
    <label class="inline-block" for="price">QTY:</label>
    <input class="inline-block" type="text" name="price" placeholder="0">
  </form>

  <p class="col"> $0.00</p>

  <button type="button" class=" col btn-delete">Delete</button>
</div>`

document.querySelector("body > section").innerHTML += (html)
  //should add new row with product description, price, qty, (qty*price) and delete button//
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  console.log (calculatePriceButton)
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


function createNewItem(){
  let name = window.prompt('what is the name?')
  let price = window.prompt('what is the price?')
  let rowHtml = `<div class="row">
  <p class="col">${name}</p>
  <div class="col">
    <span>$</span>
    <p class="inline-block initialPrice">${price}</p>
  </div>
  <form class="col">
    <label class="inline-block" for="price">Quantity:</label>
    <input
      class="inline-block initialQuantity"
      type="text"
      name="price"
      placeholder="0"
    />
  </form>
  <div class="col">
    <span>$</span>
    <p class="inline-block individualTotal">0.00</p>
  </div>
  <button class="btn btn-danger btn-delete" >Delete</button>
  </div>`

  document.getElementById('shopping').innerHTML += rowHtml
  //init()
}

window.onload = init

function init(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
};

function deleteItem(e){
  console.log(e, this)
this .parentElement.parentElement.remove()
}

let quantity = document.querySelector("#shopping > div:nth-child(1) > form > input").value
let price = document.querySelector("#shopping > div:nth-child(1) > p:nth-child(2)").innerHTML.slice(2)
let price2 = parseInt(price)
console.log(price)
console.log(price2)

function calculatePrice (quantity, price){
console.log (quantity, price)
let html= 
document.querySelector("#shopping > div.row > p:nth-child(4)")}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
}

function createDeleteButton(){

}

function getPriceByProduct(itemNode){

}
function updatePriceByProduct(productPrice, index){

}

function createQuantityInput(){

}


function getTotalPrice() {
  console.log('get total price')
  let rows = document.getElementsByClassName('row');
  for(let r=0; r<rows.length; r++){
    let row = rows[r] // alertnative approach 
    let price = document.querySelector(`#shopping > div:nth-child(${r+1}) .initialPrice`)
    console.log(price.innerText)

    let quantity = row.children[2].children[1]
    console.log(quantity.value)

    let subtotal = Number(price.innerText)*Number(quantity.value)
    console.log(subtotal)

    document.querySelector(`#shopping > div:nth-child(${r+1}) .individualTotal`).innerHTML = subtotal

  }}