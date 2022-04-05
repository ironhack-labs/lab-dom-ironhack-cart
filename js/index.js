// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  const subtotal = product.querySelector('.subtotal span')
  
  const priceNumber = parseFloat(price.innerText)
  const quantityNumber = parseFloat(quantity.value)
  
  const subtotalNumber = priceNumber * quantityNumber
  
  subtotal.textContent = subtotalNumber


  return subtotalNumber
}

function calculateAll() {
  const productsArray = Array.from(document.getElementsByClassName('product'))
  const arr = []

  productsArray.forEach( (element) => {
    const subtotal = updateSubtotal(element)
    arr.push(subtotal)
  })
  const sum = arr.reduce( (acc, init) => {return acc + init}, 0)
  
  document.querySelector('#total-value span').innerText = sum

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let greatGrandParent = target.parentNode.parentNode.parentNode
  greatGrandParent.removeChild(target.parentNode.parentNode)
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let productName = document.getElementById('create-text').value
  let price = document.getElementById('create-price').value
  let table = document.getElementById('table')
  table.innerHTML += 
          `<tr class="product">
            <td class="name">
              <span>${productName}</span>
            </td>
            <td class="price">$<span>${price}.00</span></td>
            <td class="quantity">
              <input type="number" value="0" min="0" placeholder="Quantity" />
            </td>
            <td class="subtotal">$<span>0</span></td>
            <td class="action">
              <button id='btn' class="btn btn-remove">Remove</button>
            </td>
          </tr>`

  document.getElementById('createRow').innerHTML = 
    `<td>
     <input id="create-text" type="text" placeholder="Product Name" />
    </td>
   <td>
      <input id="create-price" type="number" min="0" value="0" placeholder="Product Price" />
    </td>
    <td></td>
    <td></td>
    <td>
      <button id="create" class="btn">Create Product</button>
    </td>`

    let removeBtn = document.querySelectorAll(".action .btn-remove")
    removeBtn.forEach( (btn) => {
    btn.addEventListener('click', removeProduct)

    document.getElementById('create').addEventListener('click', createProduct)
  })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  let removeBtn = document.querySelectorAll(".action .btn-remove")
  removeBtn.forEach( (btn) => {
    btn.addEventListener('click', removeProduct)
  })

  document.getElementById('create').addEventListener('click', createProduct)

  //... your code goes here
});
