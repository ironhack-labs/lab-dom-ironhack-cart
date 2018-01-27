var calculatePrice = document.querySelector(".btn-success");
var productCost = document.querySelectorAll(".product-cost");
var productQuantity = document.querySelectorAll(".product-qty");
var productTotal = document.querySelectorAll(".product-total");
var totalText = document.querySelector(".total-price");
var deleteItem = document.querySelectorAll(".btn-delete");
var parentContainer= document.querySelectorAll(".flex-item");
var productContainer = document.querySelectorAll(".product-container");
var addNewButton = document.querySelector(".add-btn");
var getNewItem = document.querySelector(".new-item");
var getNewPrice = document.querySelector(".new-cost");

//click on green calculate price button will trigger
//a click event listener
calculatePrice.addEventListener("click", function(){
  //reset the value to 0 before adding total
  subTotal = 0;
  //iterate through all the product subtotals
  for(var i = 0; i < productCost.length; i++){
    //total price eqal to each product cost times product quantity
    totalPrice = productCost[i].textContent * productQuantity[i].value
    //innerHTML of product subtotal should update
    productTotal[i].innerHTML = totalPrice;
    } 
    //function to change total innerHTML
    showTotal();
  });


  //loop through to find which delete button is pressed 
  for(var i = 0; i < deleteItem.length; i++){
    //add event listener to delete
    deleteItem[i].addEventListener("click", function(){
      // remove the container of the row to be deleted
      this.parentElement.parentElement.remove()
    })
  }
  
  addNewButton.addEventListener("click", function(){
  })


  function showTotal(){
  //loop through product totals
  for(var i = 0; i < productTotal.length; i++){
    //get running innerHTML total of product subtotals
    subTotal += parseInt(productTotal[i].textContent);
    //change text content of subTotal
    totalText.textContent = subTotal;
  } 
} 






function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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
  var calculatePriceButton = document.getElementsByClassName('btn-success');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
