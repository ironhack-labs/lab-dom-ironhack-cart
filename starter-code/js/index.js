
function deleteItem(e){
  console.log(itemContainer);
  itemContainer[0].innerHTML = "";
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var itemContainer = document.getElementById("item-total");
  var quantity =document.getElementsByClassName("quantity");
  var itemPrice = document.getElementById("item-price");
  var total = document.getElementById("total-price");
  itemContainer.innerHTML =  '$' + Number(quantity[1].value) * Number(itemPrice.textContent);
  total.textContent = itemContainer.innerHTML;
  
}
function createNewItem(){
  var div = document.createElement("div")
  var newContainer = itemContainer[0].innerHTML;
  div.setAttribute("class", "items-container");
  div.innerHTML = newContainer;
  document.body.insertBefore(div, document.querySelector(".new-items-container"));

  //var itemContainer = document.getElementsByClassName("div1-container");
  
  // itemContainer[0].lastElementChild.innerHTML = newContainer;
  // var div = document.createElement("div")

  // console.log(itemContainer[0].lastElementChild.innerHTML);


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






  //My added JS
  var itemContainer = document.getElementsByClassName("items-container");
  var itemName = document.getElementById("item-name");
  var itemPrice = document.getElementById("item-price");
  var itemTotal = document.getElementById("item-total");
