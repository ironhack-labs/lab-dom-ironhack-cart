//He creado un clon de la primera fila al inicio del código para que se mantenga 
//en memoria al inicio, así en caso de que el usuario quite todos los productos
//con el botón remove, el botón de create Product siga funcionando
const firstRow = document.querySelector('.product')
let cloneRow = firstRow.cloneNode(true)

// ITERATION 1
//Recoge el valor de precio del producto y la cantidad introducida por el usuario, 
//los multiplica entre sí para calcluar el subtotal y actualiza el valor en la web y
//lo devuelve para la función calculateAll(), para sumar los subtotales
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('input').value

  const sbTot = price * quantity

  product.querySelector('.subtotal span').innerHTML = sbTot

  return sbTot
}

function calculateAll() {
  // ITERATION 2
  //Activa la función updateSubtotal para cada elemento del array creado en 
  //querySelectorAll, es decir, para cada producto
  const everyProd = document.querySelectorAll('.product')

  everyProd.forEach(function (elm) {
    updateSubtotal(elm)
  })

  // ITERATION 3
  //Se crea un nuevo array que contiene los subtotales de los productos, para luego 
  //sumarlos entre sí en un bucle for. Después, actualiza el valor Total de la web
  let arr = []
  everyProd.forEach(function (elm) {
    arr.push(updateSubtotal(elm))
  })

  let sumTot = 0
  for(let i = 0; i < arr.length; i++) {
    sumTot += arr[i]
  }

  document.querySelector('#total-value span').innerHTML = sumTot
}

// ITERATION 4
//Función   que elimina la fila
function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode
  document.querySelector('tbody').removeChild(target)

  calculateAll()
}
// ITERATION 5

function createProduct() {
  //Identificación de los valores a cambiar en el clon que se creó al inicio del código
  let clonedProductText = cloneRow.querySelector('.name span')
  let clonedQty = cloneRow.querySelector('.price span')

  //Obtención de los valores introducidos por el usuario en la nueva fila
  let newProductText = document.querySelector('.newName')
  let newPrice = document.querySelector('.newPrice')
  
  //Sustitución de los valores clonados por los valores introducidos y reinicio del valor
  //de Quantity a 0
  clonedProductText.innerHTML = newProductText.value
  clonedQty.innerHTML = newPrice.value
  cloneRow.querySelector('.quantity input').value = 0

  //Creación de la nueva fila con los valores introducidos
  document.querySelector('tbody').appendChild(cloneRow)
  
  //El botón remove de la nueva fila no funciona debido a que 
  //addEventListener sólo se ejecutó al inicio. Se añade este botón
  //reejecutando addEventListener para que tenga en cuenta este nuevo botón y ejecute 
  //así la función removeProduct
  const newRemoveBtn = cloneRow.querySelector('button')
  newRemoveBtn.addEventListener('click', removeProduct)

  //reseteo de valores de la fila de creación de nuevo producto
  newProductText.value = ""
  newPrice.value = ""

  calculateAll()
}

//Función que identifica y recoge todos los botones de la página web para vigilar cuando
//se pulsa sobre ellos, y así llamar a la función correspondiente a ese botón
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const removeBtn = document.querySelectorAll('.product .btn-remove')
  removeBtn.forEach(function(elm) {
    elm.addEventListener('click', removeProduct)
  })

  const createBtn = document.querySelector('.create-product button')
  createBtn.addEventListener('click', createProduct)
});
