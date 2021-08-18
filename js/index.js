// ITERATION 1


function updateSubtotal(product) {

let price = product.querySelector('.price span').innerText
// #cart > tbody > tr:nth-child(1) > td.price > span

let quantity = product.querySelector('.quantity > input').value

let subtotalprice  = price * quantity

product.querySelector('.subtotal span').innerText = subtotalprice 



return subtotalprice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 //  const singleProduct = document.querySelector('.product');

 let allProducts = document.getElementsByClassName('product')

 console.log(allProducts)

 let totalvalue = 0

 for (i = 0; i < allProducts.length; i++) {
  totalvalue += updateSubtotal(allProducts[i])
    document.getElementById('total-value').getElementsByTagName('span')[0].innerText = totalvalue

  }

  console.log(totalvalue)


  

  




  
  document.getElementById('total-value').getElementsByTagName('span')[0].innerText = totalvalue

  console.log(totalvalue)
  
}
  
  //let allSubtotals = document.getElementsByClassName('subtotal')[0]
  //let totalvalue += document.getElementById('total-value').getElementsByTagName('span')[0].innerText
  //let totalvaluenow = totalvalue.getElementByClassName('span')
 

  
 // console.log(allSubtotals)
  // console.log(totalvalue)
  
  //console.log(totalvaluenow)


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
