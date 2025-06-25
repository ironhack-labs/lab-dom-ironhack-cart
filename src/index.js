// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(`.price span`);
  const quantity = product.querySelector(`.quantity input`);

  const priceValue = parseFloat(price.textContent.replace(`$`, ``));
  const quantityValue = parseInt(quantity.value);
  
  const subtotal = priceValue * quantityValue;

  const subtotalValue = product.querySelector(`.subtotal span`);
  subtotalValue.textContent = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  let products = document.getElementsByClassName("product");
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  const totalValue = document.querySelector(`#total-value span`);
  totalValue.textContent = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  const row = target.closest(`.product`);
  row.remove();

  calculateAll();
}


// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector(`.create-product input`);
  const priceInput = document.querySelector(`.create-product input[type="number"]`);

  const nameValue = nameInput.value.trim();
  const priceValue = parseFloat(priceInput.value).toFixed(2);

    if (!nameValue || isNaN(priceValue) || priceValue < 0) {
    alert("Please enter a valid product name and price.");
    return;
  }

  const newRow = document.createElement(`tr`);
  newRow.classList.add(`product`);
  newRow.innerHTML = `
    <td class="name"><span>${nameValue}</span></td>
    <td class="price">$<span>${priceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const tbody = document.querySelector(`#cart tbody`);
  tbody.appendChild(newRow);

  const removeBtn = newRow.querySelector(`.btn-remove`);
  removeBtn.addEventListener(`click`, removeProduct);

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtn = document.querySelectorAll(`.btn.btn-remove`);
  removeBtn.forEach((button) => {
    button.addEventListener(`click`, removeProduct);
  });

  const createBtn = document.querySelectorAll(`#create`);
  createBtn.forEach((button) => {
    button.style.backgroundColor = '#7ec8e3';
    button.style.color = '#fff';
    button.addEventListener(`click`, createProduct);
  });
});
