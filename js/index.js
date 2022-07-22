// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let quantity= product.querySelector('.quantity input').value;
  let price= product.querySelector('.price span').textContent;
  let subtotal=quantity*price;
  product.querySelector('.subtotal span').innerHTML=subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // ITERATION 2
  const singleProduct = document.querySelectorAll('.product');
   const arrayProduct= [...singleProduct];
   let total=0;
   arrayProduct.forEach(element => {
   total+=updateSubtotal(element);
   });
  // ITERATION 3
   document.getElementById('total-value').innerHTML=total;


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  
  const childProduct=target.parentNode.parentNode;
  const parentProduct= childProduct.parentNode;
  parentProduct.removeChild(childProduct); 
  calculateAll();
  // console.log(childProduct);  
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
 
  const removeProductBtn =[... document.getElementsByClassName('btn btn-remove')];
  removeProductBtn.forEach(element =>{
      element.addEventListener('click',removeProduct,true);
  })

  //removeProductBtn.addEventListener('click',removeProduct(Event));
  //... your code goes here
});


