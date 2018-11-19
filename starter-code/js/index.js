
var calcbottonproduct = document.getElementById("btn-success");
var deletebottonproduct = [...document.getElementsByClassName("btn-delete")];
var createform = document.getElementById("btn-create");

// Create price Function 
function getPrice(){
  const quantityproduc = [...document.getElementsByClassName("pQty")];
  const  productcost = [...document.getElementsByClassName("pcost")];
  const  singletotalprice = [...document.getElementsByClassName("tprice")];
  let valortotalprice= 0;

   for(i = 0 ; i < quantityproduc.length ; i++)
   {
    let totalprice = quantityproduc[i].value * productcost[i].innerHTML; 
    singletotalprice[i].innerHTML=totalprice ;
    valortotalprice +=totalprice;
   }

   document.getElementById("calculationprice").innerHTML = valortotalprice ;
  }
//When click the bottom call the getPrice function
  calcbottonproduct.onclick = getPrice;

//Delete the  row

   for(i = 0 ; i < deletebottonproduct.length ; i++)
      {
        deletebottonproduct[i].addEventListener('click', function(e) {
          e.currentTarget.parentNode.remove();
          getPrice();
      }, false);
       
      }

      function createNewItem(){
  console.log("entro")
  const superdiv= document.getElementById("product1");
  const creatediv= document.createElement("div");
  superdiv.appendChild(creatediv);
    const createdinputname= document.createElement("input");
    creatediv.appendChild(createdinputname);
      createform.style.display="none";
      const createdinputcost= document.createElement("input");
      creatediv.appendChild(createdinputcost);
        createform.style.display="none";    

      }
      createform.onclick = createNewItem;


/*  var btn = document.getElementsByClassName('btn-delete')

  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(e) {
      e.currentTarget.parentNode.remove();
      //this.closest('.single').remove() // in modern browsers in complex dom structure
      //this.parentNode.remove(); //this refers to the current target element
      //e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }, false);
  }*/




function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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


/*window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
 

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};*/
