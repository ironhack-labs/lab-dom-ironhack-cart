/*===============================
stock array
===============================*/
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
      },
      {
            name: "IronBeers - Sixpack",
            price: 8
      }
];

//duplicar stock array para el user: modificar el array para cada user sin modificar el stock de la tienda
var userCart = stock;

/*===============================
crear qty btn
===============================*/
//variables para qty btns
var qtyInputs;
var qtyInputsArr;

function createQuantityInput() {
      //get qty inputs
      qtyInputs = document.getElementsByClassName('qty-input');
      // transformar qty inputs a array
      qtyInputsArr = [].slice.call(qtyInputs);
      //add ev.listen a todos los inputs de qty
      qtyInputsArr.forEach(function (input, i) {
            var thisProduct = input.closest('.product');
            var thisProductPrice = [].slice.call(thisProduct.getElementsByClassName('span-price'));
            input.addEventListener("blur", function () {
                  return getTotalPrice(thisProductPrice[0].innerHTML, input.value, thisProduct);
            });
      });
}

/*===============================
get total price
===============================*/
function getTotalPrice(thisProductPrice, numItems, thisProduct) {
      //get html collection y devolver obj como array
      [].slice.call(thisProduct.getElementsByClassName('span-total-price'))[0].innerHTML;
      //setear el innerHTML con el valor multiplicado
      thisProduct.getElementsByClassName('span-total-price')[0].innerHTML = thisProductPrice * numItems;
      getCartTotal();
      itemsInCart();
}

/*===============================
listener y llamada para crear producto
===============================*/
//get inputs values, vaya cosa más torpe para el get y el set de los values...
var newItemName = document.getElementById('new-item-name-input');
newItemName.value = newItemName.value;
var newItemPrice = document.getElementById('new-item-price-input');
newItemPrice.value = newItemPrice.value;
//listener para el btn del modal e invocación de la fx
var addItemBtn = document.getElementById('addProductBtn').addEventListener('click', function () {
      createNewItem(newItemName.value, newItemPrice.value);
      //un poco de jQuery para cerrar el modal
      $('#addProductModal').modal('hide');
});

function createNewItem(newItemName, newItemPrice) {
      var newItem = {
            name: newItemName,
            price: parseInt(newItemPrice)
      };
      stock.push(newItem);
      showStock(userCart);
      createQuantityInput();
      listenerRemoveButtons();
      getCartTotal();
      itemsInCart();
}

/*===============================
pintar stock
===============================*/
function showStock(products) {
      var productsList = document.getElementById('product-list');
      productsList.innerHTML = '';

      products.forEach(function (product, i) {

            var product = '<div class="row product"><div class="align-self-center col-sm product-title"><span>' + product.name + '</span></div><div class="align-self-center col-sm-2 product-price"><span class="span-price">' + product.price + '</span><span> €</span></div><div class="align-self-center col-sm-2 product-qty"><label for="qty">Nº of items: </label><input class="qty-input" type="number" name="quantity" min="0" value="1"> </div><div class="align-self-center col-sm-2 product-total-price"><span class="span-total-price">' + product.price + '</span><span> €</span></div><div class="align-self-center col-sm product-remove"><button type="button" class="btn btn-outline-danger remove-product-btn">Delete</button></div></div>';

            productsList.innerHTML += product;
      });
}

/*===============================
get cart total
===============================*/
function getCartTotal() {
      var totalResultContainer = document.getElementById('total-cart-result');
      var totalProductsPriceArray = [].slice.call(document.getElementsByClassName('span-total-price'));
      var cart_total = totalProductsPriceArray.reduce(function (acc, e, i) {
            return parseInt(e.innerHTML) + acc;
      }, 0);
      totalResultContainer.innerHTML = cart_total + ' €';
}

/*===============================
remove item
===============================*/

function listenerRemoveButtons() {
      var removeProductBtn = [].slice.call(document.getElementsByClassName('remove-product-btn'));
      removeProductBtn.forEach(function (btn, i) {
            btn.addEventListener('click', function () {
                  deleteItem(btn, i);
            });
      })
}

function deleteItem(btn, i) {
      btn.closest('.product').remove();
      userCart.splice(i, 1);
      getCartTotal();
      itemsInCart();
}

/*===============================
number of items in cart
===============================*/

function itemsInCart(){
      var span = document.getElementById('total-items-in-cart');
      var numItems = 0;
      var qtyInputs = [].slice.call(document.getElementsByClassName('qty-input'));
      qtyInputs.forEach(function (input, i) {
            var thisProduct = input.closest('.product');
            var thisProductQty = [].slice.call(thisProduct.getElementsByClassName('qty-input'));
            var thisProductQtyVal = parseInt(thisProductQty[0].value);
            numItems += thisProductQtyVal;
      });
      span.innerHTML = numItems;
}

/*===============================
onload event
===============================*/

window.onload = function () {
      showStock(userCart);
      createQuantityInput();
      getCartTotal();
      listenerRemoveButtons();
      itemsInCart();
};