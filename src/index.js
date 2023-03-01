// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')
  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity
  product.querySelector('.subtotal span').innerHTML = subtotal
  return subtotal
}


  
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let subtotalArray = []
  const products = document.getElementsByClassName('product');
  const productsArray = [...products]
  productsArray.forEach(element =>{updateSubtotal(element)
  subtotalArray.push(updateSubtotal(element)) 
  console.log(subtotalArray)
})
  // console.log(productsArray.map(element =>{updateSubtotal(element)}));


  ;

  // ITERATION 3
  //... your code goes here
  // let subtotalArray = document.querySelectorAll('.subtotal span')
  // console.log(productsArray)
  let totalValue = subtotalArray.reduce((sum, elem) => sum + elem)
  // let total = document.querySelector('#total-value span').innerHTML
  document.querySelector('#total-value span').innerHTML = totalValue
  }
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let parent = event.currentTarget.parentNode.parentNode.parentNode
  parent.removeChild(event.currentTarget.parentNode.parentNode)

  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newName = document.querySelector(".create-product td input").value
  const newPrice = document.querySelector(".create-product td:nth-child(2) input").value
  let tbody = document.querySelector(".product").parentNode

  document.querySelector(".name")
  let structure = document.querySelector(".product")
  structure.innerHTML = `          <td class="name">
  <span>${newName}</span>
</td>
<td class="price">$<span>${newPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity">
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`
  tbody.appendChild(structure.content)
  console.log(structure)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  let removeBtns = document.getElementsByClassName("btn-remove")
  let removeBtnsArr = [...removeBtns]
  removeBtnsArr.forEach(btn => btn.addEventListener('click', removeProduct))
  const createNew = document.getElementById('create');
  createNew.addEventListener('click', createProduct);

});
