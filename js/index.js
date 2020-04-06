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
  product.querySelector(".subtotal span").innerHTML = subTotal;
  
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
let multPriceArr = document.getElementsByClassName('product');
console.log(multPriceArr); 

let total = 0;

for(let i=0; i<multPriceArr.length; i++){
  total += updateSubtotal(multPriceArr[i]);
  console.log("total: " + total);
}

document.querySelector("#total-value > span").innerHTML = total;
// const newTotal = document.querySelector('#total-value span');
// newTotal.innerHTML = total;

  // ITERATION 3
  // ... your code goes here
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
