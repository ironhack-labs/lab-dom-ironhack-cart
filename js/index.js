// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  product.querySelector('.subtotal span').innerHTML = price * quantity
  return price * quantity
}

function calculateAll() {
  // ITERATION 2
  let sum = 0
  const arr = document.getElementsByClassName('product')
  for (var i = 0; i < arr.length; i++) {
    sum += updateSubtotal(arr[i])
  }
  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = sum
}

// ITERATION 4

function removeProduct(event) {
  if(event.target.className === 'btn btn-remove') {
    const target = event.target;
    console.log('The target in remove is:', target);
    let pNode = target.parentNode.parentNode
    pNode.remove()
    calculateAll()
  }
}

// ITERATION 5
function createProduct(event) {
  console.log(event.target, event)
  const name = document.querySelector(".create-product td input").value
  const price = document.querySelector(".create-product td:nth-child(2) input").value

  const row = document.createElement("tr")
  row.innerHTML = `<td class="name">
  <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`
  row.className = "product"
  document.querySelector("tbody").appendChild(row)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const cart = document.getElementById('cart'); //added eventlistener to whole table
  cart.addEventListener('click',removeProduct) // this way it listens to the whole table  
  //and doesnt matter where you click as long as the calss is the one i am looking for

  // let arr = document.getElementsByClassName("btn btn-remove")
  // for (elem of arr) {
  //   elem.addEventListener('click',removeProduct)
  // }

  let createBtn = document.getElementById("create")
  createBtn.addEventListener('click', createProduct)
});
