// // -----------------------------------------------------------------------------------------
// // Deleting items
// // -----------------------------------------------------------------------------------------

// function deleteItem(e){
  
// }

// // -----------------------------------------------------------------------------------------
// // Calculating Product total price
// // -----------------------------------------------------------------------------------------

// // Constructor for Product object

// function Product(productName, productUnitPrice, productQTY) {
//   this.productName = productName;
//   this.productUnitPrice = parseFloat(productUnitPrice);
//   this.productQTY = parseFloat(productQTY);
  
//   this.productTotalPrice = this.productQTY * this.productUnitPrice;
// }

// // Function to generate Product info directory

// function makeProductDirectory() {

//   let productDirectory = [];
//   let productCollection = document.querySelectorAll(".product");

//   for(let i = 0; i < productCollection.length; i++) {
//     let productName =  productCollection[i].getElementsByClassName("product-name")[0].innerHTML
//     let productUnitPrice =  productCollection[i].getElementsByClassName("product-unit-price")[0].innerHTML
//     let productQTY =  productCollection[i].getElementsByClassName("product-qty")[0].value

//     let prodObj = new Product(productName, productUnitPrice, productQTY);

//     productDirectory.push(prodObj);
//     console.log(prodObj);
//   }

// return productDirectory;
// }


// function getProductUnitPrice(itemNode){

// }

// function calcProductTotalPrice(productPrice, index){

// }

// function updatePrices() {

// }

// // -----------------------------------------------------------------------------------------
// // Creating new items
// // -----------------------------------------------------------------------------------------

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

// // -----------------------------------------------------------------------------------------
// // Creating the event listeners
// // -----------------------------------------------------------------------------------------

// window.onload = function(){

//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   productDirectory = makeProductDirectory();
//   console.log(productDirectory);

//   calculatePriceButton.addEventListener("click", updatePrices);
//   createItemButton.addEventListener("click", createNewItem);

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].addEventListener("click", deleteItem);
//   }


// };
