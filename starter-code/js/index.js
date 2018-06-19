var singleProductCost = document.getElementsByClassName('productCost');
var theQuantity = document.getElementsByClassName('qty');
var singleProductTotal = document.getElementsByClassName('totalProductPrice');
var realTotalPrice = document.getElementById('spanTotal');
var calcPricesBtn = document.getElementById('calc-prices-button');
var rows = document.getElementsByClassName('row');
var deleteButtons = document.getElementsByClassName('btn-delete');


calcPricesBtn.onclick = function(){
    for(var i = 0; i < singleProductCost.length; i++){
        var qty = theQuantity[i].value;
        var unitCost = singleProductCost[i].innerHTML;
        var totalItemCost = qty*unitCost
        singleProductTotal[i].innerHTML = totalItemCost.toFixed(2);
    }
    var arr = [].slice.call(singleProductTotal)
    // this line magically turns our array-like-object into an actual array
    //so that we are now able to run a .reduce function on our array
    var realFinalTotal = arr.reduce(function(sum, eachNumSpan){
        return sum + Number(eachNumSpan.innerHTML);
    },0)
    realTotalPrice.innerHTML = realFinalTotal.toFixed(2);
}

document.getElementById('createBtn').onclick = function(){
    var priceToCreate = document.getElementById('productCostValue').value;
    var nameToCreate = document.getElementById('productNameValue').value;
    var newRow = document.createElement('div');
    newRow.className += 'row';
    newRow.innerHTML = `
    <div class="col-xs-5">
        <span class="productName">${nameToCreate}</span>
    </div>
    <div class="col-xs-5">
        $<span class="productCost">${priceToCreate}</span>
    </div>
    <div class="col-xs-5">
        <label for="qty">QTY</label>
        <input type="number" value="0" min="0" class="qty">
    </div>
    <div class="col-xs-5">
        $<span class="totalProductPrice">0.00</span>
    </div>
    <div class="col-xs-5 delete">
        <button class="btn btn-delete">DELETE</button>
    </div>
    `
document.getElementById('something').appendChild(newRow);


for(var i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].onclick= function(event){
       event.currentTarget.parentNode.parentNode.remove();
    }
}
}


for(var i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].onclick= function(event){
       event.currentTarget.parentNode.parentNode.remove();
    }
}



