// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!')
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  product.querySelector(".subtotal span").innerHTML = price * Math.abs(quantity)

  return Number(price * Math.abs(quantity))
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let sum = 0
  const products = document.querySelectorAll('.product')
  products.forEach(product => {
    updateSubtotal(product)
    sum += Number(product.querySelector(".subtotal span")?.innerHTML)
  })

  // ITERATION 3
  // @ts-ignore
  document.querySelector("#total-value span").innerHTML = String(sum)

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
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
