// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!', product);

    const price = product.querySelector('.price span') ;
    const quantity = product.querySelector('.quantity input');
    
    const pricevalue = Number(price.innerHTML) 
    let quantityvalue = Number(quantity.value)

    let subTotal = pricevalue * quantityvalue

     let subTotalItems = product.querySelector('.subtotal span') 

     console.log(subTotalItems)
     subTotalItems.innerHTML = subTotal

    return subTotal
  
  }
  
 // ITERATION 2 + 3


function calculateAll() {

  const products = document.querySelectorAll('.product');

  var suma = 0
  products.forEach(function(product){
    suma += updateSubtotal(product)

  })
  
  const totalPrice = document.body.querySelector("#total-value span")
  totalPrice.innerHTML = suma


}



 //total price for the products in your cart by summing all of the subtotals returned by updateSubtotal()


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
