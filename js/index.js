// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

    let price = product.querySelector('.price span').innerText;
    let quantity = product.querySelector('.quantity input').value;
    let subtotalPrice = price*quantity;
    product.querySelector(".subtotal span").innerHTML = subtotalPrice
    return subtotalPrice
};



// function calculateAll() {
//   // code in the following two lines is added just for testing purposes.
//   // it runs when only iteration 1 is completed. at later point, it can be removed.
//   const singleProduct = document.querySelector('.product');
//   updateSubtotal(product);
//   };
  // end of test

  // ITERATION 2
  //... your code goes here

  function calculateAll () {
    const allProducts = document.querySelectorAll('.product');
    let total = 0
    allProducts.forEach(eachProduct=> {
     let subtotal = updateSubtotal(eachProduct);
     total += subtotal 
    });
    document.querySelector("#total-value span").innerHTML = total
}
    
  

  // ITERATION 3
  //... done above
  

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

const makeDeleteButtonWork = () => {
  let rows = document.querySelectorAll(".products");
  rows.forEach(row => {
    row.querySelector(".btn-remove").onclick = function(e) {
      row.remove()
    }
  })
  

};
// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  makeDeleteButtonWork()
  //... your code goes here
});
