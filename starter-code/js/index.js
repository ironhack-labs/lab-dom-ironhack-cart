// Iteration 1.1

function updateSubtot($product) { // $product = tr (row) element of product
  //unit price * quantity price
  var priceUnit = $product.querySelector(".pu span").textContent;
  var quantity = $product.querySelector(".qty input").value;
  var subtotal = priceUnit * quantity;

  $product.querySelector(".subtot span").textContent = subtotal;

  return subtotal; // subtotal is a number
}

//**********************************************************************

// Iteration 1.2 + 2 + 3

function calcAll() {
  var total = 0;
  var $products = document.querySelectorAll(".product"); //need to be INSIDE the function because each time we click on button, the function will find all the products (even the ones added with the create button)
  $products.forEach($product => {
    updateSubtot($product);
    total += Number($product.querySelector(".subtot span").textContent);
  });
  document.querySelector(".total span").textContent = total;
}

var $calc = document.getElementById('calc');
$calc.onclick = calcAll; // calcAll is called ONLY when .calc (=Calculate prices button) is clicked

//**********************************************************************

// Iteration 4 - deleting a product

function deleteProduct(event) { // event = the parameter = the click
  //console.log(event.currentTarget); // it's the clicked-button (button is the currentTarget)
  const td = event.currentTarget.parentNode; // the parent node of our event.currentTarget (AKA the button) is the <td> cell
  const tr = td.parentNode; // the parent node of the <td> is the <tr> row (THAT we want to REMOVE)
  const tbody = tr.parentNode; // the parent node of the <tr> row is the <tbody> !
  tbody.removeChild(tr); // so to remove a row we select the tbody and then remove its child : the tr row !
  console.log("deleteProduct() is called");
  calcAll(); // update the total price without the removed product
}

function initDeleteButtons() {
  var $deleteButtons = document.querySelectorAll(".btn.btn-delete");
  $deleteButtons.forEach($deleteButton => {
    $deleteButton.onclick = deleteProduct;
  });
}

initDeleteButtons();

//**********************************************************************

// Iteration 5 - creating a new product

//1) assign click event to the "create" button and by clicking call a function createNewProductRow:
var $createButton = document.getElementById("create");
$createButton.onclick = createNewProductRow;

//2) that function gets the values of input "product name" and "price unit" in new variables:
function createNewProductRow() {
  var newProductName = document.querySelector("#newProduct").value;
  var newPrice = document.querySelector("#newPrice ").value;

  //3) add a row in the tbody table with innerHTML(***) by writing all the details of the tr (".product") within backticks ``and replace new values of product and price unit.
  // (***: with a += !! otherwise I will erase/replace all the content of tbody by the new product)
  var $cart = document.querySelector('#cart tbody');
  $cart.innerHTML += `
    <tr class="product">
      <td class="name">
        <span>${newProductName}</span>
      </td>

      <td class="pu">$<span>${newPrice}</span></td>

      <td class="qty">
        <label>
          <input type="number" placeholder="enter a quantity" min="0" />
        </label>
      </td>

      <td class="subtot">$<span>0</span></td>

      <td class="rm">
        <button class="btn btn-delete">Delete</button>
      </td>
    </tr>
  `;

  initDeleteButtons();
}