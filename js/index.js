// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  const price=product.querySelector('.price span');
  const quantity=product.querySelector('.quantity input');

  const priceValue=price.innerText;
  const quantityValue=quantity.value;
  const subTotalPriceValue=priceValue*quantityValue;
  const subTotalPrice=product.querySelector('.subtotal span');
  subTotalPrice.innerText=subTotalPriceValue.toFixed(2);

  return +subTotalPriceValue.toFixed(2);

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products=document.querySelectorAll('table#cart tr.product');
  // console.log(products)
  let totalValue=0;
  products.forEach((product)=>totalValue+=updateSubtotal(product));

  // ITERATION 3
  const total=document.querySelector('#total-value span');
  total.innerText=totalValue.toFixed(2);

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  const row=target.parentNode.parentNode;
  const tableBody=document.querySelector('table#cart tbody');
  tableBody.removeChild(row);

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName=document.querySelector('input[placeholder="Product Name"]');
  const productUnitPrice=document.querySelector('input[placeholder="Product Price"]');

  const tableBody=document.querySelector('table#cart tbody');
  const newRow= document.createElement('tr');
  newRow.classList.add("product");
  newRow.innerHTML=`
  <td class="name">
    <span>${productName.value}</span>
  </td>
  <td class="price">$<span>${productUnitPrice.value}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
  tableBody.appendChild(newRow);
  productName.value='';
  productUnitPrice.value='';

  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

  

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(button=>button.addEventListener('click', removeProduct));

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  
});
