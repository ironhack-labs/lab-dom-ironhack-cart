// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  let subtotal = product.querySelector(".subtotal span");

  subtotal.innerHTML = price.innerHTML * quantity.value;

  return subtotal.innerHTML;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll(".product");

  products.forEach((product) => updateSubtotal(product))

  // ITERATION 3
  //... your code goes here
  let total= document.querySelector("#total-value span");
  let cumul = 0;
  
products.forEach((product)=> {
  cumul+=parseInt(updateSubtotal(product));
  return cumul;
})

total.innerHTML= cumul;





  // function getCumul() {
  //   for (let i=0; i< products.length;i++){
  //   cumul+=updateSubtotal(products[i]);
  //     console.log(cumul)
  //   return cumul } 
  //   }

  // total.innerHTML =  getCumul();
  


}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});

