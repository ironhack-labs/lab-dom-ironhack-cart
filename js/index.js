// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const priceValue = price.innerHTML;
  const quantity = product.querySelector('.quantity input');
  const quantityValue = quantity.value;
  const subtotalPrice = priceValue * quantityValue;
  const subtotal = product.querySelector(".subtotal");
  subtotal.innerHTML = "$" + subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += updateSubtotal(products[i]);
  }

  const smallTotal = document.querySelector("#total-value span");
  smallTotal.innerHTML = sum;

  // ITERATION 3
  //   const total = calculateTotal.innerHTML;
  // console.log(total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parent = target.parentNode.parentNode.remove();
  calculateAll()
}

window.addEventListener('click', () => {
  const remove = document.querySelectorAll(".btn-remove");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeProduct);
  }
})

const calculate = document.getElementById("calculate");
calculate.addEventListener('click', calculateAll)

// ITERATION 5

// function createProduct() {
//   //... your code goes here
//   const name = document.querySelector(".create-product input");
//   const price = document.querySelectorAll(".create-product input")[1];
//   const nameValue = name.value;
//   const priceValue = price.value;
//   const tag = document.createElement("tr");
//   tag.className = "product";
//   tag.innerHTML = `<td class="name">
//   <span>0</span>
// </td>
// <td class="pu">
//   $<span>0</span>
// </td>
// <td class="qty">
//   <label>
//     <input type="number" min="0">
//   </label>
// </td>
// <td class="subtot">
//   $<span>0</span>
// </td>
// <td class="rm">
//   <button class="btn btn-delete">Delete</button>
// </td>`

//   const all = document.querySelector("tbody");
//   all.appendChild(tag);
//   console.log(tag);
// }

// const createProductBtn = document.getElementById('create');
// createProductBtn.addEventListener("click", createProduct);

// window.addEventListener('load', () => {
//   const calculatePricesBtn = document.getElementById('calculate');
//   calculatePricesBtn.addEventListener('click', calculateAll);

//   //... your code goes here
// });