// ITERATION 1

function updateSubtotal(product) {

// CSS Selector ist searching for the spand decendent of the parent with the class of price 
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
//we can search in very specific ways, document would be the whole document,
// but I can also search just in one node, so in the specific product.


  let subtotalPrice = price.innerHTML * quantity.value;
  // value for inputs, innerHTML for everything else, not just a text, but also tags

  let subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerHTML = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {

  // ITERATION 2
  const products = document.querySelectorAll('.product');
 
  // const total = [...products].reduce((acc, product) => {
  //   return acc + updateSubtotal(product)
  // }, 0)

  let total = 0;
  products.forEach((product) =>  total += updateSubtotal(product))
  
  
  // ITERATION 3
  let totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = total;
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  // const parent = target.parentNode; this only takes out the parent of the button, but <i need to take out the tbody
  const rowToRemove = target.parentNode.parentNode;
  const tbody = target.parentNode.parentNode.parentNode;
  tbody.removeChild(rowToRemove);
}

// ITERATION 5

function createProduct() {
  let newProductName = document.querySelector('input[type="text"]');
  let newProductPrice = document.querySelector('.create-product input[type="number"]');

  let fixedPrice = Number(newProductPrice).toFixed(2);

  let tbody = document.getElementsByTagName('tbody')[0];
  let newProductRow = document.createElement('tr');
  
  newProductRow.classList.add('product')
  newProductRow.innerHTML = `
  <tr class="product">
          <td class="name">
            <span>${newProductName.value}</span>
          </td>
          <td class="price">$<span>${fixedPrice.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`

  tbody.appendChild(newProductRow);
  const removeBtn = newProductRow.querySelector('.btn-remove')
  removeBtn.onclick = removeProduct;

  newProductName.value = '';
  newProductPrice.value = 0;
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');

//passes funciton to all the remove buttons
  removeButtons.forEach((product) => product.onclick = removeProduct)

 //get the create button and pass it the function
  const createButton = document.getElementById('create');
  createButton.onclick = createProduct;

});
