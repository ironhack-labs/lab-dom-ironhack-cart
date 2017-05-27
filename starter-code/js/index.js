$(document).ready(function() {

  function Item(name, price) {
      this.name = name;
      this.price = price;
      this.qty = 1;

      this.totalPrice = function() {
        return this.price * this.qty;
      };

      this.changeQuantity = function(qty){
        this.qty = qty;
      }
  }



function Cart(){
  this.items = [];
  this.total = 0;

  this.addItem = function (item){
    this.items.push(item);
  };

  this.printItems = function(){
    $('.items-table').empty();
    var html = "";

    if(this.items.length >0){
      this.items.forEach(function(element, idx) {
        html += "<div class='row'>";
        html += "<div class='col-xs-3'><span>" + element.name + "</span></div>";
        html += "<div class='col-xs-3'><span>" + element.price + "</span></div>";
        html += "<div class='col-xs-3'><label>QTY</label><input name='quantity' type='text' data-input='" + idx + "' value='" + element.qty + "'></div>";
        html += "<div class='col-xs-2'><span>" + element.totalPrice() + "</span></div>";
        html += "<div class='col-xs-1'><button class='delete btn btn-delete' data-btn='" + idx + "'>Delete</button></div>";
        html += "</div>";
      });

      $(".items-table").prepend(html);
      $('.btn-delete').click(function(){
        var idx = $(this).attr("data-btn");
        cart.deleteItem(idx);
      });


      $('input[name="quantity"]').on("focusout", function(){
        var idx = $(this).attr("data-input");
        var qty = $(this).val();
        if(qty > 0){
          cart.items[idx].changeQuantity(qty);
          cart.printItems();
          cart.getTotalPrice();
        }else{
          cart.deleteItem(idx);
        }
      })


    }else{
      html ="No hay Items todavía";
      $(".items-table").prepend(html);

    }
  };



  this.deleteItem = function(idx){
    this.items.splice(idx, 1);
    this.printItems();
  };

  this.getTotalPrice = function(){
      this.total = 0;
      for(var i = 0; i< this.items.length; i++){
        this.total += this.items[i].totalPrice();
      }
      $(".total-price").text(this.total);
  };
}






var cart = new Cart();
cart.printItems();

$('.create').click(function(){
  var name = $('input[name="nameItem"]').val();
  price = $('input[name="priceItem"]').val();
  var item  = new Item(name, price);
  cart.addItem(item);
  cart.printItems();
  cart.getTotalPrice();
});





});
