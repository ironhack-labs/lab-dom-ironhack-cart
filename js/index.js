// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!', {product});
  const price = product.querySelector(`.price span`).innerHTML;
  const quantity = product.querySelector(`.quantity input`).value;
  const subtotalPrice = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  // console.log({price: typeof price, qty: typeof quantity});
  return subtotalPrice;
}

function calculateAll() {
// ITERATION 2
  const products = document.querySelectorAll('.product');

  // ITERATION 3
  let sum = 0;
  products.forEach(singleProduct => {
    sum += updateSubtotal(singleProduct);
  });
  const totalPrice = document.querySelector('#total-value');
  console.log({totalPrice, sum});
  totalPrice.children[0].innerText = sum;
}

// ITERATION 4
function addRemoveToButtons() {
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((el) => el.addEventListener('click', (event) => removeProduct(event)));
}

function removeProduct(event) {
  console.log(event);
  // event.target.parentNode.parentNode.remove();
  calculateAll();

}

// ITERATION 5
// document.querySelector('.create-product').addEventListener('click', createProduct);

function createProduct() {
  document.querySelector('#create').addEventListener('click', () => {

  // 1 get inputs
    const newProduct = document.querySelectorAll('.create-product input');
    const newProductName = newProduct[0].value;
    const newProductPrice = newProduct[1].value;
    
    //2 append it to the DOM
    const parentTbody = document.querySelector('tbody');
    const newTr = document.createElement('tr');
    newTr.setAttribute('class', 'product');
    newTr.innerHTML = `
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
  </td>`;
    // console.log(newTr);
    parentTbody.appendChild(newTr);
//clear inputs
newProduct[0].value = '';
newProduct[1].value = '';

addRemoveToButtons();
// const newTrBtn = newTr.querySelector('.btn-remove');
// console.log(newTrBtn)
// newTrBtn.addEventListener('click', removeProduct)



  });
  
} 




  // console.log({productName})
  // const unitPrice =;

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  addRemoveToButtons();
  createProduct();
});
