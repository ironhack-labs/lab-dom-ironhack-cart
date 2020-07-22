// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const quantityValue = quantity.valueAsNumber;
  
  price = price.innerHTML;
  // console.log(price)

  const subTotal = price * quantityValue;
  // console.log(subTotal)

  const productSubTotal = product.querySelector('.subtotal span');

  productSubTotal.innerHTML = subTotal;
 
  return productSubTotal;
  
}

function calculateAll() {
  // // ITERATION 2

  const products = document.querySelectorAll('.product');
  // console.log(products)
  const productsArr = [...products]

  productsArr.forEach(item => updateSubtotal(item));
  const subtotalUpdate = productsArr
  // console.log(productsArr)
  

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  let totalPrice = 0

  // productsArr.forEach(sumFunction)

  // function sumFunction (item){
  //   totalPrice += Number(item.querySelector('.subtotal span').innerHTML)
  //   // console.log(typeof item.querySelector('.subtotal span').innerHTML)
  //   console.log(totalPrice)
  //   totalValue.innerHTML = totalPrice
  //   console.log(totalValue)
  // }

  productsArr.forEach((item) => {
    totalPrice += Number(item.querySelector('.subtotal span').innerHTML)
    // console.log(typeof item.querySelector('.subtotal span').innerHTML)
    // console.log(totalPrice)
    totalValue.innerHTML = totalPrice
    // console.log(totalValue)
  })
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  // const productLine = document.getElementsByClassName('product');
  const wholeCart = target.parentNode.parentNode.parentNode
  const productLine = target.parentNode.parentNode
  console.log(wholeCart)
  console.log(productLine)

  wholeCart.removeChild(productLine)
}

// ITERATION 5

const createNewProduct = document.getElementById('create')
createNewProduct.addEventListener('click', createProduct)

function createProduct() {
 
  // console.log(' Test: The create product button was clicked')
  const nameNewProduct = document.getElementById('name-new-product').value
  const priceNewProduct = document.getElementById('price-new-product').valueAsNumber
  

  const productLine = document.querySelector('.product');
  const parentProductLines = productLine.parentNode
  console.log(productLine)
  console.log(parentProductLines)
  const cloneProductLine = productLine.cloneNode(true);

  
  parentProductLines.appendChild(cloneProductLine); //How can I make the new line appear as the last product??

  let nameProduct = document.querySelector('.name span');
  console.log(nameProduct)
  nameProduct.innerHTML = nameNewProduct;
  console.log(nameProduct)
  
  let priceProduct = document.querySelector('.price span');
  priceProduct.innerHTML = priceNewProduct


}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  // console.log(calculatePricesBtn)
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.getElementsByClassName('btn-remove');
  // console.log(removeButton)
  const removeButtonArr = [...removeButton];
  // console.log(removeButtonArr)
  
  removeButtonArr.forEach((item) => {
    item.addEventListener('click', removeProduct);
  })
});
