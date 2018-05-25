window.onload = function(){

  var products = document.getElementsByClassName("product");
  for (var i = 0; i < products.length; i++){
    var product = products[i];
  }
  console.log(products);

function getUnitPrice(products, i){
  price = document.getElementsByClassName("unitPrice")[0];
  return Number(price.innerText.replace("$", ""));
}
console.log(getUnitPrice(product));


function getUnitQuantity(product){
  quantity = document.getElementsByClassName("quantity")[0];
  return Number(quantity.value);
}
console.log(getUnitQuantity(product));

function getPriceByProduct(product){
  return price = getUnitPrice(product) * getUnitQuantity(product);
}
console.log(getPriceByProduct(product));

function updatePriceByProduct(products){
  totalPriceByProduct = document.getElementsByClassName("total-product-price")[0];
  totalPriceByProduct.innerText = "$" + getPriceByProduct(products);
}
console.log(updatePriceByProduct(products));

//no sé como hacer para que esto me lo aplique a cada producto del nodo. 


}





// window.onload = function(){



// function updatePriceByProduct(product, index){
//   price = getUnitPrice(product);
//   quantity = getUnitQuantity(product);
//   totalProductPrice = price * quantity;
// }




// }
// // function getTotalPrice(){
// //   total = 0.00
// //   price = getUnitPrice(product);
// //   quantity = getUnitQuantity(product);
// //   totalUnitPrice = price * quantity;
// //   total += totalUnitPrice;
// // }

//  function deleteItem(e){

// }








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

// // window.onload = function(){
// //   var calculatePriceButton = document.getElementById('calc-prices-button');
// //   var createItemButton = document.getElementById('new-item-create');
// //   var deleteButtons = document.getElementsByClassName('btn-delete');

// //   calculatePriceButton.onclick = getTotalPrice;
// //   createItemButton.onclick = createNewItem;

// //   for(var i = 0; i<deleteButtons.length ; i++){
// //     deleteButtons[i].onclick = deleteItem;
// //   }};
