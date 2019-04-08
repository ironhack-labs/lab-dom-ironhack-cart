
function updateProductPrice() {
  // First product 
  let prod1price = document.getElementById("prodOnePrice");
  let prod1qty = document.getElementById("prodOneInput");
  let prod1Total = document.getElementById("totalPrice1");
  prod1Total.innerHTML = (Number(prod1price.innerHTML) * prod1qty.value).toFixed('2');
  
  // Second product
  let prod2price = document.getElementById("prodTwoPrice");
  let prod2input = document.getElementById("prodTwoInput");
  let prod2total = document.getElementById("totalPrice2");
  prod2total.innerHTML = (Number(prod2price.innerHTML) * prod2input.value).toFixed('2');
}

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
    let productRows = document.getElementById("productRows");
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    let prodNameCol = document.createElement("div");
    prodNameCol.setAttribute("class", "col-md-2");
    let newProdTitle = document.createElement("span");
    newProdTitle.innerHTML = newProdName.value;
    let newProdPriceCol = document.createElement("div");
    newProdPriceCol.setAttribute("class", "col-md-2");
    let newProdPrice = document.createElement("span");
    newProdPrice.setAttribute("class", "productPrice");
    newProdPrice.innerHTML = newProdPrc.value;
    let newProdQtyCol = document.createElement("div");  
    newProdQtyCol.setAttribute("class", "col-md-4");
    row.appendChild(newProdQtyCol);
    let newProdQtyInput = document.createElement("input");
    newProdQtyInput.setAttribute("class", "qty");
    newProdQtyInput.setAttribute("class", "pl-2");
    newProdQtyInput.setAttribute("type", "number");
    newProdQtyInput.setAttribute("min", "0");
    newProdQtyInput.setAttribute("placeholder", "Quantity");
    // newProdQtyInput.setAttribute("onclick", "")
    let newProdTotalPriceCol = document.createElement("div");
    newProdTotalPriceCol.setAttribute("class", "col-md-2");
    let newProdTotalPrice = document.createElement("span");
    newProdTotalPrice.setAttribute("class", "qtyTotal");
    newProdTotalPrice.innerText = "0.00";
    let newDeleteBtnCol = document.createElement("div");
    newDeleteBtnCol.setAttribute("class", "col-md-2");
    let newDeleteBtn = document.createElement("button");
    newDeleteBtn.setAttribute("class", "btn");
    newDeleteBtn.setAttribute("class", "btn-delete");
    newDeleteBtn.setAttribute("onclick", "this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);");
    
        
    productRows.appendChild(row);
    row.appendChild(prodNameCol);
    prodNameCol.appendChild(newProdTitle); 
    row.appendChild(newProdPriceCol);
    newProdPriceCol.appendChild(newProdPrice);
    row.appendChild(newProdQtyCol);
    newProdQtyCol.appendChild(newProdQtyInput);
    row.appendChild(newProdTotalPriceCol);
    newProdTotalPriceCol.appendChild(newProdTotalPrice);
    row.appendChild(newDeleteBtnCol);
    newDeleteBtnCol.appendChild(newDeleteBtn);
  }
}

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
