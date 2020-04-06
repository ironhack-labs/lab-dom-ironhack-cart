// ITERATION 1


//const product = document.querySelector('.product');

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yay!');
  
  //... your code goes here
  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  
  // Calculate sub total
  let subTotal = price * quantity;
  
  // Target sub total
  product.querySelector(".subtotal span").innerText = subTotal;
  
  console.log(subTotal);
  // Return sub total
  return subTotal;
  
}

//updateSubtotal();
//calculateAll();


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
let multipleItems = document.getElementsByClassName('product');
console.log(multipleItems); 

let total = 0;

for(let i = 0; i < multipleItems.length; i++){
  total += updateSubtotal(multipleItems[i]);
  console.log("total: " + total);
}
// const newTotal = document.querySelector('#total-value span');
// newTotal.innerHTML = total;

  // ITERATION 3

document.querySelector("#total-value > span").innerHTML = total;

}


calculateAll();

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
