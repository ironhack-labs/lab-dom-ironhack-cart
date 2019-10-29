// var $cart = document.querySelector("#cart tbody");
var calc = document.getElementById("calc");

// Iteration 1.1

calc.onclick = function() {
  let rows = document.getElementsByClassName("product");

  let total = 0;

  for (let i = 0; i < rows.length; i++) {
    let unitPrice = rows[i].querySelector(".pu > span").innerText;

    let quantity = rows[i].querySelector(".qty > label > input").value;

    let subTotal = rows[i].querySelector(".subtot > span");

    let newSubTotal = unitPrice * quantity;

    subTotal.innerText = newSubTotal;

    total += newSubTotal;
  }

 document.querySelector("h2 > span").innerText = total;
  
};


let deleteBtns = document.getElementsByClassName('btn-delete');

for(let i=0; i<deleteBtns.length; i++ ) {

deleteBtns[i].onclick = deleteTheRow;

}

function deleteTheRow(event) {

  event.currentTarget.parentElement.parentElement.remove();

}

document.getElementById('create').onclick = function() {

  let newName = document.querySelector('.new > td > input[type="text"]').value;

  let newPrice = document.querySelector('.new > td > input[type="number"]').value;
  
  let newRowInnerHTML = `
    <td class="name">
      <span id="productName">${newName}</span>
    </td>
  
    <td class="pu">
      $<span id="price">${newPrice}</span>
    </td>
  
    <td class="qty">
      <label>
        <input id="quantity" type="number" value="0" min="0">
      </label>
    </td>
  
    <td class="subtot">
      $<span id="subTotal">0</span>
    </td>
  
    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>
  `
  
  let newRow = document.createElement('tr');
  newRow.classList.add('product');
  
  newRow.innerHTML = newRowInnerHTML;
  
  // document.querySelector('btn-delete').onclick = deleteTheRow;
  
  document.querySelector('tbody').appendChild(newRow);
  

}


