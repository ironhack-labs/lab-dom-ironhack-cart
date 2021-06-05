// ITERATION 1

function updateSubtotal(product) {

  let total = 0;
  for (let i = 0; i < product.length; i++) {

    //dentro de producto busco a sus hijos y el precio. 
    const price = product[i].childNodes[3].querySelector('.price span').innerHTML
    //dentro de producto busco a sus hijos,y la cantidad
    const quantity = product[i].childNodes[5].querySelector('.quantity input').value;

    const subTotal = quantity * price;
    //A elementos con la class subtotal, le asigno valor de (quantity*price)
    product[i].querySelector('.subtotal span').innerHTML = subTotal;
    total += subTotal
  }
  //asigno al elemento con ID "total value" el valor de var total
  document.querySelector('#total-value span').innerHTML = total
}

//Primero entro en clase product dentro de cart y asigno el array saliente a la var result y la uso com argumento en la función updateSubTotal. 
function calculateAll() {
  const result = document.getElementById('cart').getElementsByClassName('product');
  updateSubtotal(result)
}
// ITERATION 2






//... your code goes here

// ITERATION 3


//... your code goes here


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
