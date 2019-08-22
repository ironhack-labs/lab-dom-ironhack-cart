function deleteItem(e) {

  //TEST



}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice(e) {

//TEST

let arr=document.getElementsByClassName('item-row');
for(let i=0; i<arr.length;i++){

  let price = document.querySelector(`#collections > div:nth-child(${i+1}) > p.col.initialPrice`).innerText
  console.log(price)
  price = parseInt(price, 10);

  let quantity = document.querySelector(`#collections > div:nth-child(${i+1}) > form > input`).value;
  console.log(quantity)
  quantity = parseInt(quantity, 10);


 let subtotal = Number(price) * Number(quantity)
 console.log(subtotal)

  
 document.querySelector(`#collections > div:nth-child(${i+1}) > p:nth-child(${4})`).innerText = subtotal

}

//END TEST
  // var itemPrice = document.querySelector("body > section > div:nth-child(1) > p:nth-child(2)").innerText;
  // var qty = document.querySelector("body > section > div:nth-child(1) > form > input").value;
  // var totalPrice = document.querySelector("body > section > div:nth-child(1) > p:nth-child(4)").innerText;

  // itemPrice = parseInt(itemPrice, 10);
  // qty = parseInt(qty, 10);
  // totalPrice = parseInt(totalPrice, 10)

  // totalPrice = itemPrice * qty;

  // document.querySelector("body > section > div:nth-child(1) > p:nth-child(4)").innerText = totalPrice;

  // console.log(itemPrice, qty, totalPrice)
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

     let html = `<div class="row item-row">
  <p class="col">Iron Shirt</p>
  <p class="col initialPrice">15.00</p>
  <form class="col">
    <label class="inline-block" for="price">QTY: </label>
    <input class="inline-block" type="text" name="price" placeholder="0" />
  </form>

  <p class="col">0.00</p>

  <button type="button" class=" col btn-delete">Delete</button>
</div>`

document.querySelector("body > section").innerHTML += html;

console.log("I'm running")



}


function createNewItem() {

  createNewItemRow();


  console.log("clicked createNewItem() function")
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