// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;
  let subtotal = Number(price) * Number(quantity);
  product.querySelector(".subtotal span").textContent = subtotal;
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // ITERATION 1
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2/3 using for loop
  // let allProducts = document.querySelectorAll(".product"); 
  // let totalPrice = 0; 
  // for (let i=0; i < allProducts.length; i++) {
  //   updateSubtotal(allProducts[i]);
  // // ITERATION 3
  //   totalPrice += Number(allProducts[i].querySelector(".subtotal span").textContent);
  // }
  // document.querySelector("#total-value span").textContent = totalPrice;

// ITERATION 2/3 using forEach
  let allProducts = [... document.querySelectorAll(".product")];
  let totalPrice = 0;
  allProducts.forEach(function(product) {
    updateSubtotal(product);
    totalPrice += Number(product.querySelector(".subtotal span").textContent);
  })
  document.querySelector("#total-value span").textContent = totalPrice
}
//TAs: can you please let me know the shorter way to do this?

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parentNode = target.parentNode.parentNode;
  parentNode.remove();
  calculateAll();
}
console.log(document.querySelector(".btn-remove").parentNode.parentNode)



// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = [... document.getElementsByClassName("btn btn-remove")];
  removeBtn.forEach( button => button.addEventListener('click', removeProduct));
  //... your code goes here
});
