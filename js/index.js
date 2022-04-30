// ITERATION 1

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!', product);
  
  //!Se van a traer los objetos que necesitamos para acceder al precio, a la cantidad y al subtotal

  
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  const subtotalField = Number(price.innerText) * Number(quantity.value)
  subtotal.innerText = subtotalField
  return subtotalField
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    // const singleProduct = document.querySelector('.product');
    // updateSubtotal(singleProduct);
    // end of test
    // ITERATION 2
    //... your code goes here
    // Get the DOM nodes for each product row
    const products = document.getElementsByClassName('product');
    // Declare an auxiliary variable that will hold the sum of each product subtotal
    let totalValue = 0;
    // Iterate through the product nodes,
    // call update subtotal on it and add the subtotal to the total value
    for (let product of products) {
      totalValue += updateSubtotal(product);
    }
    // ITERATION 3
    //... your code goes here
    // Display the total value of products in cart in the appropriate node
    document.querySelector('#total-value span').innerHTML = totalValue;
  }
  // ITERATION 4
  function removeProduct(event) {
    const target = event.currentTarget;
    // ...
    //target.closest('')
    const row = target.parentNode.parentNode;
    //   console.log('row: ', row);
    const parent = row.parentNode;
    //   console.log('parent: ', parent);
    parent.removeChild(row);
    calculateAll();
  }
  // ITERATION 5
  function createProduct(event) {
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