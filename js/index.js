// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML
  let quantity = product.querySelector('.quantity input').value

  let subtotal = product.querySelector('.subtotal span')

  let result = quantity * price;

  subtotal.innerHTML = result;

  return result;

}

function calculateAll() {

  const products = document.getElementsByClassName('product');

  const total = document.querySelector('#total-value span')

  let sum = 0;

  for (product of products){
    sum += updateSubtotal(product);
  }

  total.innerHTML = sum;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode
  target.remove(target);
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const details = document.querySelectorAll('.create-product input')

  let productName = details[0].value;
  let unitPrice = details[1].value;

  console.log(productName, unitPrice)

  let newElement = `<tr class="product">
  <td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${unitPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`

  let table = document.querySelector('#cart tbody');

  table.innerHTML += newElement;

  const removeProductBtn = document.getElementsByClassName('btn btn-remove');
  for (btn of removeProductBtn){btn.addEventListener('click', removeProduct)}
  

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.getElementsByClassName('btn btn-remove');
  
  for (btn of removeProductBtn){btn.addEventListener('click', removeProduct)}

  const createProductBtn = document.getElementById('create')
  createProductBtn.addEventListener('click', createProduct)

});
