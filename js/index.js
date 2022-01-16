// ITERATION 1
function updateSubtotal(allproducts) {
  allproducts.forEach(function(eachProduct) {
    const price = eachProduct.querySelector('.price span')
    console.log(`El precio es ${price.innerText}`)
    const quantity = eachProduct.querySelector('.quantity input')
    console.log(`El quantity es ${quantity.value}`)
    const subtotalOfProduct = quantity.value * price.innerText
    let subtotalText = eachProduct.querySelector('.subtotal span')
    console.log(`El subtotal es ${subtotalText.innerText}`)
    console.log(`El subtotal que quiero es ${subtotalOfProduct}`)
    subtotalText.innerText = subtotalOfProduct
    sumSub += subtotalOfProduct
    return subtotalOfProduct
  }
  )
}
let sumSub= 0


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product')
  // tuve un problema al intentar poner aquí ^^  en lugar de querySelectorAll getElementsByClassName. no me aceptaba el codigo y me decia que products.forEach no es una función
  updateSubtotal(allProducts);

  // ITERATION 3 
  const targetTotal = document.querySelector('#total-value span')
  targetTotal.innerText  = sumSub
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const btnRemove = document.querySelectorAll('.btn')
  btnRemove.addEventListener('click', removeProduct)
  btnRemove.forEach(eachbtnRemove => 
    {
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
