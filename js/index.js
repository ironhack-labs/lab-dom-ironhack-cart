// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector(".price span");
  let qty = product.querySelector(".quantity input");
  let subtotal = product.querySelector(".subtotal span");

  subtotal.innerText = price.innerHTML * qty.value;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let products = document.querySelectorAll(".product");

  products.forEach((elem) => {
    updateSubtotal(elem);
  });

  // ITERATION 3

  let total = 0;

  document.querySelectorAll(".subtotal span").forEach((elem) => {
    total += Number(elem.innerText);
  });

  document.querySelector("#total-value span").innerText = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let deletable = target.parentNode.parentNode;
  deletable.parentNode.removeChild(deletable);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let details = document.querySelector(".create-product").childNodes;

  let name = details[1].firstElementChild;
  let price = details[3].firstElementChild;

  let tr = document.createElement("tr");
  tr.innerHTML = `<td class="name">
    <span>${name.value}</span>
    </td>
    <td class="price">$<span>${price.value}</span></td>
    <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
    <button class="btn btn-remove">Remove</button>
    </td>`;

  tr.querySelector(".btn-remove").addEventListener("click", (e) => { removeProduct(e); });
  tr.classList.add("product");
  document.querySelector("tbody").appendChild(tr);

  name.value = "";
  price.value = "";
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let deleteButtons = document.querySelectorAll(".btn-remove");
  deleteButtons.forEach((elem) => {
    elem.addEventListener("click", (e) => { removeProduct(e); });
  });

  document.querySelector("#create").addEventListener("click", createProduct);
});
