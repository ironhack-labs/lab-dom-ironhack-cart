window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var inputUnitPrice = document.getElementById('new-prod-price');
  var inputNewName = document.getElementById('new-prod-name');

  // For cloneNode in case we have deleted all products
  var productStructure = document.querySelector('.wrapper');

  // You can add new product pressing enter in the new prod price input
  inputUnitPrice.addEventListener('keypress', function(e){
    // Enter pressed
    if (e.keyCode == 13) {
      cloneCreate();
      inputNewName.focus();
    }

});

  // Check why no need ()
  calculatePriceButton.onclick = getTotalPrice;
  // Cloning function, just one function
  createItemButton.onclick = cloneCreate;
  // Old way, multple functions
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = function(){
      deleteItem(this);
    };
  }

  function getTotalPrice() {
    var productos = document.getElementsByClassName('wrapper');
    var total = 0;
    for (var i = 0; i < productos.length; i++) {
      updatePriceByProduct(getPriceByProduct(productos[i]), i);
      total += getPriceByProduct(productos[i]);
    }
    document.getElementById('total').innerHTML = total;
    document.getElementById('total-price').style.display = 'flex';
  }

  function getPriceByProduct(itemNode){
    var unitPrice = itemNode.querySelector('.price').querySelector('span').innerHTML;
    var quantity = itemNode.querySelector('.qty').querySelector('input').value;

    return unitPrice * quantity;
  }

  function updatePriceByProduct(productPrice, index){
    var totalProduct = document.getElementsByClassName('totalProduct')[index].querySelector('span');
    totalProduct.innerHTML = productPrice;
  }

  function deleteItem(e){
    // Sin parametro
    // this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    // Button - Div Delete - Div Wrapper - body
    e.parentNode.parentNode.remove();
  }

  // Add product with cloneNode
  function cloneCreate() {
    // Inputs
    var nombre = document.getElementById('new-prod-name');
    var unitPrice = document.getElementById('new-prod-price');

    // Check if the inputs arent empty
    if(nombre.value == "" || unitPrice.value == ""){
      document.getElementById('error').style.display = "inline-block";
    } else {
      // Clone our base row from global variable
      var clonated = productStructure.cloneNode(true);

      // Modify new wrapper div with the new product values
      clonated.querySelector('.product').querySelector('span').innerHTML = nombre.value;
      clonated.querySelector('.price').querySelector('span').innerHTML = unitPrice.value;
      clonated.querySelector('.qty').querySelector('input').value = 0;
      clonated.querySelector('.totalProduct').querySelector('span').innerHTML = 0;
      console.log("TERMINADO");
      // Add delete event
      clonated.querySelector('.btn-delete').onclick = function () {
        deleteItem(this);
      };
      // Add wrapper div to the end of the 'product-list' div
      document.getElementById('product-list').appendChild(clonated);
      // Reset Inputs
      nombre.value = "";
      unitPrice.value = "";
      // Reset error in case there was before
      document.getElementById('error').style.display = "none";
    }
  }

  // function createTotalProductNode() {
  //   var totalProdNode = document.createElement("div");
  //   totalProdNode.className = "totalProduct";
  //   totalProdNode.innerHTML = "$";
  //   var span = document.createElement("span");
  //   span.innerHTML = 0;
  //   totalProdNode.appendChild(span);
  //
  //   document.body.appendChild(totalProdNode);
  // }
  //
  // function createDeleteButton(){
  //   var deleteNode = document.createElement("div");
  //   deleteNode.className = "delete";
  //   var button = document.createElement("button");
  //   button.className = "btn btn-delete";
  //   button.setAttribute("type", "button");
  //   button.setAttribute("name", "button");
  //   button.innerHTML = "Delete";
  //   button.onclick = function(){
  //     deleteItem(this);
  //   };
  //   deleteNode.appendChild(button);
  //
  //   return deleteNode;
  // }
  //
  // function createQuantityNode(){
  //   var qtyNode =  document.createElement("div");
  //   qtyNode.className = "qty";
  //
  //   var label = document.createElement("label");
  //   label.className = "quantity";
  //   label.setAttribute("for", "qty");
  //   label.innerHTML = "QTY";
  //
  //   var input = document.createElement("input");
  //   input.setAttribute("type", "number");
  //   input.setAttribute("name", "cantidad");
  //   input.setAttribute("value", 0);
  //   qtyNode.appendChild(label);
  //   qtyNode.appendChild(input);
  //
  //   return qtyNode;
  // }
  //
  // function createItemNode(dataType, itemData){
  //   var node = document.createElement("div");
  //   node.className = dataType;
  //   if (dataType == "price" || dataType == "totalProduct") {
  //     node.innerHTML = "$";
  //   }
  //   var span = document.createElement("span");
  //   span.innerHTML = itemData;
  //   node.appendChild(span);
  //
  //   document.body.appendChild(node);
  //
  //   return node;
  // }
  //
  // function createNewItemRow(itemName, itemUnitPrice){
  //   var row = document.createElement("div");
  //   row.className = "wrapper";
  //   row.appendChild(createItemNode("product", itemName));
  //   row.appendChild(createItemNode("price", itemUnitPrice));
  //   row.appendChild(createQuantityNode());
  //   row.appendChild(createItemNode("totalProduct", 0));
  //   row.appendChild(createDeleteButton());
  //
  //   document.getElementById('product-list').appendChild(row);
  // }
  //
  // function createNewItem(){
  //   var nombre = document.getElementById('new-prod-name');
  //   var unitPrice = document.getElementById('new-prod-price');
  //
  //   if(nombre.value == "" || unitPrice.value == ""){
  //     document.getElementById('error').style.display = "inline-block";
  //   } else {
  //     createNewItemRow(nombre.value, unitPrice.value);
  //     // Reset Inputs
  //     nombre.value = "";
  //     unitPrice.value = "";
  //     document.getElementById('error').style.display = "none";
  //   }
  // }

};
