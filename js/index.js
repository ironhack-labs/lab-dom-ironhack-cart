// ITERATION 1

function updateSubtotal(product) {
const price = product.querySelector('.price span')
const quantity =product.querySelector('.quantity input')
const priceValue= price.innerText
const quantityValue= quantity.value
console.log((priceValue));
console.log((quantityValue));
const subResult = priceValue*quantityValue
console.log(subResult)
const subTotal= product.querySelector('.subtotal span')
subTotal.innerText = subResult;
return subResult
}

function calculateAll() {
let sum=0
const products = document.getElementsByClassName('product')
console.log(products)
copyProducts= [...products]
copyProducts.forEach(element => {
  sum += updateSubtotal(element)
  
});
const totalValue= document.querySelector('#total-value span');
totalValue.innerText= sum
return sum

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let oldChild = target.parentElement.parentElement.parentElement.removeChild(target.parentElement.parentElement)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector('.create-product:first-child input')
  const price =document.querySelector('.create-product td:nth-child(2) input')
  console.log(name, price );
  let nameValue= name.value
  let priceValue= price.value
  let tbody=document.getElementById('body')
  console.log(typeof tbody)
  tbody.innerHTML+=(`<tr class="product">
  <td class="name">
    <span>${nameValue}</span>
  </td>
  <td class="price">$<span>${priceValue}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  </tr>`)
  listenRemoveButtons()
  name.value=''
  price.value=''
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  listenRemoveButtons()
  const createProductBtn = document.getElementById('create')
  createProductBtn.addEventListener('click', createProduct);

});


function listenRemoveButtons(){
  let removeBtns = document.getElementsByClassName('btn-remove')
  copyRemoveBtns=[...removeBtns]
  copyRemoveBtns.forEach((removeBtn) =>{
  removeBtn.addEventListener("click",removeProduct)
  })}