// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = price.innerText * quantity.value;
  product.querySelector('.subtotal span').innerText = subTotal;
  return subTotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
/*   const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  //... your code goes here

  const listProducts = document.querySelectorAll('.product');

  const arrayProducts = [...listProducts];
  const total = arrayProducts.reduce((acc,product) => {
    return acc + updateSubtotal(product);},0);
    
 

  // ITERATION 3
  //... your code goes here

  const totalPrice = document.querySelector("#total-value span");
  totalPrice.innerText = total; 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const body = target.parentNode.parentNode.parentNode;

  body.removeChild(target.parentNode.parentNode);
}

// ITERATION 5

function createProduct(modellProduct) {
  //... your code goes here
  const productName = document.querySelector('input[placeholder="Product Name" ]').value;
  const price = document.querySelector('input[placeholder="Product Price" ]').value;
  const table = document.querySelector("tbody");
  const newProduct = modellProduct.cloneNode(true);
  addRemoveListener(newProduct);
  newProduct.querySelector(".name span").innerText = productName;
  newProduct.querySelector(".price span").innerText = price; 
  table.appendChild(newProduct);
  document.querySelector('input[placeholder="Product Name" ]').value = "";
  document.querySelector('input[placeholder="Product Price" ]').value =0;
 
}

function generateClonableProduct(){//Genera un clon del primer producto para poder utilizarlo a pesar de que se eliminen todas las filas

  const product = document.querySelector('.product');
  const newProduct = product.cloneNode(true);
  
  return newProduct;
}

function addRemoveListener(object) { //añade el listener al botón remove de las filas
  const remove = object.querySelector('.btn-remove');
  remove.addEventListener('click', removeProduct);
 }



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(remove => remove.addEventListener('click', removeProduct));
  
  const modellProduct = generateClonableProduct();//creamos la primera copia de la que saldrán el resto
  
  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click',()=>createProduct(modellProduct));


  //... your code goes here
});
