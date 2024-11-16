// ITERATION 1
function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  //... your code goes here
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = Number(price) * Number(quantity);
  product.querySelector(".subtotal span").innerText = `${subtotal}`;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const multiProduct = document.querySelectorAll(".product");

  // ITERATION 2
  //... your code goes here
  let total = 0;
  for (element of multiProduct) {
    total += updateSubtotal(element);
  }

  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value > span").innerText = total;
}

// ITERATION 4
function removeProductEventAdder() {
  const multiProduct = document.querySelectorAll(".product");
  for (element of multiProduct) {
    element.querySelector(".btn-remove").addEventListener("click", (e) => {
      let tableRow = e.target.parentElement.parentElement;
      tableRow.remove()
    });
  }
}

// ITERATION 5
function createProductEventAdder() {
  //... your code goes here
  const addButton = document.querySelector(".btn-add");

  addButton.addEventListener("click", () => {
    let tbody = document.querySelector("tbody");
    let prodName = document.querySelector("#newName");
    let price = document.querySelector("#newPrice");
    let newRowHTML = document.createElement("tr");
    newRowHTML.classList.add("product");
    const newRowText = `<td class="name">
              <span>${prodName.value}</span>
            </td>
            <td class="price">$<span>${price.value}</span></td>
            <td class="quantity">
              <input type="number" value="0" min="0" placeholder="Quantity" />
            </td>
            <td class="subtotal">$<span>0</span></td>
            <td class="action">
              <button class="btn btn-remove">Remove</button>
            </td>`;
    newRowHTML.innerHTML = newRowText;
    tbody.appendChild(newRowHTML);
    prodName.value = "";
    price.value = 0;

    removeProductEventAdder();
  });
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  //... your code goes here
  createProductEventAdder();
  removeProductEventAdder();
});
