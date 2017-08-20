
/*
function deleteItem(e){
  /*var clear = document.getElementById("bubble-head");
  var clear = document.getElementsByClassName("items");
  clear[e].innerHTML = "";
}
*/
function getPriceByProduct(itemNode){
//  var button = document.getElementById("calculate");
  var prices = document.getElementsByClassName("item-price");
  var total = document.getElementsByClassName("total-price");
  var items = document.getElementsByClassName("quantity");

  var a = Number(prices[itemNode].textContent.slice(1,prices[itemNode].textContent.length));
  var b = items[itemNode].value;

  total[itemNode].textContent = "$" + (a*b).toFixed(2);
  }

/*function updatePriceByProduct(productPrice, index){

}*/

function getTotalPrice() {
  var a = document.getElementsByClassName("total-price");
  var final = document.getElementsByClassName("final-price");
  var acc = 0;
  for (var i=0; i<a.length; i++){
      acc += Number(a[i].textContent.slice(1,a[i].length));
  }
  final[0].textContent = "Total Price: $" + acc.toFixed(2);
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
/*
document.getElementById("calc-prices-button").onclick = function(){
  getPriceByProduct(0);
  getPriceByProduct(1);
  getTotalPrice();
};
*/

var delclick = document.getElementsByClassName("btn-delete");
for (var j = 0; j < delclick.length; j++){
    delclick[j].onclick = function(e){
      console.log(j + "length: " + delclick.length);
      console.log("Current: " + e.currentTarget.innerHTML);
  //  var id = .getAttribute('id');
    };
}

/*
document.getElementsByClassName("delete")[0].onclick = function(){
  deleteItem(0);
};

document.getElementsByClassName("delete")[1].onclick = function(){
  deleteItem(1);
};
*/

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var items = document.getElementsByClassName("items");

  calculatePriceButton.onclick = function (){
    for (var i = 0; i < items.length; i++){
      getPriceByProduct(i);
      getTotalPrice();
    }
  };
  //createItemButton.onclick = createNewItem();

/*  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }*/
};
