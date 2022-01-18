// ITERATION 1


  function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');
//... your code goes here

    const price = product.querySelector('.price span').textContent;
    console.log(price)

    const quantity = product.querySelector('.quantity input').value;
    console.log(quantity)

    currentValue= quantity*price;
    console.log(currentValue)


    const subTotal = product.querySelector('.subtotal span');
    subTotal.innerHTML = currentValue;
    return currentValue



}

function calculateAll() {


  // ITERATION 2
 //seleccionar el array de los nodos de productos

function calculateAll() {

  const bothProducts = document.querySelectorAll('.product');

  let sum = 0;

  for (let i = 0; i < bothProducts.length; i++) {

  let subtotal = updateSubtotal(bothProducts[i]);
  bothProducts[i].querySelector('.subtotal span').textContent = subtotal;
  sum += subtotal;

  }
  document.querySelector('#total-value span').textContent = sum;
}





// ITERATION 3
// seleccionar los nodos del array de subtotales


// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

const removeButtons = document.getElementByClass('btn-remove');
removeButtons.addEventListener('click', () =>{
  for (let i=0; i<removeButtons.length;i++){
    document.querySelector('tbody').removeChild(removeButtons)
    }
  })
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  console.log("prueba");
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
