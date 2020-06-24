// ITERATION 1
function updateSubtotal(product) {
    const price = product.querySelector(".price span");
    const quantity = product.querySelector(".quantity input");
    const subtotal = product.querySelector(".subtotal span");

    let newSubtotal = +price.innerHTML * +quantity.value;

    subtotal.innerHTML = newSubtotal;
    return newSubtotal;
}

function calculateAll() {
    const singleProduct = document.querySelectorAll(".product");
    const totalValue = document.querySelector("#total-value span");
    let total = 0;

    // ITERATION 2
    singleProduct.forEach((elem) => {
        total += updateSubtotal(elem);
    });

    // ITERATION 3
    totalValue.innerHTML = total;
}

// ITERATION 4
function removeProduct(event) {
    const target = event.currentTarget.parentNode.parentNode;
    target.parentNode.removeChild(target);
    calculateAll();
}

// ITERATION 5
function createProduct() {
    console.log("create btn clicked");
    const inputProductName = document.querySelectorAll(".create-product input");
    const table = document.querySelector("tbody");
    let productName = inputProductName[0].value;
    let productValue = inputProductName[1].value;
    let row = table.insertRow();

    row.innerHTML = `
    <tr class="product">
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${productValue}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>`;

    row.setAttribute("class", "product");

    inputProductName[0].value = "";
    inputProductName[1].value = 0;

    calculateAll();

    // new remove product
    const rowRemoveProductBtn = document.querySelectorAll(".btn-remove");
    rowRemoveProductBtn.forEach((elem) => {
        elem.addEventListener("click", removeProduct);
    });
}

window.addEventListener("load", () => {
    //  calculate total
    const calculatePricesBtn = document.getElementById("calculate");
    calculatePricesBtn.addEventListener("click", calculateAll);

    // remove product
    const removeProductBtn = document.querySelectorAll(".btn-remove");
    removeProductBtn.forEach((elem) => {
        elem.addEventListener("click", removeProduct);
    });

    // add new product
    const createProductBtn = document.querySelector("#create");
    createProductBtn.addEventListener("click", createProduct);
});
