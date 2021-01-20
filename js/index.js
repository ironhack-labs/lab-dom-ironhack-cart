// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subTotal = price * quantity;
  const subTotalElement = product.querySelector(".subtotal span");
  subTotalElement.innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  // ITERATION 2
  let cartTotal = 0;
  var productList = [...document.getElementsByClassName("product")];
  // stupid way with for now... improve later
  for (ndx = 0; ndx < productList.length; ndx++)
    cartTotal += updateSubtotal(productList[ndx]);

  // ITERATION 3
  const totalElement = document.querySelector("#total-value span");
  // console.log(totalElement);
  totalElement.innerHTML = cartTotal;
  return cartTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log("The target in remove is:", target);
  const productDeleted = target.parentNode.parentNode;
  const productList = productDeleted.parentNode;
  // console.log("The parent is:", productDeleted, productList);
  productList.removeChild(productDeleted);
}

// ITERATION 5

function createProduct() {
  // console.log("reached createProduct");
  const newProductName = document.getElementById("new-product-name").value;
  const newProductPrice = document.getElementById("new-product-price").value;
  // console.log(newProductName, "sold @ ", newProductPrice);

  if (!newProductName || !newProductPrice) return;

  newProductHTML = `
          <td class="name">
            <span>${newProductName}</span>
          </td>
          <td class="price">$<span>${newProductPrice}</span></td>
          <td class="quantity">
            <input type="number" value=0 min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `;
  // console.log(newProductHTML);

  // create table row <rt> representing the product
  const newProduct = document.createElement("tr");
  newProduct.innerHTML = newProductHTML;
  // add 'product' class to the element
  newProduct.classList.add("product");
  // console.log(newProduct);
  // add addEventListener("click", removeProduct) to the remove button
  removeBtn = newProduct.querySelector("button");
  // console.log(removeBtn);
  removeBtn.addEventListener("click", removeProduct);

  const productList = document.getElementById("cart").querySelector("tbody");
  // console.log(productList);
  productList.appendChild(newProduct);

  // reset Product Form
  document.getElementById("new-product-name").value = "";
  document.getElementById("new-product-price").value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtnList = [...document.getElementsByClassName("btn btn-remove")];
  // console.log(removeBtnList);
  for (ndx = 0; ndx < removeBtnList.length; ndx++)
    removeBtnList[ndx].addEventListener("click", removeProduct);

  const createBtn = document.getElementById("create");
  // console.log(createBtn);
  createBtn.addEventListener("click", createProduct);
});
