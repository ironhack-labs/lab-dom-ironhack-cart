function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerText);
  const units = Number (product.querySelector('.quantity input').value);
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = price*units;
}

function calculateAll() {
  let productList = document.querySelectorAll('.product')
  productList.forEach(product=> {updateSubtotal(product)})
  const finalPrice = document.querySelector('#total-value span')
  let subtotals= document.querySelectorAll('.subtotal span')
  let total=0;
  subtotals.forEach(subtotal=>{total+=Number(subtotal.innerText)})
  finalPrice.innerText = total;
}

// ITERATION 4

function removeProduct(btn) {
  btn.addEventListener('click', event => {
    const target = event.target.parentNode.parentNode;
    target.parentNode.removeChild(target);
    console.log('The target in remove is:', target);
  //... your code goes here
  })}

function handleRemoveProduct(){
  let allbtn = document.querySelectorAll('.btn-remove')
  allbtn.forEach((btn)=>{
      removeProduct(btn);
})}

// ITERATION 5


function createProduct() {
  document.querySelector('#create').addEventListener('click', event =>{
  let newName = document.getElementById('create-name').value
  let newPrice = document.getElementById('create-price').value
  let newProduct = document.createElement('tr')
  newProduct.innerHTML=`<tr class="product">
  <td class="name">
    <span>${newName}</span>
  </td>
  <td class="price">$<span>${newPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`
  document.querySelector('tbody').appendChild(newProduct);
  newProduct.setAttribute('class', 'product')
  removeProduct(newProduct.querySelector('button'))
  
  console.log (newProduct)


})
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  handleRemoveProduct();
  createProduct();

});
