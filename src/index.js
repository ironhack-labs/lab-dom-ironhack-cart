// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;

  const priceValue = parseInt(price);
  const quantityValue = parseInt(quantity);

  const subtotal = priceValue * quantityValue;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.textContent = subtotal.toFixed(2);

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
  // Get all the product rows
  const allProducts = document.getElementsByClassName('product');

  let total = 0; 

  for (let i = 0; i < allProducts.length; i++) {
    total = updateSubtotal(allProducts[i]); 
  }


  // ITERATION 3
  // Update the total value in the DOM
  const totalValueElement = document.querySelector('#total-value span');
  totalValueElement.innerText = total; 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const name = nameInput.value;
  const price = parseInt(priceInput.value);

  if (name === "" || price <= 0) {
    alert("Please provide valid product details.");
    return;
  }

  // Create a new row for the product
  const newProductRow = `
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
    </tr>`;

  // Insert the new product row into the table
  const tableBody = document.querySelector('#cart tbody');
  tableBody.insertAdjacentHTML('beforeend', newProductRow);
}
const createProductButton = document.getElementById('create');
createProductButton.addEventListener('click', createProduct);


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
