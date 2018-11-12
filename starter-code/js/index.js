

function deleteItem(element){ 
  var product = document.getElementById('container-products'); 
  product.removeChild(element.target.parentNode.parentNode); 
}

// 1 -  Después de declarar la función creamos una variable que seleccione el elemento de product 
// (que es el parámetro que define la función) que defina su precio.
// 2 - Creamos otra variable que selecciona el value del input de la cantidad de productos.
// 3 - Devuelvemos ambos números multiplicados para obtener el precio final de dicho producto.


function getPriceByProduct(product) {
  var productUnitPrice = product.querySelector('.price-unit'); // 1
  var productUnits = product.querySelector('.product-quantity').value; // 2

  return parseInt(productUnitPrice.innerText) * productUnits; // 3
}

// 1 - Después de crear la función con dos parámetros (product y price) decimos que el totalprice lo primero sea indentificado por
// un elemento del html con la clase .total-product-price
// 2 - El texto del interior será igual a la variable del precio.

function updatePriceByProduct(product, price){ 
  var productTotalPrice = product.querySelector('.total-product-price'); // 1
  productTotalPrice.innerText = price; // 2
}

// 1 - Declaramos que la variable products sea igual a todos los elementos (divs), que tengan la clase (.product-wrapper).
// 2 - Declaramos una variable total, que es igual a 0, que será la que vaya recibiendo los resultados de la ecuacion e ira modificandose
// para sumar las cantidades finales de los productos.
// 3 - Hacemos un bucle FOR que empiece la cuenta en 0 y se repita incrementando en uno hasta el length de products, que indica cuantos
// productos hay creados en el DOM.
// 4 - Creamos una variable productPrice que es igual a la función declarada anteriormente y con su parámetro (products[i]), para que
// realice las operaciones de esta función en todos los elementos iésimos de la variable products.
// 5 - Después pasamos el resultado de la la función 'updatePriceByProduct' que necesitaba dos parámetros pasandole como primer parametro
// un producto iésimo, y el productPrice que esta variable ira cambiando en el bucle, en función del producto que este iterando.
// 6 - La variable total se le suman todos los resultados de productPrice en sus iteraciones, así conseguimos el resultado de todos los 
// precios de productos totales sumados en un mismo elemento.
// 7 - Después buscamos un elemento que tenga el ID 'total-price-span' que será igual al resultado de la variable total.

function getfinalProductPrice() {
  var products = document.querySelectorAll('.product-wrapper'); // 1 
  var total = 0; // 2 
  for (var i = 0; i < products.length; i++) { // 3 
      var productPrice = getPriceByProduct(products[i]); // 4
      updatePriceByProduct(products[i], productPrice);// 5
      total += productPrice;// 6
  }
  var totalSpanPrice = document.getElementById('total-price-span'); // 7
  totalSpanPrice.innerText = total; // 8
}




function createQuantityInput(){
  var newQtyDiv = document.createElement('div');
  newQtyDiv.classList.add('quantity');

  var newQtyLabel = document.createElement('label');
  newQtyLabel.setAttribute('for', 'product-quantity');
  newQtyLabel.appendChild(document.createTextNode('QTY '))
  newQtyDiv.appendChild(newQtyLabel);

  var newQtyInput = document.createElement('input');
  newQtyInput.classList.add('product-quantity');
  newQtyInput.setAttribute('type', 'number');
  newQtyInput.setAttribute('name', 'product-quantity');
  newQtyInput.setAttribute('value', '0');
  newQtyInput.setAttribute('min', '0');
  newQtyDiv.appendChild(newQtyInput);

  return newQtyDiv;
}

function createDeleteButton(){
  var unitButtonDiv = document.createElement('div');
  unitButtonDiv.classList.add('btn-delete-container');
  var unitButton = unitButtonDiv.appendChild(document.createElement('button'));
  unitButton.appendChild(document.createTextNode('Delete'))
  unitButton.setAttribute('type', 'button');
  unitButton.classList.add("btn", "btn-delete");
  unitButton.addEventListener("click", deleteItem)

  return unitButtonDiv

}

function createUnitName(name) {

  var unitNameDiv = document.createElement('div');
  unitNameDiv.classList.add('product-name');
  var unitNameSpan = unitNameDiv.appendChild(document.createElement('span'));
  unitNameSpan.appendChild(document.createTextNode(name));

  return unitNameDiv;
}

function createUnitPrice(price) {

  var unitPriceDiv = document.createElement('div');
  unitPriceDiv.classList.add('price-unit');
  var unitPriceSpan = unitPriceDiv.appendChild(document.createElement('span'));
  unitPriceSpan.appendChild(document.createTextNode(price));

  return unitPriceDiv;
}

function createTotalProductPriceDiv() {
  var unitTotalPriceDiv = document.createElement('div');
  unitTotalPriceDiv.classList.add('total-product-price');
  var unitTotalPriceSpan = unitTotalPriceDiv.appendChild(document.createElement('span'));
  unitTotalPriceSpan.appendChild(document.createTextNode('0'));
  
  return unitTotalPriceDiv;
}

function createNewItemRow(name, price){

  var rowNewItem = document.createElement('div');
  rowNewItem.classList.add('product-wrapper', 'flexbox-container');
  rowNewItem.appendChild(createUnitName(name));
  rowNewItem.appendChild(createUnitPrice(price));
  rowNewItem.appendChild(createQuantityInput())
  rowNewItem.appendChild(createTotalProductPriceDiv())
  rowNewItem.appendChild(createDeleteButton())
  return rowNewItem;
}

function createNewItem(){
  var name = document.getElementById('product-name-creater').value;
  var price = document.getElementById('product-price-creater').value;
  var containerProducts = document.getElementById('container-products');

  if ( name !== '' || price >= 0){
    containerProducts.appendChild(createNewItemRow(name, price))
  } 
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getfinalProductPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
