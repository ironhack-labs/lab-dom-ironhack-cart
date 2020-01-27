var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  let priceUnit = $product.querySelector('td.pu span').innerText,
    numberUnit = $product.querySelector('td.qty input').value,
    totalPrice = priceUnit * numberUnit;

  $product.querySelector('td.subtot span').innerText = totalPrice;

  return totalPrice;
}

function calcAll() {
  let $$elementsClass = document.getElementsByClassName('product');

  for (let i = 0; i < $$elementsClass.length; i++) {
    let value = updateSubtot($$elementsClass[i]);
    let totalValue = parseInt(document.getElementsByTagName('h2')[0].children[0].innerText);
    let sum = totalValue + value;
    document.getElementsByTagName('h2')[0].children[0].innerText = sum;
  }
}

$calc.addEventListener('click', calcAll);

let $$removeButtons = document.getElementsByClassName('rm');

for (let i = 0; i < $$removeButtons.length; i++) {
  $$removeButtons[i].addEventListener('click', event => {
    let $parentNode = $$removeButtons[i].parentNode.parentNode;
    $parentNode.removeChild($$removeButtons[i].parentNode);
  });
}

let $createButton = document.getElementById('create');

$createButton.addEventListener('click', event => {
  let $$parentNode = document.querySelectorAll('tr.new td input');
  let name = $$parentNode[0].value,
    price = $$parentNode[1].value;

  let $newNode = $cart.children[0].cloneNode(true);
  console.dir($newNode);

  $newNode.querySelector('td.name span').innerText = name;
  $newNode.querySelector('td.pu span').value = price;

  $cart.appendChild($newNode);
});
