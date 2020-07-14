// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  let priceValue = price.innerText;
  let quantityValue = quantity.value;
  
  let subtotalPrice = priceValue * quantityValue;

  product.querySelector('.subtotal span').innerText = subtotalPrice;

  return subtotalPrice;
  
  //console.log('Calculating subtotal, yey!');
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const multipleProducts = document.querySelectorAll('.product');
  multipleProducts.forEach(product => updateSubtotal(product));
  
  // ITERATION 3
  //... your code goes here
let total = 0;
  multipleProducts.forEach(product => total += updateSubtotal(product));

  document.querySelector('#total-value span').innerText = total.toFixed(2);

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  console.log('The target in remove is:', target);
  //... your code goes here

  let delElement = target.parentNode.parentNode;
  delElement.parentNode.removeChild(delElement);

  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
    let productName = document.querySelector('.product-name');
    let productPrice = document.querySelector('.product-price');

    
    let newProduct = document.createElement('tr');
    newProduct.innerHTML = `<td class="name"><span>${productName.value}</span></td>
    <td class="price">$<span>${productPrice.value}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>`;

    newProduct.className = 'product';

    const productsArr = document.querySelector('tbody');

    productsArr.appendChild(newProduct);

    let newRemoveBtn = newProduct.querySelector('.btn-remove');
    newRemoveBtn.addEventListener('click', removeProduct);

    productName.value = '';
    productPrice.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const deleteBtns = document.querySelectorAll('.btn-remove');
  deleteBtns.forEach(btn => btn.addEventListener('click', removeProduct) );

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
