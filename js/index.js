// ITERATION 1

function updateSubtotal(product) {
  const productPrice = product.querySelector(".price span");
  const productQuantity = product.querySelector(".quantity input").value;
  const productSubTotal = product.querySelector(".subtotal span");

  let productSubTotalValue = productSubTotal.innerText = parseFloat(productPrice.innerText * productQuantity);
  return productSubTotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product");
  const cartTotal = document.querySelector("#total-value span");

  let productTotal = 0;

  products.forEach(function (product) {
    productTotal += updateSubtotal(product)
  });

  // ITERATION 3
  cartTotal.innerText = productTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const targetParent = target.parentElement.parentElement;
  targetParent.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productsContainer = document.querySelector("#cart tbody");
  const productNameInput = document.querySelector(".create-product input[type=text]");
  const productPriceInput = document.querySelector(".create-product input[type=number]");

  const productContainer = document.createElement("tr");
  productContainer.classList.add("product");
  productContainer.innerHTML = `
  <td class="name"><span>${productNameInput.value}</span></td>
  <td class="price">$<span>${productPriceInput.value}</span></td>
  <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action"><button class="btn btn-remove">Remove</button></td>
  `
  productsContainer.appendChild(productContainer);

  const btnRemove = productContainer.querySelector(".btn-remove");
  btnRemove.addEventListener('click', removeProduct);

  productNameInput.value = '';
  productPriceInput.value = 0;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const btnAllRemove = document.querySelectorAll(".btn-remove");

  btnAllRemove.forEach(function (button) {
    button.addEventListener("click", removeProduct);
  });

  const btnCreateProduct = document.querySelector("#create");
  if (btnCreateProduct) {
    btnCreateProduct.addEventListener("click", createProduct);
  }
});
