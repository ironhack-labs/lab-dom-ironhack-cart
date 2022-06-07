// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector(".quantity input").value;   
    const subtotalPrice = price * quantity;


  const displayPrice = product.querySelector(".subtotal span");
  console.log("displayPrice", displayPrice)
        //  displayPrice = subtotalPrice;
        displayPrice.innerText = subtotalPrice;
    return subtotalPrice;   
}

function calculateAll() {
  let total = 0;
  let products = document.getElementsByClassName("product")
  //  console.log("products list", produclts)
  for (el of products) {
    total += updateSubtotal(el) 
    console.log("TOTAL =>", total)
  }
  
   document.querySelector("#total-value span").innerText = total

  
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
