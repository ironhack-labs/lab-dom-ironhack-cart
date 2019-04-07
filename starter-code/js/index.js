function deleteItem(e){

}

function getPriceByProduct(itemNode){
  let cost= document.getElementById('cost').innerHTML
  let quantity= document.getElementById('quantity').innerHTML
  let totalCost= document.getElementById('total cost').innerHTML
  return (totalCost[i].innerHTML = `${(
    Number(cost[i].innerHTML) * quantity[i].value
  ).toFixed("2")}`);
  }
  
  /*var total = 0;
  var totalItems = 0;
  for (i=0;i<totalItems.length;i++){
    total = price[i].innrHTML;
    theQuantity = quantity[i].innerHTML
    total.split("$")
    return Number(thePrice[1]) * Number(theQuantity)
    document.getElementById(totalItems).innerHTML = '$' + total;
  }*/

 
    /*var quantity = document.getElementById("quantity").value
  var price = document.getElementById("calculate-price").InnerHTML;
  console.log(quantity)
  console.log(price)
  document.getElementById("total").value = parseInt(price * quantity);
  return price * quantity*/




function updatePriceByProduct(productPrice, index){
  let cost= document.getElementById('cost').innerHTML
  let quantity= document.getElementById('quantity').innerHTML
  let totalCost= document.getElementById('total cost').innerHTML
  return (totalCost[i].innerHTML = `${(
    Number(cost[i].innerHTML) * quantity[i].value
  ).toFixed("2")}`);
}

function getTotalPrice() {
  

}
//console.log(document.querySelector)


//var calculatePriceButton = document.getElementById('btn-success');

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
