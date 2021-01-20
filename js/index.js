// ITERATION 1
function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = Number(product.querySelector(".price span").textContent);
  const quantity = product.querySelector("input").value;
  const result = price * quantity;
  let subtotal = product.querySelector(".subtotal span");
  subtotal.textContent = result;
  return result;
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  let totalPrice = 0;
  allProducts.forEach((element) => {
    totalPrice += updateSubtotal(element);
  });
  // ITERATION 3
  const totalDisplay = document.querySelector("#total-value span");
  totalDisplay.textContent = totalPrice;
}
// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}
// ITERATION 5
function createProduct() {
  const newName = document.querySelector("#new-name");
  const newPrice = document.querySelector("#new-price");
  const table = document.querySelector("tbody");
  const newProduct = document.createElement("tr");
  newProduct.classList.add("product");
  newProduct.innerHTML = `
          <td class="name">
            <span>${newName.value}</span>
          </td>
          <td class="price">$<span>${newPrice.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `;
  table.appendChild(newProduct);

  const button = newProduct.querySelector(".btn-remove");
  button.addEventListener("click", () => {
    button.parentNode.parentNode.remove();
      calculateAll()
  });

  newName.value = "";
  newPrice.value = 0;

}
window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const allRemove = document.querySelectorAll(".btn-remove");
  allRemove.forEach((element) => {
    element.addEventListener("click", () => {
      element.parentNode.parentNode.remove();
        calculateAll()
    });
  });

  const newProduct = document.querySelector("#create");
  newProduct.addEventListener("click", createProduct);

});
