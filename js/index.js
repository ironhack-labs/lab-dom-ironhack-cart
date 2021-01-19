// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subTotal =  price * quantity;
  product.querySelector('.subtotal span').innerHTML = subTotal
  
  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  //const singleProduct = document.querySelector('.product');
  //console.log(updateSubtotal(singleProduct));
  // end of test

  // ITERATION 2
  //... your code goes here
  let productList = [...document.getElementsByClassName('product')]
   let totalPrice = 0
    for (let product of productList) {
      updateSubtotal(product);
      totalPrice += updateSubtotal(product);
    }
  // ITERATION 3
  //... your code goes here
// variable that stores totalPrice 
// apply the variable to the text in the HTML tag
  document.querySelector('#total-value span').innerText = totalPrice

  return totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const td = event.currentTarget.parentNode;
  const tr = td.parentNode;
  const tbody = tr.parentNode;
  tbody.removeChild(tr)
  calculateAll(event)
  
 
  //console.log('The target in remove is:', target);
  //... your code goes here

}



// ITERATION 5

function createProduct() {
  //... your code goes here
  let input = document.querySelectorAll('.create-product input')
  let inputName = input[0]
  console.log(inputName)
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductBtn = document.querySelectorAll('.btn.btn-remove');
  removeProductBtn.forEach(prod =>{
     prod.addEventListener('click', removeProduct);
  })
  //removeProductBtn.addEventListener('click', removeProduct);
});

const removeProductBtn = document.querySelectorAll('.btn.btn-remove');

console.log(removeProductBtn) 
