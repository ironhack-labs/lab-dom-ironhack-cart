// ITERATION 1

function updateSubtotal(product) {

    let price = (product.querySelector('.price span')).innerHTML;
    let quantity = (product.querySelector('.quantity > input').value);
    let subtotalPrice = price * quantity;
    (product.querySelector('.subtotal > span').innerHTML) = subtotalPrice;
    return subtotalPrice;

  }



function calculateAll() {

  // ITERATION 2 & ITERATION 3

  let allProducts = document.querySelectorAll('.product');
  let total = 0;
  for (prod of allProducts) { 
    total += updateSubtotal(prod);
    document.querySelector('#total-value > span').innerHTML = total;
  }

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  const toRemove = target.parentNode;
  toRemove.parentNode.removeChild(toRemove);
  calculateAll();
  
}

// ITERATION 5

function createProduct() {

  const newProductName = document.querySelector('.create-product input[type=text]').value;
  // --- would also work (retrieved using Inspect): ---
  //const newProductName = document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input[type=text]').value;

  const newProductPrice = document.querySelector('.create-product input[type=number]').value;

  const newRow = document.createElement('tr');
  newRow.innerHTML = 
    `
          <td class="name">
            <span>${newProductName}</span>
          </td>
          <td class="price">$<span>${newProductPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
    `

  const parentNode = document.querySelector('tbody');
  parentNode.appendChild(newRow);
  // --- would also work: ---
  // parentNode.insertBefore(newRow, parentNode.child);

 


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  allRemoveButtons = document.querySelectorAll('.action');
  //console.log(allRemoveButtons);
  for (button of allRemoveButtons) {
    button.addEventListener('click', removeProduct);
  }
  
  document.querySelector('#create').addEventListener('click', createProduct);
});

