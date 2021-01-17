// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

    let price = product.querySelector('.priceNumber')
    let quantity = product.querySelector('.inputquantity')

    let subtotalPrice = quantity.value * price.innerHTML

    let subt = product.querySelector ('.subtotal')
    subt.innerHTML = `$ ${subtotalPrice}`

    return subtotalPrice

}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let products = document.querySelectorAll ('.product')
  console.log(products)
  let totalPrice = 0
  products.forEach( product => totalPrice += updateSubtotal(product))
  console.log(totalPrice)


  // ITERATION 3
  const total =document.querySelector('h2 span')
  console.log(total)
  total.textContent = totalPrice

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  document.querySelector('tbody').removeChild (target.parentNode);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProduct = document.createElement('product')

        // 2.- Fulfill element
        const text = document.createTextNode('.priceNumber .inputquantity')
        newProduct.appendChild(text)

        // 3.- Append elemento into DOM (al final del padre)
        document.querySelector('tbody').appendChild(newProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeBtn = document.querySelectorAll ('.action')
  removeBtn.forEach(element => element.addEventListener( 'click', removeProduct))
  
  const createProd = document.getElementById('create')
  createProd.addEventListener('click', createProduct)
})
