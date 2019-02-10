window.onload = function () {
    //////Products

    var calcPriceButton = document.getElementById("calculate-price-btn");
    var total = document.getElementsByClassName("total")[0];
    var basketValue = document.getElementById("total-sum");
    var price = document.getElementsByClassName("price")[0];
    var deleteButton = document.getElementsByClassName("btn-delete")[0];
    var creatingNewBtn = document.getElementById("create");

    calcPriceButton.onclick = function () {
      for (let i = 0; i < document.getElementsByClassName("product-wrapper").length; i++) {
        var quantity = document.getElementsByTagName("input")[0];

        total[i].innerHTML = price[i].innerHTML * quantity[i].value;
        // getting basket total sum
        basketValue += total[i];
      }
    };
    //delete 
    deleteButton.onclick = function (event) {
      var wrapperDiv = event.currentTarget.parentNode.parentNode;
      var parentDiv = eevent.currentTarget.parentNode.parentNode.parentNode;
      parentDiv.removeChild(wrapperDiv);
      // should also update the BasketValue?
    };

    // new
    creatingNewBtn.onclick = function () {
      var newProductName = document.getElementById("new-productname").value;
      var newProductPrice = document.getElementById("new-productprice").value;
      // Create a new product row with the data from the inputs
      var newDiv = document.createElement("div");
      newDiv.setAttribute("class", "product-wrapper");

      //The structure of the new product should be the same
      var add = "<div><span id='product-name'>" + newProductName + "</span></div>";
      add += "<div>$<span class='price'>" + newProductPrice + "</span></div>";
      add += '<div><label>QTY</label><input value="0"></div>';
      add += '<div><span class="total">0</span></div>';
      add += '<div><button class="btn-delete btn">Delete</button></div>';
      newDiv.innerHTML = add;

      var wrapParent = document.getElementById("cart-section");
      wrapParent.appendChild(newDiv);
      };

    };



    // function deleteItem(e){

    // }

    // function getPriceByProduct(itemNode){

    // }

    // function updatePriceByProduct(productPrice, index){

    // }

    // function getTotalPrice() {

    // }

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

    // window.onload = function(){







    // // var calculatePriceButton = document.getElementById('calc-prices-button');
    // //   var createItemButton = document.getElementById('new-item-create');
    // //   var deleteButtons = document.getElementsByClassName('btn-delete');

    // //   calculatePriceButton.onclick = getTotalPrice;
    // //   createItemButton.onclick = createNewItem;

    // //   for(var i = 0; i<deleteButtons.length ; i++){
    // //     deleteButtons[i].onclick = deleteItem;
    // //   }
    // };