// ITERATION 1

// const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const subTotal = price * quantity;

  console.log(subTotal)

  return product.querySelector('.subtotal span').innerHTML = subTotal


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const singleProduct = document.querySelector('.product')
  updateSubtotal(singleProduct);

  let totalValue = 0;

  for (let i = 0; i < document.querySelectorAll('.product').length; i++) {
    updateSubtotal(document.querySelectorAll('.product')[i])
    let multiprice = document.querySelectorAll('.product')[i]
    updateSubtotal(multiprice)
    totalValue += updateSubtotal(multiprice)
    document.querySelector('#total-value span').innerHTML = totalValue
  }

  // return product.querySelector('#total-value').innerHTML = totalValue


  // updateSubtotal(allProducts);
  // ITERATION 3
  //... your code goes here

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here



  let removePadre = document.querySelector('.padreProduct')
  let removeHijo = document.querySelector('.product')
  let removeProduct = removePadre.removeChild(removeHijo)

  // let newPrice = 0;

  // if (removeProduct) {
  //   newPrice = totalValue.querySelector('#total-value span') - subTotal.querySelector('.subtotal')
  //   newPrice.querySelector('#total-value span').innerHTML = totalValue
  // }


  // for (let i = 0; i < removeProduct.length; i++) {
  //   let eliminar = document.querySelectorAll('.product')[i]

  //   eliminar.innerHTML = "new text"
  // }

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here

  let removeClass = document.querySelectorAll('.btn-remove')

  for (let i = 0; i < removeClass.length; i++) {
    let eliminar = document.querySelectorAll('.btn-remove')[i]
    eliminar.addEventListener('click', removeProduct)
  }

});
