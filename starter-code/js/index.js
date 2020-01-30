var $cart = document.querySelector('#cart > tbody');
var $calc = document.getElementById('calc');


function updateSubtot($product){
  // Iteration 1.1
  let price = Number($product.querySelector(`.pu`).innerText.slice($product.querySelector(`.pu`).innerText.indexOf("$")+1));
  let quantity= $product.querySelector(`.qty > label > input[type=number]`).valueAsNumber;
  let subtotal = price * quantity;
  $product.querySelector('.subtot').innerText='$'+subtotal
  return subtotal
}


function calcAll() {
  let sumTotal=0;
  console.log($cart.rows)
  for (i=0; i < $cart.rows.length ;i++){
    let product=$cart.rows[i]
    console.log(product)
    sumTotal+=updateSubtot(product);
  }
  document.querySelector("body > h2 > span").innerText = sumTotal
}
$calc.onclick = calcAll();



var createElement = document.getElementById('create')

var _handler = function (e){
    
     if (e.target.parentNode.parentNode.parentNode==document.querySelector('#cart tbody')){
      e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
     }else if(e.target==document.querySelector('#create')){
      createNewElement(e.target)
     }
     
    }



function deleteItem() {
  var childElements = document.getElementsByClassName('product');
  var buttonElements = document.getElementsByClassName('btn btn-delete');
  
  for (var i=0;i<buttonElements.length;i++) {
    buttonElements[i].addEventListener('click', _handler, false);
  }    
}

createElement.addEventListener('click',_handler,false);

// deleteItem(buttonElements, childElements);

function createNewElement(element) {
  var newName=element.parentNode.parentNode.querySelector("td:nth-child(1) > input[type=text]").value
  var newPrice=element.parentNode.parentNode.querySelector("td:nth-child(2) > input[type=number]").valueAsNumber

  
  let newElement = `<tr class="product">
  <td class="name">
    <span>${newName}</span>
  </td>

  <td class="pu">$<span>${newPrice}</span></td>

  <td class="qty">
    <label>
      <input type="number" onchange="calcAll()" value="0" min="0" />
    </label>
  </td>

  <td class="subtot">$<span>0</span></td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
</tr>`
  
  $cart.innerHTML += newElement
  deleteItem()
  
  document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value=""
  document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value=""
  
}
