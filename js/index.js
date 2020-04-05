// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = Number(product.querySelector(".price span").innerHTML);
  const quantity = Number(product.querySelector(".quantity input").value);

  let subtotal = price * quantity;

  product.querySelector(".subtotal span").innerText = subtotal;

  // console.log(typeof subtotal)
  // console.log(subtotal)
  // console.log(Number(price.innerHTML));
  // console.log(product);
  // console.log(price);
  // console.log(quantity.value);
  // console.log(subtotal);

  return subtotal;
}

function calculateAll() {

  // ITERATION 2
  //... your code goes here

const product = document.getElementsByClassName('product');
for (let i = 0; i < product.length; i++) {
updateSubtotal(product[i]);
}

let total = 0;
for (let i = 0; i < product.length; i++) {
total += updateSubtotal(product[i]);
console.log(total)
   
}
document.querySelector("#total-value span").textContent = total;
}

// ITERATION 4

// function removeProduct(event) {

// // ... your code goes here

// }

// ITERATION 5


// function createProduct() {
// //   //... your code goes here
// let newProduct = document.querySelector(".create-product")

// }



window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');

  let removeItems = document.getElementsByClassName("btn-remove");
  // console.log(removeItems)
  for (let i = 0; i < removeItems.length; i++) {
  let button = removeItems[i]
  button.addEventListener('click', function(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
  })
}
  calculatePricesBtn.addEventListener('click', calculateAll);

  // ... your code goes here
})