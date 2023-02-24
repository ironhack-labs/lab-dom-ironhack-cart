// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = product.querySelector(".subtotal");
  const total = price * quantity;
  subtotal.innerHTML = total;
  return total;
}

function calculateAll() {
  const parentEl = document.querySelector("tbody");
  const products = parentEl.getElementsByClassName("product");
  for(let i = 0; i < products.length; i++){
    updateSubtotal(products[i]);
  }
  
  getTotal();
}

function getTotal(product){
  let subTotal = 0;
  const parentEl = document.querySelector("tbody");
  const products = parentEl.getElementsByClassName("product");
  for(let i = 0; i < products.length; i++){
    const subTotalVal = products[i].querySelector(".subtotal");
    subTotal += Number(subTotalVal.innerText);
    console.log(subTotal);
  }

  const totalValue = document.getElementById("total-value");
  const total = totalValue.querySelector("span");
  total.innerHTML = `<span>${subTotal}</span>`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const currentElement = target.parentElement.parentElement;
  const parentElement = target.parentElement.parentElement.parentElement;
  parentElement.removeChild(currentElement);
  getTotal();
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector(".create-product").children[0].querySelector("input");
  const price = document.querySelector(".create-product").children[1].querySelector("input");
  const table = document.querySelector("tbody");
  const addElement = `<tr class="product">
  <td class="name">
    <span>${name.value}</span>
  </td>
  <td class="price">$<span>${price.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`
  table.innerHTML += addElement;
  const removeBtn = document.getElementsByClassName("btn-remove");
  for(let i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener("click", removeProduct);
  }
  name.value = '';
  price.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName("btn-remove");
  for(let i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener("click", removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener("click", createProduct);
});
