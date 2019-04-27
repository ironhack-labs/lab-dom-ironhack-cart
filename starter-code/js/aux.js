function getTotalPrice() {
  /* Iteration 1 */
  /* 1. Acceder al valor del input qty */
  const qty = document.getElementById('qty').value
  console.log(qty)
  /* 2. Acceder al valor del precio por item */
  const price = document.getElementById('price').innerText
  console.log(price)

  /* 3. Calcular el precio total */

  const result = (qty * price).toFixed(2);
  console.log(result)
  /* 4. Mostar por pantalla el precio total */
  //document.getElementById('total-price').innerText = result
  const totalPrice = document.getElementById('total-price')
  totalPrice.innerText = result;
}