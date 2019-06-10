function getPriceByProduct($item) {
  var $unitPrice = $item.querySelector('#unitPrice');
  var $quantityInput = $item.querySelector('#quantityInput');
  return '$' + Number($unitPrice.innerHTML.slice(1)) * $quantityInput.value;
}

function updatePriceByProduct($item) {
  var $rowPrice = $item.querySelector("#rowPrice");
  var priceOfRow = getPriceByProduct($item);
  $rowPrice.innerHTML = priceOfRow;
}

function updateTotalPrice() {
  var $items = document.querySelectorAll('.item');
  var totalPrice = 0;
  for (var i = 0; i < $items.length; i++) {
    var $item = $items[i];
    var $rowPrice = $item.querySelector('#rowPrice');
    totalPrice += Number($rowPrice.innerHTML.slice(1));
  }
  var $totalPrice = document.querySelector('#totalPrice');
  $totalPrice.innerHTML = '$' + totalPrice;
}

var $calculateTotalPriceButton = document.querySelector("#calculateTotalPriceButton");
$calculateTotalPriceButton.onclick = function() {
  updateTotalPrice();
}

function createNewItem() {
  var $items = document.querySelector('#items');
  var $newName = document.querySelector('#newName');
  var $newPrice = document.querySelector('#newPrice');

  var newItem = `
    <div class="item">
      <div>${ $newName.value }</div>
      <div id="unitPrice">${ $newPrice.value }</div>
      <div>Quantity:<input id="quantityInput" type="text"></div>
      <div><span id="rowPrice">$0.00</span></div>
      <div><button id="deleteItemButton" class="btn btn-delete">Delete</button></div>
    </div>
  `;

  $items.innerHTML += newItem;

  var $item = $items.lastElementChild;

  var $quantityInput = $item.querySelector('#quantityInput');
  $quantityInput.onchange = function() {
    updatePriceByProduct($item);
  }

  var $deleteItemButton = $item.querySelector('#deleteItemButton');
  $deleteItemButton.onclick = function() {
    $item.remove();
  }
}

var $createItemButton = document.querySelector("#createItemButton");
$createItemButton.onclick = function() {
  createNewItem();
}