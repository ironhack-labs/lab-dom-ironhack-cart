// ITERATION 1

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price=product.querySelector('.price span');
  const quantity=product.querySelector('.quantity input').value;
  
    
  let prodTotalPrice=price.innerHTML*quantity;
  
  let subtotalNum=product.querySelector('.subtotal span');

  subtotalNum.innerHTML=prodTotalPrice;

  return prodTotalPrice;
}




function calculateAll() {
      // code in the following two lines is added just for testing purposes.
      // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
      // end of test

  // ITERATION 2
  //... your code goes here

  let IHproducts=document.getElementsByClassName('product');

  console.log(IHproducts);

  let sum=0;

  for (let i = 0; i < IHproducts.length; i++) {
    updateSubtotal(IHproducts[i]);
     sum+=updateSubtotal(IHproducts[i]);
      
  };

  // ITERATION 3
  //... your code goes here

  let total=document.querySelector('#total-value span');

  total.innerHTML=sum;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);

  calculateAll();

  
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  let newName=document.querySelector('.create-product #name').value;

  let newPrice=document.querySelector('.create-product #price').value;

  var table=documennt.getElementById('body');

  let newRow= `<tr class="product">
   <td class="name">
     <span>${newName}</span>
   </td>
   <td class="price">$<span>${newPrice}</span></td>
   <td class="quantity">
     <input type="number" value="0" min="0" placeholder="Quantity" />
   </td>
   <td class="subtotal">$<span>0</span></td>
   <td class="action">
     <button class="btn btn-remove">Remove</button>
   </td>
 </tr>`;

 

 table.innerHTML+=newRow;

   
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  let buttons=document.getElementsByClassName('btn btn-remove');
  console.log(buttons);

  for(let i=0; i<buttons.length;i++){
    buttons[i].addEventListener('click',removeProduct);

  }

  let create=document.getElementById('create');
  create.addEventListener('click',createProduct)
});
