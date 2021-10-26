// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = Number(price) * quantity
  
  product.querySelector('.subtotal span').textContent = subtotalPrice
  //console.log('subtotalPrice', subtotalPrice)
  return subtotalPrice
}

function calculateAll() {

  const listProducts = document.querySelectorAll('.product')
  listProducts.forEach( (product) => updateSubtotal(product) )
  
  // to be able to use .reduce, we convert it into an Array
  const listProductsArray = Array.from(listProducts)
  const totalPrice = listProductsArray.reduce( (acc, elem) => acc += updateSubtotal(elem), 0)

  // add the total value to the DOM element
  const totalValueSpan = document.querySelector('#total-value span');
  totalValueSpan.textContent = totalPrice;
}

// ITERATION 4

const removeButtons = document.querySelectorAll('.btn-remove')
removeButtons.forEach( (but) => but.addEventListener('click', removeProduct) )

function removeProduct(event) {
  
  const target = event.currentTarget;
  const productParent = target.parentNode.parentNode

  console.log(target)
  console.log(productParent)

  productParent.remove()
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector('input#product-name').value
  const productPrice = document.querySelector('input#product-price').value

  console.log(productName)
  console.log(productPrice)

  // let's create a new product row!
  const productTr = document.createElement('tr')
  productTr.classList.add("product")

  // td for product name
  const tdName = document.createElement('td')
  tdName.classList.add("name")

  const spanNameProduct = document.createElement('span')
  spanNameProduct.textContent = productName
  tdName.appendChild(spanNameProduct)

  // td for price product
  const tdPrice = document.createElement('td')
  tdPrice.classList.add("price")
  tdPrice.textContent = '$'

  const spanPriceProduct = document.createElement('span')
  spanPriceProduct.textContent = `${productPrice}.00`
  tdPrice.appendChild(spanPriceProduct)

  // td for product quantity
  const tdQuantity = document.createElement('td')
  const inputQuantity = document.createElement("input")
  tdQuantity.classList.add("quantity");
  inputQuantity.setAttribute("type", "number")
  inputQuantity.setAttribute("value", "0");
  inputQuantity.setAttribute("placeholder", "Quantity")
  tdQuantity.appendChild(inputQuantity)

  // td for subtotal
  const tdSubtotal = document.createElement('td')
  tdSubtotal.classList.add("subtotal");
  tdSubtotal.textContent = '$'
  
  const spanSubtotal = document.createElement('span')
  spanSubtotal.textContent = '0'
  tdSubtotal.appendChild(spanSubtotal)
  

  // td for button remove
  const tdAction = document.createElement('td')
  tdAction.classList.add("action");

  const buttonRemove = document.createElement('button')
  buttonRemove.classList.add("btn", "btn-remove")
  buttonRemove.textContent = "Remove"
  tdAction.appendChild(buttonRemove)

  // Let's append all the TD's to ProductTr
  productTr.appendChild(tdName)
  productTr.appendChild(tdPrice)
  productTr.appendChild(tdQuantity)
  productTr.appendChild(tdSubtotal)
  productTr.appendChild(tdAction)

  const tableProducts = document.querySelector('#cart tbody')
  tableProducts.appendChild(productTr)

  // We need to add the event listener to the product!
  buttonRemove.addEventListener('click', removeProduct)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);

});
