function deleteItem(e){
  let wrapper = document.getElementById('products-wrapper');
  let product = e.currentTarget.parentNode.parentNode;

  wrapper.removeChild(product);
  getTotalPrice();
}

function calculatePrices(products){
  let generalPrice = document.getElementById('generalPrice');
  let sum = 0;
  for(let product of products) {
    sum += parseFloat(product.getElementsByClassName('total')[0].innerHTML.replace('$', ' ').trim());
  }

  generalPrice.innerHTML = '$' + sum;

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let products = document.getElementsByClassName('product-wrapper');

  for(let product of products) {
    let unitPrice = parseFloat(product.getElementsByClassName('cost')[0].innerHTML.replace('$', ' ').trim());
    let quantity = product.getElementsByClassName('quantity')[0].value;

    product.getElementsByClassName('total')[0].innerHTML = '$' + unitPrice * quantity;
  }

  calculatePrices(products);

}

function createNewItem(){
  let parentWrapper = document.getElementById('products-wrapper');
  let newProductRow = (document.getElementsByClassName('product-wrapper')[0]).cloneNode(true);
  let newPrice = +document.getElementById('product-priceNew').value;
  let newName = document.getElementById('product-nameNew').value;

  newProductRow.getElementsByClassName('cost')[0].innerHTML = "$" + newPrice;
  newProductRow.getElementsByClassName('name')[0].innerHTML = newName;
  newProductRow.getElementsByClassName('quantity')[0].value = '';
  newProductRow.getElementsByClassName('total')[0].innerHTML = "$0.00";

  newProductRow.getElementsByClassName('btn-delete')[0].onclick = deleteItem;

  parentWrapper.appendChild(newProductRow);

    document.getElementById('product-priceNew').value = '';
    document.getElementById('product-nameNew').value = '';

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var createItemButton = document.getElementById('creating-button');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
