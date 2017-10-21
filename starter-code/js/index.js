window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  // Check why no need ()
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

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
    var unitPrice = itemNode.getElementsByClassName('price')[0].getElementsByTagName('span')[0].innerHTML;
    var quantity = itemNode.getElementsByClassName('qty')[0].getElementsByTagName('input')[0].value;

    return unitPrice * quantity;
  }

  function updatePriceByProduct(productPrice, index){
    var totalProduct = document.getElementsByClassName('totalProduct')[index].getElementsByTagName('span')[0];
    totalProduct.innerHTML = productPrice;
  }

  function deleteItem(e){
    // Sin parametro
    // this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    // Button - Div Delete - Div Wrapper - body
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
  }

  function createTotalProductNode() {
    var totalProdNode = document.createElement("div");
    totalProdNode.className = "totalProduct";
    totalProdNode.innerHTML = "$";
    var span = document.createElement("span");
    span.innerHTML = 0;
    totalProdNode.appendChild(span);

    document.body.appendChild(totalProdNode);
  }

  function createDeleteButton(){
    var deleteNode = document.createElement("div");
    deleteNode.className = "delete";
    var button = document.createElement("button");
    button.className = "btn btn-delete";
    button.setAttribute("type", "button");
    button.setAttribute("name", "button");
    button.innerHTML = "Delete";
    button.onclick = function(){
      deleteItem(this);
    };
    deleteNode.appendChild(button);

    return deleteNode;
  }

  function createQuantityNode(){
    var qtyNode =  document.createElement("div");
    qtyNode.className = "qty";

    var label = document.createElement("label");
    label.className = "quantity";
    label.setAttribute("for", "qty");
    label.innerHTML = "QTY";

    var input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("name", "cantidad");
    input.setAttribute("value", 0);
    qtyNode.appendChild(label);
    qtyNode.appendChild(input);

    return qtyNode;
  }

  function createItemNode(dataType, itemData){
    var node = document.createElement("div");
    node.className = dataType;
    if (dataType == "price" || dataType == "totalProduct") {
      node.innerHTML = "$";
    }
    var span = document.createElement("span");
    span.innerHTML = itemData;
    node.appendChild(span);

    document.body.appendChild(node);

    return node;
  }

  function createNewItemRow(itemName, itemUnitPrice){
    var row = document.createElement("div");
    row.className = "wrapper";
    row.appendChild(createItemNode("product", itemName));
    row.appendChild(createItemNode("price", itemUnitPrice));
    row.appendChild(createQuantityNode());
    row.appendChild(createItemNode("totalProduct", 0));
    row.appendChild(createDeleteButton());

    document.getElementById('product-list').appendChild(row);
  }

  function createNewItem(){
    var nombre = document.getElementById('new-prod-name').value;
    var unitPrice = document.getElementById('new-prod-price').value;
    createNewItemRow(nombre, unitPrice);
  }
};
