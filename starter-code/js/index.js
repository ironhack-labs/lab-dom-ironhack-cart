var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  const puClass = $product.getElementsByClassName('pu');
  const pu = puClass[0].firstElementChild.innerText;

  const qtyClass = $product.getElementsByClassName('qty');
  const qtyInput = qtyClass[0].getElementsByTagName('input');
  let qty = qtyInput[0].value;

  if (qty < 0) {
    qty = 0;
  }

  let subTotal = pu * qty;
  let subTotalFormatted = 0;

  if (subTotal !== 0) {
    subTotalFormatted = parseFloat(Math.round(subTotal * 100) / 100).toFixed(2); 
  }

  const subtotClass = $product.getElementsByClassName('subtot');
  subtotClass[0].firstElementChild.innerText = subTotalFormatted;

  return subTotal;
}

function calcAll() {
  // Iteration 1.2
  let productList = $cart.getElementsByClassName('product');
  let total = 0;
  let totalFormatted = 0;

  for(let i = 0; i < productList.length; i++) {
    // Iteration 3
    total += updateSubtot(productList[i]);
  }

  if (total !== 0) {
    totalFormatted = parseFloat(Math.round(total * 100) / 100).toFixed(2); 
  }

  const totalElement = document.getElementsByTagName('h2');
  totalElement[0].firstElementChild.innerText = totalFormatted;
}

$calc.onclick = calcAll;

// Iteration 2
function addNewProduct(productName, priceUnit) {
  const tr = document.createElement('tr');
  let priceUnitFormatted = 0;

  if (priceUnit !== 0) {
    priceUnitFormatted = parseFloat(Math.round(priceUnit * 100) / 100).toFixed(2); 
  }

  tr.setAttribute('class', 'product');
  tr.innerHTML = `<td class="name">
          <span>${productName}</span>
        </td>
    
        <td class="pu">
          $<span>${priceUnitFormatted}</span>
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
        </td>`;
  
  const products = $cart.getElementsByClassName('product');
  const posLastProduct = products.length - 1;
  lastProduct = products[posLastProduct];
  lastProduct.insertAdjacentElement('afterend', tr);
}

// Iteration 4
function letDelete() {
  const buttonsDelete = $cart.getElementsByClassName('btn btn-delete');

  for (let i = 0; i < buttonsDelete.length; i++) {
    buttonsDelete[i].onclick = (e) => {
      const rowToDelete = e.currentTarget.parentNode.parentNode;

      $cart.removeChild(rowToDelete);
    }
  }
}

// Iteration 5
function letCreate() {
  const buttonCreate = document.getElementById('create');
  
  buttonCreate.onclick = () => {
    const classNew = document.getElementsByClassName('new')[0];
    const newInputs = classNew.getElementsByTagName('input');
    let productName = newInputs[0].value;
    let productPrice = newInputs[1].value;

    if (!productName || !productPrice || productPrice == 0) {
      alert("The fields cannot be empty nor the unit price be 0.");
    }
    else {
      newInputs[0].value = null;
      newInputs[1].value = null;
  
      addNewProduct(productName, productPrice);
      letDelete();
    }
  }
}

addNewProduct('IronShirt', '15.00');
letDelete();
letCreate();