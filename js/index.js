// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price= product.querySelector(".price span");
  
  const quantity= product.querySelector(".quantity input");
  
  const subtotal= (price.innerText)*(quantity.value);
  
  product.querySelector(".subtotal span").innerText = subtotal;
  
  return (subtotal)

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
const products = document.getElementsByClassName ("product")
const allproducts = [...products];

let total=0

allproducts.forEach((product) => { total += updateSubtotal (product) 
});


  // ITERATION 3
  //... your code goes here
  let totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = total;

  console.log(totalPrice)

}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  console.log('The target in remove is:', target);
  //... your code goes here
  
  const child = target.parentNode.parentNode;
  const parent = document.querySelector("tbody");
  parent.removeChild(child);
}



// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll("btn btn-remove");
  removeBtn.forEach((el) => el.addEventListener("click", removeProduct));


  //... your code goes here
});
