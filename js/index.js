// ITERATION 1

function updateSubtotal(product) {

  const price = document.querySelector('.price span').textContent
  const quantity = document.querySelector('.quantity input').value

  
  const subtotalTag = document.querySelector('.subtotal span')
  const subtotal = parseFloat(price * quantity)

  subtotalTag.innerHTML = `${subtotal}`

  return subtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let productList = document.querySelectorAll('.product')
  console.log(updateSubtotal(productList))
  let totalPrice = 0

  productList.forEach(prod => {
    totalPrice += updateSubtotal(prod)
  })

  // ITERATION 3
  let totalTag = document.querySelector('#total-value span')
  totalTag.textContent = totalPrice
  
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  document.querySelector('#cart tbody').removeChild(target.parentNode);

}

// ITERATION 5

function createProduct() {

  let newProdName = document.querySelector('.new-prod-name').textContent
  let newProdPrice = document.querySelector('.new-prod-price').value

  let newProduct = `
  <tr class="product">
    <td class="name">
      <span>${newProdName}</span>
    </td>
    <td class="price">$<span>${newProdPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `

  document.getElementsByTagName('tbody').innerHTML += newProduct

}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProdBtn = document.getElementById('create')
  createProdBtn.addEventListener('click', function () {
    createProduct()
    confirmRemovedProd()
  })

  function confirmRemovedProd() {
    const removeBtn = document.querySelectorAll('.btn-remove')
    removeBtn.forEach(elm => {
      elm.addEventListener('click', removeProduct)
    })
  }
  
});
