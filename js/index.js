// ITERATION 1

function updateSubtotal(product) {
  const priceHtml = product.querySelector('.price span');
  price = Number(price.innerHTML)

  const quantityHtml = product.querySelector('.quantity input');
  quantity = Number(qauntityHtml.value)

  const subtotal = price * quanity;
  product.querySelector('.subtotal span').textContext = subtotal;
  return subtotal;

  //innerText could be innerHtml or textContent 
}
console.log('Calculating subtotal, yey!');


function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test
  let cartTotal = 0;
  const products = document.querySelectorAll('.product');
  console.log(products);
  [...products].forEach(Element => {
    cartTotal += updateSubtotal(Element);
  })
  document.querySelector('#total-value span').innerText = cartTotal;

}
//alt:
// for (let counter = 0; counter < products.length; counter++){
//  cartTotal = cartTotal + updateSubtotal(Element);

// ITERATION 3
const totalValue = pulledPrice * pulledQuantity;
  }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const rowToBeRemoved = target.parentNode.parentNode;
  const rowParent = target.parentNode.parentNode.parentNode;
  rowParent.removeChild(rowToBeRemoved);

  calculateAll();

  //target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);

}


// ITERATION 5

function createProduct() {

  console.log(document.querySelector('.create-product[type="text"]').value)

  const productNameInput = document.querySelector('.create-product[type="text"]').value;
  const productName = productNameInput.value;

  const productPriceInputElement = productPriceInputElement.value;

  const tableBody = document.querySelector('tbody');

  tableBody.insertAdjacentHTML('beforeend',
    <tr class="product">
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${productPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
      }


const removeButtons = document.querySelectorAll('.btn-remove');
const newRemoveButton = removeButtons[removeButtons.length - 1];
newRemoveButton.addEventListener('click', removeProduct);


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  for (let o = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
});
