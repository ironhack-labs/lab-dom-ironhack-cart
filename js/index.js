// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const subTotal = Number((price * quantity).toFixed(2));
  const unSubtotal = product.querySelector('.subtotal span');
  unSubtotal.innerHTML = subTotal;

  return subTotal;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
 
  const products = document.querySelectorAll('.product');
  var total = 0;
  
  products.forEach((item)=>{
    total += updateSubtotal(item);
  })

  /* OTRO METODO DE KAIN
  for(let product of produtcs){
    total +=updateSubtotal(product)
  } */


  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = total.toFixed(2);

  /*OTRO METODO DE KAIN
  for(let product of produtcs){
    updateSubtotal(product)
  } */
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  //var btn = document.getElementsByClassName('btn-remove')
  //* this code remove and takes all the code from parent
  const row = target.closest('.product').remove()
  calculateAll();


}



// ITERATION 5

function createProduct() {
  //... your code goes here


/*window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);*/

  //... your code goes here


    //CON KAIN EN CLASE:
  //todo add a new button js to remove elements

    // select from create product parent and grab input value
    const createRow = document.querySelector(".create-product");
    const newProductNameInput = createRow.querySelector("input");
    const newProductNameValue = newProductNameInput.value;
    //select from create product price
    const newProductPriceInput = createRow.querySelector("input[type='number']");
    const newProductValue = Number(newProductPriceInput.valueAsNumber).toFixed(2);
  
    const newTableRow = document.createElement("tr");
    newTableRow.className = "product";
    newTableRow.innerHTML = `
      <td class="name">
        <span>${newProductNameValue}</span>
      </td>
      <td class="price">$<span>${newProductValue}</span></td>
      <td class="quantity">
     <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
     <button class="btn btn-remove">Remove</button>
    </td>
     `;
    //get the pqarent node where is going to be the new baby 💅
    const parent = document.querySelector("#cart tbody");
    // add the new baby to his parent
    parent.appendChild(newTableRow);
    // we add some new remove bnutton because its new and its no part of a array of elements
    const removeBtn = newTableRow.querySelector(".btn-remove");
    removeBtn.addEventListener("click", removeProduct);
  
    // clean all the previousProducts
    newProductNameInput.value = "";
    newProductPriceInput.value = 0;
  }
  
  window.addEventListener("load", () => {
    const calculatePricesBtn = document.getElementById("calculate");
    calculatePricesBtn.addEventListener("click", calculateAll);
  
    const removeBtns = document.getElementsByClassName("btn-remove");
    for (let removeBtn of removeBtns) {
      removeBtn.addEventListener("click", removeProduct);
    }
    const createBtn = document.getElementById("create");
    if (createBtn) {
      createBtn.addEventListener("click", createProduct);
    }
  })
