// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const quantify = product.querySelector('.quantity input');
  const price = product.querySelector('.price span');
  const domSubt = product.querySelector('.subtotal span');

  let total = price.textContent * quantify.value;
  domSubt.innerText = total;
  
  return total

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product')

  let total = 0

  products.forEach(function (elm) {
    total += updateSubtotal(elm)
  });

  // ITERATION 3
  //... your code goes here
  const domTotal = document.querySelector('#total-value span');
  domTotal.innerText = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  

  let parent = target.parentNode.parentNode.parentNode
  parent.removeChild(target.parentNode.parentNode)


  
  calculateAll()


}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const nodoName = document.querySelector('.create-product  input[type = "text"]').value;
  const nodoPrice = document.querySelector('.create-product  input[type = "number"]').value;
  

  const newLine = document.createElement('tr')
  newLine.setAttribute('class', 'product')
  newLine.innerHTML = `<td class="name"> 
    <span> ${ nodoName }</span> 
    </td> 
    <td class = "price">$<span>${nodoPrice}</span></td>
    <td class = "quantity">
    <input type = "number" value = "0" min = "0" placeholder = "Quantity"/ >
    </td> 
    <td class = "subtotal"> $ <span> 0 </span></td >
    <td class = "action" >
    <button class = "btn btn-remove"> Remove </button>
    </td>`
  
  document.querySelector('tbody').appendChild(newLine)

  
  document.querySelector('.create-product  input[type = "text"]').value = "";
  document.querySelector('.create-product  input[type = "number"]').value = 0;
  
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(elm => {
    elm.addEventListener('click', removeProduct)
  });

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  // Delete product
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(elm => {
    elm.addEventListener('click', removeProduct)
  });

  //create product
  const createProducts = document.querySelector('#create');
  createProducts.addEventListener('click', createProduct);
  


});
