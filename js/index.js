// ITERATION 1


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  let quantity = product.querySelector('.quantity input');
  let subtotalValue = price.innerHTML * quantity.value;
  console.log(subtotalValue);
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = `${subtotalValue}`
}

function calculateAll() {
  let products = document.getElementsByClassName('product');
  products = [...products];
  products.forEach(updateSubtotal);



  // ITERATION 2
  let sum = 0;
  let subtotal = document.querySelectorAll('.subtotal span');
  subtotal = [...subtotal];
  subtotal.forEach((item) => {
    sum += Number(item.innerHTML);
  });
  console.log(sum);
  let total = document.querySelector('#total-value span');
  total.innerHTML = sum;

  // ITERATION 3

}

// ITERATION 4

function removeProduct(event) {
  if (event.target.className === 'btn btn-remove') {
    let target = event.currentTarget;
    console.log('The target in remove is:', target);
    target.parentNode.parentNode.remove();
    calculateAll()
  }
}

// ITERATION 5

function createProduct(event) {
  let name = document.querySelector('#name2').value
  console.log(name);
  let newQuan = document.querySelectorAll('#number2').value;
  console.log(newQuan);
  let newText = document.querySelector('tbody').innerHTML += `<tr class="product"><td class="name">${name}</td><td class="price">$<span>25.00</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder=${newQuan}" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td></tr>`
  console.log(newText);

  calculateAll();
  let createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButton = document.getElementsByClassName("btn btn-remove");
  removeButton = [...removeButton]
  removeButton.forEach(removeB => {
    removeB.addEventListener('click', removeProduct)
  });
  let createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  let cart = document.getElementById('cart');
  cart.addEventListener('click', removeProduct);



});