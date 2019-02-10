function deleteItem(e){
  var productToDelete = e.currentTarget.parentNode.parentNode
  var productParent = productToDelete.parentNode 
  productParent.removeChild(productToDelete)
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var price = document.getElementsByClassName("price")

  price = Array.prototype.map.call(price, function(elm){
    return elm.innerHTML.substring(1);
  });
  
  var quantity = document.getElementsByClassName("quantity")
  quantity = Array.prototype.map.call(quantity, function(elm){
    return elm.value
  })

  var result = []
  for (var i = 0; i < price.length; i++){
    result.push((parseFloat(price[i]) * parseFloat(quantity[i])).toFixed(2))
  }
  
  var totalPriceToPrint = document.getElementsByClassName("totalprice")

  totalPriceToPrint = Array.prototype.map.call(totalPriceToPrint, function(elm,idx){
    return elm.innerHTML = "$" + result[idx];
  });

  var totalPrice = Array.prototype.map.call(totalPriceToPrint, function(elm,idx){
    return elm.innerHTML = parseFloat(result[idx]);
  });
  
  var reduced = totalPrice.reduce(function (acc,val) {
    return acc + val
  }) 

  var cartPrice = document.getElementById("cartPrice")

  cartPrice.innerHTML = "$" + reduced.toFixed(2) 

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
  var name = document.getElementById("new-name").value
  var price = document.getElementById("new-price").value
  var totalprice = "$0.00"
  var productsDiv = document.getElementById("products")
  console.log(name)
  console.log(price)
  var content = "<div><span class=\"name\">" + name + "</span></div><div><span class=\"price\">" + price + "</span></div><div><label>QTY</label><input type=\"number\" class=\"quantity\" value=\"0\"></div><div><span class=\"totalprice\">" + totalprice + "</span></div><div><button class=\"btn btn-delete\" type=\"button\">Delete</button></div>"
  var div = document.createElement("div")
  div.setAttribute("class", "product")
  div.innerHTML = content
  productsDiv.appendChild(div)
  var deleteButtons = document.getElementsByClassName('btn-delete')
  var newDeleteButton = deleteButtons[deleteButtons.length - 1]
  newDeleteButton.onclick = deleteItem
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
