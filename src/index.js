// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  let calculation = parseFloat(price.textContent) * parseInt(quantity.value);

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.textContent = calculation.toFixed(2);

  return calculation;
};


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  let totalValue = 0;

  for (let index = 0; index < products.length; index++) {
    const product = products[index];
    const subtotal = updateSubtotal(product);

    totalValue += subtotal;
  }
  // ITERATION 3
  //... your code goes here
  const totalElement = document.querySelector('#total-value span');
  totalElement.textContent = totalValue.toFixed(2);

  return totalValue;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newName = document.querySelector('#new-product-name').value;
  const newPrice = document.querySelector('#new-product-price').value;

  if (newName === '' || newPrice === '') {
    alert("Enter new product's name and price");
    return;
}

const tbody = document.querySelector('#cart tbody');

const newRow = document.createElement('tr');
newRow.classList.add('product');
newRow.innerHTML = `
  <td class="name"><span>${newName}</span></td>
  <td class="price">$<span>${parseFloat(newPrice).toFixed(2)}</span></td>
  <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
  <td class="subtotal">$<span>0.00</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
`;

tbody.appendChild(newRow);

newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

document.querySelector('#new-product-name').value = '';
document.querySelector('#new-product-price').value = '';

};

function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.closest('.product');
  productRow.remove();
  calculateAll(); 
};

//comment