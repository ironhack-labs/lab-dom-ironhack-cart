// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');

  const spanPrice = product.querySelector('.price span');
  const price  = Number(spanPrice.innerText);
  

  const quantityInput = product.querySelector('.quantity input');
  const  quantity = quantityInput.value;
  
  const subTotal = quantity * price

  const subTotalSpan = product.querySelector ('.subtotal');
  subTotalSpan.innerText = subTotal
  return subTotal

}

function calculateAll() {
  
  const products = document.querySelectorAll('.product');
  
  let total = 0
  
  products.forEach(product => {
      total += updateSubtotal(product)
      
  })

  document.querySelector('#total-value span').innerText = total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
    
  target.parentNode.parentNode.remove(); 

}

// ITERATION 5


function createProduct() {
  const tBody = document.querySelector('tbody');
  const newTR = document.createElement('tr');
  newTR.classList.add('product')
  newTR.innerHTML = `
    <td class="name"><span>${document.querySelector('.create-product input').value}</span></td>
    <td class="price">$<span>${document.querySelector('.create-product input[type="number"]').value}</span></td>
    <td class="quantity">
     <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;
  tBody.appendChild(newTR)
  newTR.querySelector('.btn-remove').addEventListener('click',removeProduct);
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  const addProductBtn = document.getElementById('create');
  calculatePricesBtn.addEventListener('click', calculateAll);
  removeProductBtn.forEach( single => single.addEventListener('click', removeProduct));
  addProductBtn.addEventListener('click', createProduct)
});
