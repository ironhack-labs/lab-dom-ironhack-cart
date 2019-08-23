function $ (selector) {
  return document.querySelector(selector)
}

function deleteItem(e){
  e.currentTarget.parentElement.parentElement.remove()
}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){
  
}

function getTotalPrice() {

  let products = document.querySelectorAll(".product")
  let total = 0

  for (i=0 ; i < products.length ; i++) {
    let productPrice = $(`#cart > div.product:nth-child(${i+1}) .price span`).innerText
    let productQty = $(`#cart > div.product:nth-child(${i+1}) .qty input`).value
    let productSubTotal = $(`#cart > div.product:nth-child(${i+1}) .subtotal span`)

    productSubTotal.innerText = Number(productPrice) * Number(productQty)

    console.log(productSubTotal)

    // Total price of all products below
    total = total + Number($(`#cart > div.product:nth-child(${i+1}) .subtotal span`).innerText)
  }

  $("#total > span").innerText = total.toFixed(2)
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

  let productName = $("#newproduct").children[0].value
  let productPrice = $("#newproduct").children[1].value
  const rowHtml = `
    <div class="container product">
    <div class="name">
      <span>${productName}</span>
    </div>
    <div class="price">
      $<span>${productPrice}</span>
    </div>
    <div class="qty">
      <label for="quantity">QTY</label>
      <input type="number" name="quantity" id="quantity" class="quantity" placeholder="0">
    </div>
    <div class="subtotal">$<span>0.00</span></div>
    <div class="delete">
      <button class="btn btn-delete">Delete</button>
    </div>
    </div>`

  $("#cart").innerHTML += rowHtml
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
