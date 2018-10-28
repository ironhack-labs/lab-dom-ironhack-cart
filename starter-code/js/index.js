//with Onclick on the HTML

// function deleteItem(button){
//   button.parentElement.parentElement.remove();
// }

//with remove

// function deleteItem(e){
//   e.target.parentElement.parentElement.remove();
//   getTotalPrice();
// }

// let deleteButtons = document.querySelectorAll(".btn-delete");
// deleteButtons.forEach(function(button){
//   button.addEventListener('click', function(e){
//     deleteItem(e);
//   });
// });


//CODES ARE BELOW :

//DELETING ITEM(S)

//with removeChild

function deleteItem(e){
  let wrapper = document.querySelector("#wrapper");
  wrapper.removeChild(e.target.parentElement.parentElement);
  getTotalPrice();
}

let deleteButtons = document.querySelectorAll(".btn-delete");
deleteButtons.forEach(function(button){
  button.addEventListener('click', function(e){
    deleteItem(e);
  });
});

//UPDATING PRICE IF QUANTITY IS ADDED
function pricePerItem(event){
  let uncle = event.target.parentElement.previousElementSibling;
  let price = parseFloat(uncle.querySelector('.price').innerHTML);
  let quantity = parseInt(event.target.value);
  let subTotal = parseFloat(price * quantity).toFixed(2);
  let nextUncle = event.target.parentElement.nextElementSibling;
  nextUncle.querySelector(".total-cost").innerHTML = subTotal; 
}

//GETTING THE TOTAL PRICE
function getTotalPrice() {
  let pricePerItem = document.getElementsByClassName("price");
  let quantityItem = document.getElementsByClassName("quantity");
  let totalPrice = 0;

  for (let i = 0; i < pricePerItem.length; i++){
    let costs = pricePerItem[i].innerHTML;
    let quantities = quantityItem[i].value;
    totalPrice += (costs * quantities);
  }
  document.getElementById("totalPrice").innerHTML = `The total price is: $ ${totalPrice.toFixed(2)}`;
}

//CREATING NEW ITEM(S)
function createNewItem(){
  let itemName = document.querySelector('#new-item-name');
  let itemPrice = document.querySelector('#new-item-price');

  if (itemName.value === "" || itemPrice.value === ""){
    alert("You haven't fill in any input!");
    return;
  }

  let wrapper = document.querySelector('#wrapper');
  let container = document.createElement('div');
  container.classList.add("container");
  container.innerHTML = `
    <div class="product-name">
      <span>${itemName.value}</span>
    </div>
    <div class="price-container">
      <span>$</span> <span class="price">${parseFloat(itemPrice.value).toFixed(2)}</span>
    </div>
    <div class="quantity-container">
      <label for="product-quantity">QTY</label>
      <input type="number" min="0" placeholder="0" class="quantity" onchange="pricePerItem(event)">
    </div>
    <div>
      <span>
        $
      </span>
      <span class="total-cost">
        0.00
      </span>
    </div>
    <div>
      <button class="btn btn-delete" onclick="deleteItem(event)">delete</button>
    </div>`;
  
  wrapper.appendChild(container);

  itemName.value = "";
  itemPrice.value = "";
}

