function deleteItem(e){
  var productWrapper = e.currentTarget.parentNode.parentNode.parentNode;
  productWrapper.removeChild(e.currentTarget.parentNode.parentNode);
}

function getPriceByProduct(itemPrice, itemQuantity){

  var price = parseFloat(itemPrice);
  var quantity = parseFloat(itemQuantity);
  return price * quantity;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.getElementsByClassName("product-wrapper");
  var totalTotal = 0;

  for(var i=0; i<products.length; i++){
    itemPrice = products[i].childNodes[3].getAttribute("value");
    itemQuantity = products[i].getElementsByClassName("quantity-text")[0].value;
  
    if(itemQuantity === ""){
      alert("Introduce una cantidad");
    } else {
      var totalProduct = getPriceByProduct(itemPrice, itemQuantity);
      products[i].childNodes[7].setAttribute("value", 2);
      products[i].childNodes[7].innerHTML = "$" + totalProduct;

      totalTotal += totalProduct;
    }

    document.getElementById("total-price-total").setAttribute("value", totalTotal);
    document.getElementById("total-price-total").innerHTML = "$" + totalTotal;
  }
}

function createNewItemRow(itemName, itemUnitPrice){
  var nodeCopy = document.querySelector(".product-wrapper").cloneNode(true);

  nodeCopy.querySelector(".product-name").innerHTML = itemName;
  nodeCopy.querySelector(".cost-per-unit").setAttribute("value", itemUnitPrice);

  var newProductPrice = nodeCopy.querySelector(".cost-per-unit");
  itemUnitPrice.indexOf(".") === -1 ? newProductPrice.innerHTML = "$" + itemUnitPrice + ".00" : newProductPrice.innerHTML = "$" + itemUnitPrice;
    
  document.getElementById("shopping-cart").appendChild(nodeCopy);
  
}

function createNewItem(){
  var itemName = document.getElementById("new-item-name").value;
  var itemUnitPrice = document.getElementById("new-item-price").value;

  if(itemName.length < 1 || itemUnitPrice.length < 1){
    alert("New item data not valid")
  } else {
    createNewItemRow(itemName, itemUnitPrice);
  }
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


