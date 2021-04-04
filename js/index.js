// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  
  let subTotal = price * quantity;
  
  product.querySelector('.subtotal span').innerText = subTotal;

  return subTotal;
}

function calculateAll() {
  
  let totalPrice = 0;
  
  let products = document.querySelectorAll('.product');
  
  products.forEach((product) => totalPrice += updateSubtotal(product));

  document.querySelector('#total-value span').innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode;

  let productTarget = target.parentNode;
  
  productTarget.remove()
  
  calculateAll()  
}

// ITERATION 5

function createProduct() {

  let createInput = document.querySelectorAll('.create-product input');
  console.log(createInput)
  let productName = createInput[0].value;
  let priceInput = document.getElementById('price-input');
  let productPrice = +parseFloat(priceInput.value).toFixed(2);

  if(productName === '' || priceInput === 0) {
    alert('Please give your product a name and a price :D')
  } else {
    let productRow = document.createElement('tr')

    productRow.classList.add('product');
    productRow.innerHTML = constructProduct(productName, productPrice);
    
    productRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

    document.querySelector('#cart tbody').appendChild(productRow);

    createInput[0].value= '';
    createInput[1].value = 0;
  }
}

const resetQuantity = () => {
  const quantityInputs = document.querySelectorAll('.quantity input'); 
  console.log({quantityInputs})
  
  quantityInputs.forEach(input => input.value = 0);
} 

window.addEventListener('load', () => {
  
  resetQuantity();

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
})
  

const removeBtns = document.querySelectorAll('.btn-remove');
for (i = 0; i < removeBtns.length; i++) {
  removeBtns[i].onclick = function(event) {
    console.log('yo')
    removeProduct(event);
  }
}

function constructProduct(name, price) {
  return `<td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`
}


