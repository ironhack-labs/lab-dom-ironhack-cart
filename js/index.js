
const $ = function( ele ) {
  return document.querySelector( ele );
};
let errorCheck = false;

const updateSubtotal = (product) => {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const sub = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = sub;
  return sub;
};

const calculateAll= () => {
  let total = 0;
  document.querySelectorAll('.product').forEach(prod =>
    total += updateSubtotal(prod)
  );
  $('#total-value span').innerText = total.toFixed(2);
};

const removeProduct = (ele) => {
  const elToRem = ele.currentTarget;
  const prodRow = elToRem.parentNode.parentNode;
  prodRow.parentNode.removeChild(prodRow);
};

const toggleError = () => {
  $('#error-holder').classList.toggle('hidden');
  errorCheck = false;
};

// ITERATION 5
function createProduct() {
  if (errorCheck) {
    toggleError();
  }

  let copy;
  let prodName = $('#product-name').value;
  let prodPrice = $('#product-price').value;
  let rowHold = $('#row-temp tr');

  if (prodName==='' || prodPrice===0) {
    let err;
    err = $('#error-msg').cloneNode(true);
    //$('#error-holder').append(err);
    toggleError();
    errorCheck = true;
    return false
  }

  rowHold.querySelector('.name span').innerHTML = prodName;
  rowHold.querySelector('.price span').innerHTML = prodPrice;

  copy = rowHold.cloneNode(true);

  $('#product-contain').appendChild(copy);

  document.querySelectorAll('.btn-remove').forEach(e => {
    e.addEventListener('click', removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelectorAll('.btn-remove').forEach(e => {
    e.addEventListener('click', removeProduct);
    $('#create').addEventListener('click', createProduct)
  });
});
