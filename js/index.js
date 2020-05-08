// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = Number(product.querySelector('.quantity input').value);
  const sum = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = sum;
  return sum;
}


  // ITERATION 2
  // ITERATION 3

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  for (i=0;i < allProducts.length; i++){
    let sumReturned = updateSubtotal(allProducts[i]);
    total += sumReturned;
  }
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let productContainer = document.querySelector("tbody");
  let parentContainer = target.closest(".product");
  productContainer.removeChild(parentContainer);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  console.log("Let's create!")
  const name = document.querySelector('#nameProduct').value;
  const price = document.querySelector('#unitPrice').value;
  console.log(name,price);
  let tableProduct = document.querySelector("tbody");
  let newProduct = document.createElement("TR");
  newProduct.className = "product";
  newProduct.innerHTML = `<td class="name">
    <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
    <button class="btn btn-remove">Remove</button>
    </td>`;
  let removeButton = newProduct.querySelector(".btn-remove");
  removeButton.addEventListener("click", removeProduct);
  tableProduct.appendChild(newProduct);
  document.querySelector("#nameProduct").value = "";
  document.querySelector("#unitPrice").value = "";
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  for (x=0;x<removeProductBtn.length;x++){
    removeProductBtn[x].addEventListener('click',removeProduct);
  }
  const createProductBtn = document.getElementById('create');
  createProductBtn .addEventListener('click', createProduct);
});


