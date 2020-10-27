// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const innerSelector = product.querySelector('.subtotal span');
  const subtotal = price.innerHTML * quantity.value;
  innerSelector.innerHTML = subtotal;
  return subtotal; 
}

function calculateAll() {
let sum = 0;
const allProducts = document.getElementsByClassName('product');
for (let i = 0; i<allProducts.length; i++) {
 sum += updateSubtotal(allProducts[i]);
}
const totalValue = document.querySelector('#total-value span');
totalValue.innerHTML = sum;
}

// ITERATION 4
function removeProduct(event) {
const target = event.currentTarget.parentNode.parentNode;
document.querySelector("tbody").removeChild(target)
calculateAll()
}

// ITERATION 5

function createProduct() {
  const values = []
  const newProductandPrice = document.querySelectorAll('.create-product input');
  for (let i = 0; i<newProductandPrice.length; i++) {
    values.push(newProductandPrice[i].value);
    newProductandPrice[i].value="";
   }
console.log(values);
if (values.length > 0){
let addNewProduct=  document.querySelector('tbody'); 
addNewProduct.innerHTML += ` <tr class="product">
  <td class="name">
    <span>${values[0]}</span>
  </td>
  <td class="price">$<span>${values[1]}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>
` 
}
const removeButtons = document.getElementsByClassName('btn-remove');
for (let i = 0; i< removeButtons.length; i++) {
removeButtons[i].addEventListener('click', removeProduct);
}
}

// even listener to the button of calculate total prices 
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i< removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
   }
   const createBotton = document.getElementById('create');
   createBotton.addEventListener('click', createProduct);

});
