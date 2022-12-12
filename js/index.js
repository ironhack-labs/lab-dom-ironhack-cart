// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let total = price * quantity;
    //... your code goes here
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = total;
  return +subtotal.innerHTML;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let totalPrices = 0;

  const products = document.querySelectorAll('.product');
  products.forEach((prod) => {
    totalPrices += updateSubtotal(prod);
  })

  let finalTotal = document.querySelector('#total-value span');
  finalTotal.innerHTML = totalPrices;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove()
  calculateAll()
}

// ITERATION 5
function createProduct() {
  const productRow = document.createElement("tr");
  productRow.classList.add('product');
  
  const name = document.querySelector('.create-product input').value;
  const unit = document.querySelector('.unit input').value;
  const parent = document.querySelector('table tbody');

  productRow.innerHTML = `
          <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${unit}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        `;
  parent.appendChild(productRow);
  productRow.querySelector(".btn-remove").addEventListener("click", removeProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const create = document.getElementById('create');
  create.addEventListener('click', createProduct);

  const removeItem = document.querySelectorAll('.btn-remove');
  removeItem.forEach((elem) => {
    elem.addEventListener('click', removeProduct)
  })
});