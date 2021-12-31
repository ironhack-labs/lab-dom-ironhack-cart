// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const  quantityImput = product.querySelector('.quantity input').value;

  //usar console.log hasta en la sopa, para ver que está devolviendo.
  // en este caso devuelve un "string" con lo que hay que pasarlo a number:

  const result = Number(price) * Number(quantityImput);
  
  //Ahora devuelve el precio calculado.

  //Accedo al valor de Subtotal (que es cero actualmente)

  product.querySelector('.subtotal span').innerText = result;

  //Modifico el valor con el textContent y lo igualo a la operación que hicimos previamente.
  return result;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  let counter = 0;  

  for(let i = 0; i < allProducts.length; i++){
    counter += updateSubtotal(allProducts[i])
  }


  // ITERATION 3
  //... your code goes here
 document.querySelector('#total-value span').innerHTML = counter
  return counter;


}

// ITERATION 4

function removeProduct(event) {
  console.log(event);
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
 
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

/*
const remove = product.querySelectorAll(".btn-remove");
for(let i = 0; i < remove.length; i++){
  remove[i].addEventListener("click", () =>{
    remove[i].event.currentTarget.removeChild(remove);
  })*/