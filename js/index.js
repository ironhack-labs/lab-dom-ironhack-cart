// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product')
  let totalPrice = 0
  products.forEach((product) => {
    totalPrice += updateSubtotal(product)
  })

  // ITERATION 3
  console.log(totalPrice)
  const total = document.querySelector('#total-value span')
  total.textContent = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parentNode = target.parentNode
  parentNode.removeChild(target)
  calculateAll()
  // TODO: this only removes hard-coded products
}
// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.querySelector(".create-product input[type='text']").value
  if (!productName) {
    return ''
  }
  const price = document.querySelector(".create-product input[type='number']").value
  
  let table = document.querySelector('#cart tbody');

  let createdProduct = document.createElement('tr')
  createdProduct.innerHTML = `<tr class="product">
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${price}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>` 
  
  table.appendChild(createdProduct)

  document.querySelector(".create-product input[type='text']").value = ''
  document.querySelector(".create-product input[type='number']").value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductButtons = document.querySelectorAll('.btn.btn-remove')
  removeProductButtons.forEach((btn) => btn.addEventListener('click', removeProduct))

  const createProductButton = document.querySelector('#create')
  createProductButton.addEventListener('click', createProduct)

});
