// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('#inputQuantity').value;
  let subtotal = price * quantity;
  let subElm = product.querySelector('.subtotal span');
  subElm.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let totalTopay = 0;
  let productlistElms = [...document.querySelectorAll('.product')];
  productlistElms.forEach((productTr) => {
    totalTopay += updateSubtotal(productTr);
  });
  document.querySelector('#total-value span').innerHTML = totalTopay;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let parentTr = target.parentNode.parentNode;

  console.log(parentTr);
  document.querySelector('#cart tbody').removeChild(parentTr);
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const target = event.currentTarget.parentNode.parentNode;

  let productNameTag = document.getElementById('nameInput');
  let productPriceTag = document.getElementById('priceInput');
  console.log('name tag: ', productNameTag);
  console.log('price tag', productPriceTag);

  let emptyTr = document.querySelector('.product').cloneNode(true);
  emptyTr.getElementsByTagName(
    'td'
  )[0].innerHTML = `<span>${productNameTag.value}</span>`;
  emptyTr.getElementsByTagName('td')[1].innerHTML = `$ <span>${parseFloat(
    productPriceTag.value
  ).toFixed(2)}</span>`;
  emptyTr.getElementsByTagName('td')[2].innerHTML =
    '<input id="inputQuantity" type="number" value="0" min="0" placeholder="Quantity" />';
  emptyTr.getElementsByTagName('td')[3].innerHTML = '$<span>0</span>';
  document
    .querySelector('#cart')
    .getElementsByTagName('tbody')[0]
    .appendChild(emptyTr);
  addlisteners();
  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  addlisteners();
  let creatBtn = document.querySelector('#create');
  creatBtn.addEventListener('click', createProduct);
});
let addlisteners = (_) => {
  let removeButtons = [...document.querySelectorAll('.btn-remove')];
  removeButtons.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });
};
