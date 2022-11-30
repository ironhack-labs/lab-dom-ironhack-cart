

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalElement = product.querySelector('.subtotal span');
  const subtotal = price * quantity;
  subtotalElement.innerHTML = subtotal;
  return subtotal;
}



function calculateAll() {
  // const products = document.querySelectorAll('.product');
  const productsHTML = document.querySelectorAll('.product');
  const products = [...productsHTML]
  let total = 0;
  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  const totalEl = document.querySelector('#total-value span');
  totalEl.innerHTML = total;
  return total;
}



function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;

  console.log(product.parentNode)

  product.parentNode.removeChild(product);

}



function createProduct() {
  const product = document.querySelector('.create-product');

  const nameEl = product.querySelector('input[type="text"]')
  let priceEl = product.querySelector('input[type="number"]')
  const name = nameEl.value
  const price = priceEl.value
  const tbody = document.querySelector('tbody')


  if (name === "") {

    alert("Add product name")
    throw ("invalid name")
  }
  if (price <= 0) {
    alert("Price must be bigger than 0")
    throw ("invalid price")
  }

  const newProduct = document.createElement('tr');
  newProduct.classList.add('product');


  newProduct.innerHTML = `

    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>

    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `

  tbody.appendChild(newProduct);
  nameEl.value = ""
  priceEl.value = 0

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


});


window.addEventListener('load', () => {
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });


});


window.addEventListener('load', () => {
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});