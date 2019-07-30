function deleteItem(e){

}
// itemNode
function getPriceByProduct(){
  let valueItem = document.getElementsByClassName('value');
   
  return Number(valueItem[0].innerText);
}
function getQtyByProduct(){
	let qtyProduct = document.getElementsByClassName('quantity')[0].value;
	return Number(qtyProduct);
}


function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
	let sumPerProcuct = 0;
    let elemh2= document.getElementsByTagName("h2");
    debugger
    let whoknows = elemh2[0].children;
    debugger
    let textspan = whoknows[0].innerHTML;

    let elemSumPerProduct =  document.getElementsByClassName('sumperproduct')[0];

    let val = getPriceByProduct();
    let qt= getQtyByProduct();
    sumPerProcuct = val * qt;
    elemSumPerProduct.innerHTML = sumPerProcuct;
    elemTotalPrice.innerHTML = sumPerProcuct;
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

// function createNewItemRow(row){

//   const clone = row.cloneNode(true);

//   const container = document.getElementsByClassName("container")[0];

//   container.appendChild(clone);
//   debugger
// }
 // <div class="row">
 //            <div class="product">
 //                <span>Text</span>
 //            </div>

 //            <div class="valueitem">$
 //                <span class="value">0.00</span>
 //            </div>
 //            <div class="amount">
 //                <label for='quantity'>QTY</label>
 //                <input class="quantity" type='text' name='quantity' value="0">
 //            </div>
 //            <div class="totalperproduct">$
 //                <span class="sumperproduct">
 //                    0.0
 //                </span>
 //            </div>
 //            <button class="btn btn-delete">delete</button>
 //        </div>
function createNewItem(){
  let row = document.createElement('row');
  row.setAttribute("class", "row");

  let product = document.createElement('row');
  product.setAttribute("class", "product");
  let spanDescrition = document.createElement('span');
  spanDescrition.innerHTML = "Description";
  product.appendChild(spanDescrition);
  row.appendChild(product);

  let valueitem = document.createElement('row');
  valueitem.innerHTML = "$";
  valueitem.setAttribute("class", "valueitem");
  let value = document.createElement('span');
  value.innerHTML = "0";
  valueitem.appendChild(value);
  row.appendChild(valueitem);

  let amount = document.createElement('row');
  amount.setAttribute("class", "amount");
  let label = document.createElement('label');
  label.setAttribute("for", "quantity");
  label.innerHTML = "QTY";
  amount.appendChild(label);
  let input = document.createElement('input');
  input.setAttribute("class", "quantity");
  input.setAttribute("type", "text");
  input.setAttribute("name", "quantity");
  input.setAttribute("value", "0");
  amount.appendChild(input);
  row.appendChild(amount);

  let totalperproduct = document.createElement('row');
  totalperproduct.setAttribute("class", "totalperproduct");
  totalperproduct.innerHTML = "$";
  let spanDetails = document.createElement('span');
  spanDetails.innerHTML = "0.0";
  totalperproduct.appendChild(spanDetails);
  row.appendChild(totalperproduct);
  
  let btnDelete = document.createElement('button');
  btnDelete.setAttribute("class", "btn btn-delete");
  btnDelete.innerHTML = "Delete";
  row.appendChild(btnDelete);
  return row;
 
}


function createRow(){

}

window.onload = function(){
   let rows = document.getElementsByClassName("rows")[0];
   rows.appendChild(createNewItem());

  // let row = document.getElementsByClassName("row")[0];
  
  // var calculatePriceButton = document.getElementById('calc-prices-button');
  // // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');
  // ;
  // calculatePriceButton.onclick = getTotalPrice;
  // // let span = valueitem.children[0].innerHTML // $25.00
  
  // const addRowBtn = document.getElementById("addRow")
  //   addRowBtn.addEventListener("click",  function(){
  //     createNewItemRow(row);
  // })
  
  // calculatePriceButton.onclick = print;
  // console.log(valueitem);
  // //getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};