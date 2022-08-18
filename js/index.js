// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  const price = product.querySelector(".price span").innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let subtotalPrice = price * quantity; 
  let subtotal = product.querySelector(".subtotal span")
  subtotal.innerHTML= subtotalPrice;
  return subtotalPrice;
  
} 

function calculateAll() {
  //code in the following two lines is added just for testing purposes.
   //it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
    let trProduct = document.querySelectorAll(".product");
    let total = 0;
    for(let i = 0; i < trProduct.length; i++){
      let sub = updateSubtotal(trProduct[i]); 
       
      total +=sub;
       
    }

  // ITERATION 3
  //... your code goes here
    
    let totalDisplay = document.querySelector("#total-value span");
    totalDisplay.innerText = total;
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
