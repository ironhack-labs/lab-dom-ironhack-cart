// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity
  const subTotalText = product.querySelector('.subtotal span')
  subTotalText.innerHTML = subTotal
  return subTotal
} 

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product')
  const allProductsArray = [...allProducts]
  let total = 0
  allProductsArray.map ( (element) => {
    updateSubtotal(element)
    total += updateSubtotal(element) 
  } )
    
  // ITERATION 3
  const totalText = document.querySelector('#total-value span')
  totalText.innerText = total
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  calculateAll()
}

// ITERATION 5
function createProduct() {
  const inputs = document.querySelectorAll('.create-product td input')
  let name = inputs[0].value
  let price = inputs[1].value
  if(name === '' || price === 0){
    alert ('You must enter a name and a price')
  } else {
    const table = document.getElementsByTagName('tbody')
    
    const newElement = document.createElement('tr')
    newElement.innerHTML = `
    <tr class="product">
          <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
        `
        table[0].appendChild(newElement)

  }
  inputs[0].value = ''
  inputs[1].value = 0
}

function findRemoveButtons (){
  const removeBtns = document.getElementsByClassName('btn-remove');
  const removeBtnsArray = [...removeBtns]
  removeBtnsArray.map (element => element.addEventListener('click', removeProduct))
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  findRemoveButtons()
  const createButton = document.getElementById('create')
  createButton.addEventListener('click', createProduct)
});
