
function updateSubtotal(product) {

  const price     = product.querySelector('.price span');
  const quantity  = product.querySelector('.quantity input');
  const subtotal  = product.querySelector('.subtotal span');

  const total = price.textContent * quantity.value;

  subtotal.textContent = total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  products.forEach(updateSubtotal);
  const total= document.querySelector('#total-value span');
  const subTotales= document.querySelectorAll('.subtotal span');

  let sum =0;

  subTotales.forEach((subtotal)=>{

    sum += Number(subtotal.textContent);

  });

  total.textContent=sum;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.closest('.product');
  
  productRow.remove();

  calculateAll();

  console.log('The target in remove is:', target);

}

// ITERATION 5

function createProduct() {

  const inputs = document.querySelectorAll('.create-product input');
  const nameInput= inputs[0];
  const priceInput=inputs[1];
  const nameValue= nameInput.value.trim();
  const priceValue= Number(priceInput.value).toFixed(2);

  if (!nameValue||priceValue<0) return;

  const productRow = document.createElement('tr');

  productRow.classList.add('product');

  productRow.innerHTML=`
  <td class="name"><span>${nameValue}</span></td>
  <td class="price">$<span>${priceValue}</span></td>
  <td class="quantity"><input type="number" value="0" placeholder="Quantity" /></td>
  <td class="subtotal"><span>0</span></td>
  <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;

  const removeBtn= productRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  const tbody= document.querySelector('#cart tbody');

  tbody.appendChild(productRow);

  nameInput.value= '';
  priceInput.value= 0;

  calculateAll();

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

    const removeBtns= document.querySelectorAll('.btn-remove');

    removeBtns.forEach((btn)=> {

      btn.addEventListener('click', removeProduct);

    });

  const createBtn=document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

});
