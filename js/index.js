// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = +price * +quantity;
  const subTotalHTML = product.querySelector('.subtotal span');
  subTotalHTML.innerHTML = subTotal;
  // console.log(price);
  // console.log(quantity);
  // console.log(subTotal);
  // console.log(subTotalHTML);
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  // console.log(products[0]);
  // console.log(products[1]);
  let totalPrice = 0;
  products.forEach(element => {
    totalPrice += updateSubtotal(element);
  });
  // updateSubtotal(singleProduct);

  // ITERATION 3
  //... your code goes here
  const totalHTML = document.querySelector('#total-value span');
  // console.log(totalHTML);
  totalHTML.innerHTML = totalPrice;
  // console.log(totalPrice);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here
  const productHTML = target.parentNode.parentNode;
  // console.log(productHTML);
  let allProductsHTML = productHTML.parentNode;
  // console.log(allProductsHTML);
  allProductsHTML = allProductsHTML.removeChild(productHTML);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // console.log('Create has been clicked');
  const prdName = document.querySelector('.newText input').value;
  console.log(prdName);
  const prdPrice = document.querySelector('.newPrice input').value;
  console.log(prdPrice);
  let allProductsHTML = document.querySelector('tbody');
  console.log(allProductsHTML);
  const newPrdHTML = `<tr class="product">
<td class="name">
  <span>${prdName}</span>
</td>
<td class="price">$<span>${prdPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
</tr>`;
  allProductsHTML.innerHTML += newPrdHTML;

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(element => {
    element.addEventListener('click', removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn-remove');
  // console.log(removeBtn);
  removeBtn.forEach(element => {
    // console.log(element);
    element.addEventListener('click', removeProduct);
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
