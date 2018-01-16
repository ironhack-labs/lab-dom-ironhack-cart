
var shoppingCart = []


function Product(name, price) {
  this.name = '';
  this.quantity;
  this.price;
}


function getTotalPrice(product) {
  var productCount = document.querySelectorAll(".wrapper");
  for (var i=0; i<productCount.length; i++) {
    var price = Number(document.getElementsByClassName("price")[i].innerText);
    var quantity = Number(document.querySelectorAll(".quantity")[i].value);
    var result = price * quantity;
    document.getElementsByClassName("total")[i].innerText = result;
  } 
  var price = document.querySelectorAll('.total');
  var total = 0;
  price.forEach(function(item) {
    total += Number(item.innerText);
  });
  var printResult = document.getElementById("result");
  printResult.innerText = total;
}



function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove();
}




// TOTAL PRICE
// var price = shoppingCart.reduce(function(acc, item) {
//   return acc + item.price;
// }, 0)
// var result = document.getElementByID("result");
// result.innerText = price;



// NEW ITEM
// function createNewItem(newProduct){
//   shoppingCart.push(product);
// }

// var newProduct = new Product("IronBubble-head", " ", 15);

// War.prototype.addViking = function (vikingSoldier){
//   War.vikingArmy.push(vikingSoldier);
// }

// var people = ['Andre', 'Byron', 'Eloi'];

// people.forEach(function (name) {
//   var myCard = createCard(name);
//   document.body.appendChild(myCard);
// });




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


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
