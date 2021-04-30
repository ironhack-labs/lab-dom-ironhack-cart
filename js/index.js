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
  const product = [...document.getElementsByClassName('product')]
  //Crear un nuevo Array para después iterar sobre cada elemento
  let total = 0;
  product.forEach((product) => {
    total += updateSubtotal(product);
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

const remove = [...document.getElementsByClassName('btn-remove')];
console.log(remove)

function removeProduct(event) {
  const target = event.target.parentNode.parentNode.remove();
  console.log('The target is', target)
}

// ITERATION 5

function createProduct() {
  const inputs = document.querySelectorAll('.create-product td input');
  console.log('Que es esto:', inputs)
  const container = document.querySelector('tbody')
  console.log(container)
  const tr = document.createElement('tr')
  console.log(tr)
  tr.className = 'product'
  tr.innerHTML = `
  <td class="name">
     <span>${inputs[0].value}</span>
  </td>
  <td class="price">$<span>${inputs[1].value}</span></td>
  <td class="quantity">
     <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0.00</span></td>
  <td class="action">
     <button class="btn btn-remove">Remove</button>
 </td>
  `
  container.appendChild(tr)
  const button = tr.querySelector('button')
  console.log('si funciona:',button)
  button.onclick = removeProduct
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  remove.forEach(button => {
    button.onclick = removeProduct;
  })
  const create = document.getElementById('create');
  create.addEventListener('click', createProduct);
});
