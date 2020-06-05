// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //PRUEBA DE QUE EL ARRA ENTRA
  //console.log(`este debería ser el array  ${product[0]}`)

  //ALMACENAR PRECIO
  const price = document.querySelectorAll('.price span')//.innerText
  //ALMACER CANTIDAD
  const quantity = document.querySelectorAll('.quantity input')//.value

  const subtotalInput = document.querySelectorAll('.subtotal span')

  let subtotal = 0

  let total = 0


  for (let index = 0; index < product.length; index++) {

    //GENERAR SUBTOTAL DE CADA ELEMENTO
    subtotal = price[index].innerHTML * quantity[index].value
    console.log("subtotal de cada" + subtotal)
    //PINTAR SUBTOTAL EN HTML
    subtotalInput[index].innerHTML = subtotal
    //SUMAR A TOTAL
    total += subtotal
    console.log(`AHORA MISMO TU CARRITO TE SALE A: ${total}`)
  }


  //PINTAR TOTAL 
  document.querySelector('#total-value').innerHTML = (`${total} moneys`)

  return total //NECESARIO???

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product'); //LUEGO HAY QUE HACER UN FOR EACH CON ALL

  //TARGET A TODOS LOS PRODUCTOS
  const allProducts = document.querySelectorAll('.product')

  //PARA ALMACENAR TODOS LOS PRODUCTOS
  let arrayProducts = []

  //ITERAR POR NODELIST PARA ALMACENAR EN ARRAY
  for (let index = 0; index < allProducts.length; index++) {
    //const element = allProducts[index];
    arrayProducts.push(allProducts[index])
    console.log(arrayProducts)
  }



  updateSubtotal(arrayProducts);

  // ITERATION 2
  //AÑADIR NUEVA TR.PRODUCT A MANUBRIO EN EL HTML

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget; //BUSCAR DOCU CURRENTTARGET
  console.log('The target in remove is:', target);
  //... your code goes here
  const cell = target.parentNode.parentNode //¿EXISTE ALGUNA MANERA MÁS-MEJOR DE HACER ESTO?

  console.log(cell.parentNode)

  //CELL sería la TR, su parent node TBODY
  cell.parentNode.removeChild(cell)

  calculateAll()
}

// ITERATION 5

function createProduct() {

  const name = document.querySelector('.new-element-name').value
  const price = document.querySelector('.new-element-price').value

  //TODO VALIDAR ANTES DE MANDAR
  // if (price != 0 && name != " ") {
  //   //createRow(name, price)
  // } else {
  //   alert(`Please, insert a Product Name and a quantity`)
  // }
  // console.log(name)

  createRow(name, price)
}

function createRow(firstCell, secondCell) {

  //TODO PINTAR LA ROW CREADA
  //ASÍ NO ME LO PINTA EN EL HTML:
  // let newRow = document.createElement('tr')
  // newRow.setAttribute('class', 'product')

  // console.log(document.querySelector('.table-body'))
  // document.querySelector('.table-body').appendChild(newRow)

  //TAMPOCO ME PINTA
  document.querySelector('.table-body').insertRow()
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.remove')

  for (let index = 0; index < removeBtn.length; index++) {
    removeBtn[index].addEventListener('click', removeProduct)
  }

  const addElementBtn = document.querySelector('#create');
  addElementBtn.addEventListener('click', createProduct);
});
