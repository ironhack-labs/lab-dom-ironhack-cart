// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here 
  //GET DOM elements that hold price and quantity and their value
  const price = product.querySelector('.price span')
  const priceValue = price.innerHTML
  const quantity = product.querySelector('.quantity input').value
  //Calculate subtotal price (value)
  const subtotalPrice = '$' + (priceValue * quantity)
  //GET DOM elements that hold subtotal 
  const subTotal = product.querySelector('.subtotal')
  //SET the subtotal price to the corresponding DOM element 
  subTotal.innerHTML = subtotalPrice
  return (priceValue * quantity)

}


//  code in the following two lines is added just for testing purposes.
//  it runs when only iteration 1 is completed. at later point, it can be removed.
//  const singleProduct = document.querySelector('.product');
//  updateSubtotal(singleProduct);
//  end of test


// ITERATION 2

function calculateAll() {

  const products = document.querySelectorAll('.product')
  let total = 0
  //GET DOM elements that holds product
  products.forEach(function (product) {

    const subtotal = updateSubtotal(product)
    total += subtotal
  })

  // ITERATION 3
  const totalElm = document.querySelector('#total-value span')
  totalElm.innerText = total

}


// ITERATION 4

function removeProduct(event) {
  //To access the element an event was fired on
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //access the parent of a DOM node from its property parentNode.
  const action = target.parentNode
  const product = action.parentNode
  product.parentNode.removeChild(product);

  calculateAll()

}


// ITERATION 5   var new_row = document.createElement('div');    new_row.className = "aClassName";


function createProduct(event) {

  const target = event.currentTarget;

  // target the name and unit price input DOM nodes, extract their values
  let productNameValue = document.querySelector('#product-name').value
  let unitPriceValue = document.querySelector('#unit-price').value

  //New Product
  let htmlCode = `<tr class="product">
    <td class="name">
      <span>${productNameValue}</span>
    </td>
    <td class="price">$<span>${unitPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`

  const tbody = document.querySelector('tbody')
  tbody.insertAdjacentHTML("beforeend", htmlCode);

  const removeBtns = document.querySelectorAll('.btn.btn-remove');
  removeBtns.forEach(function (removeBtn) {
    removeBtn.addEventListener('click', removeProduct);
  })

}


window.addEventListener('load', () => {

  //Calculate Price Buttons
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Remove Product Buttons
  const removeBtns = document.querySelectorAll('.btn.btn-remove');
  removeBtns.forEach(function (removeBtn) {
    removeBtn.addEventListener('click', removeProduct);
  })

  //Create Product Button
  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);

});
