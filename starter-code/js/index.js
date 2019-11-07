var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $create = document.getElementById('create')
$create.onclick = addTr
//let button =  document.getElementById('calc')
//  button.addEventListener('click', event => {
//    updateSubtot()
//  });

function updateSubtot($product) {
  // Iteration 1.1
  // let price = document.getElementsByClassName('pu')
  //     for (x=0; x < price.length ; x++){
  //       //console.log(price[x])
  //       let OnlyPrice = price[x].getElementsByTagName('span');
  //       for (y=0; y < OnlyPrice.length; y++){
  //         //console.log(OnlyPrice[y])
  //         let subTotal = document.getElementsByClassName('subtot');
  //          console.log(subTotal[0].innerHTML)
  //           for (i=0; i < subTotal.length; i++){
  //             let span = document.createElement('span')
  //             span.innerHTML = $product.value * Number(OnlyPrice[y].innerHTML)
  //             // subTotal[i].appendChild(document.createElement('span'))
  //             subTotal[i].innerHTML = ''
  //             subTotal[i].append('$',span)
  //             //console.log(subTotal[i])
  //           }
  //       }
  //     }
      //let qty = document.getElementsByClassName('qty');
      let fila = $product.parentElement.parentElement.parentElement
  fila.querySelector('td.subtot > span').innerHTML = +fila.querySelector('td.pu > span').innerHTML * +fila.querySelector('td.qty input').value
}

function calcAll() {
  let products = document.querySelectorAll('.product')
  // console.log(products[0].querySelector('td.subtot > span').innerHTML)
  let total = 0
  products.forEach((ele) => {
    total += +ele.querySelector('td.subtot > span').innerHTML
  })

  document.querySelector('#total').innerHTML = total
}
$calc.onclick = calcAll;


function addTr(){
  if(document.getElementById('nombreNuevo').value == '' || document.getElementById('precioNuevo').value == ''){
    alert('Campos incompletos')
    return
  }
  let product = {
    name: document.getElementById('nombreNuevo').value,
    price: document.getElementById('precioNuevo').value
  }
  const tr = document.createElement('tr')
  tr.setAttribute('class', 'product')

  const name = document.createElement('td')
  name.setAttribute('class', 'name')
  const span = document.createElement('span')
  span.innerHTML = product.name
  name.append(span)
  tr.append(name)

  const price = document.createElement('td')
  price.setAttribute('class', 'pu')
  const span2 = document.createElement('span')
  span2.innerHTML = product.price
  price.append('$',span2)
  tr.append(price)

  const qty = document.createElement('td')
  qty.setAttribute('class', 'qty')
  const input = document.createElement('input')
  input.setAttribute('type', 'number')
  input.setAttribute('value', 0)
  input.setAttribute('min', 0)
  input.setAttribute('onchange', 'updateSubtot(this)')
  const label = document.createElement('label')
  label.append(input)
  qty.append(label)
  tr.append(qty)


  const subTotal = document.createElement('td')
  subTotal.setAttribute('class', 'subtot')
  const span3 = document.createElement('span')
  span3.innerHTML = 0
  subTotal.append('$',span3)
  tr.append(subTotal)


  const rm = document.createElement('td')
  const button = document.createElement('button')
  button.setAttribute('class', 'btn btn-delete')
  button.setAttribute('onclick', 'deleteElement(this)')
  button.innerHTML = 'Delete'
  rm.append(button)
  tr.append(rm)
  $cart.append(tr)

  document.getElementById('nombreNuevo').value = ''
  document.getElementById('precioNuevo').value = ''
}

function deleteElement($row) {
  let toBeDeleted = $row.parentElement.parentElement
  toBeDeleted.parentElement.removeChild(toBeDeleted)
}

