// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerText = price * quantity;

  return subtotal.innerText;
}


function calculateAll() {
  const products = document.querySelectorAll("#cart .product");
  let totalPrice = document.querySelector("#total-value span");

  totalPrice.innerText = 0; //reset the value before re calculated

  products.forEach((product) => {
    totalPrice.innerText = Number(totalPrice.innerText) + Number(updateSubtotal(product));
  })

  return totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let row = target.parentNode.parentNode;
  row.remove();
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]').value
  const unitPrice = document.querySelector('.create-product input[type="number"]').value
  const tbodyDOM = document.querySelector('#cart tbody');

  let template = `
    <tr class="product">
      <td class="name">
        <span>${nameInput}</span>
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
  tbodyDOM.innerHTML += template;
  reloalRemoveEvents ();
}

function reloalRemoveEvents () {
  const removesBtn = document.querySelectorAll(".btn-remove");
  console.log(removesBtn)
  removesBtn.forEach((element) => {
    element.addEventListener("click", removeProduct);
  })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

/*   const removesBtn = document.querySelectorAll(".btn-remove");
  removesBtn.forEach((element) => {
    element.addEventListener("click", removeProduct);
  }) */

  const addProduct = document.querySelector('#create');
  addProduct.addEventListener('click', createProduct);
});
