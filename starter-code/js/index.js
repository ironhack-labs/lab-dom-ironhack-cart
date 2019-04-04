let calculate = document.getElementById("btn-success");

let quantity = document.getElementsByClassName("qty");
let price = document.getElementsByClassName("price");


calculate.onclick = function() {
    let result = 0;

    for(let i = 0; i < quantity.length; i++){
    document.getElementsByClassName("total-price")[i].innerHTML = "$" + ((Number((price[i].innerHTML).substr(1))) * Number(quantity[i].value))
    result += ((Number((price[i].innerHTML).substr(1))) * Number(quantity[i].value))

    }
    
    document.getElementsByClassName("finalTotal")[0].innerHTML = "$" + result;

}
