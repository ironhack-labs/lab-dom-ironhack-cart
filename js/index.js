// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
const price = Number(product.querySelector('.price span').innerHTML)
const quantity = product.querySelector('.quantity input').value
let subtotalPrice = price * quantity;

return product.querySelector(".subtotal span").innerHTML = subtotalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0;

  let products = document.getElementsByClassName("product")
    // turn HTML collection to Array
    const productsArr = Array.from(products);
    // can't use a for.Each loop for HTMLcollestions
  for (let product of productsArr) {total += updateSubtotal(product)}


  // ITERATION 3 - Total

  document.querySelector("#total-value span").innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  console.log(document.querySelector(".create-product input").innerText)
  console.log(document.querySelectorAll(".create-product input").value)
  

}
const addItemsBtn = document.getElementById("create")
addItemsBtn.addEventListener('click', createProduct)

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const addItemsBtn = document.getElementById("create")
  addItemsBtn.addEventListener('click', createProduct); 
});
