// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
const price=product.querySelector(".price span");
const quantity=product.querySelector(".quantity input");
let sub=price.innerHTML*quantity.value;
document.querySelector(".subtotal span").innerHTML=sub;

}

function calculateAll() {
  var allProducts=document.getElementsByClassName("product")
  console.log(allProducts)
  for (let i=0;i<allProducts.length;i++){
    updateSubtotal(allProducts[i]);
    total+=updateSubtotal(productsArray[i]);
  }
 // const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
 const allPrices=document.getElementsByClassName("subtotal").span
 let sum=0;
 for(let i=0;i<allPrices.length;i++){
   sum+= allPrices[i].innerText;
 }
 console.log(sum)
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
