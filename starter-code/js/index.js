$(document).ready(function() {

  function Item(name, price) {
    this.name = name;
    this.price = price;
    this.qty = 1;

    this.totalPrice = function() {
      return this.price * this.qty;
    };
  }
  /*default items*/
  var items = [];
  var item1 = new Item("IronBubble-head", 25);
  var item2 = new Item("IronShirt", 15);
  var item3 = new Item("IronCup", 10);
  var item4 = new Item("IronSticker", 1);
  var item5 = new Item("IronAxe", 100);

  items = [item1, item2, item3, item4, item5];
  fillChart(items);

  $(".btn-create").on("click", function() {
    createNewItem();
  });

  $(".btn-success").on("click", function() {
    getTotalPrice(items);
  });


  /**
   * print all items in cart
   * @param   items
   * @return -
   */
  function fillChart(items) {
    $(".container-fluid").empty();
    var html = "";
    items.forEach(function(element, idx) {
      html += "<div class='row item'>";
      html += "<div class='col-xs-3'><span>" + element.name + "</span></div>";
      html += "<div class='col-xs-3'><span>" + element.price + "</span></div>";
      html += "<div class='col-xs-3'><label>QTY</label><input type='text' class='qty-span' data-qty='" + idx + "' value='" + element.qty + "'></div>";
      html += "<div class='col-xs-2'><span>" + element.totalPrice() + "</span></div>";
      html += "<div class='col-xs-1'><button class='btn-delete' data-btn='" + idx + "'>Delete</button></div>";
      html += "</div>";
    });
    $(".container-fluid").prepend(html);
    $(".btn-delete").click(function() {
      var idx = $(this).attr("data-btn");
      console.log("-" + idx);
      deleteItem(idx);
    });

    $(".qty-span").focusout(function() {
      var idx = $(this).attr("data-qty");
      console.log("", idx);
      var qty = $(this).val();
      updatePriceByProduct(items[idx], idx, qty);
    });
  }

  /**
   * delete one item
   * @param  idx
   * @return
   */
  function deleteItem(idx) {
    items.splice(idx, 1);
    fillChart(items);
  }
  /**
   * create new item by name & price
   * @return
   */
  function createNewItem() {
    var name = $('.new-name').val();
    var price = $('.new-price').val();
    var item = new Item(name, price);
    items.push(item);
    fillChart(items);
  }

  function getPriceByProduct(itemNode) {

  }

  function updatePriceByProduct(item, idx, qty) {
    items[idx].qty = qty;
    fillChart(items);
  }

  function getTotalPrice(items) {
    var total = 0;
    items.forEach(function(element, idx) {
      total += element.totalPrice();
    });
    $(".total-price").text(total);
  }


  function createQuantityInput() {

  }

  function createDeleteButton() {

  }

  function createQuantityNode() {

  }

  function createItemNode(dataType, itemData) {

  }

  function createNewItemRow(itemName, itemUnitPrice) {

  }
});
