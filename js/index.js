// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  const subtotalProduct = price * quantity

  const subtotal = product.querySelector(' .subtotal span')

  subtotal.innerHTML = subtotalProduct

  return subtotalProduct


}


function calculateAll() {


  // ITERATION 2
  const price = document.getElementsByClassName('priceNum')
  const quantity = document.querySelectorAll('.quantityNum')
  const subtotal = document.querySelectorAll('.subtotalNum')
  let total = 0


  const products = document.querySelectorAll('.product')


  for (let i = 0; i < products.length; i++) {
    console.log(i)
    let itQuantity = quantity[i].value
    let itPrice = price[i].innerHTML

    const subtotalProduct = itPrice * itQuantity

    subtotal[i].innerHTML = subtotalProduct

    total += subtotalProduct
    console.log(subtotalProduct)
  }



  // ITERATION 3
  document.querySelector('#total').innerHTML = total
  return total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  let productLine = document.querySelectorAll(".product")


  // document.querySelector('.product-chart').removeChild(productLine[0])

  document.querySelectorAll(".product").forEach(eachLine => {
    eachLine.onclick = function () {
      this.remove()
    }
  })


}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.querySelector('#calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  //const removeButton = document.querySelector('.btn-remove')

  //removeButton.addEventListener('click', removeProduct)

  document.querySelectorAll('.btn-remove').forEach(eachline => {
    eachline.onclick = function (e) {
      removeProduct(e)
    }
  })
});
