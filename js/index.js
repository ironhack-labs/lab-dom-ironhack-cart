// ITERATION 1



// const clickTitulo = (event) => {

//   console.log('el ususario hizo click en el titulo',event)
// }

// const titulo = window.document.getElementById('titulo1')

// titulo.addEventListener('click',clickTitulo)

const updateSubtotal = (product) => {
  
  // console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span')
  console.log(price.innerHTML)
  let quantity = product.querySelector('.quantity input ')
  // console.log(quantity.value)

  let totalPrice = price.innerHTML * quantity.value

  // console.log(totalPrice)
  let subtotal = product.querySelector('.subtotal span')
  // console.log(subtotal.innerHTML)

  subtotal.innerHTML = totalPrice


   return `${totalPrice} dollars`
  // console.log(totalPrice)
 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  const singleProduct = document.querySelectorAll('.product');
  updateSubtotal(singleProduct)
  
  
  // end of test
  
  
  // ITERATION 2
  //... your code goes here
  //items:
  
  
  // ITERATION 3
  //... your code goes here
  
  
  // let total = 0
  
  // const totalCalculePrices = document.querySelector('#total-value')
  
  
  // singleProduct.forEach(elm =>{

  //   const item = elm.querySelector('.subtotal')
    
  //   const itemPrice = Number(item.textContent.replace('$',''))
    
  //   const itemQuantity = elm.querySelector('.quantity input')
    
  //   const valueItemQuantity = Number(itemQuantity.value)
    
  //   total = total + itemPrice * valueItemQuantity
  //   // console.log(total)

  // } )

  // totalCalculePrices.innerHTML = `${total}$`
  
  
}

calculateAll()

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
