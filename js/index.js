// ITERATION 1

function updateSubtotal(product) {
    let subtotal = 0;
    let price = product.querySelector('.price span').innerHTML
    let quantity = product.querySelector('.quantity input').value
    subtotal += price * quantity
    let subtotalElement = product.querySelector('.subtotal span')
    subtotalElement.textContent = subtotal
    return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelectorAll('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  for(x=0; x<allProducts.length; x++){
    total += updateSubtotal(allProducts[x])
  }
  document.querySelector('#total-value span').textContent = total
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
  //... your code goes here
});
