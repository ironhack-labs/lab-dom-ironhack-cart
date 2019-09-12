
//ITERATION 1 & 2

/*Creating two products
(See html file)*/

//ITTERATION 3
/*Caluculating the total price of all products and for each product*/
let itemInformation = document.getElementsByClassName('item-information');
let cartTotalPrice= document.getElementById('cart-total-price'); 

function getTotalPrice() {  
  let productPrice = 0
  for(let i=0; i < itemInformation.length; i++) {
    let price = Number(itemInformation[i].getElementsByClassName('item-price')[0].innerHTML)
    let quantity = Number(itemInformation[i].getElementsByClassName('input')[0].value);
      productPrice += price * quantity; 
      cartTotalPrice.innerHTML = productPrice; 
  }
return productPrice; 
}; 

function getUpdatePrice() {
  for(let i=0; i < itemInformation.length; i++) {
    let price = Number(itemInformation[i].getElementsByClassName('item-price')[0].innerHTML)
    let quantity = Number(itemInformation[i].getElementsByClassName('input')[0].value);
      itemInformation[i].getElementsByClassName('item-new-price')[0].innerHTML = price * quantity; 
  }
getTotalPrice(); 
};

//ITERATION 4
/*Deleting a product*/ 

let deleteButtons= document.getElementsByClassName('btn-delete')

function deleteButtonEvent(e){
  for(let i=0; i<deleteButtons.length ; i++){
    deleteButtons[i].addEventListener('click', deleteItem); 
    //other way to do it => deleteButtons[i].onclick = deleteItem
  }
}; 

deleteButtonEvent(); //call this function now because event listener needs to be attached to delete buttons
  
function deleteItem(event) {
  let buttonClicked = event.currentTarget
    buttonClicked.closest('div').remove();
};  

//ITTERATION 5
/*Creating new products*/

function addItemEvent(e) {
  let row = document.getElementById('create');
    row.addEventListener('click', addItem); 
}; 

addItemEvent(); 

function addItem() {
  let name = document.getElementById('item-name').value
  let price = document.getElementById('item-price').value
  let parent = document.createElement('div');
    parent.setAttribute("class", "row");
    parent. innerHTML =
    `<ul class="item-information">
    <li>${name}</li>
    <li>$<span class="item-price">${price}</span></li>
    <li><p class="quantity">QTY</p></li>
    <li><input class="input" type="number" placeholder="0"></li>
    <li>$<span class="item-new-price">0.00</span></li>
    <li><button class="btn btn-delete" type="reset">Delete</li>
    </ul>`

  let merchandise = document.getElementById('merchandise')

merchandise.appendChild(parent); 
deleteButtonEvent();
};