// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!', product);
  //GET PRICE
  const price = product.querySelector('.price span')
  // console.log(price.innerHTML)
  //GET QUANTITY
  const quantity = product.querySelector('.quantity input')
  //  console.log(quantity.value)
  //GET SUBTOTAL 
  const subTotal = product.querySelector('.subtotal span')
  // console.log(subTotal.innerHTML);

  let sub = price.innerHTML * quantity.value;
  // console.log('subtotal', sub); 

  subTotal.innerHTML = sub;
  return sub
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.getElementsByClassName('product');
  // updateSubtotal(allProducts);
  
  // for (let i = 0; i < allProducts.length; i++) {
  //   updateSubtotal(allProducts[i])
  //   // console.log(allProducts[i])
  // }

  // ITERATION 2
  //... your code goes here
  // updateSubtotal(product)

  let sum = 0; 
  for (let i = 0; i < allProducts.length; i++) { 
    sum += updateSubtotal(allProducts[i])

    // console.log(sum);
    // console.log(allSubTotals)

  }
  let total = document.querySelector('#total-value span')
  console.log(sum)
  total.innerHTML = sum;

}
// ITERATION 3
  //... your code goes here
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
