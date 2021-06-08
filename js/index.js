// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  
  subtotal.textContent = price * quantity; // Updates subtotal on the page
  return Number(subtotal.textContent);
}

function calculateAll() {
  // ITERATION 2 + 3
  let sum = 0;
  const products = document.querySelectorAll('.product');
  for (let i = 0; i < products.length; i++)
    sum += updateSubtotal(products[i]); // Updates the product subtotal and increases the total price

  const total = document.querySelector('#total-value span');
  total.textContent = `${sum}`; // Updates total price
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  
  target.parentNode.removeChild(target); // Removes the item from the table
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const parent = document.getElementsByTagName('tbody');
  const product = document.querySelectorAll('.create-product input');
  const name = product[0].value; // Name of the new product
  const price = product[1].value; // Price of the new product
   
  const newProduct = `
  <tr class="product">
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
        </tr>
  `;

  parent[0].innerHTML += newProduct; // Adds a new product to the table

  // Resets name and price of the new product input
  product[0].value = '';
  product[1].value = '';

  // Updates the button list so that the new button also works
  const removeBtn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeBtn.length; i++)
    removeBtn[i].addEventListener('click', removeProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeBtn.length; i++)
    removeBtn[i].addEventListener('click', removeProduct)
    
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
