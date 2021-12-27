let table = document.querySelector('#cart tbody')

// ITERATION 1
function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = Number(product.querySelector('.quantity input').value);
  let subtotalPriceDom = product.querySelector('.subtotal span')
  let subTotalPrice = price * quantity;
  subtotalPriceDom.innerHTML = subTotalPrice;
  return subTotalPrice;
}


function calculateAll() { 
  // ITERATION 2
  let totalValue = 0;
  let allProductDom = document.querySelectorAll('.product');
  let totalValueDom = document.querySelector('#total-value span');
  
  // ITERATION 3
  allProductDom.forEach((elem) =>{
    updateSubtotal(elem);
    totalValue = totalValue + updateSubtotal(elem)
  })
  return totalValueDom.innerHTML = totalValue;
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let product = target.parentNode.parentNode;
  table.removeChild(product)
  calculateAll()
}


// ITERATION 5

function createProduct(event) {
  //... your code goes here
  let target = event.currentTarget
  console.log(target)
  let parent = target.parentNode.parentNode;
  console.log(parent) 
  let name = parent.querySelector('input[type="text"]');
  let price = parent.querySelector('input[type="number"]')
  console.log(price) 
  let newProduct = document.createElement('tr');
  newProduct.className = ('product')

  newProduct.innerHTML = `
  <td class="name">
            <span>${name.value}</span>
          </td>
          <td class="price">$<span>${Number(price.value).toFixed(2)}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
 `
 table.appendChild(newProduct)
 console.log(newProduct)

 name.value = '';
 price.value = 0;
 calculateAll()
 removeButtonEvent()
}

function removeButtonEvent() {
  const removeProductButton = document.querySelectorAll('.btn-remove')
  removeProductButton.forEach((e) => e.addEventListener('click', removeProduct));
}

function addButtonEvent() {
  const createProductButton = document.querySelector('#create');
  createProductButton.addEventListener('click', createProduct)
}

function calculatePricesEvent() {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
}
window.addEventListener('load', () => {
  calculatePricesEvent()
  removeButtonEvent()
  addButtonEvent()
});


