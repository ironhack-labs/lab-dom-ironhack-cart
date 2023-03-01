// ITERATION 1

function updateSubtotal(product) {
  const priceElm = product.querySelector(".price span");
  const quantityElm = product.querySelector(".quantity input");
  const subtotalElm = product.querySelector(".subtotal span");

  const priceValue = priceElm.innerHTML;
  const quantityValue = quantityElm.value;

  const subquantityValue = priceValue * quantityValue;

  subtotalElm.innerHTML = subquantityValue;

  return subquantityValue;
}

// ITERATION 2 / 3
function calculateAll() {
  const productElm = document.getElementsByClassName("product");
  const totalProdValueElm = document.querySelector("#total-value span");
  let totalProductsPrice = 0;

  for (let i = 0; i < productElm.length; i++) {
    const currentProduct = productElm[i];
    const currentTotal = updateSubtotal(currentProduct);
    totalProductsPrice += currentTotal;
  }

  totalProdValueElm.innerHTML = totalProductsPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const elmRemove = target.parentNode.parentNode;
  if (elmRemove.parentNode) {
    elmRemove.parentNode.removeChild(elmRemove);
  }
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProd = document.querySelectorAll(".create-product input");
  const prodName = newProd[0].value;
  const prodPrice = newProd[1].value;
  console.log(prodName);
  console.log(prodPrice);

  const insertProd = document.querySelector('tbody')
  insertProd.innerHTML += 
  `<tr class="product">
          <td class="name">
            <span>${prodName}</span>
          </td>
          <td class="price">$<span>${prodPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn.btn-remove");
  removeButtons.forEach((element) => {
    element.addEventListener("click", removeProduct);
  });

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
