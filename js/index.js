// ITERATION 1

function updateSubtotal(product) {
  const price = document.querySelector(`.${product} .price span`).innerText;
  const quantity = document.querySelector(`.${product} .quantity input`).value;
  const subT = document.querySelector(`.${product} .subtotal span`);
  subT.innerText = price*quantity;
}

   

function calculateAll() {

  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((product, i) => {
    product.classList.add(`P${i}`);
    updateSubtotal(`P${i}`);
  });

  const total = document.querySelector("#total-value span");
  const subtotals = document.querySelectorAll(".product .subtotal span");
  let calc = [];
  subtotals.forEach((subtotal) => calc.push(Number(subtotal.innerText)));
  let result = calc.reduce((a, c) => a + c);
  total.innerText = result;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parent = target.parentNode.parentNode;
  const cart = document.querySelector("#cart tbody");
  cart.removeChild(parent);
}
 



// ITERATION 5

function createProduct() {

  const cart = document.querySelector("#cart tbody");
  const inpName = document.querySelector('.create-product td:nth-child(1) input');
  const inpValue = document.querySelector('.create-product td:nth-child(2) input');
  let price;
  
  if (inpValue.value.includes('.')) {
    price = inpValue.value;
  } else {
    price = `${inpValue.value}.00`;
  }

  let newItem = `<tr class="product">
          <td class="name">
            <span>${inpName.value}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;

if (inpName.value === '') {
  alert("you have not filled in a item name");
  inpName.focus();
} else if (inpValue.value=== "0") {
  alert("are you sure this value is free?");
  inpValue.focus();
  cart.innerHTML += newItem;
} else {
  cart.innerHTML += newItem;
  inpName.value = '';
  inpValue.value = '';
}

const removeBtn = document.querySelectorAll(".btn-remove");
removeBtn.forEach(button => button.addEventListener("click", removeProduct));

}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach(button => button.addEventListener("click", removeProduct));

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener("click", createProduct);

});
