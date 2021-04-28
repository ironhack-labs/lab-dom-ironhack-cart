// ITERATION 1 ------ Completed

function updateSubtotal(product) {
  // .innerHTML fue añadido para conseguir el número
  let price = product.querySelector('.price span').innerHTML; 
  // .value consigue el valor dentro de input - value
  let quantity = product.querySelector('.quantity input').value; 
/*
Anteriormente he intentado con lo siguiente pero regresa un Nan:
let subtotal = price.innerHTML * quantity; 
*/
let subtotal = price * quantity;

// El uso del toFixed para conseguir dos números después del decimal
product.querySelector('.subtotal span').innerHTML = subtotal.toFixed(2)

return subtotal
}

function calculateAll() {
  // ITERATION 2 & 3 ----- Completed

  //Recibir los productos
  const getProducts = document.getElementsByClassName('product');
  //Crear un nuevo Array para después iterar sobre cada elemento
  const product = [...getProducts]
  let total = 0;
  product.forEach((i) => {
    total = total + updateSubtotal(i);
  });
  //Actualizar el valor del ID total-value - span tag
  document.querySelector("#total-value span").innerHTML = total
}

/* 

La iteración 2 funciona correctamente: 

function calculateAll() {
  // ITERATION 2 
  //Producto número 1 -> Clase Product, elemento 1
  const product1 = document.getElementsByClassName('product')[0];
  updateSubtotal(product1);
  //Producto número 2 -> Clase Product, elemento 2
  const product2 = document.getElementsByClassName('product')[1];
  updateSubtotal(product2);
 */

/*

 La iteración 3 no regresaba el valor como número
 
 //ITERATION 3

  const getTotal = [...document.getElementsByClassName('subtotal')]
  const total = getTotal.reduce((acc, item) => {
    return acc += Number(item.innerText)
  }, 0)
  console.log(total)
  return total
}

*/

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
