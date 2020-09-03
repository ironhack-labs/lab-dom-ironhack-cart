// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = product.querySelector(".subtotal span");
  const subtotalCalc = price * quantity;

  subtotal.innerHTML = subtotalCalc;
  return subtotalCalc;
}

function calculateAll() {
  // ITERATION 2
  let productList = [...document.querySelectorAll(".product")];
  let totalProduct = 0;
  productList.map((product) => {
  totalProduct += updateSubtotal(product);
  });

  // ITERATION 3
  let totalVal = document.querySelector("#total-value span");
  totalVal.innerHTML = totalProduct;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
}

// ITERATION 5
function createProduct() {
  const newLineElem = [...document.querySelectorAll(".create-product input")];
  let nameProduct = newLineElem[0].value;
  let priceProduct = newLineElem[1].value;
  var tbody = document.querySelector("tbody");
  const newLineHtml = document.createElement("tr");
 
  newLineHtml.classList.add("product");
  newLineHtml.innerHTML += `<td class="name"
    <span>${nameProduct}</span>
    </td>
    <td class="price">$<span>${priceProduct}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;
    
  tbody.appendChild(newLineHtml);

  const removeProductBtn = newLineHtml.querySelector(".btn-remove");
  removeProductBtn.onclick = (evt) => removeProduct(evt);

  newLineElem[0].value = "";
  newLineElem[1].value = 0;
};

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  
  const removeProductBtn = [...document.querySelectorAll(".btn-remove")];
  removeProductBtn.forEach(removeEl => {
    removeEl.onclick = (evt) => removeProduct(evt);
  });
 
  const createProductBtn = document.getElementById("create");
  createProductBtn.onclick = (evt) => createProduct();

});
