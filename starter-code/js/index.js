function deleteItem(e){
  var container = document.getElementById('container');
  var divProduct = e.currentTarget.parentNode.parentNode
  container.removeChild(divProduct);
}

function getPriceByProduct(product){
  var price = Number((product.children[1].children[0].innerHTML).slice(1))
  var quantity = Number(product.children[2].children[1].value)
  var totalPrice = product.children[3].children[0]
  updatePriceByProduct("$" + price*quantity, totalPrice)
}

function updatePriceByProduct(productPrice, totalPrice){
  totalPrice.innerHTML = productPrice
}

function getTotalPrice() {
  var products = document.getElementsByClassName('product')

  for(var i=0; i<products.length; i++){
    getPriceByProduct(products[i])
  }

  var productsPrices = document.getElementsByClassName('total-price')
  for (var i=0, sumPrices=0; i<productsPrices.length; i++){
    sumPrices += Number((productsPrices[i].innerHTML).slice(1))
  }
  var totalPrices = document.getElementById('final-price')
  totalPrices.innerHTML = "$" + sumPrices
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
  var calculatePriceButton = document.getElementById('calc-prices-button')
  var createItemButton = document.getElementById('new-item-create')
  var deleteButtons = document.getElementsByClassName('btn-delete')

  calculatePriceButton.onclick = function(){
    getTotalPrice()
  }
  // createItemButton.onclick = createNewItem();
  //
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = function(e){
      deleteItem(e);
    }
  }
};
