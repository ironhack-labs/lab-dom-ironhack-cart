// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span')
  let priceValue = price.innerHTML;
  let quantityValue = quantity.value;
  let subtotalPrice = priceValue*=quantityValue;
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product')
  const total = document.querySelector('#total-value span')
  let subtotals = []
  products.forEach(element => {
    let subtotal = updateSubtotal(element)
    subtotals.push(subtotal)
  })
  ;

  // ITERATION 3
  //... your code goes here
  total.innerHTML = subtotals.reduce((accumulator, currentValue) => accumulator + currentValue,
  0)

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.removeChild(target);
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let childElements = document.querySelectorAll('.create-product td input')
  let productName = childElements[0].value
  let productPrice = childElements[1].value
  let newProduct = `
<tr class="product">
  <td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${productPrice}.00</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove" onclick="removeProduct(event)">Remove</button>
  </td>
</tr>`

let parentNode = document.getElementsByTagName('tbody')[0]
parentNode.insertAdjacentHTML('beforeend', newProduct);
childElements[0].value=""
childElements[1].value=0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  let removeButtons = document.querySelectorAll('.btn-remove')
  console.log(removeButtons)
  removeButtons.forEach(element=>{
    element.addEventListener('click', removeProduct);
  })
  const createButton = document.getElementById('create')
  createButton.addEventListener('click', createProduct)
});
