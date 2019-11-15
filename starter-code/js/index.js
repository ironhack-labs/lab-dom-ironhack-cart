var cart = document.querySelector('#cart tbody');
var calculate = document.getElementById('calc');

function updateSubtot() {
  // Iteration 1.1
  let products = document.getElementsByClassName("product");
  for(let i = 0; i < products.length; i++){
    let product = products[i];
    let quanity = product.querySelector(".qty input").value;
    let price = product.querySelector(".pu span").innerText;
    let total = price * quanity;
    let subtotal = product.querySelector(".subtot");
    subtotal.innerText = "$" + total.toFixed(2);
  }
}

function calcAll() {
  // Iteration 1.2
  updateSubtot();
  let allSubtotals = document.getElementsByClassName("subtot");
  let grandTotal = 0;
  for(let i = 0; i < allSubtotals.length; i++){
    grandTotal = grandTotal + parseFloat(allSubtotals[i].innerHTML.replace("$",""));
  }
  document.querySelector(".cart-total").innerHTML = grandTotal.toFixed(2);
}

calculate.onclick = calcAll;


let deleteButtons = document.getElementsByClassName('btn-delete');
for(let i =0; i<deleteButtons.length; i++){
  deleteButtons[i].onclick = deleteTHIS;
}

function deleteTHIS(e){
  e.target.parentElement.parentElement.remove();
  calcAll();
}

document.getElementById('create').onclick = function(){
  let newProduct = document.getElementById('new-product').value;
  let newPrice = Number(document.getElementById('new-price').value).toFixed(2);

  let newRowFiller = `
            <td class="name">
              <span>${newProduct}</span>
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
  `

  let newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = newRowFiller;

  let tbody = document.querySelector('tbody');
  tbody.append(newRow);

  newRow.querySelector('.btn-delete').onclick = deleteTHIS;

  document.getElementById('new-product').value = "";
  document.getElementById('new-price').value = "";
}