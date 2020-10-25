// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  let subtotalPrice = quantity * price.innerHTML;
  let subtotalTag = product.querySelector('.subtotal span')
  subtotalTag.innerHTML = subtotalPrice;  
  return subtotalPrice;
   }
  



  //... your code goes here

  



function calculateAll() {
  
  
      // ITERATION 2


  let ourProducts = document.querySelectorAll('.product');
  ourProducts.forEach(function (name) {
    updateSubtotal(name);     
  })

    //... your code goes here 
//  let allSubtotal = document.querySelectorAll('.subtotal');

    // ITERATION 3
  
  

let allSubtotal = document.querySelectorAll('.subtotal span');
  
  let subT = sumNumbers(allSubtotal)
  const total = document.querySelector('#total-value span');
  total.textContent = subT;

function sumNumbers(array) {    
    let suma = 0;
for (let i = 0; i < array.length; i++){
  suma += parseInt(array[i].textContent);
    } return (suma);
}
  
    //... your code goes here
  
}



calculateAll()



 










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
