const $cart = document.querySelector("#cart tbody");
const $calc = document.getElementById("calc");

function updateSubtot($product) {
  // Iteration 1.1

  const price = parseInt($product.querySelector(".product .pu span").innerText);
  const quantity = parseInt($product.querySelector(".product .qty input").value);
  let subTotal = price * quantity;
  return subTotal;
}

function calcAll() {
  // Iteration 1.2

  let totalPriceCalc = 0;
  const totalProducts = $cart.querySelectorAll("tr");
  for (let i = 0; i < totalProducts.length; i++) {
    let subTotalCalc = updateSubtot(totalProducts[i]);
    totalProducts[i].querySelector(".subtot span").innerText = subTotalCalc;
    totalPriceCalc += subTotalCalc;
  }

  document.querySelector("h2 span").innerText = totalPriceCalc;
}

$calc.onclick = calcAll;

// Delete Buttons

// Because we are working with a class, we need to obtain each 'element' of the button
// and go back to the totalProducts, and use the iteration to go to the parent and remove
// the child element from that parent.
const activateDeleteButtons = () => {
  const totalProducts = $cart.querySelectorAll("tr");
  const deleteButtons = document.getElementsByClassName("btn-delete");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", e =>
      totalProducts[i].parentNode.removeChild(totalProducts[i])
    );
  }
}

// Need to first activate all the current buttons when loading
activateDeleteButtons(); 

// New rows
const createButton = document.getElementById("create");
createButton.addEventListener('click', (e) => createRow());

const createRow = () => {

  // Get data from the input fields
  const productName = document.querySelectorAll(".new input")[0].value;
  const inputAmount = document.querySelectorAll(".new input")[1].value;

  // Check if there is content inside them
  const inputAmountFilled = inputAmount === '' ? '0' : inputAmount;
  const productNameFilled = productName === '' ? 'Not Specified' : productName;
  tableContent = `<tr class="product"><td class="name"><span>${productNameFilled}</span></td><td class="pu">
                  $<span>${inputAmountFilled}</span></td><td class="qty"><label><input type="number" value="0" min="0">
                  </label></td><td class="subtot">$<span>0</span></td><td class="rm">
                  <button class="btn btn-delete">Delete</button></td></tr>`;
  $cart.insertAdjacentHTML("beforeend", tableContent);

  // Calculate Delete Buttons again
  activateDeleteButtons();
}