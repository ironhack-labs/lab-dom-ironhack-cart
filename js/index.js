// ITERATION 1

function updateSubtotal(product) {
  let price =  product.querySelector ('.price span');
  let quantity = product.querySelector (`.quantity input`);
  console.log(price, quantity);

  let priceValeu = parseFloat(price.innerText);
  let quantityValue = quantity.valueAsNumber;
  let result = priceValeu*quantityValue;
  console.log(result)

  let subtotal = product.querySelector ('.subtotal span');
  subtotal.innerText = result;

  //... your code goes here
}

function calculateAll(){
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  console.log(products);

  let total = 0;

  for (const product of products) {
    total += updateSubtotal(product);
  }

  document.querySelector('#total-value span').innerText = total;
}
  // ITERATION 3
 
// ITERATION 4

function removeProduct(event) {
  const target = event.Target;
  console.log('The target in remove is:', target);

  const row = target.parentNode.parentNode;

//const parent = row.parentNode; outra opção para resolver.
// parent.removeChild(row);

 row.remove();
 calculateAll();

}

// ITERATION 5

function createProduct() {
 const createRow = document.querySel  = querySelectorAll('.create-product');
 const newProductName = createRow.querySelector('imput').value;
 const newProductPrice = createRow.querySelector("imput[type='number']");

 const newRow = document.createElement('tr');
 newRow.className = 'product';
 newRow.innerHTML = '
 td class="name">
 <span>${newProductName}</span>
</td>
<td class="price">$<span>${nemwProductPrice}</span></td>
<td class="quantity">
 <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
 <button class="btn btn-remove">Remove</button>
</td>
';

newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

const body = document.querySelector('#cart tbody');
body.appendChild(nemRow);

nameInput.value = '';
priceinput.value = 0;


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
const removeBtns = document.querySelectorAll('.btn-remove');
[...removeBtns].forEach((button)) => {
  button.addEventListener(click, removeProduct);
});
const createBtn = document.getElementById('create');
createBtn.addEventListener('click', createProduct);

});
