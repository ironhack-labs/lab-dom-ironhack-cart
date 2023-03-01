// ITERATION 1


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector(".quantity input");
  const priceValue = Number(price.innerHTML);
  const quantityValue = Number(quantity.value);
  const subtotal = priceValue * quantityValue;
  const finalSubtotal = product.querySelector(".subtotal span");
  finalSubtotal.innerHTML = subtotal;

  return subtotal

  //... your code goes here
}


// updateSubtotal()

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productsCollection = document.querySelectorAll(".product")
  let total = 0;
  productsCollection.forEach((e)=>{
    // console.log(e)
    total+=updateSubtotal(e)
  })
const totalValue = document.querySelector("#total-value span")
totalValue.innerHTML = total;

  // console.log(total)

  // ITERATION 3



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


