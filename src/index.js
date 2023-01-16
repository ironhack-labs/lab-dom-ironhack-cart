// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input').value

  let subTotal = product.querySelector('.subtotal span')

  subTotal.innerHTML = price.innerText * quantity

  return subTotal.innerHTML
}

function calculateAll() {
  
  // ITERATION 2
  
  const productsArray = document.getElementsByClassName('product')
  
  for(let i = 0; i < productsArray.length; i++) 
  {
    updateSubtotal(productsArray[i])
  }

  // ITERATION 3
  
  let sum = 0;

  let subTotals = document.querySelectorAll('.subtotal span')

  for(let i = 0; i < subTotals.length; i++)
  {
    let numb = subTotals[i].innerText

    sum += Number(numb)
    
  }

  const total= document.querySelector('#total-value span')
  
  total.innerText = sum 

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  //... your code goes here

  const tBody = document.querySelector('tbody')
  tBody.removeChild(target.parentNode.parentNode)

  /*
  removeBtn.onclick = (event) => {
    tBody.removeChild(event.currentTarget.parentNode)
  } */

  /*  
  for(let i = 0; i < removeBtn.length; i++) 
  {
    if(target == removeBtn[i]) tBody.removeChild(productToRemove[i])
  } */

}


// ITERATION 5

function createProduct() {
  //... your code goes here

  let productName = document.querySelector('#new-name input[type="text"]').value
  let productPrice = document.querySelector('#new-price input[type="number"]').value

  const tBody = document.querySelector('tbody')
  const newProduct = document.createElement('tr')
  newProduct.className = 'product'
  newProduct.innerHTML = `<tr class="product">
                          <td class="name">
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
                        </tr>`;
  
  tBody.appendChild(newProduct)

  const newRemoveBtn = newProduct.querySelector('.btn-remove')
  newRemoveBtn.addEventListener('click', removeProduct)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeBtn = [...document.getElementsByClassName('btn-remove')]
  removeBtn.forEach((button) => {
    button.addEventListener('click', removeProduct)
  })

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

})

