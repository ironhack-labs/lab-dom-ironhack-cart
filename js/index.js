// ITERATION 1

function updateSubtotal(product) {
  let price = Number(product.querySelector(".price span").innerText)
  let quantity = Number(product.querySelector(".quantity input").value)
  let total = price * quantity
  product.querySelector(".subtotal span").innerText = String(total)
  return total
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  var sum = 0;
  var products = [...document.querySelectorAll('.product')];
  products.forEach(function (product) {
  var subTotal = updateSubtotal(product);
  sum += subTotal;
  });
  // ITERATION 3
  document.querySelector("#total-value span").innerText = sum;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget; 
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove(); 
  calculateAll();
}


// ITERATION 5
function createProduct() {
  
  //... your code goes here
/*
   var create = document.createElement("tr");
   create.className = "product";
   create.innerHTML = `
          <td class="name">
            <span>${document.querySelector(".create-name").value}</span>
          </td>
          <td class="price">$<span>${document.querySelector(".create-price").value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button id="remove" class="btn btn-remove">Remove</button>
          </td>
          `
   document.querySelector("#cart tbody").appendChild(create);
   calculateAll();
   */
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.getElementById('remove');
  removeBtn.addEventListener('click', removeProduct);
  const createProduct = document.getElementById('create');
  createProduct.addEventListener('click', createProduct);
  //... your code goes here
});

// start with querying the document for all "Remove" buttons, loop through them, and add 
// a click event listener to each, passing a named function removeProduct as the callback 
// argument. If you need a hint on how to do this, just take a look at how we did it with 
// adding event listener on the calculatePricesBtn.