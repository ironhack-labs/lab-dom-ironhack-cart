// i don't think i have time bc i got better as i went through the problem
// i would make a products array and that is why i started my naming it 0
// this way i can make the code flow, but i learned the name array thing 
//yesterday afternoon so i have been spending lots of time changing my class
// and id names which is forcing me to jump back and forth documents
// so there will be some inconsistencies, possibly, but only bc i am
//updating as i learn new tricks
// so, products will = [] where i can push in new products, with my name
// flow "item-0", "item-1,", "item-2".... that will correspond to the
// product.length of the same item, and allow my to shorten my code.







function deleteItem(e){

}


}
function getPriceByProduct(){
  var cost = itemNode.querySelector(".cost > span").innerHTML;
  var quantity = itemNode.querySelector(#quantity).value;
  var product = parseInt(cost) * parseInt(quantity);

  return product
}
console.log(getPriceByProduct())




function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var cost = document.getElementsByClassName("cost");
  var quantity = document.getElementsByClassName("quantity");
  var product = document.getElementsByClassName("product");
  var totalPrice = document.getElementsByClassName("totalPrice")



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

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

  // Create a click event for the Calculate Prices button
  // calculatePriceButton.onclick = getTotalPrice;
  // Create a click event for the Calculate Prices button
// This event will execute a function that:
  document.querySelector('.btn-success-item-0').addEventListener('click', 
  function (){
 // Retrieves the unit price of the product
 var item0Price = document.getElementsByClassName("cost-item-0")*1;
// Retrieves the quantity of items desired
var quantity0 = document.getElementsByClassName("quantity-item-0")*1;
// Calculates the total price based on this data
function totalPrice(item) {
 var subTotal0 =  item0Price * quantity0
}
// Updates the total price in the DOM
if (quantity0 >=1){
document.querySelector("#totalPrice0").textContent = subTotal0;
}
});


  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};





