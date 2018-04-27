function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove();//parent/parent to acces the div
  getTotalPrice();
}

// all prices
var allPrices = document.getElementsByClassName('single-item-price');
  console.log("all prices", allPrices);;

  // all the products
  var allProducts = document.getElementsByClassName('product-name');
  console.log("=========:", allProducts)
  // all the quantities
  var allQuantities = document.getElementsByClassName('quantity-input');

function getPriceByProduct(itemNode){
  for(var i = 0; i < allProducts.length; i++){
    var totalSingleItemPrice = Number(allPrices[i].innerHTML) * allQuantities[i].value;
    console.log(totalSingleItemPrice);

    document.getElementsByClassName('total-single-item-price')[i].innerHTML = totalSingleItemPrice;
  }
}

// function updatePriceByProduct(productPrice, index){

// }

var updatedPricesArray = document.getElementsByClassName('total-single-item-price')
console.log("updated array: ", updatedPricesArray);

function sumOfTwoNumbers(a,b){
  return a+b;
}

function getTotalPrice() {
  getPriceByProduct();
  var newPricesArray = [];
  for(var i = 0; i < allProducts.length; i++){
    var singleProductTotalPrice = Number(updatedPricesArray[i].innerHTML);
    console.log("singleProductTotalPrice: ",singleProductTotalPrice);
    newPricesArray.push(singleProductTotalPrice)
  }
  var total = newPricesArray.reduce(sumOfTwoNumbers,0);
  console.log("total is: ", total)

  document.getElementById('final-price').innerHTML = total;

}

// 1st create row
function createnameNode(newName){
  var nameDiv = document.createElement("div");
  nameDiv.setAttribute("class", "col-lg-2");
  console.log("productDiv: ", productDiv);
  var productSpan = document.createElement("span");
  nameSpan.setAttribute("class", "product-name");
  nameSpan.innerHTML = newName;
  nameSpan.apppenChild(nameSpan);
  return nameDiv;
}

//2nd create price
function createSinglePriceNode(newPrice){
var priceDiv = document.createElement("div");
priceDiv.setAttribute("class", "col-lg-2");
var dollarSpan = document.createElement("span");
dollarSpan.setAttribute("class", "dollar-sign");
dollarSpan.innerHTML = "$";
var priceSpan = document.createElement("span");
priceSpan.innerHTML = newPrice;
priceDiv.appendChild(dollarSpan);
priceDiv.appendChild(priceSpan);

return priceDiv;

}

//3rd creates the whole row
function createNewItemRow(itemName, itemPrice){
  var productRow = document.createElement("div");
  productRow.setAttribute("class", "row");
  var productName = createNameNode(itemName);
  var productPrice = createSinglePriceNode(itemPrice);
  productRow.appendChild(productName);
  productName.appendChild(productPrice);

  return productRow;

}

//4th 
function createNewitem(){
  var singleProductName = document.getElementById("new-product-name").value;
  var singleProductPrice = document.getElementById("new-product-price").value;
  createNewItemRow(singleProductName, singleProductPrice);

  var newItem = createNewItemRow(singleProductName, singleProductPrice);
  var newDiv = document.getElementById("create");

  newDiv.parentNode.insertBefore(newitem, newDiv);

  document.getElementById("new-product-name").value = "";
  document.getElementBuId("new-product-price").value = "";

}




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

// function createNewItem(){

// }

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
