function deleteItem(event){
  const productItem = event.target.parentNode.parentNode;
  const parentNode = productItem.parentNode;
  parentNode.removeChild(productItem);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  const allProducts = document.querySelectorAll(".product");
  let totalPrice = 0;

  for(let i = 0; i < allProducts.length ; i++){
    const quantity = allProducts[i].querySelector(".quantity-input").value || 0;
    const price = allProducts[i].querySelector(".product-cost").innerText || 0;

    const productTotalPrice = (parseFloat(quantity) * parseFloat(price)).toFixed(2); 
    allProducts[i].querySelector(".total-price").innerText = productTotalPrice;

    totalPrice += Number(productTotalPrice);
  }

  document.querySelector("#total-price").innerText = totalPrice.toFixed(2);
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
  const newProductNameInput = document.querySelector("#create-name");
  const newProductPriceInput = document.querySelector("#create-price");

  const productNode = document.querySelector(".product").cloneNode(true);
  productNode.querySelector(".btn-delete").onclick = deleteItem;
  productNode.querySelector(".product-name").innerText = newProductNameInput.value;
  productNode.querySelector(".product-cost").innerText = newProductPriceInput.value;
  productNode.querySelector(".quantity-input").value = '';
  productNode.querySelector(".total-price").innerText = 0.00;

  // Clean the inputs when creating a new product.
  newProductNameInput.value = '';
  newProductPriceInput.value = '';

  const productList = document.querySelector("#product-list")
  productList.appendChild(productNode);

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
