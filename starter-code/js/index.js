

//////////////////////////////delete item row/////////////


  let deleteBtn = document.querySelector(".btn-delete");
  deleteBtn.addEventListener('click', deleteItem);

    function deleteItem(){

        console.log('Delete button clicked');

        document.querySelector('.product').remove();

      }

//////////////////////////////Creating a New Item/////////////

  let createNewBtn = document.querySelector(".btn-create");
  deleteBtn.addEventListener('click', createNewBtn);

    function createNewItem(){

      console.log('Create button clicked');

      let pruductName = document.querySelector('.input-pruduct-name').value ;
      let pruductPrice = document.querySelector('.input-price-of-product').value ;
      document.querySelector(".input-pruduct-name").value = "";
      document.querySelector(".input-price-of-product").value = "";

      console.log(pruductName);
      console.log(pruductPrice);

        let newProduct = document.createElement('div');
      newProduct.innerHTML =`<section class="product">

                                <ul>
                                  <li class="product-name">${pruductName}</li>
                                  <li>
                                    <span>$</span> 
                                    <span class="price"> ${pruductPrice}</span>
                                  </li>
                                  <li>
                                    <span class="quantity">QTY</span> 
                                    <input class="input" type=number placeholder='0' >
                                  </li>
                                  <li>
                                    <span>$</span>
                                    <span class="total-pruduct-price">0</span>
                                    </li>
                                  <li><button onclick="deleteItem()" class="btn btn-delete">Delete</button></li>
                                </ul>

                                </section>` ;

      document.querySelector('.new-product').appendChild(newProduct);
      
    }

    //////////////////////////////Print The Total Price/////////////

    let calcTotalBtn = document.querySelector(".btn-success");
    calcTotalBtn.addEventListener('click', getTotalPrice);

    function getTotalPrice() {

      console.log('calculate prices clicked');

      let productElement = document.querySelectorAll(".product"); // get all the created products in an array that have the same class product
      console.log(productElement);

      let realTotal = 0;
      for (let i = 0; i < productElement.length; i++) {
      let productPrice = productElement[i].querySelector(".price").innerHTML;
      console.log(productPrice);

      let QtyInput = productElement[i].querySelector(".input").value;
      console.log(QtyInput);

      rowTotal = productPrice * QtyInput;
      console.log(rowTotal);


      productElement[i].querySelector(".total-pruduct-price").innerHTML = rowTotal;
      console.log(rowTotal);

      realTotal += rowTotal;
      } // end of for loop

      document.querySelector(".real-total").innerHTML = realTotal;
    }   // End createNewItem() function

////////////////////////////////////////// 

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}


function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

//////////////////////////////////////////

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

//////////////////////////////////////////////


// window.onload = function(){

  
  
//   var calculatePriceButton = document.getElementById('calc');

//   calculatePriceButton.onclick = () => {
//     var rows = document.getElementsByClassName('row');


//     var realTotal = 0;
    
//     for(let i = 0; i < rows.length; i++){
      
      
//       var quantity = rows[i].querySelector('input').value;
//       var pricePerUnit = Number(rows[i].querySelector('.product-price').innerHTML.substr(1));
//       var tempTotal = quantity * pricePerUnit;
//       realTotal+=tempTotal;

//       rows[i].querySelector('.product-calculated-price').innerHTML = '$'+tempTotal.toFixed(2);


//     }
//       document.getElementById('real-actual-total').innerHTML = '$'+realTotal.toFixed(2);

//   }


//   var deleteButtons = document.getElementsByClassName('btn-delete');


//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }

//   function deleteItem(blahEvent){
//       blahEvent.currentTarget.parentNode.remove();
//   }


//   var createButton = document.getElementById('create-new');

//   createButton.onclick = () => {
//     var theTitle = document.querySelector('.create-title').value;
//     var thePrice = document.querySelector('.create-price').value+'.00'
   
    

//     console.log(thePrice, theTitle);

//     var newRow = document.createElement('div');
//     newRow.className = 'row';

//     newRow.innerHTML = `
//                 <span class="title">${theTitle}</span>
//                 <span class="product-price">$${thePrice}</span>
//                 <span>
//                   <label>QTY</label>
//                   <input type="number">
//                 </span>
//                 <span class="product-calculated-price">$0.00</span>
//                 <button class="btn btn-delete">Delete</button>
//     `



//       document.getElementById('all-the-rows').appendChild(newRow);

//       document.querySelector('.create-title').value = '';
//       document.querySelector('.create-price').value = '';


//         for(var i = 0; i<deleteButtons.length ; i++){
//           deleteButtons[i].onclick = deleteItem;
//         }


//   }



  //////////////////////////////////




