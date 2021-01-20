// ITERATION 1

function updateSubtotal(product) {
  console.log("calculating subtotal yey!");
  //variable of prices and quantity of them
  const price = product.querySelector(".price span").textContent; //or .innerHTML?

  const quantity = product.querySelector(".quantity input").value;

  //const priceValue = parseFloat(price.innerText); //extract values

  //const quantityValue = quantity.valueAsNumber;

  //calculate total
  const subTotalValue = price * quantity;

  const subTotal = product.querySelector(" .subtotal span ");

  subTotal.textContent = subTotalValue; //set product /idem comment in line 6

  return subTotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const products = document.getElementsByClassName("product"); // class product
  const productsArr = [...products];
  let totalValue = 0; // <== initialize to 0 to sum
  productsArr.forEach((el) => (totalValue += updateSubtotal(el)));
  // upload the total value with "updateSubtotal" function
  // ITERATION 3
  //... your code goes here
  /*   Insert to HTML       h2 tag                       Total Value :)                                */
  document.querySelector("#total-value span").innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is: ", target);
  // //... your code goes here
  const toRemove = target.parentNode.parentNode; // .parentNode return the parent of the specified node
  const parent = toRemove.parentNode;

  parent.removeChild(toRemove);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const createRow = document.querySelector(".create-product");
  let newProdNameInput = createRow.querySelector("input");
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  const newTableRow = document.createElement("tr");
  newTableRow.className = "product";
  newTableRow.innerHTML = `
    <td class="name">
      <span>${newProdNameValue}</span>
    </td>
    <td class="price">$<span>${newProdPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</>
    </td>
  `;

  // get the parent of this newly created row
  const parent = document.querySelector("#cart tbody");

  // append the newly created row to the parent
  parent.appendChild(newTableRow);

  // make sure remove button inherits the same behavior as other remove buttons
  const removeBtn = newTableRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);

  // clean the fields
  newProdNameInput.value = "";
  newProdPriceInput.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((el) => el.addEventListener("click", calculateAll));

  const createBtn = document.getElementById("create");
  if (createBtn) {
    createBtn.addEventListener("click", createProduct); //click in btn goes to
    //the function createProduct
  }
});
