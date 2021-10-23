// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = parseFloat(product.querySelector('.price span').textContent);
  let quantity = parseFloat(product.querySelector('.quantity input').value);
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal;
  return subtotal;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  // ITERATION 2
  let variousProducts = document.querySelectorAll('.product');
  let totalPrice = 0;
  variousProducts.forEach ((elem) => {
    totalPrice += updateSubtotal(elem);
  })
  // ITERATION 3
  
  let totalValue = document.querySelector('#total-value span');
  totalValue.textContent = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentNode.parentNode.remove();

}

// ITERATION 5

function createProduct() {
  let newProductName = document.querySelector('.new-product-name').value;
  let newProductPrice = document.querySelector('.new-product-price').value;
  
  const newProduct = `
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
  </tr>
  `
  document.querySelector('.tbody').innerHTML += newProduct;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', function (){
    createProduct();
    scanDeleteButtons();
  });

  function scanDeleteButtons () {
    const deleteBtn = document.querySelectorAll('.btn-remove');
    deleteBtn.forEach (elem => {
      elem.addEventListener('click', removeProduct);
    })
  }
});
