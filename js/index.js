// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!')

  const price = product.querySelector('.price span').innerText

  const quantity = product.querySelector('.quantity input').value
  
  const calcSubTotal = price * quantity

  const holdSubTotal = product.querySelector('.subtotal span')

  holdSubTotal.innerHTML = calcSubTotal

  return calcSubTotal

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  let calcTotal = 0

  allProducts.forEach(item => calcTotal += updateSubtotal(item))


  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = calcTotal  



}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)
  //... your code goes here
  target.parentNode.parentNode.remove()
  calculateAll()

}

// ITERATION 5

function createProduct(product) {
  //... your code goes here
  const productName = document.getElementById("pname").value;
  const productPrice= document.getElementById("pprice").value;

  const row = document.createElement('tr')

  row.innerHTML = 
  `   <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${productPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
`
  row.classList.add('product')

  document.querySelector('tbody').appendChild(row);

  row.querySelector(".btn-remove").addEventListener('click',removeProduct)

}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  //... your code goes here
  const removeButton = document.querySelectorAll('.btn-remove')

  removeButton.forEach(button => button.addEventListener('click', removeProduct))
  
  const createButton = document.getElementById('create')
  createButton.addEventListener('click',createProduct)

});


/*



  



*/