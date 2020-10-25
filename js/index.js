// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceProduct = parseFloat(price.innerHTML)
  const quantityFinal = quantity.value

  let priceFinal = priceProduct * quantityFinal

  let subTotal = product.querySelector('.subtotal span');

  subTotal.innerHTML = priceFinal

  return subTotal
}


function calculateAll() {

  const twoProducts = document.querySelectorAll('.product')

  twoProducts.forEach(function (newTotal) {

    updateSubtotal(newTotal)

  })

  const finalSubtotal = document.querySelectorAll('.subtotal span')

  let precioFinal = 0

  finalSubtotal.forEach(function (totalSubtotal) {

    precioFinal += parseFloat(totalSubtotal.innerHTML)
    return precioFinal

  })

  const finalPrize = document.querySelector('#total-value span')

  finalPrize.innerHTML = precioFinal

}


// ITERATION 4

// function removeProduct(event) {
//   const target = event.currentTarget;

//   //... your code goes here
// }

// function deleteBotons(botons)
// {
//   const selectBoton = document.querySelectorAll('.action button')

//   selectBoton.onclick('click')

//   console.log(selectBoton)
// }

  // selectBoton.forEach(function (push) {
  //   selectBoton.addEventListener('click', alert("peligro"))
  // })
// }

// console.log('The target in remove is:', target);















// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  })

const selectBoton = document.querySelectorAll('.btn btn-remove')

  selectBoton.forEach(function (delete) {
      delete.onclick = console.log("me han hecho click")
    })
      



  // selectBoton.forEach(function () {
  //   selectBoton.onclick
  //   console.log(selectBoton)

  //... your code goes here

