// ITERATION 1

function updateSubtotal(product) {
  // Get DOm elements
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  //Extract values from DOM elements
  const price = Number(priceElement.innerHTML);//convert string into number
  const quantity = Number(quantityElement.value);//Same as above

  //Calculate subtotal
  const subtotalValue = quantity * price;

  // Hold subtotal in a variable
  const subTotal = product.querySelector('.subtotal span');

  // get into the Element the subtotal 
  subTotal.innerHTML = subtotalValue;

  return subtotalValue;
}


function calculateAll() {
  

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct)
  
  // ITERATION 2
  // Getting the Dom elements for each product row
  const products = document.querySelectorAll('.product');// return a node list of all the products(rows)
    //console.log(products);

  // Declare an auxiliar variable will hold the subtotal sum of each product
  let totalValue = 0;

  // Iterate trough the productElements nodes
  // call updateSubtotal() on it an add the product subtotals to the total value
  for(let product of products) {
    totalValue += updateSubtotal(product);
  }
  
  // ITERATION 3
  //Display the total value of rpoducts in cart in the appropriate node
  document.querySelector('#total-value span').innerHTML = totalValue;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('este fue el mn que se fue', target);
  //target.closest('.product').remove();
  const row = target.parentNode.parentNode;
  console.log('row:', row);
  const parent = row.parentNode;
  console.log(parent);
  parent.removeChild(row);
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const createRow = document.querySelector('.create-product');
  let newProdNameInput = createRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);
  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
    <td class="name">
      <span>${newProdNameValue}</span>
    </td>
    <td class="price">$<span>${newProdPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</>
    </td>
  `;
    // get the parent of this newly created row
    const parent = document.querySelector('#cart tbody');
    // append the newly created row to the parent
    parent.appendChild(newTableRow);
    // make sure remove button inherits the same behavior as other remove buttons
    const removeBtn = newTableRow.querySelector('.btn-remove');
    removeBtn.addEventListener('click', removeProduct);
    // clean the fields
    newProdNameInput.value = '';
    newProdPriceInput.value = 0;
  }
  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
    const removeBtns = document.querySelectorAll('.btn-remove');
    for (let removeBtn of removeBtns) {
      removeBtn.addEventListener('click', removeProduct);
    }
    const createBtn = document.getElementById('create');
    if (createBtn) {
      createBtn.addEventListener('click', createProduct);
    }
  });

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
