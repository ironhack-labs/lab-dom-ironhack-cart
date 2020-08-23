// ITERATION 1

updateSubtotal = (product) => {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;

  const subtotal = price * quantity;

  product.querySelector(".subtotal span").innerHTML = subtotal;

  return subtotal;
};

// ITERATION 2
calculateAll = () => {
  const products = document.querySelectorAll(".product");
  let total = 0;
  products.forEach((elm) => (total += updateSubtotal(elm)));

  const totalPrice = document.querySelector("#total-value span");
  totalPrice.innerHTML = total;
  return total;
};

//    BUTTONS

// const buttonCalc = document.querySelector(".btn-success");
// buttonCalc.onclick = calculateAll();

// const createProductbtn = document.querySelector("#create");
// createProductbtn.addEventListener("click", createProduct);

// ITERATION 3

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  currentProduct = target.parentNode.parentNode;

  currentProduct.parentNode.removeChild(currentProduct);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const nameInput = document.querySelector(".create-product input").value;
  const priceInput = document.querySelectorAll(".create-product input")[1]
    .value;

  document.querySelector("tbody").innerHTML += `<tr class="product">
      <td class="name">
        <span>${nameInput}</span>
      </td>
      <td class="price">
        $<span>${priceInput}</span>
      </td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">
        $<span>0</span>
      </td>
      <td class="action">
        <button class="btn btn-remove btn1">Remove</button>
      </td>
    </tr>`;
}

window.addEventListener("click", () => {
  const calculatePricesBtn = document.getElementById("calculate");

  calculatePricesBtn.addEventListener("click", calculateAll);

  const arrayRemoveBtn = document.querySelectorAll(".product .btn-remove");

  arrayRemoveBtn.forEach((element) =>
    element.addEventListener("click", removeProduct)
  );

  const createProdBtn = document.querySelector("#create");
  createProdBtn.addEventListener("click", createProduct);
});
