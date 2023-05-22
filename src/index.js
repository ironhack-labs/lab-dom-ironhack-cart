// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  updateSubtotal(products);
  // end of test
  let totalValue = 0;
  [...products].forEach((e)=>{
    const priceTag = e.querySelector('.price > span');
    const priceValue = Number(priceTag.textContent);
    const quantyTag = e.querySelector('.quantity > input');
    const quantity = Number(quantyTag.value);
    const subTotalValue = priceValue * quantity;
  
    const subTotalTag = e.querySelector('.subtotal > span');
    subTotalTag.textContent = subTotalValue.toFixed(2);
    
    //Totales
    
    totalValue = totalValue + Number(subTotalValue.toFixed(2))
  })
  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value > span')
  total.textContent = totalValue.toFixed(2);

}

// ITERATION 4

const buttonRemove = document.querySelectorAll('.action > button');
[...buttonRemove].forEach(e=>e.addEventListener('click',removeProduct));

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  event.target.closest('tr').remove();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProductsection = document.querySelector('.create-product')
  //ME QUEDÉ AQUÍ
  //const productName = newProductsection.querySelector
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
