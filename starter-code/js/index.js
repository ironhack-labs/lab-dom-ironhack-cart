function deleteItem(e) {

  let parentDiv = e.currentTarget.parentNode;
  console.log(parentDiv.parentNode);
  let productWrapper = parentDiv.parentNode;


  let productListNode = document.getElementById('product-list');

  productListNode.removeChild(productWrapper);
  getTotalPrice();
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {
  // obtaining quantity value per product
  let qty = document.getElementsByClassName('quantity')[index].value;
  // calculating totalPrice
  let totalPrice = parseFloat(qty) * parseFloat(productPrice);
  // adding totalPrice to the DOM
  let totalPriceElem = document.getElementsByClassName('price-qty');
  totalPriceElem[index].innerHTML = totalPrice.toFixed(2);
}

function getTotalPrice() {
  console.log('inside total price');

  let prices = document.getElementsByClassName('price');

  let pricesArr = [].slice.call(prices);

  let total = 0;
  pricesArr.forEach((price, index) => {
    updatePriceByProduct(price.innerHTML, index);
    let totalPriceByProduct = document.getElementsByClassName('price-qty')[index].innerHTML;
    total += parseFloat(totalPriceByProduct);
  });
  document.getElementById('total').innerHTML = total.toFixed(2);
}
function createNewItem() {
  console.log('inside create new item');

  // saving data from inputs
  let productNewName = document.getElementById('new-item-name').value;

  let productNewPrice = document.getElementById('new-item-price').value;

  // creating product name node
  let productNameNode = document.createElement('span');
  productNameNode.innerHTML = productNewName;

  let productNameDiv = document.createElement('div');
  productNameDiv.className = 'col';

  productNameDiv.appendChild(productNameNode);

  // creating product price node
  let productPriceNode = document.createElement('span');
  productPriceNode.className = 'price';
  productPriceNode.innerHTML = parseFloat(productNewPrice).toFixed(2);

  let productPriceDiv = document.createElement('div');
  productPriceDiv.className = 'col';
  productPriceDiv.innerHTML = '$';

  productPriceDiv.appendChild(productPriceNode);

  // product quantity input node

  let productQtyInput = document.createElement('input');
  productQtyInput.className = 'quantity';
  productQtyInput.type = 'text';
  productQtyInput.value = 0;
  productQtyInput.keyup('keyup', () => {
    getTotalPrice();
  });

  let productQtyDiv = document.createElement('div');
  productQtyDiv.className = 'col';
  productQtyDiv.innerHTML = 'QTY';

  productQtyDiv.appendChild(productQtyInput);

  // create new total product cost node
  let productPriceQty = document.createElement('span');
  productPriceQty.className = 'price-qty';
  productPriceQty.innerHTML = '0.00';

  let productPriceQtyDiv = document.createElement('div');
  productPriceQtyDiv.className = 'col';
  productPriceQtyDiv.innerHTML = '$';

  productPriceQtyDiv.appendChild(productPriceQty);

  // create delete button node

  let deleteButtonNode = document.createElement('button');
  deleteButtonNode.className = 'btn btn-delete';
  deleteButtonNode.innerHTML = 'Delete';
  deleteButtonNode.onclick = deleteItem;

  let deleteButtonDiv = document.createElement('div');
  deleteButtonDiv.className = 'col';

  deleteButtonDiv.appendChild(deleteButtonNode);

  // create product wrapper node
  let productWrapper = document.createElement('div');
  productWrapper.className = 'row prod-wrapper';

  // append childs to wrapper

  productWrapper.appendChild(productNameDiv);
  productWrapper.appendChild(productPriceDiv);
  productWrapper.appendChild(productQtyDiv);
  productWrapper.appendChild(productPriceQtyDiv);
  productWrapper.appendChild(deleteButtonDiv);

  let container = document.getElementById('product-list');

  container.appendChild(productWrapper);



}
window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

  let inputsText = document.getElementsByClassName('quantity');

  let inputsArr = [].slice.call(inputsText);

  inputsArr.forEach((inputElem) => {
    inputElem.addEventListener('keyup', () => {
      getTotalPrice();
    });
  });
};