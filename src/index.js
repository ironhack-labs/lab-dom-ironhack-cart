// ITERATION 1

function updateSubtotal(product) {
    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');
    const subTotal = product.querySelector('.subtotal span');
    console.log(price, quantity, subTotal)
    const subTotalValue = price.textContent * quantity.value
    subTotal.innerText = subTotalValue
    return subTotalValue


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  const total = document.querySelector('#total-value span');
  let count = 0;
  products.forEach( product => count += updateSubtotal(product));
  total.innerText = count;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const nodeToRemove = (target.parentNode).parentNode;
  const principalNode = nodeToRemove.parentNode;
  principalNode.removeChild(nodeToRemove);
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const inputName = document.querySelector('#create-name')
  const inputPrice = document.querySelector('#create-price')
  const parentNode = document.querySelector('tbody')
  const trElement = document.createElement("tr")
  trElement.setAttribute("class", "product")
  const tdElementOne = document.createElement("td")
  tdElementOne.setAttribute("class", "name")
  const spanElementName = document.createElement("span")
  spanElementName.textContent = inputName.value
  const tdElementTwo = document.createElement("td")
  tdElementTwo.setAttribute("class", "price")
  tdElementTwo.textContent = "$"
  const spanElementPrice = document.createElement("span")
  spanElementPrice.textContent = inputPrice.value
  const tdElementThree = document.createElement("td")
  tdElementThree.setAttribute("class", "quantity")
  const inputQuantity = document.createElement("input")
  inputQuantity.setAttribute("type", "number")
  inputQuantity.setAttribute("value", "0")
  inputQuantity.setAttribute("min", "0")
  inputQuantity.setAttribute("placeholder", "Quantity")
  const tdElementFour = document.createElement("td")
  tdElementFour.setAttribute("class", "subtotal") 
  tdElementFour.textContent = "$"
  const spanElementSubTotal = document.createElement("span")
  spanElementSubTotal.textContent = "0"
  const tdElementFive = document.createElement("td")
  tdElementFive.setAttribute("class", "action") 
  const button = document.createElement("button")
  button.setAttribute("class","btn btn-remove")
  button.innerText = "Remove"
  button.onclick = removeProduct

  
  parentNode.appendChild(trElement)
  trElement.appendChild(tdElementOne)
  tdElementOne.appendChild(spanElementName)
  trElement.appendChild(tdElementTwo)
  tdElementTwo.appendChild(spanElementPrice)
  trElement.appendChild(tdElementThree)
  tdElementThree.appendChild(inputQuantity)
  trElement.appendChild(tdElementFour)
  tdElementFour.appendChild(spanElementSubTotal)
  trElement.appendChild(tdElementFive)
  tdElementFive.appendChild(button)

  button.addEventListener('click', calculateAll);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeBtn = document.querySelectorAll('.action .btn-remove');
  const addBtn = document.querySelector("#create")

  removeBtn.forEach( button => button.onclick = removeProduct);
  calculatePricesBtn.addEventListener('click', calculateAll);
  addBtn.onclick = createProduct
});
