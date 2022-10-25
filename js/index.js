// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  console.log(price.innerHTML, quantity.value);

  let subtotalCalc = price.innerHTML * quantity.value;

  console.log(subtotalCalc);

  // step 4 

  const subtotalCart = product.querySelector('.subtotal span');

  // step 5 ojo: necesito ponerle el innerhtml - necesito el llegar al valor de within para actualizarlo

  subtotalCart.innerHTML = subtotalCalc;

  // cuando dice return siempre es lit. return. 
  return subtotalCart;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // entonces aqui dice singleproduct, quiere decir que como ahora tenemos mas de uno neceistamos
  // updatear esta para que no sea de uno solo sino que nos calcule el all de todos
  // ademas ya no es queryselector por que ese sleecciona uno solo. Podriamos usar
  // quesryselectorall pero en las isntrucciiones dice que getElementsByClassName 

  // ITERATION 2 
  const products = document.getElementsByClassName('product');

  console.log(products);
  // updateSubtotal(singleProduct);
  // ITERATION 3 hasta aqui funciona pero me hace falta el total. ese no se esta actualizando
  // primero entonces lo de siempre poner la var en 0 y vamos a hacer el loop porque toca pasar por todos
  // NOTA: Esta parte no la logre sola, me toco pedir ayuda porque me quede trancada
  let lastTotal = 0;
  for (let i = 0; i < products.length; i++) {

    const singleProduct = products[i];
    const subtotalCalc = updateSubtotal(singleProduct)

    // // lo que estoy haciendo es actualizar el subtotal dicindole que ojo sigamos con cada uno 

    lastTotal += subtotalCalc; // vamos sumando los valores

  }

  const subtotalCart = window.document.querySelector('#total-value span');
  subtotalCart.innerHTML = lastTotal;

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

// esto es el boton con sus funcionalidades en real time. Dice a la ventana que al cargar, al elemento que tiene el id de calculate 
// lo saca lo metemos en esa vairable y luego ejecute la funcion calculate all cuando le haga click 
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
