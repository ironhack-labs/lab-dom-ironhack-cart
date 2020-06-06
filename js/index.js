let products = document.querySelectorAll(".product");
const createButton = document.querySelector("#create")

function updateSubtotal(product) {

  const price = product.querySelector(".price span");
  const quantity = product.querySelector("input[placeholder='Quantity']");
  const subtotal = product.querySelector(".subtotal span")
  const subtotalValue = price.innerHTML * quantity.value;

  subtotal.innerHTML = subtotalValue;

  return subtotalValue;

}

function calculateAll() {

  const totalValue = document.querySelector("#total-value span");
  let total = 0;
  products.forEach(product => {
    console.log(product);
    total += updateSubtotal(product)});
  totalValue.innerHTML = total;

}

function removeProduct(event) {

  if (event.target.className.includes("btn-remove")) {
    event.currentTarget.remove();
  }

}

const createTd = (className, textToUpdate) => {

  const elem = document.createElement("td");
  elem.setAttribute("class", className)
  elem.innerHTML = textToUpdate
  return elem;

}

function createProduct() {

  const productName = document.querySelector("input[placeholder='Product Name']").value;
  const productPrice = document.querySelector("input[placeholder='Product Price']").value;

  const newProduct = document.createElement("tr");
  newProduct.setAttribute("class", "product");
  newProduct.appendChild(createTd("name", `<span>${productName}</span>`));
  newProduct.appendChild(createTd("price", `$<span>${productPrice}</span>`));
  newProduct.appendChild(createTd("quantity", "<input type='number' value='0' min='0' placeholder='Quantity' />"));
  newProduct.appendChild(createTd("subtotal", "$<span>0</span>"));
  newProduct.appendChild(createTd("action", "<button class='btn btn-remove'>Remove</button>"));

  newProduct.addEventListener("click", removeProduct);
  document.querySelector("tbody").appendChild(newProduct);
  products = document.querySelectorAll(".product");

}


//EVENT LISTENERS
window.addEventListener('load', () => {
  const calculatePricesBtn = document.querySelector('#calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
})
create.addEventListener('click', createProduct);
products.forEach(elem => elem.addEventListener("click", removeProduct));
