$(".calc-prices-button").click(function () {
	var sum = 0;
	$(".product").each(function(index) {
		var qty = $(this).find('input').val();
		var price = $(this).find(".unit-cost").text();
		$(this).find(".total-price").text(qty*price);
		var tempNum = parseInt($(this).find(".total-price").text());
		sum += tempNum;
	})

	$(".total-cost").text(sum);
  	
  });

$(".btn-delete").click(function () {
	$(this).closest(".product").remove();
})

$(".btn-add").click(function () {
	var divCopy = $(".first").first().clone();
	$(divCopy).appendTo(".product-wrapper");
	var name = $(".name-input").val()
	var price = $(".cost-input").val()
	$(divCopy).find(".product-name").text(name);
	$(divCopy).find(".unit-cost").text(price);
	$(divCopy).find(".btn-delete").click(function () {
		$(this).closest(".product").remove();
	})
})
