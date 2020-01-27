var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
const $total = document.querySelector('body > h2 > span');
var $createBtn = document.querySelector('#create');

/*
The updateSubtot function will calculate the subtotal for a given product.

Complete the updateSubtot function that :

have 1 parameter: the tr element of the product (we can call it $product)
calculates the subtotal price, from :
the unit price HTML element of the product
the quantity HTML element of the product
updates the HTML with the new product's subtotal
returns the subtotal value
*/

function updateSubtot($product) {
  const quantity = Number($product.querySelector('.qty input').value);
  const pricePerUnit = Number($product.querySelector('.pu span').innerHTML);
  const $subTotal = $product.querySelector('.subtot span');

  $subTotal.innerHTML = quantity * pricePerUnit;

  return quantity * pricePerUnit;
}

/*
Now that updateSubtot is in place, use it in the calcAll on your product:
*/
/*
Iteration 2.
Add a second product (a second <tr class="product">).
Inside calcAll, modify your code so when Calculate prices button is clicked, it now updates subtotal for all products.
*/
function calcAll() {
  console.log('Test');
  let total = 0;

  const $productList = $cart.querySelectorAll('.product');

  $productList.forEach(product => (total += updateSubtot(product)));
  $total.innerHTML = total;
}
$calc.onclick = calcAll;

/*
Iteration 3.
Now that you have each product's subtotal, you need to calculate the total price of all the products in the shopping cart. Once you have that number, you need to display the result in the HTML
Inside calcAll function:
sum each product's subtotal to compute the total,
update the HTML with that total value.
*/
function addProductToCart(event) {
  const $name = document.querySelector('.new input[type=text]');
  const $price = document.querySelector('.new input[type=number]');

  const tr = document.createElement('tr');
  tr.className = 'product';
  tr.innerHTML = `<td class="name">
  <span>${$name.value}</span>
  </td>
  <td class="pu">$<span>${$price.value}</span></td>
  <td class="qty">
    <label>
      <input type="number" value="0" min="0" />
    </label>
  </td>
  <td class="subtot">$<span>0</span></td>
  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>`;

  $cart.appendChild(tr);
}
/*
Itertion 4.
Associate the "Delete" buttons to click events so that when you click one, it deletes that product from the list. Steps to follow:

Select all the "Delete" buttons
For each button, assign a click event that will:
select the wrapper tr that contains all the HTML for the product that should be deleted,
select the tbody parent that contains all of the product wrapper trs,
use the method removeChild we already saw in the lesson
💡 You can use e.currentTarget to access the "Delete" button that was just clicked and select the parent node of an HTML element with parentNode.
*/

function deleteProduct(event) {
  $cart.removeChild(event.target.parentElement.parentElement);
}

/* 
Iteration 5.
For the last iteration, allow the user to create new products for the shop.
Uncomment the tfoot in the markup:
Those two inputs represent the name and the unit price of the new product. Then there's the "Create" button that the user needs to click to actually add the new product to the list.

Assign a click event to the create button that will: - get the data from the inputs, - create a new product row with the data from the inputs. The structure of the new product should be the same as in Iteration #1.

⚠️ Make sure that the new product you added has the same behavior than the other products:

You should be able to calculate the product's total price.
That product's price should be included in the total price of the entire Shopping Cart.
You should be able to delete the product.
*/

$calc.onclick = calcAll;
$cart.querySelectorAll('.btn-delete').forEach(button => (button.onclick = deleteProduct));

$createBtn.onclick = addProductToCart;
