// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const quantity = product.querySelector('.quantity>input').value;
  const price = product.querySelector('.price>span').innerHTML;
  
  const subHTML = product.querySelector('.subtotal>span');
  const subTotal = document.createTextNode(`${quantity*price}`);
  
  subHTML.innerText = '';
  subHTML.appendChild(subTotal);

  //... your code goes here
}

function calculateTotal (product) {
  let total = 0;
  
  product.forEach(function (product){

    total += Number(product.querySelector('.subtotal>span').innerHTML);
    
  })
 
  return total
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const productList = document.querySelectorAll('.product');
  const totalHTML = document.querySelector('#total-value>span');
  totalHTML.innerText = '';
  
  
  // end of test

  //ITERATION 1 + 2
  //... your code goes here
  productList.forEach( function (product){
    updateSubtotal(product);    
  });
  
  
  // ITERATION 3
  //... your code goes here
  const total = document.createTextNode(calculateTotal(productList));
  totalHTML.appendChild(total)

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here
  //console.log(document.querySelectorAll('#cart>tbody>.product'))
  // document.querySelectorAll('#cart>tbody>.product').forEach(function (product){
  //   console.log(product)
  //   product.removeChild(target)
  // })
  // const parent = event.currentTarget.parentNode
  // //document.querySelectorAll('#cart>tbody>tr').removeChild(target)
  // console.log(target.parentNode)
  // calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
  const removeButton = document.querySelectorAll('.action')
  removeButton.forEach(function (button){
    addEventListener('click',removeProduct)
  })
    
  //console.log(removeButton)
  //removeButton.addEventListener('click',removeProduct)
});
