// iteration 1
var calcButton = document.getElementById('calc')

calcButton.onclick = function(){
  
  let unitPrice = Number(document.querySelector(".pu > span").innerText);
  
  let quantity = Number(document.querySelector(".qty > label > input").value);
  
  
  let subtoteSpan = document.querySelector(".subtot > span").innerText
  
  subtoteSpan.innerText = quantity * unitPrice
}

// iteration 2 
calcButton.onclick = function(){
  let rows = document.getElementsByClassName('product')
  console.log(rows)

  for(let i = 0; rows.length; i++){
    console.log(rows[i]);

    let unitPrice = Number(rows[i].querySelector(".pu > span").innerText);

    let quantity = Number(rows[i].querySelector(".qty > label > input").value);


    let subtoteSpan = rows[i].querySelector(".subtot > span").innerText

    subtoteSpan.innerText = quantity * unitPrice
  }
}

document.querySelector('.btn-delete')