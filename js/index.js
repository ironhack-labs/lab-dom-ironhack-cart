// ITERATION 1

// const { product } = require("puppeteer");

function updateSubtotal(product) {
  const price = Number(product.querySelector(".price span").textContent);
  // const priceValue = Number(price.textContent)
  const quantity = Number(product.querySelector(".quantity input").value);
  // const quantityValue = Number(quantity.value) 
  const subtotal = product.querySelector(".subtotal span") // careful to take "PRODUCT" and not "DOCUMENT"
  const subtotalPrice = price * quantity
  subtotal.textContent = subtotalPrice
  // console.log("price " + price + " quantity " + quantity + " subtotal " + subtotalPrice)
  return subtotalPrice
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalPrice = 0
  const products = document.querySelectorAll(".product"); // renders it into an ARRAY format !!!
  products.forEach(product => {
    totalPrice += updateSubtotal(product)
  });

  document.querySelector("#total-value span").textContent = totalPrice
  }

  // ITERATION 3
  //... your code goes here



// function cloneProduct(product) {
//   const singleProduct = document.querySelector('.product');
//   const cart = document.querySelector("#cart tbody");
//   const newProduct = singleProduct.cloneNode(true)
//   cart.appendChild(newProduct)
// }



// ITERATION 4

function removeProduct(event) {
  console.log("btn remove works on newly created btns")
  const target = event.currentTarget;
  const parent = target.closest(".product");
  parent.remove()
  
}


// ITERATION 5

function createProduct() {
  const newProduct = document.createElement("tr")
  // newProduct.classList.add("product")
  // const cart = document.querySelector("#cart tbody");
  // cart.appendChild(newProduct)
  // console.log(cart)

  const newProductName = document.querySelector(".create-product td:first-child input").value
  // console.log(newProductName)
  const newProductPrice = document.querySelector(".create-product td:nth-child(2) input").value
  // console.log(newProductPrice)

  newProduct.innerHTML = `<td class="name">
  <span>${newProductName}</span>
</td>
<td class="price">$<span>${newProductPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`

  console.log(cart)
}

window.addEventListener('load', () => { // wait for everything to be loaded before activating the button
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const btnRemove = document.querySelectorAll(".btn-remove")
  btnRemove.forEach (button => {
    button.addEventListener('click', removeProduct) // DONT CALL THE FUCTION WITH ()
  })

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct)
});


/*
after creating a new product
console.log(document.querySelectorAll(".btn-remove")) ==> 3 buttons 
*/




/*
  // product name
  const newProductName = document.createElement("td");
  newProduct.appendChild(newProductName);
  newProductName.classList.add("class");
  newProductName.textContent = document.querySelectorAll(".create input:first-child").value
  
  // unit price
  const newProductPrice = document.createElement("td");
  newProduct.appendChil(newProductPrice);
  newProductPrice.classList.add("price");
  newProductPrice.textContent = document.querySelectorAll(".create input:nth-child(2)").value

  // quantity
  const newProductQuantity = document.createElement("td");
  newProduct.appendChild(newProductQuantity)
  newProductQuantity.classList.add("quantity");
  newProductQuantity.innerHTML = "<input type=\"number\" value=\"0\" min=\"0\" placeholder=\"Quantity\" />";
  
  // subtotal
  const newProductSubtotal = document.createElement("td");
  newProduct.appendChild(newProductSubtotal);
  newProduct.classList.add("subtotal");
  newProductSubtotal.innerHTML = "$<span>0</span>";

  // remove
  const newRemoveBtn = document.createElement("button");
  newRemoveBtn.classList.add(".btn .btn-remove");
  newRemoveBtn.textContent = "Remove"
*/