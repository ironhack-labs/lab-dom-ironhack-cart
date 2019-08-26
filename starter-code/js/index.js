function deleteItem(e){
  console.log(e.currentTarget);
  const parentElem = document.querySelector('.products');
  const childElem = document.querySelector('.product');

  parentElem.removeChild(childElem);
}

function getPriceByProduct(product){
  const price = product.querySelector('.product__price').innerText;
  const quantity = product.querySelector('.product-quantity').value;
  return parseInt(price * quantity);
}

function updatePriceByProduct(price, product){
  product.querySelector('.product__totalPrice').innerText = price;
}

function getTotalPrice() {
  const products = [...document.querySelectorAll('.product')];
  let totalPriceSum = document.getElementById('totalPriceCalc');
  let totalPriceCalc = 0;

  products.forEach((product) => {
    const price = getPriceByProduct(product);
    totalPriceCalc += price;
    updatePriceByProduct(price, product);
  })

  totalPriceSum.innerText = totalPriceCalc;
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
  const newDiv = document.createElement("div");
  const product = document.createElement("div");
  product.setAttribute("class", "product");

  product.appendChild(newDiv);


  const productName = document.createElement("span");
  productName.setAttribute("class", "product__name");
  productName.innerText = document.getElementById("new-item-name").value;
  newDiv.appendChild(productName);

  const productPrice = document.createElement("span");
  productPrice.setAttribute("class", "product__price");
  productPrice.innerText = document.getElementById("new-item-price").value;
  newDiv.appendChild(productPrice);

  const productQty = document.createElement("input");
  productQty.setAttribute("class", "quantity product-quantity");
  productQty.setAttribute("type", "number");
  productQty.setAttribute("value", 0);
  productQty.innerText = 10;

 

  const labelQty = document.createElement("label");
  labelQty.setAttribute("for", "prod-qty");
  labelQty.innerText = "QTY";
  newDiv.appendChild(labelQty);
  newDiv.appendChild(productQty);
  


  const totalPrice = document.createElement("span");
  totalPrice.setAttribute("class", "product__totalPrice");
  totalPrice.innerText = 0;
  newDiv.appendChild(totalPrice);

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "btn btn-delete");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", deleteItem, false)
  newDiv.appendChild(deleteBtn)

  
  // document.body.appendChild(product);
  const products = document.querySelector(".products");
  console.log(product)
  products.appendChild(product);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  deleteButtons.onclick = deleteItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
