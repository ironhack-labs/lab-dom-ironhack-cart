// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = Number (price )* Number (quantity);
  product.querySelector('.subtotal span').innerHTML = subtotal;

  console.log('Calculating subtotal, yey!');
  return subtotal
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product')
  for(let i = 0; i < products.length ; i += 1){
    updateSubtotal(products[i])
  }
  // ITERATION 3
  //... your code goes here
  let subtotal = document.querySelectorAll('.subtotal span')
  let total = document.querySelector('#total-value span')
  let somaElements = 0
  for (let i = 0 ; i < subtotal.length ; i += 1 ){
    somaElements += Number (subtotal[i].innerHTML)
  }
  total.innerHTML = somaElements
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const btnRemove = event.target.parentNode.parentNode
  const btnPaiRemove = btnRemove.parentNode
  btnPaiRemove.removeChild(btnRemove)
  //... your code goes here
  calculateAll()
}
// ITERATION 5
function createProduct(event)  {
  //... your code goes here
  const createProduct = event.target.parentNode.parentNode
  const newProductName = createProduct.querySelector("input[type = 'text']").value;
  const newProductPrice = createProduct.querySelector("input[type = 'number']").valueAsNumber.toFixed(2);
  const newRowElement = document.createElement('tr');
  newRowElement.className = 'product'
  newRowElement.innerHTML = `
  <td class="name">
  <span>I${newProductName}</span>
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
  const parent = document.querySelector('#cart tbody');
  parent.appendChild(newRowElement);
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.getElementsByClassName('btn-remove');
  for(let removeBtn of removeBtns){
    removeBtn.addEventListener('click' , removeProduct);
  }
  const newProduct = document.getElementById('create');
newProduct.addEventListener('click', createProduct);
  //... your code goes here
});