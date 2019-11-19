let cart = document.querySelector('#cart tbody');
let calc = document.getElementById('calc');

calc.onclick = calcAll;

function calcAll() {

  let rows = document.getElementsByClassName('product');
  let finalTotal = 0;

  for(let i=0;i<rows.length;i++){
    let current = rows[i];


      // get the quantity
  let quantityInput = current.querySelector('.qty input');
  let qty = quantityInput.value;
  console.log(qty)

  // get the price
  let price = current.querySelector('.pu span').innerText;
  console.log(price)

  // multiply them together
  
  let result = price * qty;
  // risky operation, multiplying strings, change to numbers if operater changes in the future

  let sub = current.querySelector('.subtot')

  sub.innerText = '$'+result.toFixed(2);
  finalTotal += result;
 
  // put them in the subtotal spot
  }

  // after the loop add up the totals and put the real total at the bottom

  document.querySelector('h2 > span').innerText = finalTotal.toFixed(2)
}

let deleteButtons = document.getElementsByClassName('btn-delete');
for (let i =0; i<deleteButtons.length; i++){
  deleteButtons[i].onclick = deleteTHIS;
}

function deleteTHIS(e){
  e.target.parentElement.parentElement.remove();
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