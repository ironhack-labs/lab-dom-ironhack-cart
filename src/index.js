// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!')
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  // console.log('price is', price)
  // console.log('quantity is', quantity)
  const newSubtotal = price * quantity
  // console.log('new subtotal is', newSubtotal)
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = newSubtotal
  return newSubtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product')
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product')
  console.log(products)
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i])
  }

  // ITERATION 3
  let total = 0
  for (let i = 0; i < products.length; i++) {
    const element = products[i];

    total += Number(element.querySelector('.subtotal span').innerText)
    console.log(total)

  }


  const totalPrice = document.querySelector('#total-value span')
  totalPrice.innerText = total
}

// ITERATION 4 (TO DO)

// function removeProduct(product) {
//   const table = document.querySelector('#cart tbody');
//   table.removeChild(product);
// }


// function removeProduct(event) {
//   const target = event.currentTarget;
//   console.log('The target in remove is:', target);
//   //... your code goes here
//   window.addEventListener('load', () => {
//     const removeBtn = document.querySelectorAll('.btn-remove')
//     removeBtn.addEventListener('click', removeProduct)
//   })
}


// ITERATION 5 (TO DO)

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});