var qtyInputs;
var qtyInputsArr;
var stock = [{
            name: 'Fancy T-Shirt',
            price: 35
      },
      {
            name: 'Ironhack mug',
            price: 15
      },
      {
            name: 'Coolest stickers set',
            price: 5
      },
      {
            name: "Homer's sleeping glasses",
            price: 20
      },
      {
            name: "Super strength boost",
            price: 65
      },
      {
            name: "TA's extra help for back-end stuff",
            price: 120
      }
];

function showStock(products) {
      var productsList = document.getElementById('product-list');
      products.forEach(function (product) {
            var product = '<div class="row product"><div class="align-self-center col product-title"><span>' + product.name + '</span></div><div class="align-self-center col col-2 product-price"><span class="span-price">' + product.price + '</span><span> €</span></div><div class="align-self-center col col-2 product-qty"><label for="qty">Nº of items: </label><input class="qty-input" type="number" name="quantity" min="1" value="1"> </div><div class="align-self-center col col-2 product-total-price"><span class="span-total-price">' + product.price + '</span><span> €</span></div><div class="align-self-center col product-remove"><button type="button" class="btn btn-outline-danger">Delete</button></div></div>';
            productsList.innerHTML += product;
      });
}

// function deleteItem(e){

// }

// function getPriceByProduct(product) {
//       return product.price;
// }

// function updatePriceByProduct(productPrice, index){

// }

//get total price on blur
function getTotalPrice(thisProductPrice, numItems, thisProduct) {
      [].slice.call(thisProduct.getElementsByClassName('span-total-price'))[0].innerHTML;
      thisProduct.getElementsByClassName('span-total-price')[0].innerHTML = thisProductPrice * numItems;
}

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

window.onload = function () {
      //pintar array stock
      showStock(stock);
      //get qty inputs
      qtyInputs = document.getElementsByClassName('qty-input');
      // transformar qty inputs a array
      qtyInputsArr = [].slice.call(qtyInputs);
      //add ev.listen a todos los inputs de qty
      qtyInputsArr.forEach(function(input, i){
            var thisProduct = input.closest('.product');
            var thisProductPrice = [].slice.call(thisProduct.getElementsByClassName('span-price'));
            input.addEventListener("blur", function() {
                  return getTotalPrice(thisProductPrice[0].innerHTML, input.value, thisProduct);
            })
      });
      // getTotalPrice();
      //   var calculatePriceButton = document.getElementById('calc-prices-button');
      //   var createItemButton = document.getElementById('new-item-create');
      //   var deleteButtons = document.getElementsByClassName('btn-delete');

      //   calculatePriceButton.onclick = getTotalPrice;
      //   createItemButton.onclick = createNewItem;

      //   for(var i = 0; i<deleteButtons.length ; i++){
      //     deleteButtons[i].onclick = deleteItem;
      //   }
};