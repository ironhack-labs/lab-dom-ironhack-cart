// ITERATION 1
function updateSubtotal(product) {
  //create two variables price and quantity
  //get DOM elements that hold price and quantity
  let priceStr = product.querySelector('.price span').innerText
  let price = Number(priceStr)
  let quantityStr = product.querySelector('.quantity input').value;
  let quantity = Number(quantityStr)
  //make subtotal and link it to subtotal class span tag in the HTML
  let subTotal = price * quantity
  product.querySelector('.subtotal span').innerHTML = subTotal
  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //to call the function updateSubtotal for each product with the calss product
  let productList = document.getElementsByClassName('product')
  let sum = 0
  for (i = 0; i < productList.length; i++) {
    sum += updateSubtotal(productList[i])

  }
  //ith every tr.product DOM node in the table#cart
  document.querySelector('#total-value span').innerHTML = sum
}


function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove()
}

// ITERATION 5
function createProduct() {
  let newProduct = document.querySelector('.create-product')
  let newProName = newProduct.querySelector('#newProName').value;
  let newProPrice = newProduct.querySelector('#newProPrice').value;
  //create new product using inner HTM
  let newItem = document.createElement('tr')
  newItem.classList.add('product')
  newItem.innerHTML = `<td class="name"><span>${newProName}</span></td>
<td class="price">$<span>${newProPrice}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" />
</td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`


  //append Child to tbody
  const htmlLIst = document.querySelector('tbody')
  htmlLIst.appendChild(newItem)
  //add event listener for remove button
  const revomeBtnList = document.querySelectorAll('.btn-remove')
  revomeBtnList[revomeBtnList.length - 1].addEventListener('click', removeProduct)

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll)

  //remove button
  const removeBtns = document.getElementsByClassName('btn-remove');
  for (i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct)
  }
  //create product
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct)
})
