function deleteItem(e){

}
console.log('working');
function getPriceByProduct(e){
    console.log('entro a getPRICE');
    let inputQty =  e.target.querySelector("input.quantity");
    let price = e.target.querySelector("section span.price");

}

window.addEventListener("load", function(e) {
    console.log(e);
    let inputs = document.getElementsByClassName('quantity');
    console.log(document.getElementsByClassName('quantity').length);
    for (let input of inputs){
        input.addEventListener('change',(e)=>{
            console.log('Ola');
            console.log(e.target);
            let price = e.target.parentNode.parentNode.querySelector('.price').innerText;
            let realPrice = price.substring(1, price.length);
            let totalPrice = e.target.parentNode.parentNode.querySelector('.priceRow');
            console.log(totalPrice);
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
        console.log('paseint del precio:'+parseInt(priceRow.innerText));
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