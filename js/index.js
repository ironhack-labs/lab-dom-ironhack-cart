// ITERATION 1

function updateSubtotal(product) {
  const subtotal = product.querySelector('.subtotal span');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  //const result = price.innerHTML * quantity.value;
  //console.log(price.innerHTML)
  //console.log(quantity.value)
  subtotal.innerHTML = price.innerHTML * quantity.value;
  return Number(subtotal.innerHTML);
  //console.log(subtotal.innerHTML);
  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products= document.getElementsByClassName("product");
  const productsArray= [...products]
  const subTotals= productsArray.map((product)=>{return updateSubtotal(product)});


  // ITERATION 3
  
  const total= document.querySelector("#total-value span");
  total.innerHTML= subTotals.reduce((acc,v)=>{return acc + v},0);
  
}

// ITERATION 4

function removeProduct(event) {
  //access the element an event was fired on
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  //access its parent node and call removeChild on it
  /*const parentButton = target.parentNode;
  const parentAction = parentButton.parentNode;
  const parentProduct = document.querySelector("tbody");
  parentProduct.removeChild(parentAction);*/
  
  //Shortest version
  const parentButton = target.parentNode.parentNode
  parentButton.parentNode.removeChild(parentButton)
  calculateAll();
}

// ITERATION 5

function clearFields(){
  document.querySelectorAll('.create-product input')[0].value = ''; 
  document.querySelectorAll('.create-product input')[1].value = 0;
}

function createProduct() {
  const productName= document.querySelectorAll('.create-product input')[0].value; 
  const productPrice= document.querySelectorAll('.create-product input')[1].value;
  const parentDirection= document.getElementById('cart');
  
  let newChild= document.createElement('tr'); //I create the child tag
  
  newChild.setAttribute('class','product');//I add the class product to the new child
  
  newChild.innerHTML =  `<tr class="product"> 
  <td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${Number(productPrice).toFixed(2)}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`

  
  //newChild.setAttribute('className','product');
  //newChild = document.getElementsByClassName('product')[0].cloneNode(true); //I clone information to add to the new child


  parentDirection.appendChild(newChild); //I link the parent with the child

  const newName= document.querySelectorAll('.name span')[document.querySelectorAll('.name span').length-1]; //I change the name of the new child
  newName.innerHTML=productName;

  const newPrice= document.querySelectorAll('.price span')[document.querySelectorAll('.price span').length-1];
  newPrice.innerHTML=productPrice;

  const deleteButton= document.querySelectorAll('.btn-remove')[document.querySelectorAll('.btn-remove').length-1]
  deleteButton.addEventListener('click', removeProduct);

  clearFields();

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  // querying the document for all "Remove" buttons
  /*
    const buttons = document.querySelectorAll('.btn-remove');
    console.log(`buttons ${buttons}` )
    //loop through them, and add a click event listener to each, passing a named function removeProduct as the callback argument.
    buttons.forEach((button) => {
  
  
      button.addEventListener('click', removeProduct);
    })
  
   */
  const products = document.querySelectorAll('.product');
  
  products.forEach((product) => {
    const button = product.querySelector("button");
    button.addEventListener('click', removeProduct);
  })

  const createButton= document.getElementById('create');
  createButton.addEventListener('click',createProduct);
  
}
)
