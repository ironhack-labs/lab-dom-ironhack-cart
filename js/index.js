// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector(".quantity input").value;
  const calculateSubtotal = price * quantity;
  product.querySelector (".subtotal span").innerHTML= calculateSubtotal;
  console.log(calculateSubtotal);
  return calculateSubtotal;
  
}

function calculateAll() {
 const allProductClassName = document.getElementsByClassName('product');
 let total = 0;
 for (let i= 0; i < allProductClassName.length; i++) {
    total += updateSubtotal(allProductClassName[i]);
  }
let lastTotal = document.querySelector("#total-value span");
    lastTotal.innerHTML = total;
    return calculateAll;
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
