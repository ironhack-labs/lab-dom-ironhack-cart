var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let getProductItem = $product;
  let unitPrice = getProductItem.querySelector(".pu > span").innerHTML;

  let unitQuantity = Number(getProductItem.querySelector(".qty > label > input").value);
  let subTotal = unitPrice * unitQuantity;

  //console.log(subTotal);
  return getProductItem.querySelector(".subtot span").innerHTML = subTotal;

}

function calcAll() {
  // Iteration 1.2
  let productrows = document.getElementsByClassName("product");
  let subSumTotalItemsArr = [];
  for (let i=0; i<productrows.length;i++){
    updateSubtot(productrows[i]);
    subSumTotalItemsArr.push(Number(productrows[i].querySelector(".subtot span").innerText));
  }
  let totalSum = subSumTotalItemsArr.reduce((a, b) => a + b);
  return document.querySelector("h2 > span").innerHTML = totalSum;
}
$calc.onclick = calcAll;

let deletebtns = document.getElementsByClassName("btn-delete");
for(let i = 0; i < deletebtns.length; i++) {
  deletebtns[i].onclick = DeleteRow;
}
function DeleteRow(e) {
   e.currentTarget.parentElement.parentElement.remove();
}

document.getElementById("create").onclick = function() {
  let newName = document.querySelector(".new > td > input[type='text']").value;
  let newPrice = document.querySelector(".new > td > input[type='number']").value;
  
  let newRowInner = `
  <td class="name">
  <span>${newName}</span>
</td>
<td class="pu">
  $<span>${newPrice}</span>
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
`;

  let newRow = document.createElement("tr");
  newRow.classList.add("product");
  newRow.innerHTML = newRowInner;
  newRow.querySelector(".btn-delete").onclick = DeleteRow;
  document.querySelector("tbody").appendChild(newRow);

  document.querySelector('.new > td > input[type="text"]').value = "";
  document.querySelector('.new > td > input[type="number"]').value = "";
}
