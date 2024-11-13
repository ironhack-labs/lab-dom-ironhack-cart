const tableBody = document.querySelector("tbody#cart-items");

// ITERATION 1

function updateSubtotal(product, index) {
  //... your code goes here
  const productPrice = product.querySelector('.price').innerText.replace("$","");
  const productQuantity = product.querySelector('input').value;
  console.log('productPrice', productPrice);
  console.log('productQuantity', productQuantity);
  const subTotal = productPrice * productQuantity;
  // 4. Display the result
  const subtotalElements = document.querySelectorAll('.subtotal span');
  // 4. Display the result
  for(let k=0; k<subtotalElements.length; k++){
   if(k===index){
      subtotalElements[k].innerText = subTotal;
    }
  }
  // console.log('subtotalElement', subtotalElement);
  console.log('subTotal', subTotal);
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //let subtotal = updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product')
  console.log('allProducts', allProducts[0]);

  let amount = 0;
  for(let i = 0; i < allProducts.length; i++){
    amount = amount + Number(updateSubtotal(allProducts[i], i));
  }
  // ITERATION 3
  //... your code goes here
  const grandTotal = document.getElementById("total-value");
  grandTotal.innerHTML = "Total: $<span>" + amount + "</span>";
}

// ITERATION 4

//function removeProduct(event) {
//  const target = event.currentTarget;
//  console.log('The target in remove is:', target);
//... your code goes here
//}

function removeProduct(){
  console.log("deleting");
  const deleteButtons = document.querySelectorAll(".btn-remove");
  console.log(deleteButtons);
  for(let i=0;i<deleteButtons.length;i++){
    deleteButtons[i].addEventListener('click', e => {
      let tr = e.target.closest('tr');
      if (tr) {
        console.log(tr, 'was clicked');
        tr.remove();
      }
    });
  }
}

function addTableRow(product, price){
  const newItemRow = document.createElement("tr");
  let priceFormat = Number(price).toFixed(2);
  newItemRow.innerHTML = `
    <td class="name">
        <span>${product}</span>
    </td>
    <td class="price">$<span>${priceFormat}</span></td>
    <td class="quantity">
         <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
       <button class="btn btn-remove">Remove</button>
  </td>
`;
  newItemRow.className = 'product';
  tableBody.appendChild(newItemRow);
}

function clearFields() {
  let productName = document.getElementById("add-product-name");
  let productPrice = document.getElementById("add-product-price");
  productName.value = "";
  productPrice.value = 0;
}


// ITERATION 5

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  removeProduct();
  // Iteration 5: ADD PRODUCT
  let productName = document.getElementById("add-product-name");
  let productPrice = document.getElementById("add-product-price");
  const createProduct = document.getElementById("create");

  createProduct.addEventListener('click', e => {
    let tr = e.target.closest('tr');
    if (tr) {
      addTableRow(productName.value, productPrice.value);
      console.log(productName.value, productPrice.value, 'was added');
      removeProduct();
      clearFields();
    }
  });
});
