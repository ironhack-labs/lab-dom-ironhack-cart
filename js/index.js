// ITERATION 1 

function updateSubtotal(product) {
  const price = Number(product.querySelector(".price span").innerText);
  const quantity = Number(product.querySelector(".quantity input").value);
  const subtotal = product.querySelector(".subtotal span");
  const result = price * quantity;
  subtotal.innerText = result;
  return result
}

function calculateAll() {
  let totalPrice = 0;
  products = document.querySelectorAll("tr.product");
  total = document.querySelector("#total-value span")
  productsArr = [...products];
  productsArr.forEach(product => {
    totalPrice += updateSubtotal(product)
  });
  total.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target)
  const cart = document.querySelector("#cart tbody")
  const fila = target.parentNode.parentNode;
  cart.removeChild(fila)
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector('.create-product input[type="text"]');
  if (!productName.value) alert("Please introduce the Product Name");
  else {
    const productPrice = document.querySelector('.create-product input[type="number"]');
    const tbody = document.querySelector('#cart tbody');
    const newProduct = tbody.insertRow(-1);
    newProduct.classList.add("product")
    const productNameCeil = newProduct.insertCell(0);
    productNameCeil.classList.add("name");
    const productPriceCeil = newProduct.insertCell(1);
    productPriceCeil.classList.add("price");
    const productQuantity = newProduct.insertCell(2);
    productQuantity.classList.add("quantity");
    const productSubtotal = newProduct.insertCell(3);
    productSubtotal.classList.add("subtotal")
    const removeBtn = newProduct.insertCell(4);
    removeBtn.classList.add("action")
    productNameCeil.innerText = productName.value;
    productPriceCeil.innerHTML = `$<span>${productPrice.value}</span>`;
    productQuantity.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />';
    productSubtotal.innerHTML = '$<span>0</span>';
    removeBtn.innerHTML = '<button class="btn btn-remove">Remove</button>'
    removeBtn.querySelector(".btn-remove").addEventListener('click', removeProduct);
    productName.value = "";
    productPrice.value = 0;
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeButtons = document.querySelectorAll(".btn-remove");
  const createButton = document.querySelector("#create");
  calculatePricesBtn.addEventListener('click', calculateAll);
  removeButtons.forEach(button => button.addEventListener('click', removeProduct));
  createButton.addEventListener('click', createProduct)
  ;

});
