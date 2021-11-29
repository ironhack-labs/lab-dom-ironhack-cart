// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  const priceValue = price.innerHTML
  const quantityValue = quantity.value
  const productSubtotal = priceValue * quantityValue
  const subTotal = product.querySelector(".subtotal span")
  subTotal.textContent = productSubtotal
  return productSubtotal
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const totalValue = 0
  const allProducts = document.querySelectorAll("#cart .product")
  allProducts.forEach(element => {
    totalValue += updateSubtotal(element)
  })
  

  // ITERATION 3
  totalPrices = document.querySelector("#total-value span")
  totalPrices.textContent = totalValue
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelector(".create-product input[type=text]")
  const newPrice = document.querySelector(".create-product input[type=number]")
  const newProductValue = newProduct.textContent
  const newPriceValue = newPrice.value

  const newProductElement = document.createElement(tr)
  newProductElement.className = "product";
  newProductElement.innerHTML = `
    <td class="name">
      <span>${newProductValue}</span>
    </td>
    <td class="price">$<span>${newPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`
}

const newRemoveButton = newProductElement.querySelector(".btn-remove")
  newRemoveButton.addEventListener("click", removeProduct)
  const body = document.querySelector("tbody")
  body.appendChild(newProductElement)
  newProductName.value = ""
  newProductPrice.value = ""

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll(".product .btn-remove")
  removeButtons.forEach((removeButton) => {removeButton.addEventListener("click", removeProduct)
  })
  const createButton = document.querySelector("#create")
  createButton.addEventListener("click", createProduct)
});
