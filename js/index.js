// ITERATION 1

function updateSubtotal(product) {
 // console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = parseFloat(product.querySelector('.price span').innerText)
  const quantity = product.querySelector(".quantity input").valueAsNumber;
  let subtotalPrice = price * quantity;
  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerText = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productsAll = document.querySelectorAll("tr.product");
  let sum1 = 0;
  productsAll.forEach(function(element){
    sum1 += updateSubtotal(element);
  })

  // ITERATION 3
  //... your code goes here
  let totalElem = document.querySelector("#total-value span");
  totalElem.innerHTML = Number(sum1.toFixed(2));
}
 

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const btnRemoveArr = document.querySelectorAll(".btn btn-remove");
  for (const btn of btnRemoveArr){
        btn.addEventListener("click", removeProduct);
      }
      document.body.addEventListener("click", removeProduct)
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
