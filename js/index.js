// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  const subtotal = price * quantity

  product.querySelector('.subtotal span').innerHTML = subtotal

  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  let products = document.querySelectorAll('.product');

  products.forEach(function(product){
    updateSubtotal(product);
  });

  // ITERATION 3
  let totalSum = 0
  
  products.forEach(function(product){
    totalSum += Number(product.querySelector('.subtotal span').innerHTML)
  })
  // console.log(typeof(totalSum))
  // console.log(totalSum);

  document.querySelector('#total-value span').innerHTML = totalSum
  // console.log(document.querySelector('#total-value span'));
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  console.log(target.parentNode.parentNode);
  target.parentNode.parentNode.remove()
  calculateAll()

}

// ITERATION 5

function createProduct() {
  let productName = document.querySelectorAll('#cart > tfoot > tr > td:nth-child(1) > input[type=text]')[0].value
  let unitPrice = document.querySelectorAll('#cart > tfoot > tr > td:nth-child(2) > input[type=number]')[0].value
  
  let newProduct = document.createElement('tr')

  newProduct.innerHTML = `<td class="name">
  <span>${productName}</span>
  </td>
  <td class="price">$<span>${unitPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`

  // class="name" muss noch hinzugefügt werden:
  newProduct.classList.add('product')

  console.log(newProduct);

  document.querySelector('tbody').appendChild(newProduct)

  // hier noch mal den code zum aktivieren des "RemoveButtons"
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach(function(button){
  button.addEventListener('click', removeProduct);
  }) 
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach(function(button){
  button.addEventListener('click', removeProduct);
  }) 

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
  
  // //... your code goes here
});

