// ITERATION 1

function updateSubtotal (product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const subtotal = price * quantity
  const subtotalHTML = product.querySelector('.subtotal span')
  subtotalHTML.innerText = subtotal  
}

function calculateAll() {
  // ITERATION 2
  const productList = [...document.getElementsByClassName('product')]
  productList.forEach ((product) => {
    updateSubtotal(product)
  })

  // ITERATION 3
  const total = document.querySelector('#total-value span') 
  const everySubtotal = [...document.querySelectorAll('.subtotal span')]
  
  const addition = everySubtotal.reduce ((accum, subtotal ) => {
    return accum += Number(subtotal.innerText)
  }, 0)
  total.innerText = addition
}

// ITERATION 4

function removeProduct (event) {
  console.log("Hello")
  const target = event.currentTarget
  console.log('The target in remove is:', target)


  //... your code goes here
  const productTr = target.parentNode.parentNode
  const total = document.querySelector('#total-value span') 
  const subtotalTr = productTr.querySelector('.subtotal span')
  total.innerText -= subtotalTr.innerText
  console.log(productTr)
  productTr.remove()
}

// ITERATION 5

function createProduct () {
  const tBody = document.getElementsByTagName('tbody')[0]
  const createRow = document.getElementsByClassName('create-product')[0]
  const inputs = [...createRow.getElementsByTagName('input')]

  tBody.innerHTML += ` 
  <tr class="product">
    <td class="name">
      <span>${inputs[0].value}</span>
    </td>
    <td class="price">$<span>${Number(inputs[1].value).toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const deletePricesBtns = [...document.getElementsByClassName('btn-remove')]
  deletePricesBtns.forEach((deleteBtn) =>{
    deleteBtn.addEventListener('click', removeProduct)
  })

  const createBTn = document.getElementById('create')
  createBTn.addEventListener('click', createProduct)
})
