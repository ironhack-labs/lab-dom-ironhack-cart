window.onload=function(){

//Iteration 1: Creating the Calculate Prices button and its functionality

  var button = document.getElementById("btn-success");

  button.addEventListener("click", function() {
    var input = document.getElementById("number-input").valueAsNumber;
    var unitPrice = parseInt(document.getElementById("unit-price").innerHTML);
    var total = document.querySelector("#total");
    
    total.innerHTML = input * unitPrice;

    var input2 = parseInt(document.getElementById("number-input2").value);
    var unitPrice2 = parseInt(document.getElementById("unit-price2").innerHTML);
    var total2 = document.querySelector("#total2");
    
    total2.innerHTML = input2 * unitPrice2;

    var showTotalPrice = document.getElementsByTagName("span")[6];
    showTotalPrice.innerHTML = parseInt(total.innerHTML) + parseInt(total2.innerHTML);
  });

//Iteration 2: Dinamically create a new product

//Create the div container appending it to the body 

var parentBody = document.getElementsByTagName("body")[0];

var creatingDivContainer = document.createElement("div");
creatingDivContainer.className = "container";

parentBody.appendChild(creatingDivContainer);

//Create the Product Name div and span

var productNameDiv = document.createElement("div");
productNameDiv.id = "product-name2";
creatingDivContainer.appendChild(productNameDiv);

var targetProductNameDiv = document.getElementById("product-name2");

var spanInsideProductNameDiv = document.createElement("span");
spanInsideProductNameDiv.id = "product-name-text2";
spanInsideProductNameDiv.innerHTML = "DOM-ination Potion";

targetProductNameDiv.appendChild(spanInsideProductNameDiv);

//Create the Product's Price div and span

var priceDiv = document.createElement("div");
priceDiv.id = "price2";
priceDiv.innerHTML = "$";
creatingDivContainer.appendChild(priceDiv);

var targetPriceDiv = document.getElementById("price2");

var spanInsidePriceDiv = document.createElement("span");
spanInsidePriceDiv.id = "unit-price2";
spanInsidePriceDiv.innerHTML = 590;

targetPriceDiv.appendChild(spanInsidePriceDiv);

//Create the Label and Input to obtain the number of items added to the Shopping Cart

var inputLabel = document.createElement("label");
inputLabel.setAttribute("for", "number-input2");
inputLabel.innerHTML = "QTY";
creatingDivContainer.appendChild(inputLabel);

var inputText = document.createElement("input");
inputText.setAttribute("type", "number");
inputText.id = "number-input2";
inputText.className = "quantity";
creatingDivContainer.appendChild(inputText);

//Create the Total Cost div and span

var totalCostDiv = document.createElement("div");
totalCostDiv.id = "total-cost2";
totalCostDiv.innerHTML = "$";
creatingDivContainer.appendChild(totalCostDiv);

var targetTotalCostDiv = document.getElementById("total-cost2");

var spanInsideTotalCostDiv = document.createElement("span");
spanInsideTotalCostDiv.id = "total2";
spanInsideTotalCostDiv.innerHTML = 0;

targetTotalCostDiv.appendChild(spanInsideTotalCostDiv);

//Create the button div and the delete button 

var btnDiv = document.createElement("div");
btnDiv.className = "btn";
creatingDivContainer.appendChild(btnDiv);

var targetBtnDiv = document.getElementsByClassName("btn")[1];

var buttonInsideBtnDiv = document.createElement("button");
buttonInsideBtnDiv.id = "btn-delete2";
buttonInsideBtnDiv.innerHTML = "Delete";

targetBtnDiv.appendChild(buttonInsideBtnDiv);

//Iteration 3: Total Price

//Create the new div and h2 to contain the Total Cost 

var newDivForTotal = document.createElement("div");
creatingDivContainer.appendChild(newDivForTotal);

var targetNewDivForTotal = document.getElementsByTagName("div")[10];

var h2InsideNewDivForTotal = document.createElement("h2");
h2InsideNewDivForTotal.innerHTML = "Total Price: $ "
targetNewDivForTotal.appendChild(h2InsideNewDivForTotal);

var targetH2InsideNewDivForTotal = document.getElementsByTagName("h2")[0];

var spanInsideH2 = document.createElement("span");
spanInsideH2.innerHTML = 0;
targetH2InsideNewDivForTotal.appendChild(spanInsideH2);

//Iteration 4: Create Event Listeners for Delete buttons and functionality

var deleteButton = document.getElementById("btn-delete");
var containerDivToDelete = document.getElementsByClassName("container")[0];
deleteButton.addEventListener("click", function(e){
containerDivToDelete.parentNode.removeChild(containerDivToDelete);
});

var deleteButton2 = document.getElementById("btn-delete2");
var containerDivToDelete2 = document.getElementsByClassName("container")[1];
deleteButton2.addEventListener("click", function(e){
containerDivToDelete2.parentNode.removeChild(containerDivToDelete2);
});

}



