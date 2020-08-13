// ITERATION 1

function updateSubtotal(product) {
    let $price = product.querySelector('.price span').innerText;
    let $quantity = product.querySelector('.quantity input').value;

    console.log($price, $quantity)

    let $multiplier = +$price * +$quantity
    let $subtotal = product.querySelector('.subtotal span')

    return $subtotal.innerHTML = $multiplier
 
}  

function calculateAll() {
    // ITERATION 2

let $subTotalPrice = 0

const multipleProducts = document.querySelectorAll('.product')
multipleProducts.forEach( elements  => {
    $subTotalPrice += updateSubtotal(elements);
} )

  // ITERATION 3
  //... your code goes here

  let $totalPrice = document.querySelector('#total-value span')
  return $totalPrice.innerText = $subTotalPrice
}


// // ITERATION 4

// function removeProduct(event) {
//   const target = event.currentTarget;
//   console.log('The target in remove is:', target);
//   //... your code goes here
// }

// // ITERATION 5

// function createProduct() {
//   //... your code goes here
// }

// window.addEventListener('load', () => {
//   const calculatePricesBtn = document.getElementById('calculate');
//   calculatePricesBtn.addEventListener('click', calculateAll);

//   //... your code goes here
// });
