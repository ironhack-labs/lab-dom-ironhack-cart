// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const quantityPrice = price * quantity;
  product.querySelector('.subtotal span').textContent = quantityPrice;

  return quantityPrice;
}

function calculateAll() {
  let total = 0;
  Array.from(document.getElementsByClassName("product")).forEach(
    function(element, index, array) {
      total = total + updateSubtotal(element);
    }
  );

  document.querySelector('#total-value span').textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.closest('tr').remove();
  
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let itemName = document.getElementsByClassName("create-product")[0].querySelector('input[type="text"]').value;
  let itemPrice = document.getElementsByClassName("create-product")[0].querySelector('input[type="number"]').value;
  if (itemName === 'undefined' || itemName === '' || itemPrice === 'undefined' || itemPrice === '0'){
    alert("El nuevo producto debe tener valores válidos");
    return false;  
  }
  var newRow = '<tr class="product"><td class="name"> \
                  <span>' + itemName + '</span> \
                </td> \
                <td class="price">$<span>' + itemPrice + '</span></td> \
                <td class="quantity"> \
                  <input type="number" value="0" min="0" placeholder="Quantity" /> \
                </td> \
                <td class="subtotal">$<span>0</span></td> \
                <td class="action"> \
                  <button class="btn btn-remove">Remove</button> \
                </td> \
                </tr>';

  const tbody = document.getElementsByTagName("tbody")[0];
  tbody.insertAdjacentHTML('beforeend', newRow);
  document.getElementsByClassName("create-product")[0].querySelector('input[type="text"]').value = '';
  document.getElementsByClassName("create-product")[0].querySelector('input[type="number"]').value = 0;
  setRemoveListeners();
}

function setRemoveListeners(){
  Array.from(document.getElementsByClassName("btn-remove")).forEach(
    function(element, index, array) {
      element.addEventListener('click', removeProduct, false)
    }
  );
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
