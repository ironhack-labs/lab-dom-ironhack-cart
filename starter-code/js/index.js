function createNewItem() {
  let price = document.getElementById('new-item-price').value;
  let name = document.getElementById('new-item').value;
  let newProductRow = `
    <div class="item-name"><span class="item-name-span">${name}</span></div>
    <div class="item-cost">&#36;<span class="item-cost-span">${price}</span></div>
    <div class="qty1">
      <label for="qty">QTY</label>
      <input type="number" class="qty" name="qty">
    </div>
    <div class="product-total">&#36;<span class="product-total-span"></span></div>
    <div class="delete-button-div"><button class="btn-delete" id="btn-delete">Delete</button></div>
    <div class="success-button-div"><button class="btn-success calc-prices-button">Calculate</button></div>
    `;
  let node = document.createElement("div");
  node.className = 'main';
  node.innerHTML = newProductRow;
  let body = document.getElementsByTagName('body')[0];
  let buttonsDiv = document.getElementById('buttons-div');
  body.insertBefore(node, buttonsDiv);

  $('.btn-delete').click(function () {
    $(this).closest('.main').remove();
  })
  $('.calc-prices-button').click(function () {
    let itemCost = parseInt($(this).closest(".main").find(".item-cost-span").text());
    let qty = $(this).closest(".main").find(".qty").val();
    let result = itemCost * qty;
    $(this).closest('.main').find('.product-total-span').html(result);
  })
}



$(document).ready(() => {
  $('#btn-delete').click(() => {
    $('.main').remove();
    $('#totalPrice').text('');
  });

  $('.btn-delete').click(function () {
    $(this).closest('.main').remove();
  })

  $('#new-row-button').click(()=> createNewItem());

  $('.calc-prices-button').click(function () {

    let itemCost = parseInt($(this).closest(".main").find(".item-cost-span").text());
    let qty = $(this).closest(".main").find(".qty").val();
    let result = itemCost * qty;
    $(this).closest('.main').find('.product-total-span').html(result);
  })
  $('#total').click(function () {
    let total = 0;
    let rows = document.getElementsByClassName("main");
    for (let i = 0; i < rows.length; i++) {
      let itemCost = parseInt($(rows[i]).find(".item-cost-span").text());
      let qty = $(rows[i]).find(".qty").val();
      let result = itemCost * qty;
      total += result;
    }
    $('#totalPrice').text(total)
  })
})