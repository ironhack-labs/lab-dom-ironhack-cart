// TODO final 3 iteración con return
//let total = calculateAll()
//function showTotal(total)...
//pintar el total mediante return


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
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const cell = target.parentNode.parentNode //¿EXISTE ALGUNA MANERA MÁS-MEJOR DE HACER ESTO?
  // console.log(cell.parentNode)


  // //CELL sería la TR, su parent node TBODY
  // cell.parentNode.removeChild(cell)

  // //COMPROBAR QUE QUEDE AL MENOS UNA CELDA
  // let rowNum = document.querySelectorAll('.table-body tr')
  // rowNum = rowNum.lenght
  // console.log("NUEMRO DE ROWS QUE QUEDAN" + rowNum)
  // if (rowNum == 2) {
  //   alert('wARNING: let at least one product on the table')
  // } else {
  //   cell.remove();
  // }

  cell.remove();
  calculateAll()
}

// ITERATION 5

function createProduct() {

  const name = document.querySelector('.new-element-name').value
  const price = document.querySelector('.new-element-price').value

  createRow(name, price)
}

function createRow(firstCell, secondCell) {
  //VALIDACIÓN ----- (QUIZÁ DEBERÍA IR EN CREATEPRODUCT?)
  if (firstCell == "") {
    alert('Please, enter a Product Name')
  } else {
    //CREAR TR METODO CLONE
    let originalTr = document.querySelector('.product')
    let clonedTr = originalTr.cloneNode(true)
    document.querySelector('.table-body').appendChild(clonedTr)

    //CARGAR INPUT
    document.querySelector('.name span').innerHTML = firstCell
    document.querySelector('.price span').innerHTML = secondCell

    //FORZAR EL REMOVEBTN AQUÍ PARA QUE IDENTIFIQUE LOS BTNS NUEVOS
    const removeBtn = document.querySelectorAll('.remove')
    for (let index = 0; index < removeBtn.length; index++) {
      removeBtn[index].addEventListener('click', removeProduct)
    }
  }


  //*--- INTENTOS QUE LUEGO ERAN INNECESARIOS!!! ---*/
  //CREAR TD > CON FOR
  //const tdClassNames = ['name', 'price', 'quantity', 'subtotal', 'action']
  //GENERAR TANTAS TD COMO CLASES HAYA Y ASIGNARLAS
  // for (let index = 0; index < tdClassNames.length; index++) {
  //   //let className = "tdClassNames[0]"
  //   let newTd = document.querySelector('.product').insertCell()
  //   newTd.setAttribute('class', tdClassNames[index])
  //   console.log(`Creada la celda de ${tdClassNames[index]}`)
  // }
  // CREAR TD > CON METODO CLONE
  //let original = document.querySelectorAll('td')
  //for (let index = 0; index < 5; index++) {
  //   let cloned = original[index].cloneNode(true)
  //   console.log(cloned)
  //   document.querySelector('.product').appendChild(cloned)
  // }
  //CREAR TR
  // let newRow = document.createElement('tr')
  // newRow.setAttribute('class', 'product')
  // document.querySelector('.table-body').appendChild(newRow)
  //CREAR TR METODO INSERTROW
  // let newTr = document.querySelector('.table-body').insertRow()
  // newTr.setAttribute('class', 'product')
  // newTr.setAttribute('class', 'newTr')
  // document.querySelector('.table-body').appendChild(newTr)


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //PROBLEMA PARA PASALRE LOS BOTONES NUEVOS
  const removeBtn = document.querySelectorAll('.remove')
  for (let index = 0; index < removeBtn.length; index++) {
    removeBtn[index].addEventListener('click', removeProduct)
  }

  const addElementBtn = document.querySelector('#create');
  addElementBtn.addEventListener('click', createProduct);
});
