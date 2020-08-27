// ITERATION 1

function updateSubtotal(product) {
  const priceTd = product.querySelector('.price span');
  const quantityTd = product.querySelector('.quantity input');
  
  const price = parseFloat(priceTd.children[0].innerText);
  const quantity = quantityTd.firstElementChild.valueAsNumber;
  const subtotal = price * quantity;

  const subtTotalTd = document.querySelector('.subtotal');

  subtTotalTd.children[0].innerText = subtotal.toFixed(2);

}


function calculateAll() {

  const allProducts = document.getElementsByClassName('product');

  let total = 0;

  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }

  const totalSpan = document.getElementById('total-value').firstElementChild;

  totalSpan.innerText = total.toFixed(2);
 
}

function removeProduct(event) {
  const target = event.currentTarget;

  const tr = target.parentNode.parentNode;
  const tbody = tr.parentElement.removeChild(tr);

  calculateAll();

}

function createProduct(event) {
  const createProd = document.querySelector('.create-product');
  let newProIn = createProd.querySelector('input');
  let newValue = newProIn.value;
  let newProPriceIn = createProd.querySelector("input[type='number']");
  let newProdPriceVal = Number(newProPriceIn.valueAsNumber).toFixed(2);

  const newTb = document.createElement('tr');
  newTb.className = 'product';
  newTb.innerHTML = `<td class="name">
  <span>${newValue}</span>
</td>
<td class="price">$<span>${newProdPriceVal}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</>
</td>
`;
}

const parent = document.createElement.querySelector('#cart tbody');

parent.appendChild(newTb);

const removeBtn = newTb.querySelector('.btn-remove');
removeBtn.addEventListener('click', removeProduct);

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const allProducts = document.getElementsByClassName('product');

  for(let i = 0; i < allProducts.length; i++){
    selectRemoveBtn(product)
  }

});
