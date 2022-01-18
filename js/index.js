// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector(".quantity>input");
  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseInt(quantity.value);
  let subtotal = (priceValue * quantityValue);
  product.querySelector(".subtotal span").innerText = subtotal.toFixed(2);
  return subtotal;
  
}

function calculatePriceNewProduct() {
  if(document.querySelector(".create-product")) {
    let newPrice = document.getElementById("newPrice").value;
    let newQuantity = document.getElementById("newQt").value;
    subtotal = (newPrice * newQuantity);
    return subtotal;
  }
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  let total = 0;

  for (i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  if(document.querySelector(".create-product")) {
    let priceNewProduct = calculatePriceNewProduct();
    total += priceNewProduct;
    document.querySelector("#subtotal-new span").innerText = priceNewProduct;
  }

  document.querySelector("#total-value span").innerText = total.toFixed(2);
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let price = document.getElementById("newPrice").value;
  let quantity = document.getElementById("newQt").value;
  let productName = document.getElementById("newName").value;
  let subtotal = calculatePriceNewProduct(); 
  let newRow = document.createElement("tr");
  newRow.setAttribute("class", "product");
  newRow.innerHTML = `
  <td class="name">
            <span>${productName}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
            <input type="number" value="${quantity}" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>${subtotal}</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`;

  let body = document.getElementById("body");
  body.appendChild(newRow);
  newRow.querySelector(".btn-remove").addEventListener('click', removeProduct)
  let oldRow = document.getElementById("oldRow");
  oldRow.remove();

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.getElementsByClassName("btn-remove");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
  const createButton = document.getElementById("create");
  createButton.addEventListener("click", createProduct);
});
