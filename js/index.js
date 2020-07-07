// ITERATION 1: updateSubtotal
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('input[type="number"]');

  let priceValue = Number(price.innerHTML);
  let quantityValue = Number(quantity.value);

  let totalPrice = quantityValue * priceValue;

  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = totalPrice;

  return subtotal;
}

function calculateAll() {
  // The following code is added just for testing purposes.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/

  // ITERATION 2: CalculateAll()
  let productAll = document.querySelectorAll('.product');

  //Calculating subtotal for each .product using updateSubtotal()
  for (var i = 0; i < productAll.length; i++) {
    updateSubtotal(productAll[i]);
  }

  // ITERATION 3: Total
  let totalPriceElt = document.querySelector('#total-value span');
  let arrPrices = []; //Array where each subtotal will be pushed

  for (var i = 0; i < productAll.length; i++) {
    //For each .product, push its subtotal to the array
    arrPrices.push(updateSubtotal(productAll[i]));
  }

  let sumTotalPrice = 0;

  //Convert each indice to a number and sum it with sumTotalPrice
  arrPrices.forEach(priceElt => sumTotalPrice += Number(priceElt.textContent));

  //Update the totalPriceElt with the sum
  totalPriceElt.innerHTML = sumTotalPrice;
}

// ITERATION 4: Bonus Removing a product
/*//Remove an item
  let removeButton = document.getElementsByClassName('btn-remove');

  for (var i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', removeProduct);
  } */
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here
  const parent = target.parentNode.parentNode;
  const tbody = target.parentNode.parentNode.parentNode;

  tbody.removeChild(parent);
  calculateAll(); //To recalculate the total price
}

// ITERATION 5: Bonus Creating a product
function createProduct() {

  let newProductName = document.querySelector('tfoot input[type="text"]').value;

  let newProductPrice = document.querySelector('tfoot input[type="number"]').value;

  //TR creation
  let trElt = document.createElement('tr');
  trElt.classList.add('product');

  //name
  let tdName = document.createElement('td');
  tdName.classList.add('name');
  tdName.innerHTML = '<span>' + newProductName + '</span>';

  //price
  let tdPrice = tdName.cloneNode(false); //False to not copy the child
  tdPrice.classList.add('price');
  tdPrice.innerHTML = '$<span>' + newProductPrice + '</span>';

  //Quantity
  let quantity = document.querySelector('td[class="quantity"]');
  let tdQuantity = quantity.cloneNode(false); //False to not copy the child
  let inputQuantity = document.createElement('input');
  inputQuantity.type = 'number';
  inputQuantity.value = '0';
  inputQuantity.min = '0';
  inputQuantity.placeholder = 'Quantity';
  tdQuantity.appendChild(inputQuantity);

  //Subtotal
  let subtotal = document.querySelector('td[class="subtotal"]');
  let tdSubtotal = subtotal.cloneNode(false); //True to copy the child
  tdSubtotal.innerHTML = '$<span>0</span>';

  //Button
  let removeBtn = document.querySelector('td[class="action"]');
  let tdRemoveBtn = removeBtn.cloneNode(true); //True to copy the child

  let childRemoveBtn = tdRemoveBtn.childNodes;
  childRemoveBtn[1].addEventListener('click', removeProduct);

  trElt.appendChild(tdName);
  trElt.appendChild(tdPrice);
  trElt.appendChild(tdQuantity);
  trElt.appendChild(tdSubtotal);
  trElt.appendChild(tdRemoveBtn);

  let tbody = document.querySelector('tbody');
  tbody.appendChild(trElt);
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Remove an item
  let removeButton = document.getElementsByClassName('btn-remove');

  for (var i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', removeProduct);
  }

  //Create a new Product
  let addProductButton = document.getElementById('create');
  addProductButton.addEventListener('click', createProduct);
});