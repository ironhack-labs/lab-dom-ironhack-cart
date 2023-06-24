// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span');
  const quantity= product.querySelector('.quantity input');
  const priceValue = Number(price.innerHTML);
  const quantityValue = Number(quantity.value);
  const subtotal = priceValue * quantityValue;
  const subtotalValue = product.querySelector(".subtotal span");
  subtotalValue.innerHTML = subtotal;
  return subtotal;  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  
  //... your code goes here
  const produtos = document.querySelectorAll('.product');
  let produtoTotal = 0;
  produtos.forEach(function(oneProduct) {
    var oTotal = updateSubtotal(oneProduct);
    produtoTotal += oTotal;
  });
  // ITERATION 3
  //... your code goes here
  var totalFinal = document.querySelector("#total-value span");
  totalFinal.textContent = produtoTotal;
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
  const tableBodyElement = document.querySelector('#cart tbody');
  const createProductNameElement = document.querySelector(
    '.create-product input[type="text"]'
  );
  const createProductPriceElement = document.querySelector(
    '.create-product input[type="number"]'
  );
  const name = createProductNameElement.value;
  const price = createProductPriceElement.valueAsNumber;
  const productElement = document.createElement('tr');
  productElement.classList.add('product');
  productElement.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
  const productRemoveButtonElement = productElement.querySelector('button');
  productRemoveButtonElement.addEventListener('click', removeProduct);
  tableBodyElement.appendChild(productElement);
  createProductNameElement.value = '';
  createProductPriceElement.valueAsNumber = 0;
}
  
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const createProductElement = document.getElementById('create');
  if (createProductElement)
    createProductElement.addEventListener('click', createProduct);
});
