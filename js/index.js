// ITERATION 1

const updateSubtotal = (product) => {
  if(product !== null){
    const price = parseFloat(product.querySelector('.price span').innerText);
    var quantity = parseInt(product.childNodes[5].firstElementChild.value);
    var totalPrecio = price * quantity;
    var spanTotal = product.childNodes[7].firstElementChild.innerText = totalPrecio; 
    return spanTotal;
  }
}

const  calculateAll = () => {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let totalItems = document.querySelector('#total-value span');
  let products = document.querySelectorAll('.product');
  if(products.length > 1){
    totalItems.innerText = [...products].reduce((acc, item) =>{
      //retorna el total, se suman cada posicion del array  con cada elemento anterior y el contador solo hace de acumulador
          return acc += updateSubtotal(item);
      },0);
  } /* else{
    if (totalItems.parentNode) {
      totalItems.parentNode.removeChild(totalItems);
    }
    clonearNodeMessage(totalItems);
  }  */
}

/* const clonearNodeMessage = (node) =>{
  const clone = node.cloneNode(true);
  let infoSpan = document.getElementById("total-value").appendChild(clone);
  infoSpan.setAttribute('style', 'color: red; font-weight: bold; display: block');
  infoSpan.innerText = "Minimo 2 productos";
}
 */
// ITERATION 4



const removeProduct = (event) => {
  const nodeTarget = event.currentTarget.parentNode.parentNode;
  if (nodeTarget.parentNode) {
    nodeTarget.parentNode.removeChild(nodeTarget);
  }
  calculateAll();
}



// ITERATION 5

const createProduct = () => {
  let product = document.querySelector('.product');

  let nameProduct = document.querySelector('.create-product input[type="text"]');
  let priceProduct = document.querySelector('.create-product input[type="number"]');
  clonearNodeProduct(product, nameProduct.value, priceProduct.value);
  document.querySelector('.name span').innerText = nameProduct.value;
  document.querySelector('.price span').innerText = priceProduct.value.concat('.00');
  clearInput(nameProduct,priceProduct);
}

const clearInput = (name, price) =>{
  name.value = '';
  price.value = '';
}

const clonearNodeProduct = (nodeProuct, nameProd, priceProd) =>{
  if(nodeProuct != null){
    const clone = nodeProuct.cloneNode(true);
    document.querySelector('tbody').appendChild(clone);
    return;
  }
  //create pure dom product
  createProductIfNull(nameProd, priceProd);
}

const createProductIfNull = (name, price) =>{
  const tbody = document.querySelector('tbody');

  const tr = document.createElement('tr');
  tr.setAttribute("class", "product");

  const tdName = document.createElement('td');
  const nameSpan = document.createElement('span');
  nameSpan.setAttribute("class", "name");
  nameSpan.innerText = name;
  tdName.appendChild(nameSpan);

  const tdPrice = document.createElement('td');
  tdPrice.setAttribute("class", "price");
  tdPrice.innerText = '$';
  const tdPriceContent = document.createElement('span');
  tdPriceContent.innerText = price;
  tdPrice.appendChild(tdPriceContent);

  const tdQuantity = document.createElement('td');
  tdQuantity.setAttribute("class", "quantity");

  const quantityInput = document.createElement('input');
  quantityInput.setAttribute("type", "number");
  quantityInput.setAttribute("value", 0);
  quantityInput.setAttribute("min", 0);
  quantityInput.setAttribute("placeholder", 'Quantity');
  tdQuantity.appendChild(quantityInput);

  const tdTotal = document.createElement('td');
  tdTotal.setAttribute("class", "subtotal");
  tdTotal.innerText = '$';
  const totalSpan = document.createElement('span');
  totalSpan.innerText = 0;
  tdTotal.appendChild(totalSpan);

  const tdAction = document.createElement('td');
  tdAction.setAttribute("class", "action");

  const btnRemove= document.createElement('button');
  btnRemove.setAttribute("class", "btn btn-remove");
  btnRemove.innerText = "Remove";

  btnRemove.addEventListener('click', removeProduct);
  tdAction.appendChild(btnRemove);

  tr.appendChild(tdName);
  tr.appendChild(tdPrice);
  tr.appendChild(tdQuantity);
  tr.appendChild(tdTotal);
  tr.appendChild(tdAction);

  tbody.appendChild(tr);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  document.querySelector('#create').addEventListener('click',createProduct);
  document.querySelectorAll('.btn-remove').forEach( ele => {
    ele.addEventListener('click', removeProduct);
  }) 


});
