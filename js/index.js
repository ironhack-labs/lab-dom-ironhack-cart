// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let quantity = product.querySelector('.quantity input')
  let itemPrice = product.querySelector('.price span').innerHTML
  let subSpan = product.querySelector('.subtotal span')
  subSpan.innerHTML = itemPrice * quantity.value
  return value = itemPrice * quantity.value
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  let allProducts = document.querySelectorAll('.product')
  console.log(allProducts)
  let total = 0
  allProducts.forEach((elem) => {
    total += updateSubtotal(elem)
  })
  console.log(total)
  let totalNode = document.querySelector('#total-value span')
  console.log(totalNode)
  totalNode.innerHTML = `<span>${total}</span>`
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event, elem) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parent = elem.parentNode.parentNode.parentNode
  parent.removeChild(elem.parentNode.parentNode)
}

// ITERATION 5

function createProduct() {
  let newName = document.querySelector('.create-product input[type="text"]')
  let newPrice = document.querySelector('.create-product input[type="number"]')
  let tbody = document.querySelector('tbody')
  let tr = document.createElement('tr')
  tr.classList.add('product')
  tr.innerHTML = `
      <td class="name"><span>${newName.value}</span> </td>
      <td class="price">$<span>${newPrice.value}</span></td>
      <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td> 
      <td class="subtotal">$<span>0</span></td>
      <td class="action"><button class="btn btn-remove">Remove</button></td>
      `

  tbody.appendChild(tr)

  console.log(newPrice)
  console.log(newName)
  newName.value = ''
  
  
  
  const allRemoveButton = document.querySelectorAll('.btn-remove')
  allRemoveButton.forEach((elem) => {
    console.log(elem)
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(event)
      removeProduct(event, elem)
    })
  })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const allRemoveButton = document.querySelectorAll('.btn-remove')
  allRemoveButton.forEach((elem) => {
    console.log(elem)
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(event)
      removeProduct(event, elem)
    })
  })
  const createButton = document.querySelector('#create')
  createButton.addEventListener('click', createProduct)
  //... your code goes here
});