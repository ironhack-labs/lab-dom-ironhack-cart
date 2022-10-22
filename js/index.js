// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  //... your code goes here
  let priceValue = price.innerHTML;
  let quantityNumber = quantity.value;

  let subtotal = priceValue * quantityNumber;

  let subtotalValue = product.querySelector('.subtotal span');
  subtotalValue.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let totalPrice = 0;

  let allProducts = document.querySelectorAll('.product');
  for (let i = 0; i < allProducts.length; i++) {
    totalPrice += updateSubtotal(allProducts[i]);
  }

  // ITERATION 3
  //... your code goes here
  let totalValue = document.querySelector('#total-value span');

  totalValue.innerHTML = totalPrice;
  return totalPrice;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let newProductName = document.querySelector('.create-name');
  let newProductPrice = document.querySelector('.create-price');
  if (!newProductName.value || !newProductPrice.value) {
    alert(
      'Please, fill up both input fields correctly to add a new product. '
    );
  } else {
    let theBody = document.querySelector('tbody');
    let addNewProduct = document.createElement('tr');
    addNewProduct.classList.add('product', 'new-product');
    addNewProduct.innerHTML = `
      <td class="name"><span>${newProductName.value}</span></td>
      <td class="price">$<span>${newProductPrice.value}</span></td>
      <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action"><button onClick={removeProduct(event)} class="btn btn-remove">Remove</button></td>
    `;
    theBody.append(addNewProduct);
    newProductName.value = '';
    newProductPrice.value = '';
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeBtns = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }

  let createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
});
