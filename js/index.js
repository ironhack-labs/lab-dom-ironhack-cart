// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector(' .quantity > input ').value;
  console.log(typeof quantity)
  // INspect quantity element and copy selector
  const subTotal = product.querySelector('.subtotal span').innerText =  price * quantity;
  //product.querySelector('.price span').innerText;
  console.log(`Calculating subtotal ${subTotal}, yey!`);

  return subTotal;
  //... your code goes here
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  var multRowSubtotal = document.querySelectorAll('.product');
  var total = 0;
  // for (var i= 0; i < multRowSubtotal.length; i++) {
  //   total += updateSubtotal(product);
  // }

  multRowSubtotal.forEach( function (product){
    console.log(updateSubtotal(product))
    total+= updateSubtotal(product)
    console.log(total);
  });
  //loop through each row and calulcate sub-total, add to grand total

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value > span').innerText = total;

  return total;
  console.log(total);
};

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  calculateAll() // to delete row and up new total
  console.log('The target in remove is:', target);
  //... your code goes here
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
 
  let getProductName = document.getElementById('new-name').value
  let getPrice = document.getElementById('new-price').value

  // Copy the product html and then assign the new values and the callback to the button
  let newProduct = document.querySelector('#cart > tbody > tr').cloneNode(true)
  newProduct.querySelector('.name span').innerHTML = getProductName;
  newProduct.querySelector('.price span').innerHTML = getPrice;
  newProduct.querySelector('.action .btn-remove').addEventListener('click', removeProduct)

  // Set the new product inside the tdbody
  let parentProduct = document.querySelector('#cart > tbody')
  parentProduct.appendChild(newProduct)

//Clear the unit price and quantity inside the tfoot
  let clearProductName = document.querySelectorAll('tfoot input')[1].value = "";
  let clearPrice = document.querySelectorAll('tfoot input')[2].value = "";
 
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  //get all that elements that have class of btn btn-remove
  const removeBtn = [...document.getElementsByClassName('btn btn-remove')];
  //iterate over the HTML collection and add event listener to each of the buttons
  removeBtn.forEach(element=>{
   //event listener should trigger
    element.addEventListener('click', removeProduct);
    //button.onclick = removeProduct

    const addBtn = document.querySelector('#create')
    addBtn.addEventListener('click', createProduct);
}
)});