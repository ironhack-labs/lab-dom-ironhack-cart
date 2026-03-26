// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;

  let result = Number(price) * Number(quantity);

  const subtotal = product.querySelector(".subtotal span");

  subtotal.textContent = result;

  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector("#total-value span");
  let sum = 0;
  // products.forEach(producto =>{
  //   sum += Number(producto.querySelector(".subtotal span").textContent);
  // }) --> Primera forma que hice sin añadir return a updateSubtotal
  products.forEach((product) => {
    sum += updateSubtotal(product);
  });

  totalPrice.textContent = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  const deleteNode = target.closest(".product");
  deleteNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const fatherNode = document.querySelector(".create-product")
  const name = fatherNode.querySelector('input[type="text"]');
  const price = fatherNode.querySelector('input[type="number"]');

  const newRow = document.createElement("tr");

  newRow.innerHTML = `
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
  `;

  newRow.classList.add("product");
  const container = document.querySelector("tbody");
  container.appendChild(newRow);
  name.value = "";
  price.value = 0;
  const activeDelete = newRow.querySelector(".btn-remove");
  activeDelete.addEventListener("click", removeProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });

  const addProduct = document.getElementById("create");
  addProduct.addEventListener("click", createProduct);
});

