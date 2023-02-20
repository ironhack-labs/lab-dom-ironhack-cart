// ITERATION 1


function updateSubtotal(product) {


  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let priceXQuantity = price * quantity;
  console.log(priceXQuantity);
  product.querySelector('.subtotal span').innerHTML = priceXQuantity;
  return priceXQuantity
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const items = document.getElementsByClassName("product");
  const arrayItems = [...items];
  console.log(arrayItems);

  const total = document.querySelector("#total-value span");
  let totalValue = 0;

  for (const item of arrayItems){
    console.log(item);
    totalValue += updateSubtotal(item);
 }

  // ITERATION 3
  //... your code goes here
  return total.innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here

  // para borrar toda la fila hay que borrar tr product. Para ello hay que llamar al body y borrar a su hijo (el tr que tiene el listener)

  const parentNodeRmBt = target.parentNode.parentNode.parentNode;
  // se llama a body
  parentNodeRmBt.removeChild(target.parentNode.parentNode);
  // se borra tr product
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log('yeh creating');

  const newProduct = document.querySelectorAll('.create-product td input')

  console.log(newProduct);
  const productName = newProduct[0].value;
  const productPrice = newProduct [1].value;

  const tabla = document.querySelector('tbody')
  console.log(tabla);

  tabla.innerHTML += 

  `<tr class="product">
          <td class="name">
            <span>${productName}</span>
          </td>
          <td class="price">$<span>${productPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;

  // al añadir una fila nueva los botones de remover que se cargan con el load se desconfigura. Hay que volver a añadirle un listenerevent a los botones

  const allRemoveBtnS = document.querySelectorAll('.btn-remove');
  console.log(allRemoveBtnS);

  for (const removeBtn of allRemoveBtnS){
    console.log(removeBtn);
    removeBtn.addEventListener('click',removeProduct)
 }

}


window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveBtnS = document.querySelectorAll('.btn-remove');
  console.log(allRemoveBtnS);

  for (const removeBtn of allRemoveBtnS){
    console.log(removeBtn);
    removeBtn.addEventListener('click',removeProduct)
 }

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener ('click',createProduct);

});