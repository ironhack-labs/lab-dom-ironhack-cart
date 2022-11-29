var cartElement = document.querySelector("#cart tbody");

// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');

  const price = Number(priceElement.innerHTML);
  const quantity = Number(quantityElement.value);
  
  const subtotal = price * quantity;

  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productElements = document.querySelectorAll('.product');
  let totalPrice = 0
  productElements.forEach(function(oneProduct) {
  let productTotal = updateSubtotal(oneProduct);
  totalPrice += productTotal; 
});

  // ITERATION 3
  let totalPriceElement = document.querySelector('#total-value span');
  totalPriceElement.textContent = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const productRemove = target.parentNode.parentNode;
  cartElement.removeChild(productRemove);

  calculateAll();
}
function bindDeleteButton(deleteButton) {
  deleteButton.addEventListener('click', removeProduct);
}


// ITERATION 5

function createProduct() {
  let nameElement = document.querySelector('.create-product input[type="text"]');
  let priceElement = document.querySelector('.create-product input[type="number"]');

  console.log(nameElement);
  console.log(priceElement);

  let newProductTr = document.createElement('tr');
  newProductTr.setAttribute('class', 'product');

  newProductTr.innerHTML = `
    <td class="name">
      <span>${nameElement.value}</span>
    </td>
    <td class="price">$<span>${priceElement.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  cartElement.appendChild(newProductTr);
  let newRemoveButton = newProductTr.querySelector('.btn-remove');
  newRemoveButton.addEventListener('click', removeProduct);

  nameElement.value = "";
  priceElement.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = cart.getElementsByClassName('btn btn-remove');
  [...removeButtons].forEach(button => button.addEventListener('click', removeProduct));

  const createButton = document.getElementById('create');
  if(createButton) {
    createButton.addEventListener('click', createProduct);
  }
});
