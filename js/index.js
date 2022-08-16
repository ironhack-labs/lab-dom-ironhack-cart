// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  
  let subtotal = 0
  let price = product.querySelector('.price span').innerText
  let quantity = product.querySelector('.quantity input').value
  subtotal = (price * quantity)
  //console.log(subtotal)
  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2)
  return subtotal
  
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
  // console.log(singleProduct)
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  
  let total = 0
  //console.log(document.querySelectorAll('.product'))
  document.querySelectorAll('.product').forEach((product)=>{  
    //console.log(product) 
    let productSubtotal = updateSubtotal(product)
    //console.log(productSubtotal)
   
    total += productSubtotal
    
  })
  
  totalPrice = total 
  
  document.querySelector('#total-value span').innerText = totalPrice.toFixed(2)
  
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4


function removeProduct(event) {
  const target = event.currentTarget;  
  console.log('The target in remove is:', target);
  const element= target.parentNode.parentNode
  const parent = target.parentNode.parentNode.parentNode  
  parent.removeChild(element)
  
  //... your code goes here
}

// ITERATION 5


function createProduct() {  
  
  const newProduct = document.querySelector('.create-product')
  console.log(newProduct)
  const name = newProduct.querySelector('input[type="text"]').value
  console.log(name)
  const price = newProduct.querySelector('input[type="number"]').value
  console.log(price)

  
  const addProduct = document.createElement('tr')
  addProduct.classList.add('product')
  addProduct.innerHTML = `<td class="name"><span>${name}</span></td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity"> <input type="number" value="0" min="0" placeholder="Quantity" /></td> 
  <td class="subtotal">$<span>0</span></td> 
  <td class="action">  <button class="btn btn-remove">Remove</button> </td>`

  //console.log(addProduct)  

  document.querySelector('tbody').appendChild(addProduct)
  const list = document.querySelector('.create-product')
  list.innerHTML = newProduct.innerHTML

  document.querySelectorAll('.btn-remove').forEach(function(task){ 
    task.addEventListener('click', removeProduct)
  })
  

  
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);  

  document.querySelectorAll('.btn-remove').forEach(function(task){ 
    task.addEventListener('click', removeProduct)
  })

  document.querySelectorAll('#create').forEach(function(task){  
    task.addEventListener('click', createProduct)
  })
  //... your code goes here
});
