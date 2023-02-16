// ITERATION 1

function updateSubtotal(product) {
 
  const priceElement = product.querySelector('.price span')
  const quantityElement = product.querySelector('.quantity input')
 
  const price = parseFloat(priceElement.innerHTML)
  const quantity = parseFloat(quantityElement.value)
 
  const subTotal = price * quantity
  const subTotalElement = product.querySelector('.subtotal span')

  subTotalElement.innerHTML = subTotal
  return subTotal
}

function calculateAll() {

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');

  let totalPrice = 0

  allProducts.forEach(product => {
    const subTotal = updateSubtotal(product)
    totalPrice += subTotal
  });

    // ITERATION 3
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove()
 
}

// ITERATION 5

function createProduct() {
  const tableBody = document.querySelector('#cart tbody');
  const newProduct = document.createElement('tr');
  newProduct.classList.add('product');
  newProduct.innerHTML = `
    <td class="name">
      <span>Ironhack beer mug</span>
    </td>
    <td class="price">$<span>20.00</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
tableBody.appendChild(newProduct);
newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct)
  })

  const createProductBtn = document.querySelector('#create')
  createProductBtn.addEventListener('click', createProduct)
});
