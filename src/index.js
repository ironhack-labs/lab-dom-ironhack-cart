// ITERATION 1

function updateSubtotal(product) {
  const price = +product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value
  
  const subtotal = price * quantity
  product.querySelector('.subtotal span').innerText = subtotal
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product")
  let total = [...products].reduce((total, product) => {
    return total + updateSubtotal(product)
  }, 0)

  document.querySelector("#total-value span").innerText = total

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  console.log('The target in remove is:', target, target.parentNode.parentNode);
  const row = target.parentNode.parentNode;
  const table = row.parentNode;
  table.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("Create product");
  const rowCreateProduct = document.querySelector(".create-product");
  const inputElements = rowCreateProduct.getElementsByTagName("input");
  console.log(inputElements, inputElements[0], inputElements[1]);
  const name = inputElements[0].value;
  const quantity = inputElements[1].value;
  const newRow = `        <tr class="product">
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${quantity}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;
  const tBody = document.querySelector("#cart tbody");
  tBody.insertAdjacentHTML("beforeend", newRow);

  //Add event on last remove button inserted
  const removeButtons = [...document.querySelectorAll(".btn-remove")];
  const btnInsertedLast = removeButtons[removeButtons.length - 1];
  btnInsertedLast.addEventListener("click", removeProduct);

  //clean inputs
  inputElements[0].value = "";
  inputElements[1].value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
  
  const productRemoveButtons = document.querySelectorAll(".product .btn-remove");
  productRemoveButtons.forEach((btn) => {
    btn.addEventListener("click", removeProduct)
  })
  
  const createBtn = document.getElementById('create');
  createBtn.addEventListener("click", createProduct)
});
