// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  var quantity = product.querySelector('.quantity input').value;
  var totalPrice = Number(price) * Number(quantity)
  var subTotal = product.querySelector('.subtotal span'); 
  if(quantity++){
    subTotal.innerHTML = `${totalPrice}`
  }
  return totalPrice
  }

  function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    const singleProducts = document.querySelectorAll('.product');
    var totalValue = document.querySelector('#total-value span');
    var howMuch = 0
    singleProducts.forEach(function(product){
      howMuch += Number(updateSubtotal(product))
      
    })
    totalValue.innerHTML = `${howMuch}`
  }


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  var firstParent = target.parentNode.parentNode
  var parent = firstParent.parentNode
  parent.removeChild(firstParent)

  //... your code goes here
}

// ITERATION 5

function createProduct(){
  var inputName = document.querySelector('.input-text').value
  var inputPrice = document.querySelector('.input-number').value
  console.log(inputPrice)
  var parent = document.querySelector(".parent")
  var newRow = document.createElement("tr")
  newRow.className = "product"
  parent.appendChild(newRow)

  var newTd = document.createElement("td")
  newTd.className = "name"
  newRow.appendChild(newTd)
  newTd.innerHTML += inputName

  var newTd2 = document.createElement("td")
  newTd2.className = "price"
  newTd2.innerHTML = "$"
  newRow.appendChild(newTd2)

  var spanPrice = document.createElement("span")
  newTd2.appendChild(spanPrice)
  spanPrice.innerHTML = `${inputPrice}`

  var newTd3 = document.createElement("td")
  newTd3.className = "quantity"
  newRow.appendChild(newTd3)

  var inputQuantity = document.createElement("input")
  inputQuantity.type= "number"
  inputQuantity.value= "0"
  inputQuantity.min= "0"
  inputQuantity.placeholder = "Quantity"
  newTd3.appendChild(inputQuantity)

  var newTd4 = document.createElement("td")
  newTd4.className = "subtotal"
  newRow.appendChild(newTd4)

  var subTprice = document.createElement("span")
  subTprice.innerHTML = `$0`
  newTd4.appendChild(subTprice)

  var newTd5 = document.createElement("td")
  newTd5.className = "action"
  newRow.appendChild(newTd5)

  var newBtn = document.createElement("button")
  newBtn.className = "btn btn-remove"
  newBtn.innerHTML = "Remove"
  newBtn.onclick = removeProduct
  newTd5.appendChild(newBtn)
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(function(btn){
    btn.addEventListener('click', removeProduct);
  })
  const createBtn = document.getElementById("create")
  createBtn.addEventListener('click', createProduct)
  //... your code goes here
});
