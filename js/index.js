// ITERATION 1

function updateSubtotal(product) {
  const subTotal = product.querySelector(".subtotal span");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  let subTotalPrice = price.innerText*quantity.value;

  subTotal.innerText = ``;
  subTotal.innerText =`${subTotalPrice}`;
  
  return subTotalPrice;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll("tr.product");
  allProducts.forEach(productUnit => updateSubtotal(productUnit));
  //... your code goes here

  // ITERATION 3
  let totalValue = 0;
  allProducts.forEach(productUnit => totalValue += Number(productUnit.querySelector(".subtotal span").innerText));

  const totalPrice = document.querySelector("#total-value span");
  totalPrice.innerText = "";
  totalPrice.innerText = `${totalValue}`;

  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget || event.target;
  target.parentElement.parentElement.parentElement.removeChild(target.parentElement.parentElement);
  calculateAll();
  console.log("Hello");
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const newName = document.querySelector(".create-product input");
  const newPrice = document.querySelector(".create-product td:nth-child(2) input");
  const listOfProducts = document.querySelector("tbody");
  var tr = document.createElement("tr");
  listOfProducts.appendChild(tr);
  const lastTr = document.querySelector("tbody").lastChild;
  lastTr.classList.add("product");
  console.log(typeof lastTr);
  lastTr.innerHTML = `<td class="name">
       <span>${newName.value}</span>
     </td>
     <td class="price">$<span>${newPrice.value}</span></td>
     <td class="quantity">
       <input class="input-qtty" type="number" value="0" min="0" placeholder="Quantity" />
     </td>
     <td class="subtotal">$<span>0</span></td>
     <td class="action">
       <button class="btn btn-remove">Remove</button>
     </td>`;

  newName.value= "";
  newPrice.value= 0;

  createButton.addEventListener('click', () => {
    const removeButtons = document.querySelectorAll(".btn-remove");
    removeButtons.forEach(buttons => buttons.addEventListener('click', removeProduct))
  })
    //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(buttons => buttons.addEventListener('click', removeProduct));

  //... your code goes here

const createButtons = document.getElementById('create');
createButtons.addEventListener('click', createProduct)
});

