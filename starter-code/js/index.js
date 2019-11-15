var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');
///////////////////////////////////////////////////////////////////////
/////////////////////////TEACHER SOLUTION//////////////////////////////

calc.onclick = calcAll //When we click on the button 
//'Calculate Price' (id="calc") we're calling the function calcAll()

function calcAll() {
  let rows = document.getElementsByClassName('product') //Returns me an Array with how many rows I have
  //how many prodcuts I have
  let finalTotal = 0;

  for (let i = 0; i < rows.length; i++) {
    let current = rows[i]; // shows me each element inside the row <tr class='product'>
    //(<td>class='name', class='pu', class='qty', class='subtot' class='remove')

    //get the quantity
    let quantityInput = current.querySelector('.qty input');
    let qty = quantityInput.value;
    console.log(qty)
    //show the value/quantity that we give to the form in the column of quantity 

    //get the price
    let price = current.querySelector('.pu span').innerText;
    console.log(price)

    //multiply them together
    let result = price * qty
    //it works due to is a multiplication, risk operation if in the future we want to change

    let sub = current.querySelector('.subtot') //We acces to <td class='subtot'>

    sub.innerText = '$' + result.toFixed(2); //Put the result in the subtotal spot
    finalTotal += result //here!

  }

  //after the loop add up the totals and put the real totl at the bottom

  document.querySelector('h2 > span').innerText = finalTotal.toFixed(2)
}

// Delete buttons

let deletButtons = document.getElementsByClassName('btn-delete');
for (let i = 0; i < deletButtons.length; i++) {
  deletButtons[i].onclick = deleteTHIS;
}

function deleteTHIS(e) {
  e.target.parentElement.parentElement.remove();
}

// Create Buttons

document.getElementById('create').onclick = function () {
  let newProduct = document.getElementById('new-product').value
  //we add id='new-product' to input type=text (HTML)
  let newPrice = Number(document.getElementById('new-price').value).toFixed(2);
  //we add id='new-price' to input type=number (HTML)

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

let newRow = document.createElement('tr'); //We create an <tr> element 
newRow.classList.add('product'); //We assign the class="product" to <tr>
newRow.innerHTML = newRowFiller; //We fill the <tr> with our code newRowFiller

let tbody = document.querySelector('tbody');
tbody.append(newRow);

newRow.querySelector('.btn-delete').onclick = deleteTHIS;

document.getElementById('new-product').value = "";
document.getElementById('new-price').value = "";
}

