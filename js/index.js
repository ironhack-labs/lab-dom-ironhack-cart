// ITERATION 1
function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  console.log(price);
  console.log(quantity);
  const subTotal = product.querySelector(".subtotal span");
  const subTotalNumber = Number(price) * Number(quantity);
  subTotal.textContent = subTotalNumber;
  //console.log(subTotal);
  return subTotalNumber;
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  let sumTotal = 0;
  allProducts.forEach((product) => {
    updateSubtotal(product);
    sumTotal += updateSubtotal(product);
    console.log("este es el subtotal", updateSubtotal(product));
    console.log("este es el sumTotal", sumTotal);
    return sumTotal;
  });
  const totalValue = document.querySelector("#total-value span");
  //console.log(totalValue)
  totalValue.textContent = sumTotal;
  //totalValue.innerHTML = `<span>${sumTotal}</span>`;
  console.log(totalValue);
  // ITERATION 3
  //... your code goes here
}
// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  console.log(target);
  const removeNode = target.parentNode.parentNode;
  const parentNode = target.parentNode.parentNode.parentNode;
  // console.log("-----------------",removeNode)
  // console.log("-----------------",parentNode)
  parentNode.removeChild(removeNode);
}
// ITERATION 5
function createProduct() {
  console.log("hello");
  // const price = product.querySelector('.price span').innerHTML;
  const newItemName = document.querySelector('.create-product [type="text"]')
    .value;
  const newItemPrice = document.querySelector('.create-product [type="number"]')
    .value;
  console.log("newItemName", newItemName);
  console.log("newItemPrice", newItemPrice);
  const tbodySelect = document.querySelector("tbody");
  console.log(tbodySelect);
  const newTR = document.createElement("tr");
  newTR.innerHTML = `
  <tr class="product">
          <td class="name">
            <span>${newItemName}</span>
          </td>
          <td class="price">$<span>${newItemPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;
  tbodySelect.appendChild(newTR);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  //... your code goes here
  const btnRemove = document.querySelectorAll(".btn-remove");
  //console.log("remoooooooooove", btnRemove)
  btnRemove.forEach((btn) => btn.addEventListener("click", removeProduct));
  const createP = document.querySelector("#create");
  //onsole.log("creaaaaaaaaaaaaaate", createP)
  createP.addEventListener("click", createProduct);
});
