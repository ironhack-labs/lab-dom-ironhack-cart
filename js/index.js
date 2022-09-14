// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerHTML)
  const quantity = product.querySelector('.quantity input').value
//   console.log('Calculating subtotal, yey!');
//  console.log(price, quantity)
  //... your code goes here
  let subTotal = price*quantity
  let subTotalElm = product.querySelector('.subtotal span')
  
  //console.log(subTotalElm);
  subTotalElm.innerHTML= subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
 const productsForSale = document.getElementsByClassName("product");
productsForSaleArr = [...productsForSale]
productsForSaleArr.forEach(element => {updateSubtotal(element)
});

  


  // ITERATION 3
  //... your code goes here
const bigTotal = Number(document.querySelector("h2 span").innerHTML)

subtotalCollection = document.getElementsByClassName("subtotal");
subtotalCollectionArr = [...subtotalCollection]
console.log(subtotalCollectionArr)



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
