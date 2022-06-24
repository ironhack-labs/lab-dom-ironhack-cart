// ITERATION 1

function updateSubtotal(product) {
 // console.log('Calculating subtotal, yeehaw!');

  const price = product.querySelector('.price span');
  const priceValue = parseFloat(price.innerHTML);
  const quantity = product.querySelector('.quantity input');
  const quantityValue = quantity.value;
  const subtotalValue = priceValue * quantityValue;

  let subDisplay = product.querySelector('.subtotal span');
  subDisplay.innerHTML = subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

  let products = document.getElementsByClassName('product');
  let curSubtotal = 0;

  for (i = 0; i < products.length; i++) {
  curSubtotal += updateSubtotal(products[i]);
  }
  
let totalSub = curSubtotal;

  let totalDisplay = document.querySelector('#total-value span');
  totalDisplay.innerHTML = totalSub;
  return totalSub;

}

// ITERATION 4 NOT WORKING

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentElement.parentElement);
  target.closest('.product').remove();
target.closest('.product').remove();
calculateAll();
}

// ITERATION 5

function createProduct() {

const newName = document.querySelector('.create-name');
const newPrice = document.querySelector('.create-product');
const newTableRow =document.createElement('tr');
newTableRow.classList.add('product');
newTableRow.innerHTML = `
          <td class="name">
            <span>${newName.value}</span>
          </td>
          <td class="price">$<span>${newPrice.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
          `;

          document.querySelector('tbody').appendChild(newTableRow);

          newName.value= '';
          newPrice.value= '';

          const removeBtns = document.querySelectorAll('.btn-remove');


         removeButtons[removeButtons.length - 1].addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
const removeButtons = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {

    removeButtons[i].addEventListener('click', removeProduct);
    //click event listener
    //pass removeProduct() as callback
  }

const createButton = document.querySelector('#create');
createButton.addEventListener('click', createProduct);

});
