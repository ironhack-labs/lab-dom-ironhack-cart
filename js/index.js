// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal');
  const priceValue = price.innerText;
  const quantityValue = quantity.value;
  
  return  subtotal.innerText = priceValue * quantityValue

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product')
  let totalValue = 0;

  products.forEach(product => {
    totalValue += updateSubtotal(product);
  });
  // ITERATION 3  
  const total = document.querySelector('#total-value span');
  total.innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  console.log(target.parentNode.parentNode)
  target.parentNode.parentNode.remove()
  console.log(target.parentNode.parentNode)
  calculateAll();
}

// ITERATION 5
const inputs = document.querySelectorAll('.create-product input')

function createProduct() {
  const tbody = document.querySelector('tbody');
  const inputs = document.querySelectorAll('.create-product input')

  tbody.insertAdjacentHTML('beforeend', `
  <tr class="product">
    <td class="name">
      <span>${inputs[0].value}</span>
    </td>
    <td class="price">$<span>${inputs[1].value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
`) 
const removeBtns = document.querySelectorAll('.btn-remove')
removeBtns.forEach(btn => {
  btn.addEventListener('click', removeProduct);
})

  // SOME TESTS TO REDUCE THE NUMBER OF LINES
  // const newProduct = document.querySelector('.product');
  // const tbody = document.querySelector('tbody');
  // const input = document.querySelector('.create-product input')
  // const price = document.querySelector('.price')
  
  // newProduct.querySelector('.name').innerText = input.value
  // newProduct.querySelector('.quantity').innerText = price.value
  // tbody.innerHTML += newProduct.innerHTML;  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove')
  removeBtns.forEach(btn => {
    btn.addEventListener('click', removeProduct);
  })

  const create = document.querySelector('#create')
  create.addEventListener('click', function() {
    createProduct()
    inputs[0].value = ""
    inputs[0].focus()
    inputs[1].value = 0
  });
});

