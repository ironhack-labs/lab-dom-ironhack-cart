
//Function to multiply  price of one product and quantity, and upload to total price of that product

var result = document.getElementById("sum-all-products").innerHTML;

function sumProducts (price) {
result = document.getElementById("new-quantity")*price;
  return;
}

var productPrice1= sumProducts(25);
var productPrice2=sumProduct(15);

function totalSum (){
var totalPrice =
}

//Function to eliminate a whole product
//But which product....?
function deleteProduct (){
  if(document.getElementsByClass("btn-delete").onclick){
    document.getElementById("container1").innerHTML = "";
     return;
    }
  deleteProduct();




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
