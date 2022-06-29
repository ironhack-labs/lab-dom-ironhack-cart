// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value

  const subtotal = Number(price) * Number(quantity)
  product.querySelector('.subtotal span').innerText = subtotal

  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0
  const products = document.getElementsByClassName('product')
  console.log (products)

  for (let i=0; i < products.length; i++) {
    total += updateSubtotal(products[i])
  }

  // ITERATION 3
  //... your code goes here
    document.querySelector('#total-value span').innerText = total
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentElement.parentElement.remove();
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  //input = document.querySelectorAll('tfoot' input)
  inputProduct = document.querySelector('#product').value
  inputPrice = document.querySelector('#price').value

  let tr = document.createElement('tr')

  tr.classList.add('product')
    tr.innerHTML = 
  `<td class="name">
       <span>${inputProduct}</span>
    </td>
    <td class="price">$<span>${inputPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`

  let parent = document.querySelector('tbody');

  parent.appendChild(tr)

  inputProduct.value = '';
  inputPrice.value = '';

  let removeButton = document.getElementsByClassName('btn btn-remove')
  removeButton[removeButton.length - 1].addEventListener('click', removeProduct) 

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeButton = document.getElementsByClassName('btn btn-remove')
  for (let i=0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', removeProduct)
  }

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);

});