// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price>span').innerHTML
  const quantity = product.querySelector('.quantity>input').value
  console.log(quantity)
  //const subTotal = document.createTextNode(`${quantity * price}`)
  subTotal = quantity * price
  console.log(subTotal)
  const subtotalSpan = product.querySelector('.subtotal>span')
  //#create textnode (function)
  subtotalSpan.innerHTML = subTotal
  //subtotalSpan.appendChild(subTotal)
  console.log(subtotalSpan.innerHTML)
  return subTotal
  //... your code goes here
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  let total = 0;

  allProducts.forEach(function(product){
    total += updateSubtotal(product)
  });
  console.log(total)
  const totalHTML = document.querySelector('#total-value>span')  
  totalHTML.innerHTML = `${total}`

  // ITERATION 3
  //... your code goes here
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... TESTING with existing product
  const newProduct = document.querySelector('.product');
  const tbody = document.querySelector('tbody')
  let row = document.createElement('tr')

  let rowtr = tbody.insertRow(1);
  rowtr.appendChild(newProduct.cloneNode(true));

  const inputList = document.querySelectorAll('tr.create-product>td>input')
  const productName = inputList[0].value
  const productPrice = inputList[1].value

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
})

window.addEventListener('load', () => {
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
})