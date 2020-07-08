// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = product.querySelector(`.price span`).innerHTML;
  const quantity = product.querySelector(`.quantity input`).value;
  const subTot = product.querySelector(`.subtotal span`);

  const subtotal = Number(price) * Number(quantity);

  subTot.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');

  // updateSubtotal(multiProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const multipleProd = document.getElementsByClassName("product");
  const arrMultipleProd = [...multipleProd];

  let sumSubTotales = 0;
  arrMultipleProd.forEach((el) => {
    sumSubTotales += updateSubtotal(el);
  });

  // ITERATION 3
  //... your code goes here

  const totalFinal = document.querySelector(`#total-value span`);

  totalFinal.innerHTML = sumSubTotales;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;

  //... your code goes here

  target.remove();

  return calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let newTr = document.createElement(`tr`);
  newTr.className = "product";

  const newProdName = document.querySelector(
    `.create-product input[type="text"]`
  );
  const newProdPrice = document.querySelector(
    `.create-product input[type="number"]`
  );
  const tBody = document.querySelector(`#cart tbody`);
  tBody.appendChild(newTr);
  newTr.innerHTML = `
      <td class="name">
        <span>${newProdName.value}</span>
      </td>
      <td class="price">$<span>${newProdPrice.value}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>`;

  newTr.querySelector(`.btn-remove`).addEventListener(`click`, removeProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const createProdBtn = document.getElementById(`create`);
  createProdBtn.addEventListener("click", createProduct);

  const removeProdBtn = document.getElementsByClassName(`btn-remove`);
  arrRemoveProdBtn = [...removeProdBtn];

  arrRemoveProdBtn.forEach((btn) =>
    btn.addEventListener("click", removeProduct)
  );

  //... your code goes here
});
