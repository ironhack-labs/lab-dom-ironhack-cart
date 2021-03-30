// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  

const price = product.querySelector('.price span');
const quantity = product.querySelector('.quantity input')

const priceValue = price.innerText

subtotal = priceValue * quantity.value

console.log(priceValue)
console.log(subtotal)


const finalPrice = product.querySelector('.subtotal span')
finalPrice.innerText = subtotal.toFixed(2)

}


function calculateAll() {
 
  // ITERATION 2


  const products = document.querySelectorAll('.product').forEach(product => {
    updateSubtotal (product);

  });


  // ITERATION 3
  const eachTotal = document.querySelectorAll('.subtotal span');
  let allTotal = 0;

  for (let i = 0; i < eachTotal.length; i++) {
    allTotal += parseInt(eachTotal[i].innerHTML);
  }
  document.querySelector('#total-value span').innerHTML = allTotal;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productToRemove = event.currentTarget.parentNode.parentNode
  // document.productToRemove('.cart').removeChild(productToRemove)
  productToRemove.remove()
}
// ITERATION 5
function createProduct() {
  //... your code goes here
  let newProductName = document.querySelector('.create-product .name').innerContent;
  console.log(newProductName)
  let newProductPrice = document.querySelector('.create-product .price').value;
  console.log(newProductPrice)

  const referenceProduct = document.querySelector('.product');
  let newProduct = referenceProduct.cloneNode(true)

  newProduct.querySelector('.product .name').innerText = newProductName
  newProduct.querySelector('.product .price').value= newProductPrice

  document.querySelector('#cart tbody').appendChild(newProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  calculatePricesBtn.addEventListener('click', calculateAll); 

  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(eachRemoveBtn => {
  eachRemoveBtn.addEventListener('click', removeProduct);
})

const createProductBtn = document.querySelector('#create');
createProductBtn.addEventListener('click', createProduct);

});
