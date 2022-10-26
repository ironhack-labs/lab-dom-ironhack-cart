// ITERATION 1

//const { product } = require("puppeteer");

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector(".quantity input").value;
  let subtotal = price * quantity;
  product.querySelector(".subtotal span").innerText = subtotal;
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
let allProduct = document.querySelectorAll(".product")
let total = 0 
allProduct.forEach(function(product){
total += updateSubtotal(product)
})
  // ITERATION 3
 document.querySelector("#total-value span").innerText = total
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here
  target.parentNode.parentNode.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const inputs = document.querySelectorAll(".create-product input")
  const nameInputs = inputs[0].value
  console.log(nameInputs)
  const priceInputs = inputs[1].value
  console.log(priceInputs)
  const newProduct = document.createElement("tr")
  newProduct.className = "product"
  newProduct.innerHTML = `<td class="name">
            <span>${nameInputs}</span>
          </td>
          <td class="price">$<span>${priceInputs}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`   
          console.log(newProduct)
          document.querySelector("tbody").appendChild(newProduct)
          newProduct.querySelector(".btn.btn-remove").addEventListener("click", removeProduct)
          return newProduct
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  document.querySelectorAll(".btn.btn-remove").forEach((e) =>{
    e.addEventListener("click", removeProduct)
  })
  document.querySelector("#create").addEventListener("click", createProduct)
});
