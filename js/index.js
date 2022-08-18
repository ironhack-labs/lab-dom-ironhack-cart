// ITERATION 1

//const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //alert("Calculate Prices clicked!")
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')
  const resultado = price.innerText * quantity
  subtotal.innerText = resultado
  return resultado
  console.log(subtotal)
 

/*   
  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  });*/

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let productFila = document.getElementsByClassName('product')
  let sum = 0
  for(let i = 0; i < productFila.length; i++){
      sum += Number(updateSubtotal(productFila[i]))
      console.log(sum)
  }
  

 

  // ITERATION 3
  //... your code goes here
  let calculoFinal = document.querySelector('#total-value span')
  calculoFinal.innerText = Number(sum)
 console.log(sum)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove()
  
  console.log(target.parentNode.parentNode)
  calculateAll()

}

const removed = document.getElementsByClassName('btn-remove');
for (let i = 0; i < removed.length; i++) {
  removed[i].addEventListener('click', removeProduct);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const inputText = document.getElementById('input-text')
  const inputNumber = document.getElementById('input-number')
  const boton = document.getElementsByClassName('btn-crear')

  if(inputText.value && inputText.value > 0){
    const fila = document.createElement('tr');
    const celda = document.createElement('td');
    const celda2 = document.createElement('td');
    const celda3 = document.createElement('td');
    const inputT = document.createElement('input');
    const celda4 = document.createElement('td');
    const celda5 = document.createElement('td');
    const button = document.createElement('button');

    fila.classList.add('product');
    fila.appendChild(newProductName);
    fila.appendChild(newProductPrice);
    fila.appendChild(newProductQuantity);
    fila.appendChild(newProductSubtotal);
    fila.appendChild(newProductAction);
    celda.innerHTML = `<span>${boton.value}</span>`;
    newProductPrice.innerHTML = `$<span>${boton.value}</span>`;
    celda2.appendChild(inputNumber);
    celda4.innerHTML = `$<span>0</span>`;
    celda5.appendChild(button);
    button.innerText = 'Remove';
  }
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const crearProducto = document.getElementById('create');
  crearProducto.addEventListener('click', createProduct);
});

