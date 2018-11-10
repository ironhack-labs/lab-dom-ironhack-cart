
let calculate = document.getElementById("btn-success");
let quantity = document.getElementsByClassName("qty");
let price = document.getElementsByClassName("price");


calculate.onclick = function() {
    document.getElementsByClassName("total-price")[0].innerHTML = "$" + ((Number((price[0].innerHTML).substr(1))) * Number(quantity[0].value))

}