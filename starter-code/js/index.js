
window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}

const getTotalPrice = () => {
  let totalAmount = 0;
  var products = document.querySelectorAll('.product');
  for (let i = 0; i < products.length; i++) {
    let productPrice = eval(products[i].querySelector('.product-unit-cost').innerText)
    let productQuantity = products[i].querySelector('.amount-input').value;
    let productTotal = productPrice * productQuantity;
    products[i].querySelector('.product-total-cost').innerHTML = productTotal;
    totalAmount += productTotal;
  } return document.getElementById('total-price').innerText = totalAmount;
}


const deleteItem = e => {
  let removeProduct = e.currentTarget.parentElement.parentElement;
  removeProduct.parentElement.removeChild(removeProduct);
}


const createNewItem = e => {
  let productName = document.getElementById('productname-input').value;
  let productPrice = document.getElementById('productprice-input').value;
  if (productName && productPrice) {
    newProductRow = `
    <div class="name"><span>${productName}</span></div>
    <div class="product-unit-cost-container"><span>$</span><span class="product-unit-cost">${productPrice}</span></div>
    <div class="quantity">
      <label>QTY</label>
      <input class="amount-input" min="0" type="number">
    </div>
    <div class="product-total-cost-container"><span>$</span><span class="product-total-cost">0</span></div>
    <div class="btn-delete-container">
      <button class="btn btn-delete" type="button">Delete</button>
    </div>
    `
    var node = document.createElement("DIV");
    node.className = 'product';
    node.innerHTML = newProductRow;
    document.getElementById('product-container').appendChild(node);
    document.getElementById('productname-input').value = "";
    document.getElementById('productprice-input').value = "";
    window.onload();}
};







