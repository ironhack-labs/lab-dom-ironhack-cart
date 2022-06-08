// ITERATION 1


function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector( '.quantity input').value
  const subtotal =  quantity * price 
  product.querySelector('.subtotal span').innerText = subtotal 
  //console.log(subtotal)
  return subtotal
}




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // ITERATION 2 ITERATION 3

  const multiProduct = document.getElementsByClassName('product');
console.log(multiProduct)
  let sum = 0
  for (let productItem of multiProduct) {
    sum += updateSubtotal(productItem);
  }
  document.querySelector('#total-value span').innerText = sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);

  return event.target.parentNode.parentNode.remove()

  }


// ITERATION 5

function createProduct() {
 
  input = document.querySelectorAll('tfoot input')
  inputProduct = input[0].value
  inputPrice = input[1].value
   
  tr = document.createElement('tr')
  
  tr.innerHTML = `<tr class="product">
  <td class="name">
    <span>${inputProduct}</span>
  </td>
  <td class="price">$<span> ${inputPrice} </span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr> `
const mainTable = document.querySelector('tbody')
mainTable.appendChild(tr)

// the last btn should addEventListener, removeProduct
//document.querySelectorAll('.btn-remove') is an ayyar
lastBtnArray = document.querySelectorAll('.btn-remove')
lastBtnArray[lastBtnArray.length - 1].addEventListener('click',removeProduct)

//lastProcuct = document.querySelectorAll('.product')
//lastProcuct[lastProcuct.length - 1] add to calculateAll
tr.classList.add('product')


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  document.querySelectorAll('.btn-remove').forEach(function (btn) {
    btn.addEventListener('click', removeProduct)

  document.querySelector('#create').addEventListener('click',createProduct)
})
})
