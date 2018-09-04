// Event Listeners

//calculate grand total 
  let calculateButton = document.querySelector('.btn-success');

  calculateButton.addEventListener('click', function grandTotal() {
    let grandTotalArray = [];

    // function used to add grandTotalArray together
    function findTotal(arr) {
      return arr.reduce((a, b) => a + b);
    }

    // push every total price into grandTotalArray
    document.querySelectorAll('.total-price').forEach(price => {
      grandTotalArray.push(Number(price.innerHTML.slice(1)));
    })

    // change displayed price to total sum
    document.querySelector('.grand-total').innerHTML = findTotal(grandTotalArray).toFixed(2);
  })
    
// Automatically updates price of items in cart
// each time quantity changes
function priceUpdateListener() {
  let inputs = document.querySelectorAll('.item-quantity');
  inputs.forEach(item => {
    item.addEventListener('input', function updateTotal(event) {
      let price = event.target.parentNode.parentNode.querySelector('.price');
      let quantity = event.target.parentNode.parentNode.querySelector('input').value;
      let totalPrice = event.target.parentNode.parentNode.querySelector('.total-price');
      let total = 0;
      let initialCost = Number(price.innerHTML.slice(1));
      total += initialCost * quantity;
      
      // If quantity is empty return 0.00
      // else return price formatted to pennies
      if (quantity === '') {
          totalPrice.innerHTML = `$0.00`;
      } else {
          totalPrice.innerHTML = `$${total.toFixed(2)}`;
        }
    })
  })
}

function deleteButtonListener() {
  let deleteButton = document.querySelectorAll('.btn-delete');
  deleteButton.forEach(button => {
    button.addEventListener('click', function removeElement(event) {
      event.preventDefault();
      event.target.parentNode.parentNode.remove();
    })
  })
}

// Add event listener to create item button
document.querySelector('.btn-create').addEventListener('click', function createItem(event) {

    // prevent page from reloading when submit is pressed
    event.preventDefault();

    let item = document.querySelector('.new-item');
    let name = document.querySelector('.new-item-name').value;
    let price = document.querySelector('.new-item-price').value;
    let mainContainer = document.querySelector('.main-container');
    //determines if text is full to create new item 
    if (name === '' || price === '') {
      // focuses item that is incomplete
      if (name === '') {
        document.querySelector('.new-item-name').focus()
      } else {
        document.querySelector('.new-item-price').focus()
      }
    } else {
      // Create div element and apply class
      let div = document.createElement('div');
      div.className = 'container';

      // Insert info into div using literal
      div.innerHTML = `
        <ul>
          <li>${name}</li>
          <li class="price">$${Number(price).toFixed(2)}</li>
          <li>QTY:<input class="item-quantity" type="number"></li>
          <li class="total-price">$0.00</li>
          <button class="btn btn-delete">Delete</button>
        </ul>
      `;

      // add new div to page
      mainContainer.appendChild(div);
      document.querySelector('.new-item-name').value = '';
      document.querySelector('.new-item-price').value = '';

      // re-apply event listeners so new div works properly
      deleteButtonListener();
      priceUpdateListener();

      document.querySelector('.new-item-name').focus();
    }
  })

  // TO DO: window.onload() the below functions
deleteButtonListener();
priceUpdateListener();