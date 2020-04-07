// ITERATION 1

function updateSubtotal(productElement) {
  console.log("Calculating subtotal, yey!");

  const priceElement = productElement.querySelector(".price span");
  const quantityInputElement = productElement.querySelector(".quantity input");

  const newPrice = priceElement.innerHTML;
  const amountItems = quantityInputElement.value;

  const subtotalPrice = newPrice * amountItems;

  const locateSubtotal = productElement.querySelector(".subtotal span");

  locateSubtotal.innerHTML = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 y 3

  const allProducts = document.getElementsByClassName("product");

  const arrayOfProducts = [...allProducts];

  console.log(arrayOfProducts);

  let sumProducts = 0;

  arrayOfProducts.forEach(function (el) {
    const productSubtotal = updateSubtotal(el);

    sumProducts += productSubtotal;
  });

  const totalElement = document.querySelector("#total-value span");

  totalElement.innerHTML = sumProducts;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  // agregar .parentNode para ir seleccionando los padres específicos del botón al
  // que hacemos target, hasta el tr
  console.log("The target in remove is:", target);
  //const productParent = document.querySelector("tbody");

  target.parentNode.removeChild(target);

  const totalElement = document.querySelector("#total-value span");

  // los elementos HTML siempre son string, por ello ponemos "0" (!==) o,
  //podemos añadir != por que solo comprueba el valor y no el typeof
  if (totalElement.innerHTML != 0) {
    calculateAll();
  }
}

// ITERATION 5

function createProduct() {
  let productName = document.querySelector(
    ".create-product input[type = 'text']"
  ).value;
  let productPrice = document.querySelector(
    ".create-product input[type = 'number']"
  ).value;

  let newTr = document.createElement("tr");
  newTr.className = "product";
  newTr.innerHTML = `<td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;

  const productParent = document.querySelector("tbody");
  productParent.appendChild(newTr);

  const removeButton = newTr.querySelector(".btn-remove");

  removeButton.addEventListener("click", removeProduct);
}

const allProducts = document.querySelectorAll(".product");

const firstProduct = allProducts[0];

const createButton = document.querySelector("#create");
createButton.addEventListener("click", createProduct);

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const selectRemoveButtons = document.querySelectorAll(".btn-remove");

  selectRemoveButtons.forEach(function (el) {
    el.addEventListener("click", removeProduct);
  });
});
