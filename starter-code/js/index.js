let cart = document.querySelector('#cart tbody');
let calc = document.getElementById('calc');
let del = document.querySelectorAll('.btn-delete')
let prod = document.querySelectorAll(".product")
let createBut = document.getElementById('create')
console.log(prod)
console.log(del)
function updateSubtot(product) {
  // Iteration 1.1
   let price = product.querySelector('.pu span').innerText
   let cant = product.querySelector('.qty input').value
   let subtot=  price * cant;
   product.querySelector('.subtot span').innerText = subtot
  
  return subtot;
}


function calcAll() {
  // Iteration 1.2
  let arrProducts = document.querySelectorAll('.product')
  let arrResult = []
  let result = 0

  arrProducts.forEach(element => {
    arrResult.push(updateSubtot(element))
    
  });

  arrResult.forEach(element => {
    result+=element
  });

  document.querySelector('h2 span').innerText= result
  
}


function deleteProduct(button){
 

  button.parentNode.parentNode.remove();
  // console.log('yay')

}

function createNewProduct() {
  
 let data = document.querySelectorAll('.new input')
 let name = data[0].value
 let pPrice = data[1].value
 let ref = document.querySelector('tbody')
  
  let newTr = document.createElement('tr')
    newTr.setAttribute('class','product')
  // let newTd = document.createElement('td')
  //   newTd.setAttribute('class','name')
  // let newSpan = document.createElement('span')
  //   newSpan.innerText=name
  
  let str = `
  <tr class="product">
  <td class="name">
    <span>${name}</span>
  </td>

  <td class="pu">
    $<span>${pPrice}</span>
  </td>

  <td class="qty">
    <label>
      <input type="number" value="0" min="0">
    </label>
  </td>

  <td class="subtot">
    $<span>0</span>
  </td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
</tr>`

newTr.innerHTML=str

ref.appendChild(newTr)

del = document.querySelectorAll('.btn-delete')

del.forEach(elem => {
  elem.onclick = e => deleteProduct(e.currentTarget)
});
}



del.forEach(elem => {
  elem.onclick = e => deleteProduct(e.currentTarget)
});
calc.onclick = calcAll
createBut.onclick = createNewProduct