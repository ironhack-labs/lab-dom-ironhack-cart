// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subTotal;
  console.log('Calculating subtotal, yey!');
  return subTotal;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let totalDue = 0;
  allProducts.forEach(eachProduct => {
  totalDue += updateSubtotal(eachProduct)
  })

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalDue;
}

// ITERATION 4
  function removeProduct(event) {
    const target = event.currentTarget;
    const productToRemove = target.closest('.product')
    productToRemove.remove();
    calculateAll();

  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  
  const newProductInputs = document.querySelectorAll(".create-product input");
  const newProductName = newProductInputs[0].value;
  const newProductPrice = newProductInputs[1].value;

  let newProduct = `
  <tr class="product">
    <td class="name">
      <span>${newProductName}</span>
    </td>
    <td class="price">$<span>${newProductPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`;

  const tableBody = document.querySelector("tbody");
  tableBody.insertAdjacentHTML("beforeend", newProduct);

  let removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach((btn) => btn.addEventListener("click", removeProduct));
  
  newProductInputs[0].value = ""
  newProductInputs[1].value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn.btn-remove');
  removeProductBtn.forEach(btn => {
  btn.addEventListener('click', event => {
    removeProduct(event);
  })
  })

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

});
