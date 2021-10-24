// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // js/index.js

  const price = product.querySelector('.price span');
  const quantify = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  let thePrice = price.innerHTML
  let theQuantify = quantify.value

  let result = thePrice * theQuantify;

  subtotal.innerHTML = result;
  return result;

}


  // ITERATION 2

  function calculateAll() {

    const products = document.querySelectorAll(".product")
    let sumTotal = ""
    for (let i = 0; i < products.length; i++) {
      let eachProduct = products[i];
      updateSubtotal(eachProduct)

      // ITERATION 3
      {
        let totalValue = document.querySelector("#total-value span");
        let pricexItem = parseFloat(document.querySelector('.subtotal span').textContent);
        sumTotal+= pricexItem;
        totalValue.innerHTML = sumTotal;
        return totalValue;
      }
  }
 
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
