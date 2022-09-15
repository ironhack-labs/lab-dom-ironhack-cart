// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  // const price = parseFloat(product.querySelector('.price span').innerText)

  // const quantity = product.querySelector(".quantity input ").valueAsNumber

  // let subTotalPirce = price * quantity

  // const subTotalElement = product.querySelector(".subtotal span")

  // subtotalElement.innerText = subtotalPrice
   

  const price = parseFloat(product.querySelector('.price span').innerText)

  const quantity = product.querySelector('.quantity input').valueAsNumber

  let subtotalPrice = price * quantity

  const subtotalElement = product.querySelector('.subtotal span')

  subtotalElement.innerText = subtotalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  

  // let total = 0;

  // const allProducts = documents.querySelectorAll(' .product')
  //   for (let i = 0; i < allProducts.length; i++){
  //       total = singleProduct + allProducts[i]
  //   }
 
  // const eachProduct = document.getElementsByClassName(' .product').

  // console.log(eachProduct);

  // let total = 0
  //  const allProducts = document.querySelectorAll('.product');
   
  //  for (let i = 0; i < allProducts.length; i++) {
  //    total += newsubtotalPrice(allProducts[i])
 
  //   }
    
    // const productsForSale = document.getElementsByClassName(".product");
    // productsForSaleArr = [...productsForSale]
    // productsForSaleArr.forEach(element => {updateSubtotal(element)
    // });

    const productCollection = document.querySelectorAll('.product');
   productCollection.forEach( function (productElm) {
     updateSubtotal(productElm);
   });
    }
      
 // ITERATION 3
 // ... your code goes here
  const totalSum = document.querySelectorAll(".subtotal span")
  let totalSumCopy = 0
    for (let i = 0; i < totalSum.length; i++){
      totalSumCopy += totalSum[i]
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
