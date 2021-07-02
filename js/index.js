const init = () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  document.querySelectorAll(".btn.btn-remove").forEach(el => {
    el.addEventListener("click", removeProduct);
  });
  document.querySelector("#create").addEventListener("click", createProduct);
}

// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceValue = Number(product.querySelector('.price span').innerText);
  const quantityValue = Number(product.querySelector('.quantity input').value);
  const subtotal = priceValue * quantityValue;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return Number(subtotal.toFixed(2));
}

function calculateAll() {
  const allTheProducts = document.querySelectorAll('.product');
  // ITERATION 2
  const total = Array.from(allTheProducts).reduce((acc, el) => acc += updateSubtotal(el), 0);
  // ITERATION 3
  document.querySelector("#total-value span").innerText = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  event.target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5
function createProduct(event) {
  const prodName = document.querySelector(".create-product [type='text']").value;
  const unitPrice = document.querySelector(".create-product [type='number']").value;
  const newElement = `
      <tr class="product">
        <td class="name">
          <span>${prodName}</span>
        </td>
        <td class="price">$<span>${unitPrice}</span></td>
        <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
      </tr>
    `;

  const parentElement = document.querySelector("tbody");
  parentElement.insertAdjacentHTML('afterbegin', newElement);
  init();
}

window.addEventListener('load', () => {
  init();
});
