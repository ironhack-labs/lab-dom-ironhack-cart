// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");

  price = price.innerHTML;
  quantity = quantity.value;

  let subtotal = price * quantity;
  product.querySelector(".subtotal span").innerText = `${subtotal}`;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let totalValue = 0;
  let products = document.querySelectorAll(".product");
  products.forEach((product) => {
    let subtotal = updateSubtotal(product);
    totalValue += subtotal;
  })

  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").innerText = `${totalValue}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const removeProduct = document.querySelector(".product");
  removeProduct.parentNode.removeChild(removeProduct);
  console.log(removeProduct)

  let total = document.querySelector("#total-value span");
  let removedValue = removeProduct.querySelector(".subtotal span");

  const newTotal = total.innerText - removedValue.innerText;

  document.querySelector("#total-value span").innerText = `${newTotal}`;
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const products = document.querySelector(".create-product");
  const productBody = document.querySelector(".product");
  let name = products.querySelector(".product-name input");
  let price = products.querySelector(".product-price input");
  
  let newProduct = products.createElement(
  productBody.innerHTML += `
    <tr class="product">
    <td class="name">
    <span>${name.value}</span>
  </td>
  <td class="price">$<span>${price.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  </tr>`
  );
  document.body.table.tbody.appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  })

  const createProductBtn = document.querySelector("#create");
  createProductBtn.addEventListener("click", createProduct);
});
