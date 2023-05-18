// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  // price
  const price = product.querySelector('.price span')
  const priceValue = Number(price.innerText)
  // quantity
  const quantity = product.querySelector('.quantity input').value;
  //subtotal
  const subtotalRemove = priceValue * quantity;
  const subtotalId = product.querySelector('.subtotal span')
  subtotalId.innerHTML = subtotalRemove;
  return subtotalRemove;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 & 3
  let realTotal = 0;
  const multiProduct = document.querySelectorAll('.product');
  multiProduct.forEach(function(element){
    updateSubtotal(element);
    realTotal += updateSubtotal(element)
  });
  const subtotalId = document.querySelector('#total-value span');
  subtotalId.innerHTML = realTotal;
  return realTotal;
};



// ITERATION 4

function removeProduct(event) {
  const daddy = event.parentNode.parentNode;
  daddy.remove();
  calculateAll();
  //... your code goes here
}
  


// ITERATION 5
// I replaced product here for document and got the code working.
function createProduct() {
  
  const newProd = document.querySelector('.create-product input[type=text]').value;
  const newPrice = document.querySelector('.create-product input[type=number]').value;

  if (!newProd || !newPrice) {
    alert("Please fill the data to create product.")
  } else {

    const newItem = document.querySelector("#cart tbody");
   
    newBody = `<tbody>
  <tr class="product">
    <td class="name">
      <span>${newProd}</span>
    </td>
    <td class="price">$<span>${newPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  </tbody>
  `;

  newItem.insertAdjacentHTML("afterend", newBody)
  
  removeProduct()

  calculateAll()
}
//new line on the tab
// If you want Pedro, i don't know if it's in Portugese too but it's can be interesting !
// https://www.pierre-giraud.com/javascript-apprendre-coder-cours/dom-ajout-modification-suppression/

};


const createBtn = document.querySelectorAll('#create');
  createBtn.forEach((product,i) => {
  createBtn[i].addEventListener('click', () => createProduct());
});


const removeBtnList = document.querySelectorAll('.btn-remove');
  removeBtnList.forEach((product,i) => {
  removeBtnList[i].addEventListener('click', () => { 
    removeProduct(product);
  });
});



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
