/*  Iteration #1  */
function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;

  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = price * quantity;

  return subtotal;
}

/*  Iteration #2 and Iteration #3  */
function calculateAll() {
  let count = 0;
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const subtotal = updateSubtotal(product);
    count += Number(subtotal.innerText);
  });

  const total = document.querySelector("#total-value span");
  total.innerHTML = count;

  return total;
}

/*  Iteration #4  */
function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);

  return calculateAll();
}

/*  Iteration #5  */
function createProduct() {
  const name = document.querySelector(".create-product input[type='text']")
    .value;
  const price = document.querySelector(".create-product input[type='number']")
    .value;

  const products_list = document.querySelector("tbody");
  const new_product = document.createElement("tr");

  new_product.setAttribute("class", "product");
  new_product.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  products_list.appendChild(new_product);
  updateSubtotal(new_product);

  const remove_product_button = new_product.querySelector(".btn-remove");
  remove_product_button.addEventListener("click", removeProduct);
}

window.addEventListener("load", () => {
  const calcute_prices_button = document.getElementById("calculate");
  calcute_prices_button.addEventListener("click", calculateAll);

  const remove_product_button = document.querySelectorAll(".btn-remove");
  remove_product_button.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  const create_product_button = document.getElementById("create");
  create_product_button.addEventListener("click", createProduct);
});
