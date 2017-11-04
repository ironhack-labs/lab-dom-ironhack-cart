// Delete item
$("body > div > div.del > input").click(function() {
  $(this).parent().parent().remove();

});


  $("body > div.calculate > div").click(function() {
    $('.product').each(function(){
      var cpu = $(this).find('.cpu > p').text();
      var qty = $(this).find(' div.unit > input[type="text"]').val();
      var pce = cpu * qty;
      $(this).find('.price').text(pce);

      var gt = parseInt($('body > div:nth-child(2) > div.price').text()) + parseInt($('body > div:nth-child(3) > div.price').text());
      // console.log(gt)  

      $('body > div.sum > p').text(gt);
    });
  });





