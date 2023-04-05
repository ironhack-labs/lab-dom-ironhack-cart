// ITERATION 1

function updateSubtotal(product) {

  const price = parseInt(product.querySelector('.price span').innerHTML);
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = String(subtotal);
  return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.

  let total= 0;
  const products = document.getElementsByClassName('product');
  for(let i=0; i<products.length; i++){
    total += updateSubtotal(products[i]);
  }

  document.querySelector('#total-value span').innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  window.eventStuff = target

  target.parentNode.parentNode.removeChild(target.parentNode)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  //get inputs
  
  const name= document.getElementById('new-product-name').value
  const price= document.getElementById('new-product-price').value

  // create tr element
  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  document.querySelector('#cart tbody').appendChild(newTableRow);

  attachEventHandlers();
}

function attachEventHandlers() {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  // register event handlers for removing products
  const removeButtons = document.getElementsByClassName('action');
  for(let i=0; i<removeButtons.length; i++){
    removeButtons[i].addEventListener('click', removeProduct);
  }

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
}

window.addEventListener('load', () => {
  attachEventHandlers();
});
