function deleteItem(e){

  e.target.parentElement.remove();
  getTotalPrice(e)

}

function getTotalPrice(even) {
  let div = document.getElementById('sumAll');
  let listTotais = document.querySelectorAll('.total');
  let total = 0.00;
  let titlePrice = document.querySelector('h2');


  for(let i =0; i<listTotais.length; i+=1){
     total += parseFloat(listTotais[i].innerText);
    };
  
    if(titlePrice < 1 ){
      let sumAll = document.createElement('h2');
      div.appendChild(sumAll);
      sumAll.innerText = `Total Price: $ ${total}`;
    } else{
      titlePrice.innerText = `Total Price: $ ${total}`;
    }

}

function createNewItem(){

  let productNew = document.querySelector('#newProduct').value;
  let unitPriceNew = document.querySelector('#newPrice').value;
  let products = document.querySelector('#products');

  if (productNew !== "" && unitPriceNew !== 0){

    let div = document.createElement('div');
    div.setAttribute('class', 'wrapper');
    div.innerHTML = `
  
    <span class = 'productName'> ${productNew} </span>  
  
    <div class = 'price'> Unit Value $:
    <span class = 'costUnit'> ${parseFloat(unitPriceNew).toFixed(2)} </span> 
    </div>
  
    <label class = 'label'> QTY <input class = 'quantity' type="number" name="quantidade" value= 0 />  </label> 
  
    <div class = 'totaly'>Total $:
    <span class = 'total'> 0.00 </span> 
    </div>
  
    <button class = 'btn btn-delete' name = 'btn-delete'> Delete </button> `
  
    products.appendChild(div);
  
    update();

  }



}

function totalPrice(event){

  let unit = event.target.parentElement.parentElement.querySelector('.costUnit').innerText;
  let quantity = event.target.value;
  let total = event.target.parentElement.parentElement.querySelector('.total');
  let acount = parseFloat(unit * quantity);
  total.innerText = acount;

  }

function update (){

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var atualizatotal = document.getElementsByClassName('quantity');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(let i = 0; i<atualizatotal.length; i+=1){
    atualizatotal[i].onchange = totalPrice;
  }

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var atualizatotal = document.getElementsByClassName('quantity');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(let i = 0; i<atualizatotal.length; i+=1){
    atualizatotal[i].onchange = totalPrice;
  }

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
