// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal= price*quantity;
  product.querySelector ('.subtotal span').innerHTML = subtotal;
  console.log(subtotal);
  return subtotal;
   //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  
  
  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  //console.log("longituuud" +allProducts.length);
  let total=0;
  for(let i=0; i<allProducts.length; i++){
       total += updateSubtotal(allProducts[i]);
  }
  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector('#total-value');
  totalValue.querySelector ('#total-value span').innerHTML = total;
  return totalValue;
}

// ITERATION 4

function removeProduct(event) {
  console.log(event.target);
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const children= target.parentNode.parentNode;
  const parent = children.parentNode;
  parent.removeChild (children);
  calculateAll();
  
}

// ITERATION 5

function createProduct() {
  //Recupero Price
  //Recupero 
  const newProductRow=this.newProductTemplate.cloneNode(true);
  const inputsFromCreateRow= document.querySelectorAll('.create-product input');
  newProductRow.querySelector('.name span').textContent= inputsFromCreateRow[0].value;
  newProductRow.querySelector('.price span').textContent= parseInt(inputsFromCreateRow[1].value).toFixed(2);
  newProductRow.querySelector('.btn-remove').onclick= removeProduct;

  document.querySelector('tbody').appendChild(newProductRow);
}

window.addEventListener('load', () => {
  const newProduct= document.querySelector('.product');
  this.newProductTemplate=newProduct.cloneNode(true);
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.getElementsByClassName ('btn-remove');
  for (let i = 0; i < removeBtn.length; i++) {
       removeBtn[i].addEventListener('click', removeProduct);
    };
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct); 
  createBtn.onclick= createProduct.bind(this);
  [...removeBtns].forEach(btn=>btn.onclick=removeProduct);
  //... your code goes here
});
