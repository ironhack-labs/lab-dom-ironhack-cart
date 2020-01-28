const $table = document.getElementById('cart');
const $calc = document.getElementById('calc');
const $total = document.querySelector('h2 span');
const $cartID = document.getElementById('cart');
const $body = document.querySelector('#cart tbody');
const $create = document.getElementById('create');
const $input = document.querySelectorAll('.new input')
console.log($input);

function updateSubtot($product) {
  // Iteration 1.1
  let productPrice = Number($product.querySelector('.pu span').innerHTML);
  console.log($product.querySelector('.pu span'));
  let productQuantity = Number($product.querySelector('.qty label input').value);
  console.log(productQuantity);
  let subTotal = productPrice * productQuantity;
  $product.querySelector('.subtot span').innerHTML = subTotal;
  console.log($product.querySelector('.subtot span'));
  console.log(subTotal);
  return subTotal;

}

// Calculate the total price of the shopping cart

function calcAll(subTotalResults) {
  // Iteration 1.2\
  let $cart = document.querySelectorAll('#cart tbody .product');
  console.log($cart)
  let totalResult = 0;
  for (let i = 0; i < $cart.length; i++) {
    let result = 0;
    result = subTotalResults($cart[i]);
    totalResult += result;

  }

  $total.innerHTML = totalResult;

  return totalResult;

}

// Insert new row with a product in the shopping cart

function createProduct(name, price) {

  const row = $table.insertRow(1);
  const body = row.parentElement;
  domString = `<tr class="product"><td class="name"><span>${name}</span></td><td class="pu">$<span>${price}</span></td><td class="qty"><label>
<input type="number" value="1" min="0"></label></td><td class="subtot">$<span>0</span></td><td class="rm">
<button class="btn btn-delete">Delete</button></td></tr>`
  body.insertAdjacentHTML('afterbegin', domString)


}


// calculate prices when button is clicked

$calc.addEventListener('click', function () {

  calcAll(updateSubtot);

})

// delete product when delete button is clicked

$cartID.addEventListener('click', function (e) {
  let deleteRow;

  if (e.target.className === 'btn btn-delete') {
    ;

    deleteRow = e.target.parentElement.parentElement;
    $body.removeChild(deleteRow);

  }
})

// create product when button create is clicked

$create.addEventListener('click', function (e) {

  const name = $input[0].value;
  const price = Number($input[1].value);

  console.log(name)
  console.log(price)

  if (name && isNaN(name) && price > 0) {

    createProduct(name, price);

  } else {

    alert('please fill in a valid name and price for the product')


  }


})