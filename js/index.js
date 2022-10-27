// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElement = product.querySelector('.price span');
  const price = priceElement.innerText;
  const quantityElement = product.querySelector('.quantity input');
  const quantity = quantityElement.value;

  const subtotal = price * quantity;
  console.log(subtotal);
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;
  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const product2 = document.querySelectorAll('.product');
  let total = 0;
  for (let i = 0; i < product2.length; i++){
    total += updateSubtotal(product2[i]);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerText = total;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const row = target.parentNode.parentNode;
  const parent = row.parentNode;
  parent.removeChild(row);
}

// ITERATION 5

function createProduct() {
  
  const createRow = document.querySelector('.create-product');
  const createNameInput = createRow.querySelector('input').value;
  const createPriceInput = createRow.querySelector('.create-product [type="number"]');
  const newPriceInput = createPriceInput.value;
  const tableVar = document.querySelector('tbody');
  const newTableRow = document.createElement('tr');
  newTableRow.className = "product";


  tableVar.appendChild(newTableRow);

  newTableRow.innerHTML = `
        <tr class="product">
          <td class="name">
            <span>${createNameInput}</span>
          </td>
          <td class="price">$<span>${Number(newPriceInput).toFixed(2)}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr> `;

  const button = newTableRow.querySelector('.btn-remove');
  button.addEventListener('click', removeProduct);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProducts = document.querySelectorAll('.btn-remove');
  
  for(let i = 0; i < removeProducts.length; i++){
    removeProducts[i].addEventListener('click', removeProduct);
  }
  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
});
