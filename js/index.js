// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subPrice = price * quantity
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = subPrice
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  const listOfProducts = [...allProducts] 
  listOfProducts.forEach((singleProduct) => updateSubtotal(singleProduct));

  // ITERATION 3
  const listSubtotal = listOfProducts.map((product) => Number(product.querySelector('.subtotal span').innerText))
  const total = listSubtotal.reduce((acc,value) => acc + value)
  const totalDom = document.getElementById('total-value');
  totalDom.innerHTML = `Total: $<span>${total}</span>`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parent = target.parentNode.parentNode
  console.log(parent)
  parent.remove()
}

// ITERATION 5

function createProduct() {
  const productName = document.getElementById('input-name').value;
  const productPrice = document.getElementById('input-price').value;
  const newProduct = `
  <tr class="product">
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`
  let newTR = document.createElement('tr');
  newTR.innerHTML = newProduct
  const parent = document.getElementById('table-body');
  if(productName !==undefined && productPrice > 0) {
    parent.appendChild(newTR);
  }
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const calculateRemoveBtn = document.getElementsByClassName('btn-remove');
  const listRemoveBtn = [...calculateRemoveBtn];
  listRemoveBtn.forEach(btn => btn.addEventListener('click', removeProduct))

  const calculateCreateBtn = document.getElementById('create');
  calculateCreateBtn.addEventListener('click', createProduct);
});

