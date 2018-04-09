/*Calculating the total price for the product
Once you have the HTML and CSS ready, use JavaScript and functions of the document object to retrieve 
the data you need to calculate the total price for that product. 
Change the value of the element in the DOM that displays the total price:

Create a click event for the Calculate Prices button
This event will execute a function that:
Retrieves the unit price of the product
Retrieves the quantity of items desired
Calculates the total price based on this data
Updates the total price in the DOM */





function deleteItem(e){

}



function getPriceByProduct(number){
var unitPrice = parseFloat(document.getElementById("unit-price").textContent); 
var numberOfProducts = document.getElementById("quantity").value;
var totalUnitPrice = unitPrice * +numberOfProducts;

document.getElementById("total-price-for-product").innerHTML = totalUnitPrice; 
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

function createNewItem(name){
var newProduct = document.getElementsByClassName ("item").textContent
newProduct[1].innerHTML = "IronShirt";
}

/*window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};*/
