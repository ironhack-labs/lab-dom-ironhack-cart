var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');



function updateSubtot($product) {
  let priceUnit= $product.querySelector('.pu span').innerHTML;
  let theQuantity= $product.querySelector('.qty input').value;
  let subTotal= $product.querySelector('.subtot span');
   subTotal.innerHTML= Number(priceUnit *theQuantity);
   return subTotal
 }

 
 function createRow(){
  const name = document.querySelector('.new .name').value
  const price = document.querySelector('.new .price').value
  let table = document.querySelector("tbody")
  let newRow = document.querySelector("tbody tr").cloneNode(true)
  newRow.querySelector(".name span").innerHTML = name;
  newRow.querySelector(".pu span").innerHTML = price;
  table.appendChild(newRow)
  setDeleteEventListener()
}


/*function newProduct(){
  let filaNueva = document.createElement('tr');
  filaNueva.innerHTML =  `<tr class="product">
  <td class="name">
    <span>Wetsuit</span>
  </td>

  <td class="pu">$<span>125.00</span></td>

  <td class="qty">
    <label>
      <input type="number" value="0" min="0" />
    </label>
  </td>

  <td class="subtot">$<span>0</span></td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
</tr>`

$cart.appendChild(filaNueva)
}
newProduct();*/

//let totalPrice = document.querySelector('h2 span').innerHTML
//totalPrice += updateSubtot(filas[i].subTotal)

function calcAll() {
  let filas = document.querySelectorAll('.product')
  let totalPrice = document.querySelector('h2 span')
  let count = 0;
  for (let i = 0; i < filas.length; i++){
    count += parseInt(updateSubtot(filas[i]).innerHTML)   
    }
    totalPrice.innerHTML=count
  return totalPrice 
}

$calc.onclick = calcAll;
