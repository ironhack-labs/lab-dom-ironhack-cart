function deleteItem(e){
    e.currentTarget.parentNode.parentNode.remove();
}
// all the prices
var allPrices = document.getElementsByClassName("single-item-price");
console.log("all prices: ", allPrices)

function getPriceByProduct(){
  for(var i=0; i<allProducts.length;i++){
    var totalSingleItemPrice = Number(allPrices[i].innerHTML * allQtys[i].value)
    console.log(totalSingleItemPrice);
    document.getElementsByClassName("total-single-item-price")[i].innerHTML = totalSingleItemPrice;
  }
}

// all the products
var allProducts = document.getElementsByClassName("product-name");

// all the quantities
var allQtys = document.getElementsByClassName("qty-input");

// function updatePriceByProduct(productPrice, index){

// }
var pricesArray = document.getElementsByClassName("total-single-item-price");
console.log(pricesArray);
 
function sumOfTwoNumbers(a,b){
  return a+b
}
function getTotalPrice() {
    getPriceByProduct();
    var newPricesArray = [];
    for(i=0; i<allProducts.length; i++){
      var singleProductTotalPrice = Number(pricesArray[i].innerHTML);
      newPricesArray.push(singleProductTotalPrice);
    }
    var total = newPricesArray.reduce(sumOfTwoNumbers,0);
    console.log(total);
    document.getElementById("final-price").innerHTML = total;
 }

// 1st ==> create name
 function createNameNode(newName){
    var nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "col-lg-2");
    //console.log("nameDiv: ", nameDiv);
    var nameSpan = document.createElement("span");
    nameSpan.setAttribute("class", "product-name");
    nameSpan.innerHTML = newName;
    nameDiv.appendChild(nameSpan);
    
    return nameDiv
 }


 // 2nd ==> create price

 function createSinglePriceNode(newPrice){
   var priceDiv = document.createElement("div");
   priceDiv.setAttribute("class", "col-lg-2");
   var dollarSpan = document.createElement("span");
   dollarSpan.setAttribute("class", "dollar-sign");
   dollarSpan.innerHTML = "$";
   var priceSpan = document.createElement("span");
   priceSpan.setAttribute("class","single-item-price");
   priceSpan.innerHTML = newPrice;
   priceDiv.appendChild(dollarSpan);
   priceDiv.appendChild(priceSpan);
  // console.log("priceDiv: ", priceDiv);
   return priceDiv;
 }


 // 3rd ==> create the whole row
function createNewItemRow(itemName, itemPrice){
  var productRow = document.createElement("div");
  productRow.setAttribute("class","row");
  var productName = createNameNode(itemName);
  var productPrice = createSinglePriceNode(itemPrice);
  productRow.appendChild(productName);
  productRow.appendChild(productPrice);

  return productRow;

}



 // 4th ==> sets the row on the DOM, positioning it above input fields



// function createQuantityInput(){

// }

function createDeleteButton(){

}

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

function createNewItem(){
  //createNameNode();
  //createSinglePriceNode();
  var singleProductName = document.getElementById("new-product-name").value;
  var singleProductPrice = document.getElementById("new-product-price").value;
  var newItem = createNewItemRow(singleProductName,singleProductPrice);
  var newDiv = document.getElementById("create");
  newDiv.parentNode.insertBefore(newItem,newDiv);

  document.getElementById("new-product-name").value = ""
  document.getElementById("new-product-price").value = ""
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-danger');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
