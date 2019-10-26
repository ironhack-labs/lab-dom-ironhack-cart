var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  let subtotal = $product.querySelector(`.subtot>span`);
  let precioUnitario = $product.querySelector(`.pu>span`);
  let cantidad = $product.querySelector(`.qty input[type=number]`).value;
  subtotal.innerText = parseFloat(precioUnitario.innerText) * cantidad;
  return parseFloat(subtotal.innerText);//devuelve precio
}

function calcAll() {
  let listaProductos = document.querySelectorAll('.product');
  let totalPrice = 0;
  for (let i = 0; i < listaProductos.length; i++) {
    totalPrice += updateSubtot(listaProductos[i])
  };
  console.log(totalPrice)
  document.querySelector('h2 span').innerText = totalPrice;
};


function updateTotal($subtotal) {
  let total = $subtotal.getElementsByClassName(".subtot");
  total.innerText = parseFloat(total += total);
  return parseFloat(total.innerText); // devuelve string
  console.log(totals);
}

$calc.onclick = calcAll// needed



  myButton.onclick = function (btn) {
    btn.preventDefault(); // resetear el botón
    calcAll(); // calcular cantidad * precio del item
    //calcTotal(); // llama la suma de total
  }
