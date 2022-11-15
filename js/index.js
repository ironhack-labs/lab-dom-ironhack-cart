// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerText);
  // console.log(price);
  const quantity = Number(product.querySelector('.quantity input').value);
  // console.log(quantity);
  // let subtotal = product.querySelector('.subtotal span').innerText;
  let subtotal1 = price * quantity;
  // console.log(subtotal1);
  product.querySelector('.subtotal span').innerText = subtotal1;
  return subtotal1;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const subTotalArray = [];
  const holdSubTotal = document.getElementsByClassName('product');
  for (element of holdSubTotal) {
    updateSubtotal(element);
    //console.log(holdSubTotal[0].innerHTML);
    subTotalArray.push(updateSubtotal(element));
    // console.log(subTotalArray);
    // let totalHolder = subTotalArray.reduce((total, currentValue) => total + currentValue, 0).innerText;
  }
  // const subTotalArray = Number([...holdSubTotal].innerText);
  // console.log(totalHolder);
  // return totalHolder

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  let calculateTotal = 0;
  for (let i = 0; i < subTotalArray.length; i++) {
    calculateTotal += Number(subTotalArray[i]);
  }
  total.innerHTML = calculateTotal;
}
// const total = numbers.reduce((accumulator, currentValue) => {
//   console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
//   return accumulator + currentValue;
// }, 0)

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  let parent = document.getElementsByTagName('tbody')[0];
  parent.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let tablebody = document.querySelector('#cart tbody');
  const productRow = document.createElement('tr');
  productRow.setAttribute('class', 'product');
  const productName = document.querySelector(
    '.create-product td input[type = text]'
  );
  const price = document.querySelector(
    '.create-product td input[type = number]'
  );
  productRow.innerHTML += `<td class="name">
        <span>${productName.value}</span>
        </td>
        <td class="price">$<span>${Number(price.value).toFixed(2)}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
      </tr>
    `;
  tablebody.appendChild(productRow);
  productName.value = '';
  price.value = '0';
  productRow
    .querySelector('.btn-remove')
    .addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
