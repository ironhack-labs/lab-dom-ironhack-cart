// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').innerHTML);
  let quantity = parseFloat(product.querySelector('.quantity input').value);
  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = price * quantity;
  return subTotal.innerHTML;
  //... your code goes here
}
function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product');
  let productsArr = [...products];
  let total = productsArr.reduce((acc,product) => acc + parseFloat(updateSubtotal(product)),0);

  // ITERATION 3
  let totalValue = document.querySelector("#total-value span")
  totalValue.innerHTML = total
  console.log(totalValue)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let toBeRemoved = target.parentElement.parentElement
  toBeRemoved.parentElement.removeChild(toBeRemoved)
  calculateAll()
  
}

// ITERATION 5

function createProduct() {
  console.log('product to be created !')
  let targetName = event.currentTarget
  let table = document.querySelector("tbody")
  let tr = document.createElement("TR");
  tr.setAttribute("class","product")
  table.appendChild(tr)

  let td1 = document.createElement("TD")
  tr.appendChild(td1)
  td1.setAttribute("class","name")
  spanName = document.createElement('span')
  td1.appendChild(spanName)
  newName = document.querySelector('#createName')
  spanName.innerText = newName.value

  let td2 = document.createElement("TD")
  tr.appendChild(td2)
  td2.setAttribute("class","price")
  td2.innerText = "$"
  spanPrice = document.createElement('span')
  td2.appendChild(spanPrice)
  newPrice = document.querySelector('#createPrice')
  spanPrice.innerText = newPrice.value

  let td3 = document.createElement("TD")
  tr.appendChild(td3)
  td3.setAttribute("class","quantity")
  quantityInput = document.createElement("input")
  td3.appendChild(quantityInput)
  quantityInput.setAttribute("type","number")
  quantityInput.setAttribute("value","0")
  quantityInput.setAttribute("min","0")
  quantityInput.setAttribute("placeholder","Quantity")

  let td4 = document.createElement("TD")
  tr.appendChild(td4)
  td4.setAttribute("class","subtotal")
  td4.innerText = "$"
  spanSubtotal = document.createElement('span')
  td4.appendChild(spanSubtotal)
  spanSubtotal.innerHTML = 0

  let td5 = document.createElement("TD")
  tr.appendChild(td5)
  td5.setAttribute("class","action")
  removeBtn = document.createElement('button')
  td5.appendChild(removeBtn)
  removeBtn.setAttribute("class","btn btn-remove")  
  removeBtn.innerText = "Remove"
  removeBtn.addEventListener('click', removeProduct)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll('.btn-remove');
  const removeArray = [...removeButton]
    for (i=0;i<removeArray.length;i++) {
      removeArray[i].addEventListener('click', removeProduct);
    }
  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
});
