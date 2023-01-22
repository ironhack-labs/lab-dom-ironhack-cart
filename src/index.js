// ITERATION 1

function updateSubtotal(product) {
  
  let price = product.querySelector('.price span')
  price = parseFloat(price.innerText)
  let quantity = product.querySelector('.quantity input')
  quantity = parseInt(quantity.value)
  let subtotal = product.querySelector('.subtotal span ')
  subtotal.innerText = price*quantity
  return subtotal.innerText

}

function calculateAll(body) {
  
  let total = 0
  const products = document.querySelectorAll('.product')
  for (let i = 0; i < products.length; i++){
    total += parseFloat(updateSubtotal(products[i]))
  }
  const changeTotal = document.querySelector('.total-value span')
  changeTotal.innerText = total.toFixed(2)
 
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget.parentNode.parentNode;
  const targetParent = target.parentNode
  targetParent.removeChild(target)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector('.create-product td input').value
  const price = document.querySelector('.newPrice input').value
  // create the new product in the html
  
  const newProduct = `<tr class="product">
          <td class="name">
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
  let cartBody = document.querySelector('tbody')
  cartBody.innerHTML += newProduct

  // clear the name and price
  document.querySelector('.create-product td input').value = ""
  document.querySelector('.newPrice input').value = 0
  
}

function updateRemoveButtons(){
  return document.querySelectorAll('.btn-remove')
}
window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  //For any product that must be removed
  let removeBottons = updateRemoveButtons()
  for (let i = 0; i< removeBottons.length; i++){
      removeBottons[i].addEventListener('click', removeProduct)
      
  }  
});


const createProductBtn = document.getElementById('create')
createProductBtn.onclick = function () {
    createProduct()
    removeBottons = updateRemoveButtons()
    for (let i = 0; i < removeBottons.length; i++) {
    removeBottons[i].addEventListener('click', removeProduct)}
}

