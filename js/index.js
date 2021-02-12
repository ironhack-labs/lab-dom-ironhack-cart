function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = Number(price.innerText);
  const quantityValue = Number(quantity.value);

  const productSub = priceValue * quantityValue;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = productSub;

  return productSub;
}

function calculateAll() {
  const products = [...document.querySelectorAll('.product')];
  let subtotals = 0;
  products.forEach(product => {
    subtotals += updateSubtotal(product);
  });

  let totalNode = document.querySelector('#total-value span');
  totalNode.innerText = subtotals;
}

//pretending the user added at least 1 quantity of each product
//so subtotal and total price is already shown
calculateAll()

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target);
  const productNode = target.parentNode.parentNode;
  productNode.remove();
}

function createProduct() {
  const productNameNode = document.querySelector('.create-product #product-name');
  const productPriceNode = document.querySelector('.create-product #product-price');

  const productName = productNameNode.value;
  const productPrice = Number(productPriceNode.value);

  if(productName !== '' && productPrice !== 0) {
    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    tr.classList.add('product');
    tr.innerHTML = `<td class="name"><span>${productName}</span></td>
    <td class="price">$<span>${productPrice}.00</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>`;
    tbody.appendChild(tr);

    const removeBtn = document.querySelector('.product:last-child .btn-remove');
    removeBtn.addEventListener('click', removeProduct);
  } else {
    alert('You need a name and a price to add a new product :)')
  }

  productNameNode.value = '';
  productPriceNode.value = 0;
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveBtn = document.querySelectorAll('.btn-remove');
  allRemoveBtn.forEach(button => {
    button.addEventListener('click', removeProduct)
  })
  
  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct)
});
