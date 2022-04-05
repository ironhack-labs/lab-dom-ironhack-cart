// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const subTotal = product.querySelector('.subtotal span')

  const priceNumber = parseFloat(price.innerText)
  const quantityNumber = parseFloat(quantity.value)

  const subTotalNumber = priceNumber * quantityNumber

  subTotal.innerText = subTotalNumber

  return subTotalNumber
}

function calculateAll() {
  allProducts = document.querySelectorAll('.product')

  let totalAmount = 0
  allProducts.forEach((product) => {
    totalAmount += updateSubtotal(product)
  })

  const totalElem = document.querySelector("#total-value span")
  totalElem.innerHTML = totalAmount
  return totalElem
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //target: button.btn.btn-remove
  console.log(event)
  target.parentNode.parentNode.remove()
  //target.parentNode = <td class="action"></td>
  //target.parentNode.parentNode = <tr class="product"></tr>
}

// ITERATION 5
function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove")
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct)
  }

  //... your code goes here
});
