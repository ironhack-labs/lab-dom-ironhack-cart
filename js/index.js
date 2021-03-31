// ITERATION 1

function updateSubtotal(product) {
  let price = document.querySelector('.price span');
  let quantity = document.querySelector('.quantity input');

  let subtotal = Number(price.innerHTML)* Number(quantity.value);
  
  let sub = document.querySelector('.subtotal span');

  return sub.innerHTML = subtotal;
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

    // ITERATION 3
  //... your code goes here

  /*const updateTitle = () => {
    let liList = document.querySelectorAll('li');
    h1.innerHTML = `Users list - ${liList.length}`;
  }*/
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  let  productList = document.querySelector('tbody');

  let newProduct = document.createElement('tr', {class: "product"});

  newProduct.innerHTML = `
  <td class="name">
      <span>Ironhack Beach Towel</span>
    </td>
    <td class="price">$<span>12.50</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  ` ;

  productList.appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
