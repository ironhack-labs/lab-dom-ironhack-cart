// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let totalAmount = price*quantity;
  product.querySelector('.subtotal span').innerHTML = totalAmount; 
   
    return totalAmount

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0
  let listedItems = document.getElementsByClassName('product');  
  for(let price of listedItems){
    updateSubtotal(price)
    total += updateSubtotal(price)
  }

  
  // ITERATION 3
 
 
 //let priceList =  document.getElementsByClassName('subtotal span').innerHTML;
//total += priceList
  document.querySelector('#total-value span').innerText = total


}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget; 
  console.log('The target in remove is:', target);
  //... your code goes here

  target.parentNode.parentNode.remove()
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here

 const productContainer = document.querySelector('.product');
 const product = document.createElement('tr')
 product.classList.add('product') 
 productContainer.append(product)

 const productNameInput = document.querySelector('input[name="task"]');
 const productName = productoInput.value;

 todoList.append(task);
  




 
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const remove = document.getElementsByClassName('btn btn-remove');
  for(let value of remove){
    value.addEventListener('click', removeProduct);
  }
  const addProducts = document.getElementById('create')
  addProducts.addEventListener('click', createProduct)

  //... your code goes here
});
