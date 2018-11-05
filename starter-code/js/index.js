function deleteItem(e){
    let parent = e.toElement.parentNode.parentNode;
    //console.log(parent);
    let elementRemoved = e.toElement.parentNode;
    parent.removeChild(elementRemoved);
    //console.log(elementRemoved.parentNode);
    //console.log(elementRemoved)
    //let parent = e.target.removeChild(elementRemoved);*/
}
console.log('working');
function getPriceByProduct(e){
    console.log('entro a getPRICE');
    let inputQty =  e.target.querySelector("input.quantity");
    let price = e.target.querySelector("section span.price");

}

window.addEventListener("load", function(e) {
    let inputs = document.getElementsByClassName('quantity');
    for (let input of inputs){
        input.addEventListener('change',(e)=>{
            let price = e.target.parentNode.parentNode.querySelector('.price').innerText;
            let realPrice = price.substring(1, price.length);
            let totalPrice = e.target.parentNode.parentNode.querySelector('.priceRow');
            totalPrice.innerHTML = input.value*realPrice;
        });
    }
});

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
    let pricesRow = document.getElementsByClassName('priceRow');
    let totalPrice = 0;
    for(let priceRow of pricesRow){
        totalPrice += parseInt(priceRow.innerText);
    }
    document.getElementById('totalPrice').innerHTML = totalPrice;
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

function createNewItem(){
    let element = document.getElementById('newElement');
    let price = document.getElementById('newPrice');
    console.log(price.innerText);
    let spanPrice = document.createElement('span');
    let spanElement = document.createElement('span');
    let spanRowPrice = document.createElement('span');
    spanPrice.appendChild(document.createTextNode('$'+price.value));
    spanElement.appendChild(document.createTextNode(element.value));
    spanPrice.className = 'price';
    spanElement.className = 'element';
    spanRowPrice.className = 'priceRow';
    let input = document.createElement('INPUT');
    input.className = 'quantity';
    input.addEventListener('change',(e)=>{
        let price = e.target.parentNode.parentNode.querySelector('.price').innerText;
        let realPrice = price.substring(1, price.length);
        let totalPrice = e.target.parentNode.parentNode.querySelector('.priceRow');
        console.log(totalPrice);
        totalPrice.innerHTML = input.value*realPrice;
    });
    let button = document.createElement('BUTTON');
    input.setAttribute('type','number');
    button.className = 'btn-delete';
    button.appendChild(document.createTextNode("Delete"));
    button.addEventListener('click',deleteItem(event));
    let section = document.createElement('section');
    section.appendChild(spanElement);
    section.appendChild(spanPrice);
    section.appendChild(input);
    section.appendChild(spanRowPrice);
    section.appendChild(button);
    let mainDiv = document.getElementById('mainSection');
    mainDiv.appendChild(section);
}

/*window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
*/