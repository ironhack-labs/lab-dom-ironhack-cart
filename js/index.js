// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  let subTotal = price.innerHTML * quantity.value;

  product.querySelector(".subtotal span").innerHTML = subTotal;

  return subTotal;
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName("product");

  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  target.parentNode.parentNode.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector(".create-product input");
  const productPrice = document.querySelectorAll(".create-product input")[1];

  document.querySelector("tbody").innerHTML += `
      <tr class="product">
          <td class="name">
            <span>${productName.value}</span>
          </td>
          <td class="price">$<span>${productPrice.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
   `;

  productName.value = '';
  productPrice.value = '0';
  addRemoveButtonEvent();
}

const addRemoveButtonEvent = () => {
  const removeProductBtn = document.getElementsByClassName("btn-remove");

  for (let i = 0; i < removeProductBtn.length; i++) {
    removeProductBtn[i].addEventListener("click", removeProduct);
  }
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //Iteration 4
  addRemoveButtonEvent(); 

  //Iteration 5

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);
});


