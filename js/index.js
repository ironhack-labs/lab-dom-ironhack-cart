// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = parseFloat(product.querySelector('.price span').innerText);


  const quantity = product.querySelector('.quantity input').valueAsNumber;

  let subtotalPrice =  price * quantity;

  const subtotalElement = product.querySelector('.subtotal span')

  subtotalElement.innerText = subtotalPrice;
}

function calculateAll() {
  
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  // ITERATION 2
  const productCollection = document.querySelectorAll('.product');
  
  productCollection.forEach( (productElm) => {
    updateSubtotal(productElm);
  });
  // ITERATION 3
  const totalCollection = (document.querySelectorAll('.subtotal span'));
 
  let totalValue = 0;

  totalCollection.forEach((product) => {
    
    totalValue += parseFloat(product.innerText);

  });
  console.log(totalValue);


  const totalDomElement = document.querySelector('#total-value span');
  
  totalDomElement.innerText = totalValue;}

// ITERATION 4

function removeProduct(event) {
 
  const target = event.currentTarget;
  
  console.log('The target in remove is:', target);
  
  target.parentElement.parentElement.remove()

  calculateAll()

}

// ITERATION 5

function createProduct() {
  let newRow = document.querySelector('create-product')

  let newProductName = document.querySelector('.create-product input[type="text"]').value

  let newProductPrice = document.querySelector('.create-product input[type="number"]').value
  
  console.log(newProductName)
  
  console.log(newProductPrice)}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  
  calculatePricesBtn.addEventListener('click', calculateAll);

   const createButton = document.getElementById('create')
  
   createButton.addEventListener('click', createProduct)});

