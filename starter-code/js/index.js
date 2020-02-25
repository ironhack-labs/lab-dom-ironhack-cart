var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $product = document.querySelectorAll("tr");


function updateSubtot($product) {
  // Iteration 1.1
  //the unit price HTML element of the product
  var price = document.querySelector(".pu span").innerHTML; //$25.00
  console.log(price);
  //the quantity HTML element of the product
  var quantity = document.querySelector(".qty label input").value; //0 (o la que introduzcas)
  console.log(quantity);
  //updates the HTML with the new product's subtotal
  var subtotal = price * quantity;
  document.querySelector(".subtot span").innerHTML = subtotal;
  var total = document.querySelector("h2 span").innerHTML = subtotal;
  console.log(subtotal);
}



function calcAll() {
  // Iteration 1.2
}


//$calc.onclick = calcAll;
$calc.onclick = updateSubtot;
//let newRow.querySelect("td tbody").cloneNode --> buscar
//onblur --> que se lance la función "updatesubtot" al salir del input de cantidad --> buscar

//creación de otro producto
function newProduct () {
  var newRow = document.createElement("tr");
  newRow.innerHTML = `<td class="name">
  <span>IronBubble-head</span>
  </td>
  
  <td class="pu">$<span>25.00</span></td>
  
  <td class="qty">
  <label>
  <input type="number" value="0" min="0" />
  </label>
  </td>
  
  <td class="subtot">$<span>0</span></td>
  
  <td class="rm">
  <button class="btn btn-delete">Delete</button>
  </td>`
  
  $cart.appendChild(newRow);
}
//newProduct();