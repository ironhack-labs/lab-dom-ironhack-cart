function deleteItem(){

  parent=this.parentNode.parentNode.parentNode; //padre
  child=this.parentNode.parentNode; //hijo
  parent.removeChild(child);
  getTotalPrice();

}

function getPriceByProduct(itemNode){

  var quantity=parseInt(itemNode.getElementsByClassName("howMany")[0].value);
  var costPerUnit=parseInt(itemNode.getElementsByClassName("money")[0].textContent);
  itemNode.getElementsByClassName("ProductTotalPriceText")[0].innerHTML=quantity*costPerUnit;
  return quantity*costPerUnit;
 

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  


  var setOfProducts=document.getElementsByClassName("product");
  var sum=0;
  for (i=0;i<setOfProducts.length;i++){
    
    sum+=getPriceByProduct(setOfProducts[i]);   
  }
  
  document.getElementById("totalPrice").innerHTML=sum.toString();

  


  

}

function createQuantityInput(){
  
  var inp=document.createElement("input");
  inp.className="howMany";
  inp.type="text";
  inp.placeholder="0";
  inp.value="0";
  inp.className="howMany";
  return inp;
}

function createDeleteButton(){

  var divLabel=document.createElement("div");//buttonDeleteBox
  divLabel.className="buttonDeleteBox";
  var butLabel=document.createElement("button");
  butLabel.className="btn-delete btn";
  butLabel.innerHTML="Delete";
  
  document.getElementsByClassName("product")[document.getElementsByClassName("product").length-1].appendChild(divLabel);
  divLabel.appendChild(butLabel);
  var deleteButtons = document.getElementsByClassName('btn-delete');
  deleteButtons[deleteButtons.length-1].onclick = deleteItem;
}

function createQuantityNode(){
  
  var c=document.createElement("div");
  c.className="ProductInputtBox";
  var f=document.createElement("span");
  f.innerHTML="QTY";
  var i=createQuantityInput();
  document.getElementsByClassName("product")[document.getElementsByClassName("product").length-1].appendChild(c);
  c.appendChild(f);
  c.appendChild(i);
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

  var a=document.createElement("div");//div general
   a.className="product";
  document.getElementById("ListOfProducts").appendChild(a);
  
  var ab=document.createElement("div");//productcostbox
   ab.className="ProductNameBox";
  var f=document.createElement("span");
  f.className="ProductNameText";
  f.innerHTML=itemName;
  a.appendChild(ab);
  ab.appendChild(f);



  var b=document.createElement("div");//productcostbox
  b.className="ProductCostBox";
  var g=document.createElement("span");
  g.className="money";
  g.innerHTML=itemUnitPrice;
  a.appendChild(b);
  b.appendChild(g);
  
  createQuantityNode();

  var d=document.createElement("div");//ProductTotalPriceBox
  d.className="ProductTotalPriceBox";
  var k=document.createElement("span");
  d.className="ProductTotalPriceText";
  a.appendChild(d);
  d.appendChild(k);

  


}

function createNewItem(){

  var itemN=document.getElementById("productNameCreate").value;
  var itemUnitP=document.getElementById("howMuchCreate").value;
  createNewItemRow(itemN,itemUnitP);
  createDeleteButton();


}

window.onload = function(){
  
  

  /////////////////////////////////7
  
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  

  

};


