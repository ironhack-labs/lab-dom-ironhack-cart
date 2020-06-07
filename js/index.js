// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  const subTotalPrice = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subTotalPrice


  return subTotalPrice

  //... your code goes here
}

function calculateAll() {

  // const allProducts = [...document.getElementsByClassName('product')]
  // allProducts.forEach (product => updateSubtotal(product))

  const products = document.getElementsByClassName('product')

  const productsArray = [...products]

  let total = 0

  productsArray.forEach(elm => {
    const itemSubtotal = updateSubtotal(elm)
    total += itemSubtotal

  })

  // ITERATION 3
  //... your code goes here

  const totalValue = document.querySelector('#total-value span')

  totalValue.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    let button = document.querySelectorAll(".btn")
    button.forEach(function (btn) {
        btn.addEventListener('click', removeProduct)

        })
    })

