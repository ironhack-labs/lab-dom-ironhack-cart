
const calculatePricesBtn = document.getElementById("calculate");
const multipleProducts = document.querySelectorAll(".product");
const result = document.querySelector("#total-value span")
// ITERATION 1

function updateSubtotal (singleProduct) {
  console.log('Calculating subtotal, yey!');
//the quanity and price goes right here from 
let pricy = singleProduct.querySelector('.price span').innerHTML //"Question" I need somebody to explain this 
let quantify = singleProduct.querySelector('.quantity input').value;
let subtotal = pricy * quantify
singleProduct.querySelector('.subtotal span').innerHTML = subtotal;
return subtotal;  

}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let totalValue = 0;

  for(let i = 0; i < multipleProducts.length; i++){

  totalValue += updateSubtotal(multipleProducts[i]);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
  }
  result.innerHTML = totalValue
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);// "Quenstion" how do you add target with a comma ?
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  
  calculatePricesBtn.addEventListener("click", () => {

		calculateAll()

	})
});
