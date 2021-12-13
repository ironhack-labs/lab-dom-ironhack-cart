// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  //Step 1
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  //Step 2
  const valuePrice=price.innerHTML;
  const valueQuantity=quantity.value;
  //Step 3
  const subtotalPrice=valuePrice*valueQuantity;
  //Step 4
  const subtotal = product.querySelector('.subtotal span');
  //Step 5
  subtotal.innerHTML=subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = [...document.getElementsByClassName('product')];
  console.log(products);
  let totalPrice = 0;
  products.forEach((product) => totalPrice += updateSubtotal(product));

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span');
  total.innerHTML=totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentElement.parentElement);
  //... your code goes here
  const parent = document.querySelector('#cart tbody');
  parent.removeChild(target.parentElement.parentElement);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const items = document.querySelectorAll(".create-product td input");
  console.log(items);
  const name = items[0].value;
  const price = items[1].value;
  const trElement = document.createElement("tr");
  trElement.className="product";
  const content = `<td class="name">
  <span>${name}</span>
</td>
<td class="price">$<span>${price}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
  trElement.innerHTML+=content;
  const button = trElement.getElementsByTagName("button")[0];
  button.addEventListener('click',removeProduct);
  const parent = document.querySelector('#cart tbody');
  parent.appendChild(trElement);

  items[0].value="";
  items[1].value=0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  //Iteration 4
  const items = document.getElementsByClassName('btn btn-remove');
  [...items].forEach(item => item.addEventListener('click', removeProduct));

  //Iteration 5
  const create = document.getElementById("create");
  create.addEventListener('click', createProduct);
});
