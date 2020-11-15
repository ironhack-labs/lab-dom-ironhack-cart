// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const subtotalAmount = price * quantity;

  const subtotal = product.querySelector('.subtotal');
  subtotal.innerHTML = `$${subtotalAmount.toFixed(2)}`;

  return subtotalAmount;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  
  let productsCost = 0;

  products.forEach(product => {
    productsCost += updateSubtotal(product);
    });

  // ITERATION 3
  const totalInv = document.getElementById('total-value');
  return totalInv.innerHTML = `$${productsCost.toFixed(2)}`;
}

// ITERATION 4

// const removeBtn = document.querySelectorAll('.btn-remove');
// removeBtn.forEach((btn) => btn.addEventListener('click', () => removeProduct(btn)));

// function removeProduct(event) {
//   const target = event.removeBtn;
//   console.log('The target in remove is:', target);
  //... your code goes here

  function removeProduct(event) {
    const target = event.target;
    console.log('The target in remove is:', target);
    target.parentNode.parentNode.remove();
    calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelector('tbody');
  const newProdName = document.querySelector('input[placeholder="Product Name"]');
  const newProdPrice = document.querySelector('input[placeholder="Product Price"]');
  
  const newProdItem = document.createElement('tr');
  //create new td for product, price, quantity, subtotal, action
  newProdItem.innerHTML = `
  <td class="name">
  <span>${newProdName.value}</span>
</td>
<td class="price">$<span>${newProdPrice.value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
`
newProdItem.setAttribute('class', 'product');
newProduct.appendChild(newProdItem);

// const removeBtns = document.querySelectorAll('.btn-remove');
// [...removeBtns].map(el =>el.addEventListener('click', removeProduct));
// removeBtns.forEach(el) => el.addEventListener('click ', removeProduct);

newProdItem.querySelector('.btn-remove').addEventListener('click', removeProduct);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(btn => btn.addEventListener('click', () => {removeProduct(btn)}));
  
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
