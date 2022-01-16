// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  console.log(price)
  console.log(quantity)
  let subtotalValue = price * quantity

  console.log(subtotalValue)

  let subTotal = product.querySelector('.subtotal span')
  subTotal.innerHTML = subtotalValue
  console.log(subTotal)
  return subtotalValue
}

function calculateAll() {
  let totalPrice = document.querySelector('#total-value span')
  const products = document.querySelectorAll('.product')
  console.log(products)
  let sum = 0
  products.forEach(function (eachproduct) {
    sum += updateSubtotal(eachproduct)


  })
  totalPrice.innerHTML = sum
  console.log(totalPrice)






}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const removeBtn= document.querySelectorAll('.btn-remove')
  removeBtn.forEach(function (eachbtnRemove){
    eachbtnRemove.addEventListener('click', removeProduct)
  
    console.log(eachbtnRemove)
  })
  
 
}
// ITERATION 5

let createButton = document.querySelector('#create')
console.log(createButton)
createButton.onclick = function () {

  console.log('hola')

  createProduct()
}









function createProduct() {
  let newProduct = document.createElement('tr')
  newProduct.setAttribute('class', 'product')
  document.querySelector('tbody').appendChild(newProduct)
  let createProduct =document.querySelector('.create-product')
  let newName = document.querySelector('#newName').value
  let newPrice = document.querySelector('#newPrice').value


  newProduct.innerHTML +=
    `<td class="name">
          <span>${newName}</span>
          </td>
          <td class="price">$<span>${newPrice}</span></td>
          <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
          <button class="btn btn-remove">Remove</button>
          </td>`

  console.log(newProduct)

  
  

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});
