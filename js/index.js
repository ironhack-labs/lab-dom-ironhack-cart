// ITERATION 1

function updateSubtotal(product) {
  
  let unitPrice = parseFloat(product.querySelector('.price span').innerText);
  let quantity = parseInt(product.querySelector('.quantity input').value);
  
  let subTotal = +(unitPrice * quantity).toFixed(2);

  product.querySelector('.subtotal span').innerText = `${subTotal}`

  return subTotal;
}

function calculateAll() {
  const productList = [...document.querySelectorAll('.product')];
  let total = 0;

  productList.forEach(product => total += updateSubtotal(product));

  //console.log(typeof total)

  document.querySelector('#total-value span').innerText = +total.toFixed(2)

  
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  
  let productName = document.querySelector('.create-product input[type=text]').value;

  let unitPrice = document.querySelector('.create-product input[type=number]').value;

  //console.log(productName, unitPrice)

  let newProduct =  document.createElement('tr');
  
  newProduct.classList.add('product');

  newProduct.innerHTML =  
      `<td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${unitPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>`;

  newProduct.addEventListener('click',remove => remove.addEventListener('click', removeProduct));

  document.querySelector('tbody').appendChild(newProduct);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn.btn-remove');
  removeButtons.forEach(remove => remove.addEventListener('click', removeProduct));

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

});
