// ITERATION 1

function updateSubtotal(product) {
  // after creating price variable use DOM manipulation and 
  // .innerHTML to gets the HTML markup within the element
  //  within class query selector.
  const price = product.querySelector('.price span').innerHTML;
  // same as above but using .value to return the value of the value attribute
  // of a text field after the class query selector
  const quantity = product.querySelector('.quantity input').value;
  
  // store the product of multiplying price by quantity variables
  const subtotalValue = price * quantity
  // using DOM manipulation store the value of the subtotal in a variable
  const subtotal = product.querySelector('.subtotal span')
  // using innerHTML replace the existing contents of the element with the subtotalValue
  subtotal.innerHTML = subtotalValue
  
  // requires return as we need the number to use for later
  return subtotalValue
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // ITERATION 2
  // using querySelectorAll here to store the in another created variable as
  // there is more than one element with the product class
  const products = document.querySelectorAll('.product')
  // store the variable after using DOM man. targeting id '#total-value span'
  let totalPriceField = document.querySelector('#total-value span')
  // create a a variable and assign 0.
  let totalPrice = 0
  
  // using a forEach() method to execute once for each array (products) element
  products.forEach(function (product) { // the name within the parentheses is usually 
    // a single element named after the name of the array.
    // add the value of the function updateSubTotal with an element as an argument
    // and assign the result to the variable totalPrice
    totalPrice += updateSubtotal(product)
  })
  
  // ITERATION 3
  //... your code goes here
  // replace the contents of totalPriceField using innerHTML to equal the value
  // of totalPrice 
  totalPriceField.innerHTML = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  // store event.currentTarget in a variable
  const target = event.currentTarget;
  // access the parent node three levels up by using parentNode on the target to 
  // get to tbody and store in variable
  const tbody = target.parentNode.parentNode.parentNode
  // using the variable call removeChild on the element (tr product)
  tbody.removeChild(target.parentNode.parentNode)
  // to update the total price after removal call calculateAll function
  calculateAll()
}

// ITERATION 5

function createProduct() {
  // query document and select All with class (create-product input) and store in variable
    const inputs = document.querySelectorAll('.create-product input')
    // target the first input (object) using [] with the index 0, and extract with 
    // .value to return the value property.
    const name = inputs[0].value;
    // target the second input with index 1 and return the value property.
    const price = inputs[1].value;
    // querySelector() method on the document to return the first element with the 
    // specified selector 
    const tbody = document.querySelector('tbody');
    // create variable to store a new row that can be added to the table. 
    // use backticks and ${} inserting name and price 
    const row = `<td class="name"><span>${name}</span></td><td class="price">$<span>${price}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`
    // create a HTML element with tr tagName with document.createElement() method
    // and store in a variable
    const tr = document.createElement('tr');
    // classList return the CSS class names of an element and .add will add a 
    // class to the element 
    tr.classList.add('product')
    // innerHTML on tr will replace the the contents of the element with row
    tr.innerHTML = row;

    // add the newly created tr element to the tbody and this will 
    // create a table row
    tbody.appendChild(tr);
    // query the document
    let removeProductBtns = document.querySelectorAll('.btn-remove')

    let removeProductBtn = removeProductBtns[removeProductBtns.length -1]

    removeProductBtn.addEventListener('click', removeProduct)
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


// Part of ITERATION 4
  // query document for All "remove" buttons and store in variable
  const removeProductBtns = document.querySelectorAll('.btn-remove');
  // loop through the array using forEach with single element as parameter
  removeProductBtns.forEach(function (removeProductBtn) {
    // add a 'click' event listener and passing named removeProduct function as a 
    // callback argument.
    removeProductBtn.addEventListener('click', removeProduct)
  })

// Part of ITERATION 5
  // query document getElementById with selector ('create') and store in variable
  const addProductBtn = document.getElementById('create')
  // add a 'click even listener and pass createProduct function as a callback argument
  addProductBtn.addEventListener('click', createProduct)
  
});




