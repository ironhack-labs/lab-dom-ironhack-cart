// ITERATION 1
let totalPrices = []

function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const priceValue = price.innerHTML
  const quantityValue = quantity.value

  const subtotal = priceValue * quantityValue

  let subtotalElement = product.querySelector('.subtotal span')

  subtotalElement.innerHTML = subtotal

  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const twoProducts = document.getElementsByClassName('product')
  const twoProductsArr = [...twoProducts]
  const arrSum = twoProductsArr.forEach((product)=>{
    updateSubtotal(product)
  })

  
  // ITERATION 3
  const total = document.querySelector('#total-value span')

  const subtotals = document.querySelectorAll('.subtotal span')
  const totalsArr = [...subtotals]

  let sum = 0
  totalsArr.forEach((product)=>{
    sum += Number(product.innerHTML)
  })

  total.innerHTML = sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);

  const parent = event.currentTarget.parentNode.parentNode.parentNode

  parent.removeChild(target)

  calculateAll()

  
}

// ITERATION 5

function createProduct() {

  const theName = document.querySelector('.create-product input').value
  const thePrice = document.querySelector('.price-in').value
  let theParent = document.getElementById('the-body')

  let newRow = document.createElement('tr')
  newRow.innerHTML = `
      <td class="name" id="new-row">
        <span>${theName}</span>
      </td>
      <td class="price">$<span>${thePrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>`

    newRow.setAttribute('class', 'product')

  theParent.appendChild(newRow)

  //Añado de nuevo un addEventListener porque el general se lanza en el load
  // de la página, y no funcionará para elementos creados después
  // del load como es el caso.

  const removeBtn =  newRow.querySelector('.btn-remove')
  removeBtn.addEventListener('click', removeProduct)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn-remove')
  removeBtnArr = [...removeBtn]
  removeBtnArr.forEach((button)=>{
    button.addEventListener('click', removeProduct)
  })

  const createProductBtn = document.getElementById('create')
  createProductBtn.addEventListener('click', createProduct)
});
