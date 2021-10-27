function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const qty = product.querySelector('.quantity input').value;
  product.querySelector('.subtotal span').innerHTML = price * qty;
  console.log(document.getElementsByTagName('tbody')[0].innerHTML);

  return price * qty;
}

function calculateAll() {
  let total = 0;
  const allProducts = document.querySelectorAll('.product');
  for (i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }
  document.querySelector('#total-value span').innerHTML = total;
}

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.parentNode.removeChild(
    target.parentNode.parentNode
  );
}

function createProduct() {
  const productName = document.querySelector('.newProduct').value;
  let productPrice = document.querySelector('.newPrice').value;

  productPrice = Number(productPrice).toFixed(2);

  document.getElementsByTagName('tbody')[0].innerHTML +=
    '<tr class="product"><td class="name">  <span>' +
    productName +
    '</span></td><td class="price">$<span>' +
    String(productPrice) +
    '</span></td><td class="quantity">  <input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action">  <button class="btn btn-remove">Remove</button></td></tr>';

  document.querySelector('.newProduct').value = '';
  document.querySelector('.newPrice').value = 0;

  checkItems();
}

function checkItems() {
  const removeBtn = document.querySelectorAll('.btn-remove');

  removeBtn.forEach((element) => {
    element.addEventListener('click', removeProduct);

    const createBtn = document.getElementById('create');
    createBtn.addEventListener('click', createProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  checkItems();
});
