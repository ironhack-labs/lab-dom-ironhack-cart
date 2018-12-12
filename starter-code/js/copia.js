function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
// Retrieves the unit price of the product
// Retrieves the quantity of items desired
// Calculates the total price based on this data
// Updates the total price in the DOM
let quantity = document.querySelector('input').value;
let price = document.getElementsByClassName('price').value;
console.log(price);



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

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};



function getProductCartPrice(product) {
  let productPrice = product.getElementsByClassName('product-price')[0].innerText;
    console.log(productPrice)
  let productUnits = product.getElementsByClassName('product-quantity')[0].value;
    console.log(productUnits)
  let totalProductAmount = parseFloat(productPrice) * productUnits;
   return `${totalProductAmount}.00$`;
}

function updateProductCartPrice(product, price){
  let productTotalPrice = product.getElementsByClassName('total-product-amount')[0]; 
  productTotalPrice.innerText = price;
}

function getAllProductPrice() {
  let products = document.querySelectorAll('.product'); 
  let totalCart = 0;
    for (let i = 0; i < products.length; i++) { 
        let totalProductPrice = getProductCartPrice(products[i]);
        updateProductCartPrice(products[i], totalProductPrice);
        totalCart += parseFloat(totalProductPrice);
    }
  console.log(`${totalCart}.00$`);
  let totalPrice = document.getElementById('total-price');
  totalPrice.innerText = `Total Price: ${totalCart}.00$`;
}

// ================= MI CODIGO VIEJO
// let quantity = document.getElementsByClassName('quantity').value;

// let totalPrice = parseFloat(bubblePrice) * quantity;

// let productPrice = document.getElementsByClassName('product').innerHTML;
// let quantity = document.getElementsByClassName('quantity').innerHTML;

// function getPrice (product){
//   let productPrice = parseFloat(product.getElementsByClassName('product')[0].innerText);
//   let quantity = parseInt(product.getElementsByClassName('quantity').value);
//   let totalProductPrice = productPrice * quantity;

//   return totalProductPrice;
// }
// console.log(bubblePrice);

// function calculatePrices (){
//  calcButton.onclick = getPrice();
// }



// function getPriceByProduct(itemNode){
//   var price = Number.parseFloat(itemNode.querySelector(".product").innerHTML.replace("$",""));
//   var units = Number.parseInt(itemNode.querySelector(".quantity").value);
//   return "$" + ((price * units).toFixed(2));
// }