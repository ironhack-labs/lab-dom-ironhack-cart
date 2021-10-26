// ITERATION 1

function updateSubtotal(product) {
  let quantityDom = product.querySelector('.quantity input');
  console.log(quantityDom);
  let quantity = +quantityDom.value;

  let priceDom = product.querySelector('.price span');
  let price = Number(priceDom.innerText);
  console.log(price);

  let subTotalDom = product.querySelector('.subtotal span');
  // let subTotal = Number(subTotalDom.innerText);
  //console.log(subTotalDom.value);

  return (subTotalDom.innerText = price * quantity);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let allProducts = document.getElementsByClassName('product');
  let total = 0;
  let totalDom = document.querySelector('#total-value span');

  for (let i = 0; i < allProducts.length; i++) {
    let subtotal = updateSubtotal(allProducts[i]);
    total += subtotal;
  }

  console.log(total);

  // ITERATION 3

  totalDom.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  parentElem = target.parentNode;
  console.log(parentElem);
  parentElem.remove();
}

// ITERATION 5

function createProduct() {
  // console.log('Are we getting here?');
  let productName = document.querySelector('#new-productName');
  let productPrice = document.querySelector('#new-productPrice');

  let newProduct = document.createElement('tr');
  newProduct.innerHTML = `<td class="name">
  <span>${productName}</span>
  </td>
  <td class="price">$<span>${productPrice}</span></td>
  <td class="quantity">
  <input type="number" value="1" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`;

  let allProducts = document.getElementsByClassName('product');
  allProducts.push(newProduct);
}

window.addEventListener('load', () => {
  const removeBtns = document.querySelectorAll('.action');
  removeBtns.forEach((elem) => {
    elem.addEventListener('click', removeProduct);
  });

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createNewProduct = document.getElementById('create');
  console.log(createNewProduct);
  createNewProduct.addEventListener('click', createProduct);
});
