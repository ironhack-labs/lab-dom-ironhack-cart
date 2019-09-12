function deleteItem(event) {
  
  // let parentNodeElement = document.getElementById('product-cart');
  let deleteButton = event.currentTarget;
  let parentElement = deleteButton.parentElement;
  parentElement.remove();
}

// function productPriceCalc() {
//   let prodPrice = document
// }

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice(event) {
 
  let tryTest = document.getElementsByClassName("totalcostOfUnits")[0];
  
  //totalPriceButton is going to be the submit button you clicked on
   let totalPriceButton = event.currentTarget
  let products = document.getElementsByClassName("product");
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    let itemPrice = products[i].getElementsByClassName("costOfUnit")[0].innerHTML;
    let qtyItem = products[i].getElementsByClassName("valueUnit")[0].value;
    totalPrice += itemPrice * qtyItem;
  }
document.getElementsByClassName('totalPrice')[0].innerHTML = totalPrice
  // tryTest.innerHTML = "bzzzzz";
}

function submitPrice(event) {
  let submitButton = event.currentTarget
  event.preventDefault()
  let productRow = submitButton.closest(".product")
  let inputValue = productRow.getElementsByClassName("valueUnit")[0].value
  let price = productRow.getElementsByClassName("costOfUnit")[0].innerHTML

  let totalPrice = price * inputValue
  submitButton.closest('.product').getElementsByClassName('totalcostOfUnits')[0].innerHTML = totalPrice
}


function emptyInput () {
  let clearFirstBox = document.getElementsByClassName('productNameInput')[0];
  clearFirstBox.value = "";
  let clearSecondBox = document.getElementsByClassName('pricePerItem')[0];
  clearSecondBox.value = ""

}

function createNewItem(event) {
  // let createButton = event.currentTarget;
  
  let productName = document.getElementsByClassName('productNameInput')[0].value;
  let productCost = document.getElementsByClassName('pricePerItem')[0].value;
 
  let newElement = document.createElement('div');
  newElement.className = 'product';

  newElement.innerHTML = `<div class="productName">
  <span class="nameOfProduct"> ${productName} </span>
</div>
<div class="unitCost">€<span class="costOfUnit"> ${productCost} </span></div>
<div class="quantity">
  <form>
    QTY
    <input class="valueUnit" type="number" name="qty" />
    <input class="submitButton" type="submit" value="Submit" onclick="submitPrice(event)"/>
  </form>
</div>
<div class="totalcost">
  €<span class="totalcostOfUnits"> 0.00 </span>
</div>
<div class="btn-delete" onclick="deleteItem(event)">
  <button class="btn-delete">
    Delete
  </button>
</div>`

  document.getElementById("shopping-cart").appendChild(newElement);
  emptyInput()
 
}
// let priceOfItem = document.getElementsByClassName('costOfUnit')[0].innerHTML;
// let qtyItem = document.getElementsByClassName('valueUnit')[0].value;
// for (testUnit of product) {
//     for(testQTY of product){
//       let priceOfItem = testUnit
//     let qtyItem = testQTY.value
//     console.log(priceOfItem)
//   }
// console.log(priceOfItem * qtyItem)

// document.getElementsByClassName('totalcostOfUnits')[0] = totalPrice

// let paragraph = document.createElement('p');
// paragraph.innerHTML = 'The text inside paragraph';

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem() {
//   let netItem = document.getElementsByClassName("product");

//   let cln = netItem.cloneNode(true);
//   console.log(cln);
// }
// //   let paragraph = document.createElement('p');
//   paragraph.innerHTML = 'The text inside paragraph';

// document.body.appendChild(paragraph)
// }

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;
  // Was macht genau diese function ??
  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};

var computer = {
  touchscreen: false,
  os: "Linux",
  hd: "500GB",
  listSpecs: function() {
    console.log(`os: ${this.os} hd: ${this.os} touchscreen: ${this.os}`);
  }
};

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
