// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText
  // console.log(price);
  const quantity = product.querySelector('.quantity input').value;
  // console.log(quantity);

  const subtotal = price * quantity
  // console.log(subtotal);

  product.querySelector('.subtotal span').innerHTML = subtotal
  return subtotal
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
/*   const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product')
  let totalPrice = 0

  allProducts.forEach(price => {
    totalPrice += updateSubtotal(price)
  });

  // ITERATION 3
  document.querySelector('#total-value span').innerText = totalPrice
}


// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;

  const parent = event.target.parentNode.parentNode
  parent.remove(event.target)
  
  calculateAll(target)
}

// ITERATION 5

function createProduct() {
  console.log("test")

  const name = document.querySelector('.new-name').value
  console.log(name)

  const price = document.querySelector('.new-price ').value
  console.log(price)

  const newProductTr = document.createElement("tr")
  newProductTr.classList.add("product")

  const newProductNameTd = document.createElement("td")
  newProductNameTd.classList.add("name")

  const newProductNameSpan = document.createElement("span")
  newProductNameSpan.innerText = name
  newProductNameTd.appendChild(newProductNameSpan)

  newProductTr.appendChild(newProductNameTd)

  const newProductPriceTd = document.createElement("td")
  newProductPriceTd.classList.add("price")

  const newProductPriceSpan = document.createElement("span")
  newProductPriceSpan.innerText = price
  newProductPriceTd.appendChild(newProductPriceSpan)
  newProductTr.appendChild(newProductPriceTd)

  const newProductQuantityTd = document.createElement("td")
  newProductQuantityTd.classList.add("quantity")

  const newProductQuantityInput = document.createElement("input")
  newProductQuantityInput.type = "number"
  newProductQuantityInput.value = 0
  newProductQuantityInput.min = 0
  newProductQuantityInput.placeholder = "Quantity"
  newProductQuantityTd.appendChild(newProductQuantityInput)
  newProductTr.appendChild(newProductQuantityTd)

  const newProductSubtotalTd = document.createElement("td")
  newProductSubtotalTd.classList.add("subtotal")

  const newProductSubtotalSpan = document.createElement("span")
  newProductSubtotalSpan.innerText = 0
  newProductSubtotalTd.appendChild(newProductSubtotalSpan)
  newProductTr.appendChild(newProductSubtotalTd)

  const newActionTd = document.createElement("td")
  newActionTd.classList.add("action")

  const newActionButton = document.createElement("button")
  newActionButton.classList.add("btn-remove")
  newActionButton.classList.add("btn")

  newActionButton.innerText = "Remove"
  newActionTd.appendChild(newActionButton)
  newProductTr.appendChild(newActionTd)

  document.querySelector('tbody').appendChild(newProductTr)

  newActionButton.addEventListener("click", removeProduct)
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(button => {
    button.addEventListener('click', removeProduct);
  })

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
