// ITERATION 1
/*const subtotal = document.querySelector(".subtotal");
const unitPrice = document.querySelector(".price span");

const calcButton = document.getElementById("calculate");*/
const total = document.querySelector('#total-value span')


const quantities = document.querySelectorAll(".quantity input");
const subSpan = document.querySelector(".subtotal span")
quantities.forEach(function(element){
    element.addEventListener("click", e => {
      
      const product = e.target.parentElement.parentElement;
      const price = product.querySelector(".price span");
      const quantity = product.querySelector(".quantity input")
      const subtotal  = product.querySelector(".subtotal span")

      subtotal.innerText = parseInt(price.innerText)*parseInt(quantity.value)
     
      updateSubtotal();
    })
})

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');



  
  
  
}

function calculateAll() {
  let allSubTotals = document.querySelectorAll(".subtotal span")
  console.log(allSubTotals.innerText)
  const total = allSubTotals.reduce((acc, value) => acc + parseInt(value.innerText));
  console.log(total);
  
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
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
