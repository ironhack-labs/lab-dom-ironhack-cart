var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');

// Iteration 1.1
// // 1. Create elements location that we need to target.
let rows = document.getElementsByClassName('product');
let totalPlace = document.querySelector('H2 span');
let qty = document.querySelector('.qty input');
let total = 0;
// // 2.Click event.
qty.onclick = updateSubtot;
calc.onclick = calcAll;

// // 3. Call functions onclick.
function updateSubtot(product) {
  let sum = 0;
  for (let i = 0; i < rows.length; i++) {
    let currentProduct = rows[i];
    let subTotal = currentProduct.querySelector('.subtot');
    let quantity = currentProduct.querySelector('.qty input').value;
    let currPrice = currentProduct.querySelector('.pu span').innerHTML;
    subTotal.innerHTML =
      '$' + (Number(quantity) * Number(currPrice)).toFixed(2);
    sum += Number(quantity) * Number(currPrice);
  }
  total = '$' + sum.toFixed(2);
}

// Iteration 1.2
function calcAll() {
  totalPlace.innerText = total;
}

// Iteration 2: Add another product

let createNewRow = document.getElementById('create');

createNewRow.onclick = function() {
  let newProduct = document.querySelector('#new-product').value;
  let newPrice = Number(document.querySelector('#new-price').value).toFixed(2);

  let tr = document.createElement('tr');
  tr.setAttribute('class', 'product');
  // tr.classList.add('product'); //another way of adding attribute.

  let newRowFiller = `
              <td class="name">
                <span>${newProduct}</span>
              </td>

              <td class="pu">
                $
                <span>${newPrice}</span>
              </td>

              <td class="qty">
                <label>
                  <input type="number" value="0" min="0" />
                </label>
              </td>

              <td class="subtot">
                $
                <span>0</span>
              </td>

              <td class="rm">
                <button class="btn btn-delete">Delete</button>
              </td>
        `;
  tr.innerHTML = newRowFiller;
  cart.appendChild(tr);

  tr.querySelector('.btn-delete').onclick = deleteProduct;
  tr.querySelector('.qty input').onclick = updateSubtot;
};

let buttonDelete = document.querySelector('.btn-delete');
buttonDelete.onclick = deleteProduct;
function deleteProduct(e) {
  e.target.parentElement.parentElement.remove();
}

// // This is just example if you want to generate some tags.

// let tr = document.createElement('tr');
//   tr.setAttribute('class', 'name');
// let classNames = ['name', 'pu', 'qty', 'subtot', 'rm'];
// for (let i = 0; i < classNames.length; i++) {
//   tr.appendChild(elemGenerator('', 'td'));
// }

// function elemGenerator(text, el) {
//   switch (el) {
//     case 'td':
//       let td = document.createElement('td');
//       td.textContent = text;
//       return td;
//     case 'label':
//       let label = document.createElement('label');
//       label.textContent = text;
//       return label;
//     case 'input':
//       let input = document.createElement('input');
//       input.textContent = text;
//       return input;
//     case 'button':
//       let button = document.createElement('button');
//       button.textContent = text;
//       return button;
//     case 'button':
//       let span = document.createElement('span');
//       button.textContent = text;
//       return span;
//   }
// }
