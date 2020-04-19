// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price=parseFloat(product.querySelector('.price span').innerHTML);
  let quantity=parseFloat(product.querySelector('.quantity input').value);
  let subtotal= product.querySelector('.subtotal span');
  subtotal.innerHTML=(quantity*price).toFixed(2);
  return (quantity*price);
}

function calculateAll() {
  const allProducts=document.querySelectorAll('.product');
  [...allProducts].forEach(prod=>updateSubtotal(prod));
  const allSubtotal=document.querySelectorAll('.subtotal span');
  const subTotal=parseFloat([...allSubtotal].reduce((acc,val)=> acc+ parseFloat(val.innerHTML),0));
  const total =document.querySelector('#total-value span');
  total.innerHTML=subTotal.toFixed(2)
}

// ITERATION 4


function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const card= target.parentElement.parentElement.parentElement;
  const eliminar= target.parentElement.parentElement;
  card.removeChild(eliminar);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let newName= document.querySelector('#nombreNuevoProducto').value;
  let newPrice= document.querySelector('#nuevoPrice').value;

  let body=document.getElementsByTagName('tbody')[0];
  let nuevo =document.getElementsByClassName('product')[1]; 
  let nuevoProduct= nuevo.cloneNode(true)
  body.appendChild(nuevoProduct);

  nuevoProduct.querySelector('.name span').innerHTML=newName;
  nuevoProduct.querySelector('.price span').innerHTML=parseFloat(newPrice).toFixed(2);
  nuevoProduct.querySelector('.btn-remove').addEventListener('click', removeProduct)

  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  //removeBtns.addEventListener('click', removeProduct);
  [...removeBtns].forEach(btn=>btn.addEventListener('click', removeProduct));

  const createNewProduct= document.querySelector('#create');
  createNewProduct.addEventListener('click',createProduct);
});
