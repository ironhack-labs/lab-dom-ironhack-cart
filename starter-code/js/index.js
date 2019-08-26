function deleteItem(e){
  // define the child 
  let deleteRow = document.querySelector(`.row`);
  // define the parent 
  let parentCart = document.getElementById(`cart`);
  // remove the child 
  parentCart.removeChild(deleteRow);
}

function getTotalPrice(e) {  
  // document.getElementsByClassName('row') will return an array because there's multiple rows. so we store that array in the rows variable
  // this is like a normal loop. Need to define the a rows variable and loop through it
  let rows = document.getElementsByClassName('row');
  for(let i = 0; i<rows.length; i++) {
    // define the parent element. this will let us loop through each row. as the loop loops, we go down row by row
    let row = rows[i];

    // set variable price with the appropriate DOM value to get each 'price' section in each row. Row here comes from the row variable above. its the parent element
    let price = row.children[1].children[0];
    console.log(price.innerText); //use .innerText to get the value of the a DOM element

    // repeat with quantity
    let quantity = row.children[2].children[1];
    console.log(quantity.value); //use .value to get the value of a DOM element inside a form


    let total = Number(price.innerText * quantity.value) //both .innerText and .value return 'strings' so we need to wrap it in Number() to convert it to a number so that we can multiple
    console.log(total);
    row.children[3].children[0].innerHTML = total; //.innerHTML will update the DOM element where we want total price with the total variable from above
  }
}

  // can i create something that will pull the document.query whatever from the appropriate place?

  // name placeholder 
  // <input type="text" class="item-name" placeholder="Name"></input>
  // price section 
/* <input type="text" class="item-cost" placeholder="Price"></input> */

function createNewItem(){
  // create a new dom obj with the appropriate elements
  // item name and price should be input tags
  let newItem = `
  <div class='row'>
    <div class = "col name">
      <span> ${document.querySelector(`.placeholderName`).value} </span>
    </div>
    <div class="col cost">
      <span> ${document.querySelector(`.placeholderPrice`).value} </span>
    </div>
    <div class="col">
      <label for="quantity">QTY</label>
      <input type="text" class="quantity" placeholder="0">
    </div>
    <div class="col price">
      <span>0.00</span>
    </div>
    <div>
      <button class="col btn-delete">Delete</button>
    </div>
  </div>`

  document.getElementById(`cart`).innerHTML += newItem;
}

window.onload = function(){
  // let calculatePrice = document.querySelector('.btn-success');
  // calculatePrice.onclick = getTotalPrice

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  
  for(let i = 0; i<deleteButtons.length; i++) {
  deleteButtons[i].onclick = deleteItem;
  }
};


// get total price:
  // Retrieves the unit price of the product
  // let unitPrice = Number(document.querySelector("body > div:nth-child(2) > div.cost > span").innerText.replace('$',''));
  // the stuff in querySelector was pulled from the inspecting the js path in console
  // it comes back with $ like $25.00. so we need to remove the $ with innerText.replace
  // it also comes back as a String. which we need to convert to a number to do Math. Just wrap it in the Number()
  // document.querySelector('.itm-price'); ==> if you do this it will pull from every class .itm-price and you'll have an array

  // Retrieves the quantity of items desired
    // let qtyInput = Number(document.querySelector("body > div:nth-child(2) > div:nth-child(3) > input").value);
    // document.querySelector('.qty'); ===> same as above, will select all .qty
    // use .value to get the numberical value inside the form 


  // Calculates the total price based on this data
    // let totalPrice = unitPrice * qtyInput;


  // Updates the total price in the DOM
  // console.log(unitPrice, qtyInput, totalPrice)
  // need to figure out how to add money sign back in
    // document.querySelector("body > div:nth-child(2) > div:nth-child(4) > span").innerHTML = totalPrice;
    // document.querySelector("body > div:nth-child(3) > div:nth-child(4) > span")