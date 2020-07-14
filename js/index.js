// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  console.log(price);
  const quantity = product.querySelector('.quantity input').value;
  console.log(quantity);
  let subtotal = quantity*price;
  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  const products = document.querySelectorAll('.product')
  let totalPrice = 0;
  products.forEach(product => {
    updateSubtotal(product);
    totalPrice += updateSubtotal(product);
    console.log(totalPrice);
    document.querySelector('#total-value span').innerText = totalPrice;
  });
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  

  let delElement = target.parentNode.parentNode;
  console.log(delElement);
  delElement.parentNode.removeChild(delElement);
  calculateAll();
}

// ITERATION 5

function createProduct() {

  
  let newProductName = document.querySelector('.new-product-name').value;
  let newProductPrice = document.querySelector('.new-product-price').value;


  // Was thinking of adding another condition in the if statement below to check product price is not zero but decided I'll allow free products

  if (newProductName.length === 0) {
    return "Please enter a product name";
  }
  
  let newProductRow = document.createElement('tr');
  newProductRow.classList.add('product');
  newProductRow.innerHTML = `<td class="name">
  <span>${newProductName}</span>
</td>
<td class="price">$<span>${newProductPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
  newProductRow.querySelector('.btn-remove').addEventListener('click', removeProduct);
  document.querySelector('tbody').appendChild(newProductRow);

  document.querySelector('.new-product-name').value = '';
  document.querySelector('.new-product-price').value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
