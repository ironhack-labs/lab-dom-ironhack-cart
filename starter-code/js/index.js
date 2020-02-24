let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');
let $total = document.querySelector("#total");
let $deleteButtons = document.querySelectorAll(".btn-delete");
let $table=document.getElementById("bodyrow")
let $create=document.getElementById("create");
function updateSubtot($product) {
  let unitPrice = $product.querySelectorAll(".pu span")[0].innerHTML;
  let quantity = $product.querySelectorAll(".qty input")[0].value;

  let subTotal = $product.querySelectorAll(".subtot span")[0]
  subTotal.innerHTML = quantity * unitPrice;

  document.querySelectorAll(".subtot span").innerHTML = subTotal;

  return quantity * unitPrice;
}


function calcAll() {
  let products = document.querySelectorAll(".product");
  let totals = 0;
  for (let i = 0; i < products.length; i++) {
    totals += updateSubtot(products[i]);
  }
  $total.innerHTML = totals
}


  for (let i = 0; i < $deleteButtons.length; i++) {
    $deleteButtons[i].addEventListener("click", function (event) {
      let selTr = $deleteButtons[i].closest("tbody tr"); 
      $table.removeChild($table.childNodes[i])
    
    })
  }

  function createRowMethod(name, price){
    let $row = document.querySelector("tbody tr").cloneNode(true);
    $row.querySelector(".name span").innerHTML = name;
    $row.querySelector(".pu span").innerHTML = price;
    return $row;
  }
  
$create.onclick = createRowMethod
$calc.onclick = calcAll;
$total.onclick = calcAll;

// function createRow(price, name){
//   let $tableRow = document.createElement("tr");
//   $tableRow.innerHTML = `
//     <td class="name">
//       <span>${name}</span>
//     </td>
//     <td class="pu">$<span>${price}</span></td>
//     <td class="qty">
//       <label>
//         <input type="number" value="0" min="0" />
//       </label>
//     </td>
//     <td class="subtot">$<span>0</span></td>
//     <td class="rm">
//       <button class="btn btn-delete">Delete</button>
//     </td>
//   `
// }
