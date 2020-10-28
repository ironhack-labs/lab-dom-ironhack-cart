// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input.value');
  const subTotal = Number(price.innerHTML) * Number(quantity.innerHTML);
  const subTotalDisplay = product.querySelector('.subtotal span')
  subTotalDisplay.innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  //ITERATION 1 TEST
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  const productsArr = [...products];
  productsArr.forEach(item => {updateSubtotal(item)});

  // ITERATION 3
  const totalValue = document.querySelector('#total.value span');
  const allSubtotals = document.getElementsByClassName('subtotal');
  const allSubtotalsArr = [...allSubtotals];
  const amount = allSubtotalsArr.reduce((acc, item) => {
    return acc += item;
  }, 0)
  
  totalValue.innerHTML = amount;


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parent = (.btn-remove.parentnode).parentNode
}

// ITERATION 5

const createButton = document.getElementById('create');
createButton.addEventListener(click, createProduct)




function createProduct() {
const toCreate = document.getElementsByClassName('create-product');
const toCreateRow = [...toCreate][0];
const inputs = toCreateRow.getElementsByTagName('input.value');
const inputsArr = [...inputs];
const toCreateNameValue = inputsArr[0].innerHTML;
const toCreateQuantityValue = inputsArr[1].innerHTML;

const tableBody = document.querySelector('tbody')


}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll('.btn-remove')
  const removeButtonsArr = [...removeButtons]
  removeButtonsArr.forEach(element => {
    element.addEventListener('click', removeProduct());
  })
});
