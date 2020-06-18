function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;

  const subtotalCalc = Number(price) * Number(quantity);
  product.querySelector(".subtotal span").innerText = subtotalCalc;
}

function calculateAll() {
  const productElements = document.getElementsByClassName("product"); // = every product
  var total = 0;

  for (let i = 0; i < productElements.length; i++) {
    updateSubtotal(productElements[i]);
    total += Number(
      productElements[i].querySelector(".subtotal span").innerText
    );
  }

  document.querySelector("#total-value span").innerText = total;
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);

  const targetGrandParent = target.parentNode.parentNode;
  console.log(typeof targetGrandParent);
  targetGrandParent.parentNode.removeChild(targetGrandParent);
}

function createProduct() {
  // new table row element
  var newProd = document.createElement("tr");
  newProd.setAttribute("class", "product");

  // new product content
  const newProdName = document.querySelector(".create-product input[type=text]")
    .value;
  const newProdQty = document.querySelector(
    ".create-product input[type=number]"
  ).value;

  newProd.innerHTML = `
  <td class="name"><span>${newProdName}</span></td>
  <td class="price">$<span>${newProdQty}</span></td>
  <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action"><button class="btn btn-remove">Remove</button></td>`;
  console.log(newProd);
  console.log(typeof newProd);

  // add the new product to the parent node
  var productsList = document.querySelector("tbody");
  console.log(productsList);
  console.log(typeof productsList);
  productsList.appendChild(newProd);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeProductBtn = [...document.getElementsByClassName("btn-remove")];
  removeProductBtn.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);
});
