// ITERATION 1

function updateSubtotal(product) {
  alert('Calculating subtotal, yey!');
  // step 1 & 2
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  // step 3 
  const subtotal = price * quantity;
  //  step 4
  const subtotalValue = product.getElementsByClassName('subtotal')[0];
  // step 5
  console.log(subtotalValue);
  subtotalValue.innerHTML = subtotal;
  return subtotal;
}

//function calculateAll() {
// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
// const singleProduct = document.querySelector('.product');
// updateSubtotal(singleProduct);
// end of test

// ITERATION 2
function calculateAll() {
  const products = document.getElementsByClassName('product');
  const productsArr = [...products];

  let totalPrice = 0
  productsArr.forEach((element) => {
    totalPrice += updateSubtotal(element)
  });

// ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = totalPrice;

}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}
//const removeBtn = document.getElementsByClassName('btn btn-remove');
//removeBtn.addEventListener('click', removeProduct);

// ITERATION 5
function createProduct() {
  const newProductName = document.querySelector('.create-product input[type="text"]').value;
  const newProductPrice = document.querySelector('.create-product input[type="number"]').value;
  const newProduct = document.createElement('tr');
  newProduct.innerHTML = `<td class="name"><span>${newProductName}</span></td>
    <td class="price">$<span>${newProductPrice}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>`;
  newProduct.className = 'product';

  const productsArr = document.querySelector('tbody');
  productsArr.appendChild(newProduct);
}

const createProductBtn = document.getElementById('create');
createProductBtn.addEventListener('click', createProduct);


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});