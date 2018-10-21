function deleteItem(e){
  let product = document.getElementsByClassName('product');
  e.currentTarget.parentNode.parentNode.parentNode.removeChild(product[e.path.indexOf(e.currentTarget)])
}

function getPriceByProduct(itemNode){
  let inputs = Array.from(document.getElementsByClassName('quantity'));
  let cost = document.getElementsByClassName('cost');
  let price = document.getElementsByClassName('price');
  inputs.forEach((input,i) => {
    return price[i].innerText = (parseFloat(input.value) * parseFloat(cost[i].innerHTML)).toFixed(2)
  })
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  getPriceByProduct();
  let prices = Array.from(document.getElementsByClassName('price'));
  let finalPrice = 0;

  prices.forEach(price => finalPrice += parseFloat(price.innerText))
  document.getElementById('total').innerHTML = finalPrice.toFixed(2);
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
  let product = document.createElement('div');
  let productRow = document.getElementById('wrapper').appendChild(product);
  productRow.setAttribute('class', 'product');
  productRow.innerHTML = "<div><span></span></div><div>USD <span class=\"cost\"></span></div><div><form action=\"\"><label for=\"quantitiy\">QTY:</label><input class='quantity' type=\"text\" name=\"quantity\" placeholder=\"Quantity\"></form></div><div>USD <span class=\"price\"></span></div><div><button class=\"btn btn-delete\">Delete</button></div>"
  let name = document.getElementById('productName').value;
  productRow.firstChild.firstChild.innerHTML = name ? name : 'This product has no name';
  productRow.children[1].children[0].innerHTML = parseFloat(document.getElementById('productCost').value) ? parseFloat(document.getElementById('productCost').value).toFixed(2) : '0.00';
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(let i=0; i < deleteButtons.length; i++){
    deleteButtons[i].onclick = deleteItem
  }

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
