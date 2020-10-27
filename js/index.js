// ITERATION 1

function updateSubtotal(product) {
  let subtotal = 0;
    let price = product.querySelector('.price span').innerHTML
    let quantity = product.querySelector('.quantity input').value
    subtotal += price * quantity
    let subtotalElement = product.querySelector('.subtotal span')
    subtotalElement.innerHTML = subtotal
    return subtotal 
}

function calculateAll() {
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  for(x=0; x<allProducts.length; x++){
    total += updateSubtotal(allProducts[x])
  }
  document.querySelector('#total-value span').innerHTML = total
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  console.log(target)
  const row = target.parentNode
  const table = row.parentNode
  table.removeChild(row)
  calculateAll()

}

// ITERATION 5

function createProduct(event) {
  const productTable = document.getElementById('cart').querySelector('tbody')
  console.log(productTable)
  const target = event.currentTarget
  const newProduct = target.parentNode.parentNode
  const productName = newProduct.querySelector('[placeholder="Product Name"]').value
  const productPrice = newProduct.querySelector('[placeholder="Product Price"]').value
  let test = `
             
              <td class="quantity">\
                <input type="number" value="0" min="0" placeholder="Quantity" />\
              </td>\
              <td class="subtotal">$<span>0</span></td>\
              <td class="action">\
              <button class="btn btn-remove">Remove</button>\
              </td>`
    const newRow = productTable.insertRow()
    newRow.classList.add('product')


    for(x=0; x<5; x++){
      let cell = newRow.insertCell(x)
      switch (x){
        case 0:
          cell.innerHTML=`<span>${productName}</span>`
          cell.classList.add('name')
          break
        case 1:
          cell.innerHTML=`$<span>${productPrice}</span>`
          cell.classList.add('price')
          break
        case 2:
          cell.innerHTML='<input type="number" value="0" min="0" placeholder="Quantity" />'
          cell.classList.add('quantity')
          break
        case 3:
          cell.innerHTML='$<span>0</span>'
          cell.classList.add('subtotal')
          break
        case 4:
          cell.innerHTML='<button class="btn btn-remove">Remove</button>'
          cell.classList.add('action')
          break
      }

    }
    const removeItemBtns = document.querySelectorAll('.product .action')
    const removeItemBtnsArray = [...removeItemBtns]
    removeItemBtnsArray.forEach(function(el){
      el.addEventListener('click', removeProduct)
    })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeItemBtns = document.querySelectorAll('.product .action')
  const addNewItem = document.querySelector('.create-product #create')

  const removeItemBtnsArray = [...removeItemBtns]

  calculatePricesBtn.addEventListener('click', calculateAll);
  addNewItem.addEventListener('click', createProduct);

  removeItemBtnsArray.forEach(function(el){
    el.addEventListener('click', removeProduct)
  })
  
});