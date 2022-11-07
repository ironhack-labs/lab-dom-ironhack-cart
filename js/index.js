// ITERATION 1

function updateSubtotal(product) {
console.log('Calculating subtotal, yey!')
const price = product.querySelector('.price span').innerText
const quantity = product.querySelector('.quantity input').value
let sum = price * quantity
let subtotal = product.querySelector('.subtotal span')
subtotal.innerText = sum
console.log(sum)
return sum
}

function calculateAll() {
   // ITERATION 2
  let products = document.getElementsByClassName('product');
  let sum = 0;
  for (item of products) {
    sum += updateSubtotal(item);
  }
// ITERATION 3
  //... your code goes here
let total = document.querySelector('#total-value span');
total.innerHTML = sum;
console.log(sum)
return sum;

  
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentElement.parentElement);
  target.parentElement.parentElement.remove();
  calculateAll();
  //... your code goes here
 
}

// ITERATION 5

function createProduct() {
  const inputs = document.querySelectorAll('.create-product input');
  const prodName = inputs[0].value;
  const prodPrice = inputs[1].value;
  const product = document.createElement('tr');
  product.className = 'product';
  product.innerHTML = `<td class="product">
             <span>${prodName}</span>
             </td>
             <td class="price">$<span>${prodPrice}</span></td>
             <td class="quantity">
             <input type="number" value="0" min="0" placeholder="Quantity" />
             </td>
             <td class="subtotal">$<span>0</span></td>
             <td class="action">
             <button class="btn btn-remove">Remove</button>
             </td>`;
  document.querySelector('tbody').appendChild(product);         
  product.querySelector('.btn.btn-remove').addEventListener('click', removeProduct);
  return product;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
   const removeBtn = document.querySelectorAll('.btn.btn-remove')
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct)
  }
  const addProdBtn = document.getElementById('create');
addProdBtn.addEventListener('click', createProduct);
});
