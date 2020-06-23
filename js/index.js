// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  
  const subTotalPrice = quantity*price;
  console.log('Calculating subtotal, yey!');

  product.querySelector(".subtotal span").innerHTML= subTotalPrice
  return subTotalPrice
}


  // ITERATION 2
const firstProduct = document.querySelector(".product")
const secondProduct = firstProduct.cloneNode (true)
const table = document.getElementById ("cart")

table.appendChild (secondProduct)

secondProduct.querySelector(".name span").innerHTML = "Ironhack Beach Towel"
secondProduct.querySelector(".price span").innerHTML = 29.5;


  // ITERATION 3

  function calculateAll() { 
    const products = document.getElementsByClassName('product'); 
    let total = 0; 
    for (let product of products) { 
      total += updateSubtotal(product); 
    } 
      const totalPrice = document.getElementById('total-value'); 
      totalPrice.querySelector('span').innerHTML = total; 
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
