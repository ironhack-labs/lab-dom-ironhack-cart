var productName = document.querySelector("#productName>span");

var unitPrice = document.querySelector(".unitPrice>span");

var vraperKing = document.querySelector(".wrapperKing");

var eachRow = document.querySelectorAll(".wrapper");

var totalPrice = document.querySelector("h2>span");

var calcPricesButton = document.querySelector("#calcPrices>.btn");

var input = document.querySelector("input");

var inputNewName = document.querySelector(".productName input");

var btnCreate = document.querySelector(".btn-create");

var addClassName = function(element, name) {
  element.className = name;
};


function calcPriceForEachRow(rows) {
  var totalPriceValue = 0;

  rows.forEach(function(row) {
    var productPriceNumber = 0;
    var totalPriceRow = row.querySelector(".totalPrice>span");
    var unitPrice = row.querySelector(".unitPrice span");
    var totalPricePerItem = row.querySelector(".totalPrice>span");
    var inputNumber = Number(row.querySelector("input").value);

    productPriceNumber += Number(unitPrice.textContent);

    function getPriceByProduct(element) {
      totalPricePerItem.textContent = `${inputNumber * element}.00`;
    }
    
    getPriceByProduct(productPriceNumber);

    totalPriceValue += Number(totalPriceRow.textContent);
  });
  totalPrice.textContent = `${totalPriceValue}.00`;
}

function totalPriceValue(rows) {
  rows.forEach(function(row) {
    var totalPrice = 0;
    var totalPriceRow = row.querySelector(".totalPrice>span");
    totalPrice += Number(totalPriceRow.textContent);
  });
}

function createRow() {
  var newDiv = document.createElement("div");

  var inputNewPrice = document.querySelector(".unitPrice input");

  function createDiv(element) {
    newDiv;
    element.appendChild(newDiv);
    return newDiv;
  }

  function createRowBody() {
    var wrapper = createDiv(wrapperKing);
    addClassName(wrapper, "wrapper");
    wrapper.innerHTML = `
  
  <div class="productName">
    <span>${inputNewName.value}</span>
  </div>
  
  <div class="unitPrice">
    $<span>${inputNewPrice.value}</span>
  </div>

  <div class="quantity">
    <label for="">QTY</label>
    <input type="number" name="" value="1">
  </div>

    <div class="totalPrice">
      $<span>0.00</span>
    </div>

    <div>
    <button class="btn btn-delete">
      Delete
    </button>
  </div>
  `;
  }
  createRowBody();
};

function selectDeleteButton(eachrow) {
  eachrow.forEach(function(row) {
    var deleteBtn = row.querySelector(".btn-delete");
    function deleteRow() {
      row.remove(row);
    }
    deleteBtn.onclick = deleteRow;
  });
}

function createResponsiveRow() {
  createRow();
  var eachRow = document.querySelectorAll(".wrapper");
  selectDeleteButton(eachRow);
  totalPriceValue(eachRow);
}

function calcPriceForEachRowResponsive () {
  var eachRow = document.querySelectorAll(".wrapper");
  calcPriceForEachRow(eachRow);
}

selectDeleteButton(eachRow);

btnCreate.onclick = createResponsiveRow;

calcPricesButton.onclick = calcPriceForEachRowResponsive;
