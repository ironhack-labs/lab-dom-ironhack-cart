
// ITERATION 1 ----------------------------------------------------------------------------------------------------------------------------------------------------
// Calcular el valor de price multiplicado por quantity de cada producto
 function updateSubtotal(product) {
  //ITERATION 1.1 - Crear variables y obtener elementos del DOM de price y quantity
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  //ITERATION 1.2 - Extraer los valores específicos de price y quantity con .innerhtml de price y el .value de quantity 
  let valuePrice = price.innerHTML;
  let valueQuantity = quantity.value;
  //ITERATION 1.3 - Multiplica quantity y price, con dos decimales, usando .toFixed(2) y Number al ppio
  let subTotalValue = Number((valueQuantity * valuePrice).toFixed(2));
  //ITERATION 1.4 - Obtenemos los elementos del DOM de subtotal para guardar ahí el resultado de la multiplicacion
  let calcSubTotal = product.querySelector('.subtotal span');
  //ITERATION 1.5 - Devolvemos valor de subTotalValue "seteado" en calcSubTotal
  calcSubTotal.innerHTML = (new Intl.NumberFormat("de-DE", {minimumFractionDigits: 2},).format(subTotalValue));
  return subTotalValue
}
// ITERATION 2 ----------------------------------------------------------------------------------------------------------------------------------------------------
// Pasar la funcion updateSubtotal y sumar su resultado de cada producto
function calculateAll() { 
  let total = 0;
  //ITERATION 2.1 - Seleccionamos '.product' del html y lo guardamos en una Nodelist en la constante "products"
  const products = document.querySelectorAll('.product')
  //Iteramos en cada elemento/currentProduct del Nodelist con arrow function de forEach, igualando la constante subtotal a la funcion updateSubtotal y el currentProduct de la forEach arrow function
  products.forEach(currentProduct => {
    const subtotal = updateSubtotal(currentProduct)
    total = total + subtotal
  });
 // ITERATION 3 ----------------------------------------------------------------------------------------------------------------------------------------------------
 // Seleccionamos '.product' lo guardamos en una nodelist en la constante singleProduct
  const singleProduct = document.querySelector('.product');
  //Llamamos a la funcion updateSubTotal con el parametro singleProduct
  updateSubtotal(singleProduct);
  //Seleccionamos el id total-value span, lo guardamos en totalSpan y seteamos en totalSpan con .innerHTML, el resultado de la suma de todos los updateSubtotal de los productos
  let totalSpan = document.querySelector('#total-value span');
  totalSpan.innerHTML = (new Intl.NumberFormat("de-DE", {minimumFractionDigits: 2},).format(total));
}
// ITERATION 4 ----------------------------------------------------------------------------------------------------------------------------------------------------
function removeProduct(event) {
  //Guardarmos en target el event
  const target = event.currentTarget;
  //Guardamos en temporal product el padre del padre de target
  const temporalProduct = target.parentNode.parentNode
  //Pasamos temporal product como parametro del removechild para eliminar los elementos y sus hijos sobre el padre de temporal product
  temporalProduct.parentNode.removeChild(temporalProduct)
  calculateAll()
}
// ITERATION 5 ----------------------------------------------------------------------------------------------------------------------------------------------------
function clearInputs(){
  document.querySelectorAll('.create-product input')[0].value = ''; 
  document.querySelectorAll('.create-product input')[1].value = 0;
}
function createProduct(event) {
  const newProductName = document.querySelectorAll('.create-product input')[0].value
  const newProductPrice = document.querySelectorAll('.create-product input')[1].value 
  console.log(newProductPrice)
  if(newProductName.length === 0){
    window.alert('Please, fill name of product!')
    return false
  }
  if(newProductPrice === '0'){
    window.alert('Please, fill price of product!')
    return false
  }
  let newChild = document.createElement('tr')
  newChild.setAttribute('class','product')
  newChild.innerHTML = `<tr class="product">
  <td class="name">
    <span>Premium Beer</span>
  </td>
  <td class="price">$<span>0.39</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  </tr>`
  const parentDirection = document.getElementById('cart')
  parentDirection.appendChild(newChild)
  const newName= document.querySelectorAll('.name span')[document.querySelectorAll('.name span').length-1]; //I change the name of the new child
  newName.innerHTML=newProductName;
  const newPrice= document.querySelectorAll('.price span')[document.querySelectorAll('.price span').length-1];
  newPrice.innerHTML=newProductPrice;
  const deleteButton= document.querySelectorAll('.btn-remove')[document.querySelectorAll('.btn-remove').length-1]
  deleteButton.addEventListener('click', removeProduct);
  clearInputs()
}

//Listeners
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductBtn = document.getElementsByClassName('btn btn-remove');
  for( let i =0; i<removeProductBtn.length; i++){
    removeProductBtn[i].addEventListener('click', removeProduct)
  }
  const addCreateBtn = document.getElementById('create');
  addCreateBtn.addEventListener('click', createProduct);
}); 



/* // ITERATION 1
function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span')
  const subtotResult = (price * quantity).toFixed(2);
  subtotal.innerHTML = subtotResult; 
  return subtotal;
}
function calculateAll() {
// ITERATION 2 + ITERATION 3
  let total = 0
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++){
    updateSubtotal (products[i]);  
    total += Number(products[i].querySelector('.subtotal span').innerHTML);
 }
  document.querySelector('#total-value span').innerHTML = total.toFixed(2)
}
// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  const temporalProduct = target.parentNode.parentNode
  temporalProduct.parentNode.removeChild(temporalProduct)
  calculateAll()
  window.alert(`You are removing a product. Please reload the page if you want to undo.`)
}
// ITERATION 5
function createProduct() {
     const newProductName = document.querySelectorAll('.create-product input')[0].value;
    //console.log(newProductName);
    const newProductPrice = document.querySelectorAll('.create-product input')[1].value;
    //console.log(newProductPrice);
  }
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductBtn = document.getElementsByClassName('btn btn-remove');
  for( let i =0; i<removeProductBtn.length; i++){
    removeProductBtn[i].addEventListener('click', removeProduct)
  };
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
}); */