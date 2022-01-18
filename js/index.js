// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal=price*quantity
  product.querySelector('.subtotal span').innerText= subtotal

  return subtotal
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');

  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalPrice = 0
  const products = Array.from(document.getElementsByClassName('product'))
  
  products.forEach(function(product){
  
     totalPrice +=  updateSubtotal(product) 
    
   })
  document.querySelector('#total-value').innerText=`Total: $${totalPrice}`
  // for (i=0; i < products.length; i++){
  //       totalPrice+=updateSubtotal(products[i])
  // };
  
  

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.innerHTML=""
  // this will only work for the preset buttons. the copys arent affected
  // maybe it is because if the window eventlistener that only starts once
  // when the page loads
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newName =document.querySelector('.create-product td:nth-child(1) input').value;  // will target first child
  const newPrice =document.querySelector('.create-product td:nth-child(2) input').value;  //  second child which is always the price
  const productTable =document.querySelector('tbody')
  //productTable.addchild('<tr></tr>')
  const newRow = productTable.insertRow(-1) //creates new <tr> at the end of the list
  //give this row the class attribute also
  newRow.setAttribute('class','product')
  //newRow.innerHTML=
  //add new child .td and give them content as the other products in cart
  const newColumnName = document.createElement("TD")
  newColumnName.setAttribute('class','name' ) //setting the class
  newColumnName.innerHTML=`<span>${newName}</span>` //fill it with the inpit name
  newRow.appendChild(newColumnName)
  // same with price column
  const newColumnPrice =document.createElement("TD")
  newColumnPrice.setAttribute('class', 'price')
  newColumnPrice.innerHTML="$"+`<span>${newPrice}</span>`
  newRow.appendChild(newColumnPrice)
  
  //maybe it would have been easier to just clone a full column and edit it accordingly
  //next ist cloning then other columns in this row from the existing
  const clonedColumnQuantity =document.querySelector('.quantity').cloneNode(true)
  newRow.appendChild(clonedColumnQuantity)
  const clonedColumnSubtotal =document.querySelector('.subtotal').cloneNode(true)
  newRow.appendChild(clonedColumnSubtotal)
  const clonedColumnAction =document.querySelector('.action').cloneNode(true)
  newRow.appendChild(clonedColumnAction)
  //clean input fields 
  document.querySelector('.create-product td:nth-child(1) input').value=''
  document.querySelector('.create-product td:nth-child(2) input').value=0
  
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const addProductBtn= document.querySelector('#create');
  addProductBtn.addEventListener('click', createProduct);

  const allActionBtns = Array.from(document.getElementsByClassName('action'));
  console.log(allActionBtns)
  allActionBtns.forEach(function(actionBtn){
    //console.log(actionBtn)
    actionBtn.addEventListener('click', removeProduct)
  })
});
