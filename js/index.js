// ITERATION 1

function updateSubtotal(product) {
const price = product.querySelector('.price span')
let quantity = document.getElementById('n1')
let tquantidade = parseFloat(n1.value)
let subtotal = parseInt(price.innerText) * tquantidade
product.querySelector('.subtotal span').innerHTML = subtotal
console.log(updateSubtotal)
}

function secondSubtotal(secondproduct) {
    const secondprice = secondproduct.querySelector('.secondprice span')
    let squantity = document.getElementById('n2')
    let stquantidade = parseFloat(n2.value)
    let subtotalsec = parseInt(secondprice.innerText) * stquantidade
    secondproduct.querySelector('.secondsubtotal span').innerHTML = subtotalsec
    console.log(secondSubtotal);
    }

function calculateAll() {
  const singleProduct = document.querySelector('.product')
  updateSubtotal(singleProduct);
  const secondProduct = document.querySelector('.secondproduct')
  secondSubtotal(secondProduct)
  let result = singleProduct + secondProduct
  document.querySelector('h2 span').innerHTML = result
  console.log(calculateAll)
}

  // end of test

  // ITERATION 2
  
  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

}

  //... your code goes here

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
