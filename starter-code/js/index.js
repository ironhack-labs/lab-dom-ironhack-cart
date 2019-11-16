//DOM-Variable attributions
let $cart = document.querySelector("#cart tbody");
let $calc = document.getElementById("calc");
let $delete = document.querySelectorAll(".btn-delete");
let $createRow = document.getElementById("create");

//Function to be called when 'Calculate prices' button is clicked
function calcAll() {
  //Grabbing only the product rows from DOM, and setting up cart total
  let productRows = document.getElementsByClassName("product");
  let cartTotal = 0;

  //Looping through all rows from within shopping cart to update subtotals
  for (let i = 0; i < productRows.length; i++) {
    let currentProduct = productRows[i]; //Needed to loop one row at a time
    let productQuantitity = Number(currentProduct.querySelector(".qty input").value);
    let productPrice = Number(currentProduct.querySelector(".pu span").innerText);
    let currentSubtot = currentProduct.querySelector(".subtot");
    let updatedSubtot = productQuantitity * productPrice;        currentSubtot.innerHTML = "$" + updatedSubtot.toFixed(2);

    //Tallying up total amount after iterating through each row
    cartTotal += Number(updatedSubtot.toFixed(2));
  };
  //Manipulating DOM to show final cart total to customer
  document.querySelector("h2 > span").innerHTML = cartTotal;
};

//Function to be called when 'Delete' button is clicked
function deleteRow() {
  for (let i = 0; i < $delete.length; i++) {
  $delete[i].onclick = rowDelete; //Picks which row to be deleted
  };
  function rowDelete(row) {
    row.target.parentElement.parentElement.remove(); //Deletes row picked
    calcAll();
  };
};

//Function to be called when 'Create' button is clicked
function createRow() {
  let newProductName = document.querySelector("tfoot td input[type='text']").value;
  let newProductPrice = Number(document.querySelector("tfoot td input[type='number']").value).toFixed(2);
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td class="name">
      <span>${newProductName}</span>
    </td>        
    <td class="pu">
      $<span>${newProductPrice}</span>
    </td>      
    <td class="qty">
      <label>
        <input type="number" value="0" min="0">
      </label>
    </td>  
    <td class="subtot">
      $<span>0.00</span>
    </td>
    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>
    `;
  let tbody = document.querySelector("tbody");
  tbody.append(newRow);
  newRow.classList.add("product");
  // newRow.querySelector(".btn-delete").onclick = deleteRow();
  document.querySelector('body').addEventListener("click", function(event) {
    if (event.target.classList[1] ==="btn-delete") {
      event.target.parentElement.parentElement.remove();
      calcAll();
    }
  });
  document.querySelector("tfoot td input[type='text']").value = "";
  document.querySelector("tfoot td input[type='number']").value = "";
};


//Event listeners
$calc.onclick = calcAll;
$delete.onclick = deleteRow();
$createRow.onclick = createRow;

