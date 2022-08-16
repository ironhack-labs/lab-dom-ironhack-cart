// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let subtotalPrice = price * quantity

  const subtotalHTML = product.querySelector('.subtotal')

  subtotalHTML.innerText = subtotalPrice

  return subtotalPrice



}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.getElementsByClassName('product');
  updateSubtotal(singleProduct);
  console.log(singleProduct)
  */
  // end of test

  // ITERATION 2
  //... your code goes here
  const multipleProducts = document.getElementsByClassName('product')
  let totalPrice = 0;

    for(let i = 0; i < multipleProducts.length; i++){
      console.log(i)
      let subtotalPrice = updateSubtotal(multipleProducts[i])
      totalPrice += subtotalPrice

    }
    console.log(totalPrice)
    /*
    
    updateSubtotal(multipleProducts[0])
    updateSubtotal(multipleProducts[0])
    console.log(multipleProducts[1])
    updateSubtotal(multipleProducts[1])
    */




  // ITERATION 3
  //... your code goes here
  let totalHTML = document.querySelector('#total-value span')
  console.log(totalHTML)

  totalHTML.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target.parentNode.parentNode.remove()
  console.log('The target in remove is:', target);
  //... your code goes here
  calculateAll()


}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const table = document.querySelector('#cart tbody') 
  const newProductName = document.getElementById('newProductName').value
  const newProductUnit = document.getElementById('newProductPrice').value

  console.log(newProductName)
  console.log(newProductUnit)

  // Create an empty <tr> element and add it to the 1st position of the table:
//let row = table.insertRow(3);

let row = document.createElement('tr')
row.classList.add('product')



row.innerHTML = `  <td class="name">
<span>${newProductName}</span>
</td>
<td class="price">$<span>${newProductUnit}</span></td>
<td class="quantity">
<input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
<button class="btn btn-remove">Remove</button>`
table.appendChild(row)
console.log(row)



const removeButtons = document.getElementsByClassName('btn-remove')
for(let i = 0; i < removeButtons.length; i++){
  removeButtons[i].addEventListener('click', removeProduct)
}



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove')
  for(let i = 0; i < removeButtons.length; i++){
    removeButtons[i].addEventListener('click', removeProduct)
  }
 

  const createNewProduct = document.getElementById('create');
  createNewProduct.addEventListener('click', createProduct)

  //... your code goes here
});
