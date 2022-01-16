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


  document.querySelectorAll(".product").forEach(eachLine => {
    eachLine.onclick = function () {
      this.remove()
    }
  })


}

// ITERATION 5

function createProduct() {
  //... your code goes here

 
  const newName = document.querySelector('#newItem').value
  const newPrice = document.querySelector('#newPrice').value
  console.log(newPrice)
  

  console.log(newName)

  const newProduct = document.createElement('tr')
  newProduct.setAttribute('class', 'product')
  newProduct.innerHTML = `<td class="name"> <span>${newName}</span ></td ><td class="price">$<span class="priceNum">${newPrice}</span></td><td class="quantity">    <input class ='quantityNum'type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span class='subtotalNum'>0</span></td><td class="action">       <button class="btn btn-remove btn3">Remove</button>          </td>`

  document.querySelector('.product-chart').appendChild(newProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.querySelector('#calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here


  
  const createBtn = document.querySelector('#create')
  createBtn.addEventListener('click', createProduct)

  document.querySelectorAll('.btn-remove').forEach(eachline => {
    eachline.onclick = function (e) {
      removeProduct(e)
    }
  })

});
