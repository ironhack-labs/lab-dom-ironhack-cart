const cl = (...p) => console.log(...p)

const aProduct = document.querySelectorAll('.product')
const allProducts = document.getElementsByClassName('product');
// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalAmt = product.querySelector('.subtotal span');
  const subtotal = price * quantity;
  
  return subtotalAmt.innerHTML = subtotal;
}

// ITERATION 2,3
function calculateAll() { 
  const products = [...allProducts]
  const subTotals = products.map(e => updateSubtotal(e)).reduce((acc, num)=> acc + num ,0)
  const totalAmt = document.querySelector('#total-value span');
  
  return totalAmt.innerHTML = subTotals;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let row = target.parentNode.parentNode
  row.remove()
  row.value = 0
  calculateAll()  
}

// ITERATION 5

function createProduct() {
  const newProdInput = document.querySelectorAll('.create-product input')

  const newProdName = newProdInput[0]
  const userInputName = newProdName.value

  const newProdPrice = newProdInput[1]
  const userProdPrice = newProdPrice.value
  

  const productTBody = document.querySelector('tbody')
  const newRowTR =document.createElement('tr')
  newRowTR.className = 'product' //// how da fuck do only on click
  newRowTR.innerHTML = `
    <tr class="product">
        <td class="name">
          <span>${userInputName}</span>
        </td>
        <td class="price">$<span>${userProdPrice}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
      `
    
    productTBody.appendChild(newRowTR) 
    deleteButt()
    newProdName.value =""
    newProdPrice.value = 0
}

  
function deleteButt(){
  const removePricesBtn = document.getElementsByClassName('btn-remove');
  for(i = 0; i < removePricesBtn.length; i++){
    removePricesBtn[i].addEventListener('click', removeProduct)
  }
}



//// do not touch answer for jasmine
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  deleteButt()

  const createBtn = document.querySelector("#create")
  createBtn.addEventListener('click', createProduct)

});



