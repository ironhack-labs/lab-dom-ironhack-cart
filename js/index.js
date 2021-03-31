const parent = document.querySelector("tbody");
// ITERATION 1

function updateSubtotal(product) {
  const priceEl = product.querySelector(".price span");
  const quantityEl = product.querySelector(".quantity input");

  const subtotal = Number(priceEl.innerHTML) * Number(quantityEl.value);

  const subtotalEl = product.querySelector(".subtotal span");
  subtotalEl.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  let total = 0;
  const products = [...document.getElementsByClassName("product")];
  products.forEach((el) => (total += updateSubtotal(el)));

  // ITERATION 3
  const totalEl = document.querySelector("#total-value span");
  totalEl.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const child = target.parentNode.parentNode;
  parent.removeChild(child);
}

// ITERATION 5

function createProduct() {
  const elementToClone = document.querySelector(".product");
  const child = elementToClone.cloneNode(true);
  const nameInputEl = document.getElementById("nameNewProduct");
  const priceInputEl = document.getElementById("priceNewProduct");
  let name = nameInputEl.value;
  let price = priceInputEl.value;

  //Input Validation
  if(!name && (price == '' || price <= 0)){
    nameInputEl.style.borderColor = 'red';
    priceInputEl.style.borderColor = 'red';
    return;
  } else if (!price || price <= 0){
    priceInputEl.style.borderColor = 'red';
    return;
  } else if (!name){
    nameInputEl.style.borderColor = 'red';
    return;
  }
  
  child.querySelector(".btn-remove").addEventListener("click", removeProduct);
  child.querySelector(".name span").innerHTML = name;
  child.querySelector(".price span").innerHTML = price;

  parent.appendChild(child);

  //Cleaning create product input values and border
  nameInputEl.value = '';
  priceInputEl.value = '';
  nameInputEl.style.borderColor = '#dadada';
  priceInputEl.style.borderColor = '#dadada';
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  
  const removeButtons = [...document.getElementsByClassName("btn-remove")];
  removeButtons.forEach((el) => el.addEventListener("click", removeProduct));
  
  const createProductButton = document.getElementById("create");
  createProductButton.addEventListener("click", createProduct);
  
});
