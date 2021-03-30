// ITERATION 1


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let total = price * quantity;
  product.querySelector('.subtotal').innerHTML = total;
  
  return total
}

function calculateAll() {
  const productList = document.querySelectorAll('.product');
  let total = 0;
  productList.forEach(product=> total += updateSubtotal(product));
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parent = target.parentNode.parentNode;
  parent.parentNode.removeChild(parent)
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelectorAll('.create-product input');
  const name = newProduct[0].value;
  const price = newProduct[1].value;

  let productRow = document.createElement('tr')
  productRow.classList.add('product');
  productRow.innerHTML = newProductRowTemplate(name, Number.parseFloat(price).toFixed(2));
  productRow.querySelector('.btn-remove').addEventListener('click', removeProduct);
  document.querySelector('#cart tbody').appendChild(productRow);

  newProduct[0].value= '';
  newProduct[1].value = 0;
}


const newProductRowTemplate = (name, price) => {
return `<tr class="product">
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
</tr>
`
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(button => button.addEventListener('click', removeProduct));

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
