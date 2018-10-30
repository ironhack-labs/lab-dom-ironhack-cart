
//////////////////////////Totaling the prices///////////////
 
      
  document.querySelector('.btn-success').addEventListener('click',function(){

    let unitPrice =  document.querySelectorAll('.itemPrice');
    
    let quantity = document.querySelectorAll('.item-quantity');
    
    let totalUnitPrice =document.querySelectorAll('.total-unit-price');

    let finalPrice = 0;
  
     for (let i = 0; i < unitPrice.length; i++){
       totalUnitPrice[i].innerHTML = Number(quantity[i].value) * Number(unitPrice[i].innerHTML);
        finalPrice += Number(totalUnitPrice[i].innerText);
      }

      return document.querySelector('#total-price').innerText = finalPrice;

    })
    

 ///////////////////////////Deleting a Product/////////////


    let deleteButton = document.querySelectorAll('.btn-delete');

    let wrapper = document.querySelectorAll('.wrapper');

    for ( let i = 0; i < deleteButton.length; i++){

      deleteButton[i].addEventListener('click',function(){
          wrapper[i].remove();
      })
      
    }


  /////////////////////////////Creating a Product//////////
  
  document.getElementById('btn-create').addEventListener('click',function(){

      createProduct();

  })




    
    
  let createProduct = function(){

    
    let addProductName = document.querySelector('.product-name').value;

    let addProductPrice = document.querySelector('.product-price').value;

    let newWrapper = document.createElement('div');
    newWrapper.classList.add('wrapper');
    document.querySelector('#main').appendChild(newWrapper)

    let productNameDiv = document.createElement('div');
    productNameDiv.innerText = addProductName;
    newWrapper.appendChild(productNameDiv);

    let productUnitPrice = document.createElement('div');
    productUnitPrice.innerText = addProductPrice;
    productUnitPrice.classList.add('itemPrice');
    newWrapper.appendChild(productUnitPrice);

    let label = document.createElement('label');
    label.innerText = 'QTY';
    newWrapper.appendChild(label);

    let inputQuantity = document.createElement('input');
    inputQuantity.classList.add('item-quantity');
    newWrapper.appendChild(inputQuantity);

    let totalUnitPrice = document.createElement('div');
    totalUnitPrice.innerText = 0;
    totalUnitPrice.classList.add('total-unit-price');
    newWrapper.appendChild(totalUnitPrice);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn-delete');
    deleteBtn.innerText = 'Delete'
    newWrapper.appendChild(deleteBtn);
  }

  









      

  // let wrapperItems = document.getElementsByClassName("wrapper")
  //     for(let i=0; i < wrapperItems.length;i++){
  //     console.log(wrapperItems[i])
  

// var element = document.createElement('innput');

// element.innerHTML = 
// 'helooo user'


// let mainDiv = document.getElementById('mainDiv')
// console.log(mainDiv)
// mainDiv.appendChild(element)

// } end of the function


// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
