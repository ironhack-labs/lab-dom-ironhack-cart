// ITERATION 1
const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);


function updateSubtotal(product) {
  const price = parseInt(product.querySelector('.price span').innerHTML)
  const quantity = parseInt(product.querySelector('.quantity input').value)
  let subtotal = product.querySelector('.subtotal span')
  const total = price*quantity
  subtotal.innerHTML = total

  return parseInt(subtotal.innerHTML)
  //... your code goes here
 
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  let total = 0
  const products = document.querySelectorAll('.product')
  products.forEach(product =>  total += updateSubtotal(product))

  // ITERATION 3
  totalCart = document.querySelector('#total-value span')
  totalCart.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
 
  //... your code goes here
 
  parent = target.parentNode.parentNode.parentNode
  console.log(parent)
  parent.removeChild(target.parentNode.parentNode)
  
  calculateAll()
 
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProductDetails = document.querySelectorAll('.create-product input')
  const newProductName = newProductDetails[0].value;
  const newProductPrice = parseFloat(newProductDetails[1].value).toFixed(2)
  const newProduct = document.createElement(`tr`)
  newProduct.classList.add('product')
  newProduct.innerHTML =`<td class="name">
  <span>${newProductName}</span>
</td>
<td class="price">$<span>${newProductPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`

  // newProduct.appendChild(newProdContent)

  document.querySelector('tbody').appendChild(newProduct)

updateRmvButns()
  
}

function updateRmvButns(){

  const btns = document.querySelectorAll('.btn-remove')
 
  btns.forEach(btn =>
    btn.addEventListener('click', removeProduct)
  )

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  updateRmvButns()

  const createBtn = document.querySelector('#create')
  createBtn.addEventListener('click', createProduct)
  
 

  //... your code goes here
});
