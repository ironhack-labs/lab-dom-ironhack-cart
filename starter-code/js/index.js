
function updateProductPrice(index) {
  let prodPrice = document.getElementsByClassName('productPrice');
  let prodQty = document.getElementsByClassName('qty');
  let prodTotal = document.getElementsByClassName('qtyTotal');
  return (prodTotal[index].innerText = Number(prodPrice[index].innerHTML) * prodQty[index].value).toFixed("2");

}

function updateOnclickEvents() {
  let prodQty = document.getElementsByClassName('qty');

  for (i=0; i < prodQty.length; i++) {
    prodQty[i].addEventListener("input", () => updateProductPrice(i));
    console.log(i);
  }
}


  // First product 
  // let prod1price = document.getElementById("prodOnePrice");
  // let prod1qty = document.getElementById("prodOneInput");
  // let prod1Total = document.getElementById("totalPrice1");
  // prod1Total.innerHTML = (Number(prod1price.innerHTML) * prod1qty.value).toFixed('2');
  
  // // Second product
  // let prod2price = document.getElementById("prodTwoPrice");
  // let prod2input = document.getElementById("prodTwoInput");
  // let prod2total = document.getElementById("totalPrice2");
  // prod2total.innerHTML = (Number(prod2price.innerHTML) * prod2input.value).toFixed('2');
// }
updateOnclickEvents();


function calculateTotalPrice() {
  // Declaring variables
  let totalsDisplay = document.getElementById("totalPrice");
  let total = 0
  let qtyTotals = document.getElementsByClassName("qtyTotal");
  // Looping through the "qtyTotals" array 
  for (i=0; i < qtyTotals.length; i++) {
    total += Number(qtyTotals[i].innerHTML);
  }
  totalsDisplay.innerHTML = total.toFixed('2');
}
function addRow() {
  let newProdName = document.querySelector("#newProductName");
  let newProdPrc = document.querySelector("#newPrice");
  if (newProdName.value === "" || newProdPrc.value === "") {
    alert("Enter product name and quantity!"); 
  }
  if (newProdName.value != "" || newProdPrc.value != "") {

    // New Row 
    let productRows = document.getElementById("productRows");
    let row = document.createElement("div");
    row.setAttribute("class", "row container-fluid productRow2");
    productRows.appendChild(row);

    // New Product Name/ Title
    let prodNameCol = document.createElement("div");
    prodNameCol.setAttribute("class", "col-md-2");
    let newProdTitle = document.createElement("span");
    newProdTitle.innerHTML = newProdName.value;
    row.appendChild(prodNameCol);
    prodNameCol.appendChild(newProdTitle); 

    // New Product Price 
    let newProdPriceCol = document.createElement("div");
    newProdPriceCol.setAttribute("class", "col-md-2");
    let newProdPrice = document.createElement("span");
    newProdPrice.setAttribute("class", "productPrice");
    newProdPrice.innerHTML = "$" + newProdPrc.value + ".00";
    row.appendChild(newProdPriceCol);
    newProdPriceCol.appendChild(newProdPrice);

    // New Product Quantity Section
    let newProdQtyCol = document.createElement("div");  
    newProdQtyCol.setAttribute("class", "col-md-4");
    row.appendChild(newProdQtyCol);

    // New Product Form 
    let newProdQtyForm = document.createElement("form");
    newProdQtyCol.appendChild(newProdQtyForm);

    // New Product Label
    let newProdQtyLabel = document.createElement("label");
    newProdQtyLabel.innerHTML = "Quantity";
    newProdQtyLabel.setAttribute("class", "quantity");
    newProdQtyForm.appendChild(newProdQtyLabel);

    // New Product Quantity Input 
    let newProdQtyInput = document.createElement("input");
    newProdQtyInput.setAttribute("class", "qty pl-2");
    newProdQtyInput.setAttribute("type", "number");
    newProdQtyInput.setAttribute("min", "0");
    newProdQtyInput.setAttribute("placeholder", "Enter Quantity");
    newProdQtyForm.appendChild(newProdQtyInput);
    // newProdQtyInput.setAttribute("onclick", "")
    
    // New Product Total Price 
    let newProdTotalPriceCol = document.createElement("div");
    newProdTotalPriceCol.setAttribute("class", "col-md-2 qtyTotal");
    let newProdTotalPrice = document.createElement("span");
    newProdTotalPrice.innerText = "$0.00";
    row.appendChild(newProdTotalPriceCol);
    newProdTotalPriceCol.appendChild(newProdTotalPrice);

    // New Product Delete Button 
    let newDeleteBtnCol = document.createElement("div");
    newDeleteBtnCol.setAttribute("class", "col-md-2");
    let newDeleteBtn = document.createElement("input");
    newDeleteBtn.setAttribute("id", "deleteBtn");
    newDeleteBtn.setAttribute("type", "button");
    newDeleteBtn.setAttribute("value", "Delete");
    newDeleteBtn.setAttribute("class", "btn btn-delete");
    newDeleteBtn.setAttribute("onclick", "this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);");
    row.appendChild(newDeleteBtnCol);
    newDeleteBtnCol.appendChild(newDeleteBtn);
    
  }
}

updateOnclickEvents();
// let deleteButtons = document.getElementsByClassName("btn-delete");

// function deleteRow() {
  
// }

// updateListeners();
// function updateListeners() {
//   for (i=0; i < deleteButtons.length; i++) {
//     deleteButtons[i].addEventListener("click", e => deleteRow(e));
//   }
// 



// window.onload = () => {
  
// }
