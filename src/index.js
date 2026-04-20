// ITERATION 1

function updateSubtotal(product) {
  // Argument soll ein tr-product-Node sein
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span"); //zugreifen auf tr-product-price-span-Node und zuweisen
  const priceValue = parseFloat(price.textContent);

  const quantity = product.querySelector(".quantity input");
  const quantityValue = parseInt(quantity.value);

  const subtotalPrice = priceValue * quantityValue;

  const subtotalDom = product.querySelector(".subtotal span");
  subtotalDom.textContent = subtotalPrice.toFixed(2); //Property ins DOM schreiben
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productsNodeList = document.getElementsByClassName("product");
  let totalPrice = 0;
  for (let i = 0; i < productsNodeList.length; i++) {
    let subtotalPrice = updateSubtotal(productsNodeList[i]);
    // ITERATION 3
    totalPrice += subtotalPrice;
  }

  const totalValueDom = document.querySelector("#total-value span");
  totalValueDom.textContent = totalPrice.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  //z.B. clickEvent = {type: 'click', target: 'button.btn-remove, ...'}
  const target = event.currentTarget; //Element, an dem der Event-Listener registriert wurde, hier der create-Product-Button
  console.log("The target in remove is:", target);

  const productRow = target.closest("tr"); // geht im DOM-Baum nach oben bis zum ersten tr-Element
  const tbodyDom = productRow.parentNode;
  tbodyDom.removeChild(productRow); // aus dem DOM löschen

  calculateAll(); //Update Preis
}

// ITERATION 5

function createProduct() {
  const inputsNodeList = document.querySelectorAll("tfoot input");
  const productNameInput = inputsNodeList[0].value;
  const productPriceInput = parseFloat(inputsNodeList[1].value);
  const newProductRow = document.createElement("tr");
  newProductRow.innerHTML = `<td class="name">
            <span>${productNameInput}</span>
          </td>
          <td class="price">$<span>${productPriceInput}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`;
  newProductRow.classList.add("product"); //Klasse "product" wird ans neue tr-Element angefügt
  const tbodyDom = document.querySelector("tbody");
  tbodyDom.appendChild(newProductRow); // Neues tr-Node wird als letztes Kind-Element in tbody eingefügt

  //Remove-Button-Eventlistener für die neue Zeile
  const newRemoveButton = newProductRow.querySelector(".btn-remove");
  newRemoveButton.addEventListener("click", removeProduct);

  //Input-Felder zurücksetzen
  inputsNodeList[0].value = "";
  inputsNodeList[1].value = 0;
}

window.addEventListener("load", () => {
  //an Calculate-Button
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //Create-Product-Button
  const createProductBtn = document.querySelector("#create");
  createProductBtn.addEventListener("click", createProduct);

  //remove-Button
  const removeButtonsNodeList = document.querySelectorAll(".btn-remove");
  removeButtonsNodeList.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });
});
