// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  let price = Number(product.querySelector('.price span').innerHTML)
  let quantity = Number(product.querySelector('.quantity input').value)
  let subtotal = price * quantity
  product.querySelector('.subtotal span').innerHTML= `${subtotal}`
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product')
  let allProducts = [...products]
  let total = 0
  allProducts.forEach((product)=>{
    updateSubtotal(product)
    total += Number(product.querySelector('.subtotal span').innerHTML)
  })
  

  // ITERATION 3
  //... your code goes here
  document.querySelector('h2 span').innerHTML = `${total}`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let product = target.parentNode.parentNode
  let table = product.parentNode
  table.removeChild(product)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let name = document.querySelector('.create-product input[type="text"]').value
  let price = document.querySelector('.create-product input[type="number"]').value
  let newProduct = document.createElement('tr')
  newProduct.classList.add('product')
  newProduct.innerHTML = `
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove" onclick="removeProduct(event)">Remove</button>
  </td>`
  let parent = document.querySelector('tbody');
  parent.appendChild(newProduct)


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});


