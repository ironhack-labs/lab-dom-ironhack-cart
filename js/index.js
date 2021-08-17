// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')
  // let totalPrice = Number(subtotal.innerText)
  // totalPrice += Number(price) * quantity
  // subtotal.innerText = totalPrice
  return subtotal.innerText = Number(price) * quantity
}



function calculateAll() {

  let totalSum = 0

  const productsList = document.querySelectorAll('.product')
  productsList.forEach(product => {
    totalSum += updateSubtotal(product)
    removeProduct(product)
  });

  // const removeButtons = document.querySelectorAll('.product')
  // removeButtons.forEach(product => {
  //   removeProduct(product)
  // })
  

  document.getElementById('total-value').innerText = totalSum

  
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentElement.parentElement.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProduct = document.querySelector('.create-product')
  const newProductValues = newProduct.querySelectorAll('input')
  const newProductName = newProductValues[0].value
  const newProductPrice = newProductValues[1].value
  
  let productRow = document.createElement('tr')
  productRow.classList.add('product')
  let productList = document.querySelector('#cart tbody')
  let newProductContents = `
  <td class="name">
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
  productRow.innerHTML = newProductContents
  productList.append(productRow)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductBtns = document.getElementsByClassName('btn-remove');
  for(let i = 0; i < removeProductBtns.length; i++) {
    let button = removeProductBtns[i]
    button.addEventListener('click', (event) => {
      removeProduct(event)
      console.log(event)
    })
  }
  const addNewProductBtn = document.getElementById('create')
  addNewProductBtn.addEventListener('click', createProduct)
  //... your code goes here
});
