// ITERATION 1

function updateSubtotal(product) {
  const subtotal = product.querySelector('.subtotal span');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  
  subtotal.innerHTML = price.innerHTML * quantity.value;
  return Number(subtotal.innerHTML);

}

function calculateAll() {
 
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
  
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  /* First version
  const parentButton = target.parentNode;
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
  
  //I add the information the new child needs
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

  parentDirection.appendChild(newChild); //I link the parent with the child

  const deleteButton= document.querySelectorAll('.btn-remove')[document.querySelectorAll('.btn-remove').length-1]
  deleteButton.addEventListener('click', removeProduct); //Adds event to the new delete button

  clearFields();

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const products = document.querySelectorAll('.product');
  
  products.forEach((product) => {
    const button = product.querySelector("button");
    button.addEventListener('click', removeProduct);
  })

  const createButton= document.getElementById('create');
  createButton.addEventListener('click',createProduct);
  
}
)
