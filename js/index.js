// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  //console.log(quantity.value)

  const subtotalValue = price.textContent * quantity.value
  //console.log(subtotalValue)

  const subtotal = product.querySelector(".subtotal span")
  subtotal.textContent = subtotalValue
  // console.log(subtotal.textContent)
  // console.log(subtotalValue)
  return subtotalValue

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  let sum = 0
  const products = document.getElementsByClassName("product")
  for (i = 0; i < products.length; i++) {
    updateSubtotal(products[i])
    //console.log(products[i].querySelector(".subtotal span").textContent)
    sum += parseFloat(products[i].querySelector(".subtotal span").textContent)
  }

  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector("#total-value span")
  totalValue.textContent = sum

  //console.log(totalPrice.textContent)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  //console.log('The target in remove is:', target);
  //... your code goes here
  document.querySelector("tbody").removeChild(target)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // console.log("espero que funcione")
  const productName = document.querySelector(".create-product").children[0].children[0].value //string valor de input
  const textName = document.createTextNode(productName)
  const unitPrice = document.querySelector(".create-product").children[1].children[0].value //numero valor de input
  const numberPrice = document.createTextNode(unitPrice)
  // console.log(productName)

  const newRow = document.createElement("tr") // node
  newRow.setAttribute("class", "product")
  const newSpan = document.createElement("span")
  const unitPriceSpan = document.createElement("span")
  const subtotalSpan = document.createElement("span")
  const removeButton = document.createElement("button")

  const newInput = document.createElement("input")

  //const newTableData = document.createElement("td")
  for (i = 0; i <= 4; i++) {
    const newTableData = document.createElement("td")
    switch (i) {
      case (0):
        newTableData.setAttribute("class", "name")
        newTableData.appendChild(newSpan)
        newTableData.appendChild(textName)
        break;
      case (1):
        newTableData.setAttribute("class", "price")
        newTableData.appendChild(document.createTextNode("$"))
        newTableData.appendChild(unitPriceSpan)
        unitPriceSpan.appendChild(numberPrice)
        break;
      case (2):
        newTableData.setAttribute("class", "quantity")
        newTableData.appendChild(newInput)
        newInput.setAttribute("type", "number")
        newInput.setAttribute("value", "0")
        newInput.setAttribute("min", "0")
        newInput.setAttribute("placeholder", "Quantity")

        break;
      case (3):
        newTableData.setAttribute("class", "subtotal")
        newTableData.appendChild(document.createTextNode("$"))
        subtotalSpan.appendChild(document.createTextNode("0"))
        newTableData.appendChild(subtotalSpan)
        break;
      case (4):
        newTableData.setAttribute("class", "action")
        removeButton.setAttribute("class", "btn btn-remove")
        newTableData.appendChild(removeButton)
        removeButton.appendChild(document.createTextNode("Remove"))
        removeButton.addEventListener("click", removeProduct)
        break;
    }

    newRow.appendChild(newTableData)
    document.querySelector("tbody").appendChild(newRow)
    //console.log(document.querySelector("tbody"), "este es tbody")
  }

  document.querySelector(".create-product").children[0].children[0].value = ''
  document.querySelector(".create-product").children[1].children[0].value = 0
}


window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");
  //console.log(removeButtons)
  removeButtons.forEach(eachButton => {
    // console.log("this is a remove button" + eachButton)
    eachButton.onclick = (e) => {
      removeProduct(e)
    }
  })
  const createButton = document.querySelector("#create");
  createButton.addEventListener('click', createProduct);

  //... your code goes here
} );
