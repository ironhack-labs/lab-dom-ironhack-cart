// ITERATION 1
function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').innerHTML)
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')
  const result = price * quantity
  subtotal.innerHTML = result
  return result
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const products = Array.from(document.getElementsByClassName('product'))
  //products.forEach(product => updateSubtotal(product))
  //products.array.forEach(product => updateSubtotal(product))
  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span')
  const totalPrice = products.reduce((acc, product) => acc + updateSubtotal(product), 0)
  total.innerHTML = totalPrice

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove()
  calculateAll()
  //console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const prodName = document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input[type=text]')
  if(!prodName.value){
    alert('Please, insert product name')
    return
  }
  const prodPrice = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]')
  console.log(typeof prodPrice)
  const table = document.querySelector('#cart tbody')
  const newProduct = document.createElement('tr')
  newProduct.classList.add('product')
  newProduct.innerHTML = `<td class="name">
      <span>${prodName.value}</span>
    </td>
    <td class="price">$<span>${parseInt(prodPrice.value).toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct)
  table.appendChild(newProduct)
  prodName.value = ''
  prodPrice.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeProductBtns = document.getElementsByClassName('btn-remove')
  calculatePricesBtn.addEventListener('click', calculateAll);
  [...removeProductBtns].forEach(btn => btn.addEventListener('click', removeProduct))
  document.getElementById('create').addEventListener('click', createProduct)
  //... your code goes here
});
