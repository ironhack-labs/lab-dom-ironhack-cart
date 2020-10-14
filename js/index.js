// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const subtotal = product.querySelector(".subtotal span");
  let productTotal;
  productTotal = parseFloat(price.innerText) * quantity.valueAsNumber;
  subtotal.innerText = productTotal.toFixed(2);
  return productTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName("product");

  const total = Array.from(allProducts).map((item) => updateSubtotal(item));

  // ITERATION 3
  let totalValue = document.querySelector("#total-value span");
  totalValue.innerText = total.reduce((sum, item) => sum + item, 0).toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... tbody > tr > td > button
  target.parentElement.parentElement.parentElement.removeChild(
    target.parentElement.parentElement
  );
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productInfo = document.querySelectorAll(".create-product input");
  const cartTable = document.querySelector("#cart tbody");
  const line = document.createElement("tr");
  line.setAttribute("class", "product");
  cartTable.appendChild(line);
  cartTable.lastChild.innerHTML +=
    '<td class="name"><span></span></td>' +
    '<td class="price">$<span></span></td>' +
    '<td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>' +
    '<td class="subtotal">$<span>0</span></td>' +
    '<td class="action"><button class="btn btn-remove">Remove</button></td>';

  const name = cartTable.lastChild.querySelector(".name span");
  name.innerText = productInfo[0].value;

  const price = cartTable.lastChild.querySelector(".price span");
  price.innerText = productInfo[1].value;

  const removeBtn = cartTable.lastChild.querySelector(".btn-remove");
  listenerRemoveBtn(removeBtn);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  let removeProductBtn = Array.from(
    document.getElementsByClassName("btn-remove")
  );
  removeProductBtn.forEach((item) =>
    // item.addEventListener("click", removeProduct)
    listenerRemoveBtn(item)
  );

  const creatProductBtn = document.getElementById("create");
  creatProductBtn.addEventListener("click", createProduct);
});

function listenerRemoveBtn(product) {
  product.addEventListener("click", removeProduct);
}
