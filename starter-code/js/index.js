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

function createNewItemRow(row){

  const clone = row.cloneNode(true);

  const container = document.getElementsByClassName("container")[0];

  container.appendChild(clone);
  debugger
}

function createNewItem(){

}


window.onload = function(){
  let row = document.getElementsByClassName("row")[0];
  
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  ;
  calculatePriceButton.onclick = getTotalPrice;
  // let span = valueitem.children[0].innerHTML // $25.00
  
  const addRowBtn = document.getElementById("addRow")
    addRowBtn.addEventListener("click",  function(){
      createNewItemRow(row);
  })
  
  // calculatePriceButton.onclick = print;
  // console.log(valueitem);
  // //getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};