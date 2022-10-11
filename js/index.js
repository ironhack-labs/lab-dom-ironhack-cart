// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.getElementsByTagName("input")[0];

  let subTotalPrice = price.innerHTML * quantity.value;
  let subTotal = product.getElementsByClassName("subtotal")[0];

  subTotal.innerHTML = `$${subTotalPrice}`;
  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /*  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  // ITERATION 3 
    const products = document.getElementsByClassName("product");
    let total = 0;
    for(let i = 0; i < products.length; i++){
      updateSubtotal(products[i]);
      total += updateSubtotal(products[i]);
    }
    let totalPrice = document.getElementById("total-value")
    totalPrice.innerHTML = `Total: $<span>${total}</span>`;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode);
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //creating Product (created some ids in index.html)
  let tableBody = document.getElementById("table-body");
  let row = document.createElement("tr");
  row.classList.add("product");
  let inputText = document.getElementById("text");
  let thePrice = document.getElementById("choose-price");
  row.innerHTML = `<td class="name">
  <span>${inputText.value}</span>
</td>
<td class="price">$<span>${thePrice.value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`
  //resetting input
  inputText.value = "";
  thePrice.value = 0;
  //inserting product
  tableBody.appendChild(row);
  //adding remove btn function
  const removeIt = document.getElementsByClassName("btn-remove");
  removeIt[removeIt.length-1].addEventListener("click", removeProduct);
}
  

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const addProductBtn = document.getElementById("create");
  addProductBtn.addEventListener("click", createProduct);
  
  const removeBtns = document.getElementsByClassName("btn-remove");
  for(let i = 0; i < removeBtns.length; i++){
  removeBtns[i].addEventListener("click", removeProduct)
  }
 });
