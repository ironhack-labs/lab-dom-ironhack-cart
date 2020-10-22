// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let subTotal = 0
  let price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value


  if (quantity < 1) subTotal = 0
  else subTotal = price * quantity
  console.log("subTotal: "+subTotal)

  product.querySelector('.subtotal span').innerText = subTotal



  return subTotal
}

function calculateAll() {
  console.log("calculateAll")
  // let totalPrice = 0
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let $products = document.querySelectorAll('.product')
  console.log($products)
  let totalPrice = 0
  $products.forEach(element => {
    updateSubtotal(element)
    console.log(element)
    console.log(element.price)
    let stringPrice = element.querySelector('.price span').innerText

    totalPrice += parseInt(stringPrice)
  });
  // ITERATION 3
  //... your code goes here
  let $totalAmount = document.querySelector('#total-value span')
  $totalAmount.innerText = totalPrice
  console.log("this is the total price "+totalPrice)


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
  console.log("function!")
  let newProductName = document.querySelector('.create-product input').value
  console.log(newProductName)
  let newProductStringPrice = document.querySelector('.create-product input[type=number]').value
  let newProductPrice = parseInt(newProductStringPrice)
  console.log(newProductPrice)
  const ogRow = document.querySelector('.product')
  const clonedRow = ogRow.cloneNode(true)

  clonedRow.querySelector('.name span').innerText = newProductName
  clonedRow.querySelector('.price span').innerText = `${newProductPrice}.00`

  // document.querySelector('.product').appendChild(clonedRow)
  // console.log(document.querySelector('#cart'))
  document.querySelector('#cart').appendChild(clonedRow)

  

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create')
  createProductBtn.addEventListener('click', createProduct)
  //... your code goes here
});
