// ITERATION 1


  function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');
//... your code goes here

    const price = product.querySelector('.price span').textContent;
    console.log(price)

    const quantity = product.querySelector('.quantity input').textContent;
    console.log(quantity)

    currentValue= quantity*price;
    console.log(currentValue)


    const subTotal = product.querySelector('.subtotal span');
    subTotal.innerHTML = currentValue;

}


function calculateAll() {


  // ITERATION 2
 //seleccionar el array de los nodos de productos
  const bothProducts= document.getElementsByClassName('product').textContent;

  const totalNodes = document.getElementById('total-value span').textContent;

  const subTotalBothNodes= document.getElementsByClassName('subtotal span').textContent;

  let sum = 0;


  //iterar sobre el array de los productos
  
    for (let i = 0; i < bothProducts.length; i++){
    updateSubtotal(bothProducts[i])
    sum+= subTotalBothNodes[i]
    }
  // ITERATION 3
  // seleccionar los nodos del array de subtotales

    totalNodes= subTotalBothNodes[i];
    const totalText= getElementById('total-value').textcontent(totalNodes);
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

const removeButtons = document.getElementByClass('btn-remove');
removeButtons.addEventListener('click', () =>{
  for (let i=0; i<removeButtons.length;i++){
  document.querySelector('tbody).removeChild(removeButtons)

    }
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
