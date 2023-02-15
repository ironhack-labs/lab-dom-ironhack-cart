// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subTotal = product.querySelector(".subtotal span");

  const subTotalCost = (price * quantity).toFixed(2); // toFixed to limit the decimal numbers to 2
  subTotal.innerHTML = subTotalCost;

  return parseFloat(subTotalCost); // parseFloat: string-->float number 
}

function calculateAll() {
  // ITERATION 2
  const items = document.getElementsByClassName("product");
  const total = document.querySelector("#total-value span");
  let totalCost = 0;
  for (const item of items) {
    totalCost += updateSubtotal(item); // For each item we update the subtotal and add it to the totalCost variable
  }
  // ITERATION 3
  total.innerHTML = totalCost.toFixed(2); // Actualise the Total value
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode; // To target the entire row we need to select the parent of the parent of the element that triggers the event
  console.log("The target in remove is:", target);

  const parent = target.parentNode;
  parent.removeChild(target);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelectorAll(".create-product > td > input");
  const productName = newProduct[0].value;
  const productPrice = newProduct[1].value;

  const bodyTable = document.querySelector("tbody");
  // Add the HTML code that corresponds to a new row, with the values collected previously
  bodyTable.innerHTML += `<tr class="product">
                            <td class="name">
                             <span>${productName}</span>
                           </td>
                           <td class="price">$<span>${productPrice}</span></td>
                              <td class="quantity">
                                 <input type="number" value="0" min="0" placeholder="Quantity" />
                              </td>
                              <td class="subtotal">$<span>0</span></td>
                              <td class="action">
                               <button class="btn btn-remove">Remove</button>
                            </td>
                          </tr>`;
                          
  // Every time we add a new row, we need to tell the page the new "delete" buttons have an event trigger
  const removeButtons = document.querySelectorAll(".btn-remove");
  for (const btn of removeButtons) {
     btn.addEventListener("click", removeProduct);
  }
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");
  for (const btn of removeButtons) {
    btn.addEventListener("click", removeProduct);
  }
  const createButton = document.getElementById("create");
  createButton.addEventListener("click", createProduct);
});
