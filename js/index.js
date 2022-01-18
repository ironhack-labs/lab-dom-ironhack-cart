// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML

  const quantity = product.querySelector('.quantity input').value

  const subtotalCalculated = price * quantity;

  const subTotalElement = product.querySelector('.subtotal span')

  subTotalElement.innerHTML = subtotalCalculated;

  return subtotalCalculated

}

function calculateAll() {

  // ITERATION 2

  const products = document.querySelectorAll('.product')

  let totalPrice = 0

  products.forEach((singleProduct)=>{

    totalPrice += updateSubtotal(singleProduct)
  })

  // ITERATION 3

  const totalPriceElement = document.querySelector('#total-value span')

  totalPriceElement.innerHTML = totalPrice;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const td = target.parentNode

  const tr = td.parentNode

  const tbody = tr.parentNode

  tbody.removeChild(tr)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  
  const nameOfProduct = document.querySelector('.new-product-name input').value

  const priceOfProduct = document.querySelector('.new-product-price input').value

  const tableBody = document.querySelector('#cart tbody')

  const newProductRow = tableBody.insertRow()

  newProductRow.classList.add("product")

  const nameCell = newProductRow.insertCell()

  nameCell.classList.add("name")

  nameCell.innerHTML = `<span>${nameOfProduct}</span>` 

  const priceCell = newProductRow.insertCell()

  priceCell.classList.add("price")

  priceCell.innerHTML = `<span>${priceOfProduct}</span>`

  const quantityCell = newProductRow.insertCell()

  quantityCell.classList.add("quantity")

  quantityCell.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`

  const subtotalCell = newProductRow.insertCell()

  subtotalCell.classList.add("subtotal")

  subtotalCell.innerHTML = `$<span>0</span>`

  const removeBtnCell = newProductRow.insertCell()

  removeBtnCell.classList.add("action")

  removeBtnCell.innerHTML = `<button class="btn btn-remove">Remove</button>`

  document.querySelector('.new-product-name input').value = ""
  
  document.querySelector('.new-product-price input').value = ""

  removeNewProducts()
}

function removeNewProducts(){ 
  const removeBtnsList = document.querySelectorAll('.btn-remove')

  removeBtnsList.forEach(removeBtn =>{
  removeBtn.addEventListener('click',removeProduct);
})
}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate')

  calculatePricesBtn.addEventListener('click', calculateAll)

  removeNewProducts()

  const createProductBtn = document.querySelector('#create')

  createProductBtn.addEventListener('click', createProduct)
});
