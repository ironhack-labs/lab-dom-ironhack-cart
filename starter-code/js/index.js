var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let createButton = document.getElementById('create')
let deleteButton = document.getElementsByTagName('btn-delete')
createButton.onclick = newProd
deleteButton.onclick = deleteProd


function updateSubtot($product) {
  let price = document.querySelector('.pu span').innerText
  let cuant = document.querySelector('.qty input').value
  let subTotal = price * cuant;
  document.querySelector('.subtot span').innerHTML = subTotal
}



function newLine(){
  let newTr = document.createElement('tr')
  
  newTr.innerHTML = `
      <td class="product">
      <span>IronShirt</span>
      </td>

      <td class="pu">$
      <span>15</span>
      </td>

      <td class="qty">
      <label>
      <input type="number" value="0" min="0" />
      </label>
      </td>

      <td class="subtot">$<span>0</span></td>

      <td class="rm">
      <button class="btn btn-delete">Delete</button>
      </td>
      `
  $cart.appendChild(newTr)
  
}
newLine()


function newProd(){
  let prodName2 = document.querySelector('.new input[type="text"]')
  let cost2 = document.querySelector('.new input[type="number"]')
  let newTr2 = document.createElement('tr')

  
  newTr2.innerHTML = `
      <td class="name">
      <span>${prodName2.value}</span>
      </td>

      <td class="pu">$
      <span>${cost2.value}</span>
      </td>

      <td class="qty">
      <label>
      <input type="number" value="0" min="0" />
      </label>
      </td>

      <td class="subtot">$<span>0</span></td>

      <td class="rm">
      <button class="btn btn-delete">Delete</button>
      </td>
      `

  $cart.appendChild(newTr2)

}

function deleteProd(){
  document.getElementsByTagName("product").innerHTML = ""
  
}

function calcAll() {
  updateSubtot()
}

$calc.onclick = calcAll;