// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  let multiplication = quantity.value * price.innerHTML;
  subtotal.innerHTML = multiplication;
  return multiplication;

}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  const totalCarrito = document.getElementById('total-value')
  var total = 0;

  products.forEach((element, index)=>{
    total = total + updateSubtotal(element);
  })
  

  // ITERATION 3
  
  msg = 'Total: $'+total
  totalCarrito.innerText=msg

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let newTarget = event.currentTarget.parentNode
  newTarget.parentNode.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const table = document.getElementById('cart')
  const body = table.getElementsByTagName('tbody')

  const nameInput = document.getElementById('pName')
  const name = nameInput.value

  const priceInput = document.getElementById('pPrice')
  const price = priceInput.value

  console.log(name, price)
  const tr = document.createElement('tr')

  tr.innerHTML =`
  <tr class="product">
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>
  `
console.log(body)
body[0].append(tr)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach((button, index)=>{
    button.addEventListener('click', removeProduct);
  })

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
