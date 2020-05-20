// ITERATION 1
const quantity = document.querySelector('.quantity input')
const unitPrice = document.querySelector('.price span')
const subTotal = document.querySelector('.subtotal span')
const totalValue = document.querySelector('#total-value span')
let allProducts = document.querySelectorAll('.product')

function updateSubtotal(product) {
  const priceProd = product.querySelector('.price span').innerText
  // console.log('priceProd: ' + priceProd);
  const quantityProd = product.querySelector('.quantity input').value
  // console.log('quantityProd: ' + quantityProd);
  let subTotalProd = product.querySelector('.subtotal span')
  // console.log('subTotalProd: ' + subTotalProd);
  subTotalProd.innerText = priceProd * quantityProd
  //... your code goes here
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  // ITERATION 2
  allProducts.forEach(function (e) {
    updateSubtotal(e)
  })

  // ITERATION 3
  let totalSum = 0
  allProducts.forEach(function (e) {
    let subTotal = e.querySelector('.subtotal span').innerText
    totalSum += parseInt(subTotal)
  })
  totalValue.innerText = totalSum

}

// ITERATION 4

function removeProduct(event) {

  let target = event.currentTarget


  // target.parentNode.parentNode.outerHTML = ''
  event.path[2].outerHTML = ''
  calculateProduct()

}

function calculateProduct() {
  allProducts = document.querySelectorAll('.product')
  calculateAll()
  allProducts.forEach(function (e) {
    let btnRemove = e.querySelector('.btn-remove')
    btnRemove.addEventListener('click', removeProduct)
  })
  console.log('allProducts: ', allProducts);
}

// ITERATION 5
const createProd = document.getElementById('create')

function createProduct() {
  const filaProd = document.createElement('tr')
  const productName = document.getElementById('product-name')
  const productPrice = document.getElementById('product-price')

  let lastProd = allProducts[allProducts.length - 1]

  filaProd.classList.add('product')
  filaProd.innerHTML =
    `<td class="name">
  <span>${productName.value}</span>
  </td>
  <td class="price">$<span>${productPrice.value}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`

  lastProd.after(filaProd)
  productPrice.value = 0
  productName.value = ''

  calculateProduct()

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  createProd.addEventListener('click', createProduct)


  calculateProduct()
});
