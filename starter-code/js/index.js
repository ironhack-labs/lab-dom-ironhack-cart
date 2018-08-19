function deleteItem(e){

}

function getPriceByProduct(itemNode){
  let priceArray = document.getElementsByClassName('prices')[itemNode].textContent.split('$')
  let itemQuantity = document.getElementsByClassName('quantities')[itemNode].value;
  let price = Number(priceArray[1]);
  return price*itemQuantity;
}

function updatePriceByProduct(productPrice, index){
  // calculate subtotal and turn into a string with two decimal points
  let pricePerProduct = ['$',(productPrice).toFixed(2)].join('');
  let productSubtotal = document.getElementsByClassName('subtotal')[index];
  productSubtotal.innerHTML = pricePerProduct;
}

function getTotalPrice() {
  let itemQuantities = document.getElementsByClassName('quantities');
  let itemSubtotal = [];
  for (let i = 0; i < itemQuantities.length; i++) {
    if (itemQuantities[i].value > 0) {
      let priceByProduct = getPriceByProduct(i);
      itemSubtotal.push(priceByProduct);
      updatePriceByProduct(priceByProduct, i)
    }
  }
  var totalPrice = itemSubtotal.reduce((total, eachNum)=>{
    return total + eachNum
  },0)  //  calculate total price
  // input total price into HTML
  let totalAllProducts = ['Total Price $',(totalPrice).toFixed(2)].join('');
  let shoppingTotal = document.getElementById('total-price');
  shoppingTotal.innerHTML =totalAllProducts;
  return totalPrice
}

function createQuantityInput(parentDiv){
  var qtyLabel = document.createElement('label');
  qtyLabel.innerText="QTY";
  parentDiv.appendChild(qtyLabel); 
  var qtyInput = document.createElement('input');
  qtyInput.type = Number;
  qtyInput.placeholder = "QTY";
  qtyInput.className = "quantities";
  parentDiv.appendChild(qtyInput)
}

function createDeleteButton(parentDiv){
  var deleteButton = document.createElement('button'); //price for new item
  deleteButton.className= "btn btn-delete";
  deleteButton.innerHTML= "Delete";
  parentDiv.appendChild(deleteButton);
}

function createQuantityNode(parentDiv){
  var subtotalSpan = document.createElement('span'); //price for new item
  parentDiv.appendChild(subtotalSpan)
  subtotalSpan.className= "subtotal";
  subtotalSpan.innerText= "$0.00";
  // let numProducts = document.getElementsByClassName('products');
  // let productIndex = numProducts-2; // 
  // subtotalSpan.innerText=updatePriceByProduct(getPriceByProduct(productIndex), productIndex);
}

function createItemNode(parentDiv, newItemName,newItemPrice){
  var nameSpan = document.createElement('span'); // name for new item
  parentDiv.appendChild(nameSpan)
  nameSpan.className= "product-name";
  nameSpan.innerText=newItemName;
  var priceSpan = document.createElement('span'); //price for new item
  parentDiv.appendChild(priceSpan)
  priceSpan.className= "prices";
  priceSpan.innerText=newItemPrice;
}

function createNewItemRow(itemName, itemUnitPrice){
  var newDiv = document.createElement('div');
  var productList = document.getElementById('product-list');
  productList.appendChild(newDiv);
  newDiv.className = "products";
  // var nameSpan = document.createElement('span'); // name for new item
  // newDiv.appendChild(nameSpan)
  // nameSpan.className= "product-name";
  // nameSpan.innerText=itemName;
  // var priceSpan = document.createElement('span'); //price for new item
  // newDiv.appendChild(priceSpan)
  // priceSpan.className= "prices";
  // priceSpan.innerText=itemUnitPrice;
  createItemNode(newDiv, itemName,itemUnitPrice)
  createQuantityInput(newDiv); // create Quantity Input
  createQuantityNode(newDiv); // display subtotal
  createDeleteButton(newDiv);
}

function createNewItem(){
  let newProductName = document.getElementById('productInput').value;
  let newProductPrice =document.getElementById('productPrice').value;
  createNewItemRow(newProductName, newProductPrice)
}

window.onload = function(){
var calculatePriceButton = document.getElementById('calc-prices-button');
var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

calculatePriceButton.onclick = getTotalPrice;
createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
};
