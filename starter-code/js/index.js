window.onload = function () {
  // ==========================
  // CALCULATE PRICES
  // ==========================
  let calcPricesButton = document.querySelector('#calc-prices-button')

  calcPricesButton.onclick = function () {
    let grandTotal = 0
    let products = document.getElementsByClassName('product')

    for (let i = 0; i < products.length; i++) {
      let unitCost = document.querySelector(`.product:nth-child(${i + 1}) .unit-cost > span`).innerHTML
      let qty = Number(document.querySelector(`.product:nth-child(${i + 1}) .qty > input`).value)

      let lineItemTotal = unitCost * qty
      // console.log(unitCost)
      grandTotal += lineItemTotal

      let lineItemPrice = document.querySelector(`.product:nth-child(${i + 1}) .total > span`)
      lineItemPrice.innerHTML = lineItemTotal
    }

    document.querySelector('#grand-total span').innerHTML = grandTotal
  }

  // ==========================
  // DELETE ROW
  // ==========================
  let deleteButton = document.querySelectorAll('.btn-delete')

  let deleteRow = (e) => {
    e.currentTarget.parentElement.parentElement.remove()
  }

  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].onclick = deleteRow
  }

  // make the last delete button work
  deleteButton[deleteButton.length - 1].onclick = deleteRow

  // ==========================
  // ADD NEW PRODUCT
  // ==========================
  let createNewProductButton = document.querySelector('#create-new-product-button')

  createNewProductButton.onclick = function () {
    let newProductName = document.querySelector('.new-product-name input').value
    let newProductCost = document.querySelector('.new-product-cost input').value

    let newProductRow = document.createElement('div')
    newProductRow.classList.add('product')

    newProductRow.innerHTML = `
      <div class="product-name">
        <span>${newProductName}</span>
      </div>
      <div class="unit-cost">
        $<span>${newProductCost}</span>
      </div>
      <div class="qty">
        <label for="qty">QTY</label>
        <input type="text">
      </div>
      <div class="total">
        $<span>0</span>
      </div>
      <div>
        <button class="btn btn-delete">Delete</button>
      </div>
    `
    let productRowsContainer = document.querySelector('#product-rows-container').appendChild(newProductRow)

    document.querySelectorAll('.btn-delete')[document.querySelectorAll('.btn-delete').length - 1].onclick = deleteRow;

    // clears inputs
    document.querySelector('.new-product-name input').value = ''
    document.querySelector('.new-product-cost input').value = ''
  }
} // END ONLOAD
