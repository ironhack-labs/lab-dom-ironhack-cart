// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  const subTotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subTotal.toFixed(2);
  
  return subTotal;
 
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);


 const products = Array.from(document.querySelectorAll('.product'));
 const total = products.reduce((total, product) =>{
   return total + updateSubtotal(product)
 }, 0);
 //la siguiete linea es para que se actualice en Total en el navegador 
 document.querySelector('#total-value span').innerText = total.toFixed(2)

}

// ITERATION 4

function removeProduct(event) {
  
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  //... your code goes here
  
  target.parentNode.parentNode.remove();
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here

  const btnRemoveProducts = document.querySelectorAll('.product .action .btn ');
  for (let btnRemoveProduct of btnRemoveProducts) {
    btnRemoveProduct.addEventListener('click', (event) => removeProduct(event))
  }
});



