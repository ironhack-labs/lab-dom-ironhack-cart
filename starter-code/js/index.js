

//$('.btn-success').click(function() {
  //$('.product1 .total-price').text($('.product1 .spanPrix').text() * $('.product1 .quantity').val());
  //$('.product2 .total-price').text($('.product2 .spanPrix').text() * $('.product2 .quantity').val());
  //$('h2 > span').text();
//});

$('.btn-success').click(function () {
  var currentSum = 0;
  $('.product').each(function () {
    var qty = $(this).find('.quantity').val();
    var ppu = $(this).find('.spanPrix').text();
    console.log(qty, ppu);
    $(this).find('.total-price').text(qty*ppu);
    currentSum = parseInt($(this).find('.total-price').text());
    currentSum+=currentSum;
  });
  $('.global-price').text(currentSum);
});
