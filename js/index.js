// ITERATION 1

function updateSubtotal(product) {


  const price = product.querySelector('.price span').textContent
  const quantity = product.querySelector('.quantity input').value

  //... your code goes here
  let totalPrice = price * quantity

  product.querySelector('.subtotal span').textContent = totalPrice
  return totalPrice

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  // let productsAll = document.getElementsByClassName('product')
  // console.log(productsAll)
  // console.log(typeof productsAll);

  let productsAll = document.querySelectorAll('.product')
  let totalCart = 0
  let totalPrice = 0

  productsAll.forEach(eachProduct => {

    totalCart += updateSubtotal(eachProduct)

  });

  // ITERATION 3
  document.querySelector('#total-value span').textContent = totalCart
  // console.log(totalCart)



}

// ITERATION 4

function removeProduct() {

  let deletBtn = document.getElementsByClassName('btn btn-remove')

  Object.entries(deletBtn).forEach(button => {

    button[1].addEventListener('click', removeProduct)

  });

  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  node = target.parentNode.parentNode

  node.parentNode.removeChild(node)

}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const newProduct = document.querySelector('.new-product').value
  const newPrice = document.querySelector('.new-price').value
  console.log(newProduct)
  console.log(newPrice)

  let target = document.querySelectorAll('#cart tbody tr')
  console.log(target.length);
  const table = document.querySelector('#cart')

  //var newRow = table.insertRow()
  //target.className = "product"

  //const newItem = document.createElement('tr class="product"')

  let newElement = (`<td class="name">      <span>${newProduct} </span>    </td>    <td class="price">$<span>${newPrice}</span></td> <td class="quantity"> <input type="number" value="0" min="0" placeholder="Quantity" /> </td> <td class="subtotal">$<span>0</span></td> <td class="action"> <button class="btn btn-remove" onclick = removeProduct()>Remove</button> </td>`)

  //console.log(newElement);
  let newRow = target[target.length - 1].insertAdjacentHTML('afterend', newElement)
  target = document.querySelectorAll('#cart tbody tr')
  target[target.length - 1].className = "product"

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let deletBtn = document.getElementsByClassName('btn btn-remove')

  Object.entries(deletBtn).forEach(button => {

    button[1].addEventListener('click', removeProduct)

  });

  const createBtn = document.getElementById('create')
  console.log(createBtn);
  createBtn.addEventListener('click', createProduct);



  //... your code goes here
});
