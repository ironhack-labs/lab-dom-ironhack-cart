function deleteItem(e){
  console.log(e);
  $(e).remove();
  //getTotalPrice();
}

function getPriceByProduct(itemNode){
  var ret = $(itemNode + ' .costeUnitario').text();
  console.log(ret);
  return ret;
}

function getQuantityProduct(itemNode){
  var ret = $(itemNode + ' input').val();
  console.log(ret);
  return ret;
}

function updatePriceByProduct(productPrice, index){
  $(index + ' .totalPrice').text("$" + productPrice);
}

function getTotalPrice() {
  var totalAmount = 0;
  $('.elem').each(function(){
    var id =  "#" + $(this).attr("id").toString();
    console.log(id);
    var price = parseInt(getPriceByProduct(id).replace('$',''));
    var quantity = parseInt(getQuantityProduct(id));
    var total = quantity * price;
    totalAmount += total;
    updatePriceByProduct(total, id);
  });
  $('#totalAmount').text("$" + totalAmount);
}

function getNumberElements(){
  var total = 0
  $('.elem').each(function(){
    total++;
  })
  return total;
}

function createNewItem(){
  console.log("hola");
  var id = getNumberElements()+1;
  $('.container').append('<div class="elem" id="elem'+id+'"> ' +
    '<div class="col-xs-5 ">' +
      '<span class="productName">'+ $('#nameProduct').val() +'</span>' +
    '</div>' +
    '<div class="col-xs-5 ">' +
      '<span class="costeUnitario">$'+ $('#priceProduct').val() +'</span>' +
    '</div>' +
    '<div class="col-xs-5 ">' +
      '<label for="units">QTY</label>' +
      '<input type="number" name="units" value="0">' +
  '</div>' +
    '<div class="col-xs-5 ">' +
      '<span class="totalPrice">$0.00</span>' +
    '</div>' +
    '<div class="col-xs-5">' +
      '<button type="button" name="button" class="btn btn-delete">Delete</button>' +
    '</div>' +
  '</div>');

  $('#elem'+id).on("click", ".btn-delete", function(){deleteItem('#elem'+id)});
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  // var arrayId = []
  // for(var i = 0; i<deleteButtons.length ; i++){
  //   arrayId.push("#elem" + (i+1));
  // }
  //
  // arrayId.forEach(function(elem){
  //   $(elem).on("click", ".btn-delete", function(){deleteItem(elem)});
  // });

$(".btn-delete").on("click", function(){
  deleteItem($(this).parent().parent());
});

};
