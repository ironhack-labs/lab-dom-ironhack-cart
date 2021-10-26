// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span")
  let quantity = product.querySelector(".quantity input")
  let priceQuantity = Number(price.innerText) * Number(quantity.value)
  let subtotal = product.querySelector(".subtotal span")
  subtotal.innerText = priceQuantity
  return Number(subtotal.innerText)

}

function calculateAll() {
  const allTheProducts = document.getElementsByClassName('product')
  let totalPrice = document.querySelector("#total-value span")
  totalPrice.innerText = ""
  for (let i = 0; i < allTheProducts.length; i++){
    let subtotal = updateSubtotal(allTheProducts[i])
    totalPrice.innerText = Number(totalPrice.innerText) + subtotal
  }
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  target.remove() // removes the button 
}

// ITERATION 5

function createProduct() {

  let targetName = document.querySelector(".create-product")
  console.log(targetName)
  let name = targetName.querySelector("input[type=text]")
  let price = targetName.querySelector("input[type=number]")
  console.log(name.value)
  console.log(price.value)
  let table = document.querySelector("#cart tbody .product .name")
  let tr = document.createElement("tr")
  tr.innerText = name.value
  table.appendChild(tr)
  //create new elemnt 
  
  // create the product --> use value for name and price 
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removesProductsBtn = document.getElementsByClassName('btn btn-remove');
  for (i=0; i < removesProductsBtn.length; i++){
    removesProductsBtn[i].addEventListener('click', removeProduct);

  }
  const createNewProduct = document.getElementsByClassName('create-product');
  for (i=0; i < createNewProduct.length; i++){
    createNewProduct[i].addEventListener('click', createProduct);
  

  }
  
  //... your code goes here
});
