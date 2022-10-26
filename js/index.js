// ITERATION 1

function updateSubtotal(product) {
  let price =  product.querySelector('.price span').innerHTML
  let quantity =  product.querySelector('.quantity input').value
  let subtotal = price * quantity
  product.querySelector('.subtotal span').innerText = subtotal
  return subtotal
}

function calculateAll() {
  let allSubtotalProducts = document.getElementsByClassName('product')
  
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  for (let element of allSubtotalProducts) {
    updateSubtotal(element)
  }

  // ITERATION 3
  let total = 0
  let totalValue = document.querySelector('#total-value span')
  for (let element of allSubtotalProducts){
    total += updateSubtotal(element)
  }
  totalValue.innerHTML = total
  return total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  let parent = document.querySelector('tbody')
  let newName = document.getElementById('input-name').value
  let newPrice = document.getElementById('input-price').value
  let newProduct = `
            <td class="name">
            <span>${newName}</span>
          </td>
          <td class="price">$<span>${newPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        `
  let tr = document.createElement('tr')
  tr.classList.add('product')
  tr.innerHTML = newProduct
  parent.appendChild(tr)
  tr.querySelector(".btn-remove").addEventListener("click", removeProduct)
  document.getElementById('input-name').value = ""
  newPrice.innerHTML = ""
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let removeButtons = document.getElementsByClassName('btn-remove');
  for (let row of removeButtons) {
  row.addEventListener('click', removeProduct);}
  let createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
})