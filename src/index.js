// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML       //store in "price" the value of price
  const quantity = product.querySelector('.quantity input').value   //store in "quantity" the value of quantity
  let subtotal = price * quantity                                  //calculate subtotal
  let subTT = product.querySelector('.subtotal span')
  subTT.innerHTML = subtotal
  return subtotal
}



function calculateAll() {
  // ITERATION 2
 let trProducts = document.getElementsByClassName('product')
 let sum=0
 for(let i=0; i<trProducts.length; i++){
    updateSubtotal(trProducts[i])
    
    sum+= updateSubtotal(trProducts[i])
  }

  let total = document.querySelector('#total-value span')
  total.innerHTML= sum
  return total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target);
  const grandParentDiv = target.parentNode.parentNode.parentNode
  grandParentDiv.removeChild(target.parentNode.parentNode)

  calculateAll()
}

// ITERATION 5

function createProduct() {

  let newProduct = document.createElement('tr');

  let newProductInput = document.querySelectorAll('.create-product input');

  let newProductName = newProductInput[0].value

  let newProductPrice = newProductInput[1].value

  newProduct.innerHTML = `<td class="name">
  <span>${newProductName}</span>
</td>
<td class="price">$<span>${newProductPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`

  newProduct.classList.add('product')
  newProduct.querySelector('button').addEventListener('click', removeProduct)
  let cartTable = document.querySelector('tbody')
  cartTable.appendChild(newProduct)
}




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeB = document.querySelectorAll('.btn-remove')
  for(let i=0; i<removeB.length; i++){
    removeB[i].addEventListener("click", removeProduct)
  }
});
