// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span").innerHTML;
  
  let quantity = product.querySelector(".quantity input").value;

  let subtotal = price * quantity; 
  
  product.querySelector(".subtotal span").innerHTML = subtotal ;
   return subtotal 
} 
// ITERATION 2 and 3
function calculateAll() {
let total = 0
const allProductList = document.querySelectorAll(".product");
  for(let i = 0; i <allProductList.length; i++){
    total += updateSubtotal(allProductList[i])
    }; 
    const subElm = document.querySelector("#total-value span")
      subElm.innerText = total;
  }
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  // ... soemthing 
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
