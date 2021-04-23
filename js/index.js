// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = product.querySelector(".subtotal span");

  let sub = price * quantity;

  return (subtotal.innerText = sub);

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // ITERATION 3
  const products = document.querySelectorAll(".product");
  let total = 0;

  products.forEach((ele) => {
    total += updateSubtotal(ele);
    const totalPrice = document.querySelector("#total-value span");
    totalPrice.innerText = total;
  });
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //I thought only one parentNode could work but no
  // parentNode 1: td parentNode 2 : tr
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
// Add the removebtns, that works for each buttons
  const removeBtns = document.querySelectorAll(".btn-remove");
 removeBtns.forEach((element)=>{
   element.addEventListener("click", removeProduct)
 })
  //... your code goes here
});
