// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;

  const quantity = product.querySelector('.quantity input').value;

  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = Number(price)*Number(quantity);
  return subtotal;
}

//....................................................................

//Iteration 2
function calculateAll() {
// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
 const allProducts = document.querySelectorAll('.product');
 for(let i=0; i<allProducts.length; i++){
   updateSubtotal(allProducts[i]);
 }

// ITERATION 3
let totalValue = document.querySelector('#total-value span');
let subTotal = document.querySelectorAll('.subtotal span');
let sum = 0;

for(let i=0; i<subTotal.length; i++){
  sum += Number(subTotal[i].innerHTML); 
}
totalValue.innerHTML = sum;
}

//.................................................................

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget; //--->Botao(elemento que vc esta clicando).
  let parent = target.parentNode.parentNode; //---> tr = Pai do pai(<td>) do Botao
  let table = parent.parentNode; //----> tbody = pai do tr
  table.removeChild(parent);     //----> para eliminar o 'tr'(filho do tbody)
  
  console.log('The the target in remove is:', target);
  console.log('The the parent in remove is:', parent);
}

let buttons = document.querySelectorAll('.btn-remove');
console.log(buttons);
for(let i=0; i<buttons.length; i++){
  buttons[i].addEventListener('click',removeProduct);
}
   
//..............................................................

// ITERATION 5

function createProduct() {
  let productName = document.querySelector('.product-name input');
  let priceValue = document.querySelector('.price-value input');

  let tbody = document.querySelector('.product').parentNode;
  let row = tbody.insertRow;
  let cell1 = row.insertCell;
  let cell2 = row.insertCell;
  let cell3 = row.insertCell;
  let cell4 = row.insertCell;
  let cell5 = row.insertCell;

  row.setAttribute('class','product');

  cell1.setAttribute('class','name');
  let spanCell1 = document.createElement('span');
  cell1.appendChild(spanCell1);
  let cell1Span = document.querySelector('.product span');
  cell1Span.innerHTML = productName.value;

  cell2.setAttribute('class','price');
  cell2.innerHTML = '$';
  let spanCell2 = document.createElement('span');
  spanCell2.innerHTML = priceValue.value;
  cell2.appendChild(spanCell2);

  cell3.setAttribute('class','quantity');
  let inputCell3 = document.createElement('input');
  inputCell3.setAttribute('type','number');
  inputCell3.setAttribute('value',0);
  inputCell3.setAttribute('min',0)
  inputCell3.setAttribute('placeholer','quantity');
  cell3.appendChild(inputCell3);
  
  cell4.setAttribute('class','subtotal');
  cell4.innerHTML = '$';
  let spanCell4 = document.createElement('span');
  spanCell4.innerHTML = 0;
  cell4.appendChild(spanCell4);

  cell5.setAttribute('class','btn btn-remove');
  cell5.innerHTML = 'Remove';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct)
});

