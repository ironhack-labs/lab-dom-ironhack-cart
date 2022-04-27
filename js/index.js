// ITERATION 1

//funciona bien
function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')
  
  let result = Number(price.innerText) * Number(quantity.value);
  
  subtotal.textContent = result
  return subtotal.innerText
}


function calculateAll() {

  // ITERATION 2

  // funciona bien
  let sum = 0;
  const allProducts = document.querySelectorAll('.product')
  
  allProducts.forEach(element => {
   let testing =  updateSubtotal(element)
    sum += Number(testing)
  })

  // ITERATION 3

  //funciona bien
  let totalNum = document.querySelector('#total-value > span')
  totalNum.textContent = sum
  
}

// ITERATION 4

// no funciona bien.. borra solo los ya creados

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('testing');
  target.parentNode.parentNode.remove()
}


// ITERATION 5

//si crea un nuevo articulo funciona bien pero el solution lab no lo marca 

function createProduct() {
  const createBtn = document.querySelector('#create');
  const tbody = document.querySelector('tbody');
  const price = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]');
  const testing = document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input[type=text]')
  
  createBtn.addEventListener('click', createProduct = () => {
    tbody.innerHTML += `
    <tr class="product">
      <td class="name">
        <span>${testing.value}</span>
      </td>
     <td class="price">$<span>${price.value}</span></td>
     <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
     </td>
     <td class="subtotal">$<span>0</span></td>
     <td class="action">
      <button class="btn btn-remove">Remove</button>
     </td>
    </tr>`
  })
}
createProduct()

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  const removeBotton = document.querySelectorAll('.btn-remove')
  removeBotton.forEach(button => {
    button.addEventListener('click', removeProduct)
  })
  
});

