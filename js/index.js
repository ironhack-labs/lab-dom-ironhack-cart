// ITERATION 1

function updateSubtotal(product) {
  var price = product.querySelector('.price span');
  var quantity =product.querySelector('.quantity input');
  var subTotal = product.querySelector('.subtotal span');
  var operation = Number(price.textContent) * Number(quantity.value)

  subTotal.textContent = price.textContent * quantity.value ;
  return operation;
}
function calculateAll() {

var all = document.getElementsByClassName('product');
var total = 0;
for (let index = 0; index < all.length; index++) {
  const element = all[index];
  var subtotal = updateSubtotal(element);
  total += subtotal;
}


 var fullTotal = document.querySelector('#total-value span');
 
 fullTotal.textContent = total;
 
  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  
}

// ITERATION 4
var remove = document.querySelector('btn-remove');
remove.addEventListener('click', () remove.remove(price,quantity));

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  var input = document.querySelector('.input');
  var prix = document.querySelector('.prix');
  var newProduct = document.createElement('tr');
  newProduct.classList.add('product');
  newProduct.innerHTML = `<td class="name">
  <span>${input.value}</span>
</td>
<td class="price">$<span>${prix.value}</span></td>
<td>
</td>
<td></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`

  var tbody = document.querySelector('tbody');
  tbody.appendChild(newProduct);
  //... your code goes here
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const button1 = document.getElementById('create');
  button1.addEventListener('click',createProduct);
});
