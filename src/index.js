// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
/*   const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  //... your code goes here
  let allItems = document.getElementsByClassName('product');
  let total = 0;
  for ( let i = 0; i < allItems.length; i++) {
    total += updateSubtotal(allItems[i])
  }
  

  // ITERATION 3
  //... your code goes here
  let totalValue = document.getElementById('total-value');
  totalValue.innerHTML = total;
  return total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let grandparentDiv = target.parentNode.parentNode.parentNode;
  grandparentDiv.removeChild(target.parentNode.parentNode);
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let newProduct = document.createElement('tr');
  let newProductInputs = document.querySelectorAll('.create-product input');
  let newProductName = newProductInputs[0].value;
  let newProductPrice = newProductInputs[1].value;
  newProduct.innerHTML = `<td class="name">
  <span>${newProductName}</span>
</td>
<td class="price">$<span>${newProductPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`
  newProduct.classList.add('product');
  newProduct.querySelector('button').addEventListener('click', removeProduct);
  let cartTable = document.querySelector('tbody');
  cartTable.appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeButtons = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct)
  }

  const createProductEvent = document.getElementById('create');
  createProductEvent.addEventListener('click', createProduct);
});
