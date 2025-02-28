// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  const total = product.querySelector('.subtotal span');
  total.innerHTML = subtotal;
  return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach((product) => {
    total += updateSubtotal(product);
  });
  
  // ITERATION 3
  const tot = document.querySelector('#total-value span');
  tot.innerHTML = total;
  return total;
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let parent = target.parentNode.parentNode;
  let buttons = document.querySelectorAll('.btn btn-remove');
  buttons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  }
  );
  parent.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let newProduct = document.querySelector('.create-product');
  let name = newProduct.querySelector('.name input').value;
  let price = newProduct.querySelector('.price input').value;
  let table = document.querySelector('tbody');
  let newRow = document.createElement('tr');
  newRow.className = 'product';
  newRow.innerHTML = `
  <td class="name">< /td>
    <span>${name}</span>`;
  newRow.innerHTML += `<td class="price">$<span>${price}</span></td>`;
  newRow.innerHTML += `<td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>`;
  newRow.innerHTML += `<td class="subtotal">$<span>0</span></td>`;
  newRow.innerHTML += `<td class="action"><button class="btn btn-remove">Remove</button></td>`;
  table.appendChild(newRow);
  newProduct.querySelector('.name input').value = '';
  newProduct.querySelector('.price input').value = '0';
  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
