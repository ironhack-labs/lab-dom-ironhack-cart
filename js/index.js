// ITERATION 1

//nconst { product } = require("puppeteer")

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value

  let subtotal = price * quantity    
  product.querySelector(".subtotal span").innerText = subtotal
  // console.log(subtotal)
  return subtotal
  
  }


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0
  let products = document.getElementsByClassName('product')
  //console.log(products)
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i])
    //console.log(total)
  }

  // ITERATION 3
  
  document.querySelector("#total-value span").innerText = total
  //console.log(document.querySelector("#total-value span"))

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here


  let removeButton = document.querySelector(".btn btn-remove")
  removeButton.addEventListener('click', function() {
      this.product.removeButton
  })


}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
