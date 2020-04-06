// ITERATION 1


//const product = document.querySelector('.product');

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yay!');
  
  //... your code goes here
  let price = product.querySelector(".price span").innerText;
  console.log("Grabbing price from .price > span in HTML: " + price);
  let quantity = product.querySelector(".quantity input").value;
  console.log("Grabbing quantity from .quantity > span in HTML: " + quantity);
  
  // Calculate sub total
  let subTotal = price * quantity;
  
  // Target sub total
  product.querySelector(".subtotal span").innerText = subTotal;
  console.log("Plugging new subtotals into HTML (price * quantity): " + subTotal);

  // Return sub total
  return subTotal;
  
}

//updateSubtotal();
//calculateAll();


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
let multipleItems = document.getElementsByClassName('product');

let total = 0;

for(let i = 0; i < multipleItems.length; i++){ // For loop to iterate through each product in the HTML.
  // Array multipleItems represents each product i.e., [tr.product1, tr.product2, tr.product3]. [i] therefore
  // represents each individual product in the products array.
  total += updateSubtotal(multipleItems[i]); // <-- For each product (multipleItems[i]), get the subtotal (using updateSubtotal fnctn.) and add it to counter (total).
  console.log("Total: " + total);
}
// const newTotal = document.querySelector('#total-value span');
// newTotal.innerHTML = total;

  // ITERATION 3

document.querySelector("#total-value > span").innerHTML = total; //set the total of each item's subtotals to the overall total in HTML.

}


calculateAll();

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // ^ when delete button is clicked, removeProduct() is called. the target element is the delete button itself.
  console.log('The target in remove is:', target);
  console.log('The parent node of current target is: ' + target.parentNode.nodeName)
  // ^since we don't just want to delete the remove button, we need to access the parentNode
  let rowToRemove = target.parentNode.parentNode;
  // ...and since the parentNode is TD (the cell housing the delete button), we must go up one to TR with another .parentNode
  //console.log(removedRow.nodeName)
  rowToRemove.remove();
  calculateAll();
  // ^recalculate total for remaining items
}

// ITERATION 5

function createProduct() {
  const target = event.currentTarget;
  console.log('The target in create is: ', target);
  let createProduct = target.parentNode.parentNode;
  console.log(createProduct.nodeName);
  
  let newItemName = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value;
  //console.log(newItemName);
  let newItemPrice = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value;
  //console.log(newItemPrice);

  document.querySelector('tbody').innerHTML +=
    `<tr class="product">
      <td class="name">
        <span>${newItemName}</span>
      </td>
      <td class="price">$<span>${newItemPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>`

  document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value = "";
  document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value = "";
  calculateAll();

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName("btn-remove");
  // ^Identify remove btns in HTML --> [button.btn.btn-remove, button.btn.btn-remove, etc.]
  
  for(let i = 0; i < removeBtns.length; i++){
    console.log("Remove button " + removeBtns[i])
    document.getElementsByClassName("btn-remove")[i].addEventListener('click', removeProduct);
  };
  // ^loop through each remove button and add an event listener to call the removeProduct function on click.
  
  const createNewItemBtn = document.getElementById('create');
  createNewItemBtn.addEventListener('click', createProduct);


});
