// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  let price, quantity, total;
  price = product.querySelector('.price span').innerHTML;
  quantity = product.querySelector('.quantity input').value;
  total = price * quantity;
  product.querySelector('.subtotal span').innerHTML = total;  
  return total;
}

function calculateAll() {
  let allProducts;
  let cartTotal = 0;
  allProducts = [...(document.getElementsByClassName('product'))];    
  // ITERATION 2
  allProducts.forEach((element,index) => cartTotal+=updateSubtotal(element) );

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = cartTotal;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.parentElement.removeChild(target);
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  const newProduct = event.currentTarget.parentNode.parentElement;
  let newProductName = newProduct.getElementsByTagName('input')[0].value;
  let newProductPrice = newProduct.getElementsByTagName('input')[1].value;
  addProductRow(newProductName,newProductPrice);
  newProduct.getElementsByTagName('input')[0].value = '';  
  newProduct.getElementsByTagName('input')[1].value = '';
}

// Did this the 'long way' over just injecting a bunch of HTML
//
function addProductRow2(name,price) {
  const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
  let newRow = table.insertRow();
  newRow.setAttribute("class","product");
  let newCell = newRow.insertCell(0);
    newCell.setAttribute("class","name");
    // newCell.appendChild(document.createElement("span"));
    newCell.innerHTML = `<span id="name">${name}</span>`;
      newCell = newRow.insertCell(1);
      newCell.setAttribute("class","price");
      newCell.innerHTML = `$<span>${price}</span>`;
      newCell = newRow.insertCell(2);
        newCell.setAttribute("class","quantity");
        newCell.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity">`;
          newCell = newRow.insertCell(3);
          newCell.setAttribute("class","subtotal");
          newCell.innerHTML = `$<span>0</span>`;
            newCell = newRow.insertCell(4);
            newCell.setAttribute("class","action");
            let btnHTML = document.getElementsByClassName('btn btn-remove')[0].outerHTML;
            newCell.innerHTML = btnHTML;
            // newCell.innerHTML
            // newCell.innerHTML = `<button class="btn btn-remove">Remove</button>`;
            newCell.firstChild.addEventListener('click',removeProduct);
            // newCell.getElementsByClassName('btn btn-remove')[0].addEventListener('click',removeProduct);
}

// re-written to try and make this more 'readable'
// 
function addProductRow(name,price) {
  const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
  let nameCell, priceCell, QuantCell,subtotalCell,actionCell;
  let newRow = table.insertRow(); // default = -1 [append to end - note we're using 'tbody' not the whole table!]
  // let btnHTML = 'document.getElementByClassName('btn btn-remove')[0].outerHTML;'
  let btnHTML = `<button class="btn btn-remove">Remove</button>`;
  newRow.setAttribute("class","product");
    nameCell = newRow.insertCell(0);
    nameCell.setAttribute("class","name");
    nameCell.innerHTML = `<span id="name">${name}</span>`;
      priceCell = newRow.insertCell(1);
      priceCell.setAttribute("class","price");
      priceCell.innerHTML = `$<span>${price}</span>`;
        QuantCell = newRow.insertCell(2);
        QuantCell.setAttribute("class","quantity");
        QuantCell.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity">`;
          subtotalCell = newRow.insertCell(3);
          subtotalCell.setAttribute("class","subtotal");
          subtotalCell.innerHTML = `$<span>0</span>`;
            actionCell = newRow.insertCell(4);
            actionCell.setAttribute("class","action");
            actionCell.innerHTML = btnHTML;
            actionCell.firstChild.addEventListener('click',removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let addRemove = [...(document.getElementsByClassName('btn btn-remove'))];
  addRemove.forEach((element) => element.addEventListener('click',removeProduct));

  const addProd = document.getElementById('create');
  addProd.addEventListener('click',createProduct);
  //... your code goes here
});
