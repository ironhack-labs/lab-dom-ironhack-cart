const button = document.querySelector('#calculate')
button.onclick = () => {
  console.log('button clicked!')
  updateSubtotal()
}


const updateSubtotal = () => {

  let total = 0
  let rows = document.querySelectorAll(`.product`) //Get all rows
  rows.forEach(row => { //Get each row 
    let price = row.querySelector('.price span').innerHTML
    let quantity = row.querySelector('input').value
    let subtotal = Number(price) * Number(quantity)
    total += subtotal
    row.querySelector('.subtotal span').innerText = subtotal //add subtotal

  })

  document.querySelector('#total-value span').innerText = total

}

const makeDeleteButtonsWork = () => {
  let rows = document.querySelectorAll(`.product`) //Get all rows
  rows.forEach(row => { //Get each row 
    row.querySelector('.btn-remove').onclick = function (e) {
      row.remove() //this.parentNode.parentNode.remove() also works
    }
  })
}

makeDeleteButtonsWork() //When there is only 3 rows 


const addNewProduct = () => {
  let newProduct = document.querySelectorAll('tfoot input')[0].value
  let newProductPrice = document.querySelectorAll('tfoot input')[1].value
  let newRow = `<tr class="product">
                <td class="name">
                  <span>${newProduct}</span>
                </td>
                <td class="price">$<span>${newProductPrice}</span></td>
                <td class="quantity">
                  <input type="number" value="0" min="0" placeholder="Quantity" />
                </td>
                <td class="subtotal">$<span>0</span></td>
                <td class="action">
                  <button class="btn btn-remove">Remove</button>
                </td>
              </tr>`
  document.querySelector('tbody').innerHTML += newRow
  makeDeleteButtonsWork() //Now there are 4 rows 
}

const createButton = document.querySelector('#create')
createButton.onclick = () => {
  console.log('create button clicked!')
  addNewProduct()
}