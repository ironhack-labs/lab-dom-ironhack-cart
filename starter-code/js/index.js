var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');
//var rm = document.querySelectorAll('#cart tbody .rm');
var create = document.querySelector('.new');

calc.onclick = calcAll;
clickRemove();
create.lastElementChild.onclick = createItem;

// assigning a onclik event to every delete btn
function clickRemove() {
  let rm = document.querySelectorAll('#cart tbody .rm');
  [...rm].map( el => { el.onclick = removeItem })
}


function updateSubtot(product) {
  // Iteration 1.1
  let subTotalsArr = [];

  for ( let i = 0; i < product.length; i++ ) {
    // calculating the subtotals
    let price = Number(product[i].querySelector('.pu').innerText);
    let qty = product[i].querySelector('.qty input').value;
    let subTotal = product[i].querySelector('.subtot');
    let result = price * qty;
    // showing the subtotals
    subTotal.innerText = result;
    // adding subtotals to the array that's gonna be returned
    subTotalsArr.push(result);
  }

  return subTotalsArr;  
}

function calcAll() {
  // Iteration 1.2
  let subTotals = updateSubtot(cart.children);

  // adding the sub-totals to get the total
  let total = subTotals.reduce( ( acc, cur) => acc + cur );
  // updating the DOM element with the total
  document.querySelector('h2 span').innerText = total;
}

function removeItem( event ) {
  let product = event.path[2];
  product.parentNode.removeChild(product);
  calcAll();  
}

function createItem() {
  let prodName = create.querySelector('td:nth-child(1)>input').value;
  let prodPrice = create.querySelector('td:nth-child(2)>input').value;

  let newItem = `
  <tr class="product">
    <td class="name">
      <span>${prodName}</span>
    </td>

    <td class="pu">
      <span>${Number(prodPrice).toFixed(2)}</span>
    </td>

    <td class="qty">
      <label>
        <input type="number" value="0" min="0">
      </label>
    </td>

    <td class="subtot">
      <span>0</span>
    </td>

    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>
  </tr>
  `
  create.querySelector('td:nth-child(1)>input').value = '';
  create.querySelector('td:nth-child(2)>input').value = '';
  cart.insertAdjacentHTML('beforeend', newItem);
  clickRemove();
}

