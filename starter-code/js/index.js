var $cart = document.querySelector('#cart > tbody');
var $calc = document.getElementById('calc');


function updateSubtot($product){
  // Iteration 1.1
  //Price received as string with $ in front, so slice string to then convert to number in order to multiply for subtotal
  let price = Number($product.querySelector(`.pu`).innerText.slice($product.querySelector(`.pu`).innerText.indexOf("$")+1));
  //retrieve quantity from element passed as product
  let quantity= $product.querySelector(`.qty > label > input[type=number]`).valueAsNumber;
  //get subtotal 
  let subtotal = price * quantity;
  //insert subtotal to line item for element passed and then return subtotal
  $product.querySelector('.subtot').innerText='$'+subtotal
  return subtotal
}


function calcAll() {
  let sumTotal=0;
  //loop through cart table for each row aka product
  for (i=0; i < $cart.rows.length ;i++){
    
    let product=$cart.rows[i]
    //pass element that is the product or whole row (tr) and it updates & returns a subtotal 
    //add subtotal to sumTotal and move to next element/row/product
    sumTotal+=updateSubtot(product);
  }
  //replaces the total text below the calc buttom, specially the number which is within <span></span>
  document.querySelector("body > h2 > span").innerText = sumTotal
}
//add event to element with ID calc which is ID for Calculate button
$calc.onclick = calcAll();


//create variable holder for button with element ID create
var createElement = document.getElementById('create')
//create variable holder that is a function which will be 2nd argument in addEventListener
var _handler = function (e){
    //element passed will either be to create or delete
    //which can be identified by bubbling out of the element passed to parentNode 
    //to find where element is tucked inside (who is the child's unique parent)
     if (e.target.parentNode.parentNode.parentNode==document.querySelector('#cart tbody')){
      //remove child if parent is the cart
      e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode); 
    }else if(e.target==document.querySelector('#create')){
      //call function to create element and pass element
      createNewElement(e.target)
     }
     
    }


//adds event listener to all delete buttons
function deleteItem() {
  var childElements = document.getElementsByClassName('product');
  var buttonElements = document.getElementsByClassName('btn btn-delete');
  //Loop through array of buttoon element by class name 'btn btn-delete'
  for (var i=0;i<buttonElements.length;i++) {
    buttonElements[i].addEventListener('click', _handler, false);
  }    
}
//adds event listener to create button
createElement.addEventListener('click',_handler,false);

//Creates and inserts a new product/row/element in cart 
function createNewElement(element) {
  //add two variables to hold the 2 inputs of the create line item 
  var newName=element.parentNode.parentNode.querySelector("td:nth-child(1) > input[type=text]").value
  var newPrice=element.parentNode.parentNode.querySelector("td:nth-child(2) > input[type=number]").valueAsNumber

  //store string that is used inside a product row (tr) into a variable
  //insert the variables above where it would go in a product element
  let newElement = 
  `<td class="name">
    <span>${newName}</span>
  </td>

  <td class="pu">$<span>${newPrice}</span></td>

  <td class="qty">
    <label>
      <input type="number" onchange="calcAll()" value="0" min="0" />
    </label>
  </td>

  <td class="subtot">$<span>0</span></td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>`
  //create row element
  var tr = document.createElement("tr")
  //give row element a class
  tr.classList="new"
  //insert string above for the new product
  tr.innerHTML=newElement
  //add new product row to cart table
  //alternatively, could createElement for each child in the string above. Essentially creating the individual column values for the new row. 
  $cart.appendChild(tr)
  //need to reset addEventListeners for delete buttons since cart table has changed/reset to include new product created
  deleteItem()
  //set the inputs on create line item row back to nothing 
  document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value=""
  document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value=""
  
}
