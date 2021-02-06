// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('input').value;
  const result = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = result;
  console.log(`Result ` + result);
  return result;
}

function calculateAll() {
  // ITERATION 2

  const productsList = document.querySelectorAll('.product');
  let resultSubtotal = 0;
  productsList.forEach(function (product){
    const resultUpdate = updateSubtotal(product);
    resultSubtotal += resultUpdate;
  });
  console.log(`Subtotals ` + resultSubtotal);

  // ITERATION 3

  const total = document.querySelector("#total-value span");
  total.innerHTML = resultSubtotal;
  console.log(`Total: ` + total);

}

// ITERATION 4

function removeProduct(event) {
  const productToRemove = event.currentTarget.parentElement.parentElement;
  productToRemove.remove();
}

// ITERATION 5

function createProduct() {
  const inputProductName = document.querySelector('#input-name');
  const inputProductPrice =  document.querySelector('#input-price');
  const productsList = document.getElementById('products');

  productsList.innerHTML += `
  <tr class="product">
    <td class="name">
      <span>${inputProductName.value}</span>
    </td>
    <td class="price">$<span>${inputProductPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;
  
  const removeProductBtn = document.getElementsByClassName('btn btn-remove');
  for(let i=0; i<removeProductBtn.length; i++){
    removeProductBtn[i].addEventListener('click', removeProduct);
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);

  const removeProductBtn = document.getElementsByClassName('btn btn-remove');
  for(let i=0; i<removeProductBtn.length; i++){
    removeProductBtn[i].addEventListener('click', removeProduct);
  }
});