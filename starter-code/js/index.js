function verificaCarrinho(){

  
  var tamanho = document.getElementById("tableProduct").rows.length;
 
  if(tamanho==1){

    document.getElementById("length").style.display="none"
    

  }else{

    document.getElementById("length").style.display="block"
    document.getElementById("texto-carrinho").innerHTML= tamanho-1;
  }

}

function deleteItem(e) {

  var i = e.parentNode.parentNode.rowIndex;


  document.getElementById("tableProduct").deleteRow(i);

  getTotalPrice()
  verificaCarrinho()
}



function getTotal() {

  var valoruni = parseFloat(document.getElementById("valoruni").value);
  var qtd = parseFloat(document.getElementById("qtd").value);

  document.getElementById("valortotal").value = qtd * valoruni;


}
function getTotalPrice() {


  var tamanho = document.getElementById("tableProduct").rows.length;
  var total = 0;

  if (tamanho == 2) {

    var coluna = document.getElementById("tableProduct").rows[1].cells
    document.getElementById("valor-total-produto").innerHTML = parseFloat(coluna.item(3).textContent);
    return false;
  } else {

    for (let index = 0; index < tamanho; index++) {

      console.log(index)

      if (index == tamanho || index == 0) {


      } else {
        var coluna = document.getElementById("tableProduct").rows[index].cells

        total += parseFloat(coluna.item(3).textContent);
      }


    }

  }

  document.getElementById("valor-total-produto").innerHTML = total;
  verificaCarrinho()
}


function bancoDeDados() {

  var banco = []
  var produto = document.getElementById("produto").value;
  var valoruni = document.getElementById("valoruni").value;
  var qtd = document.getElementById("qtd").value;
  var total = document.getElementById("valortotal").value;

  
  if(produto=="" || valoruni =="" || qtd =="" ){

    alert("preencha os dados ")
    return false;
    
  }

  // if(isNaN(valoruni) ==true){

  // alert("Digite apenas numeros")
  // document.getElementById("valoruni").value = "";
  // document.getElementById("qtd").value = "";
  // document.getElementById("valortotal").value = "";
  // return false;
  

  // }else if(isNaN(qtd)==true){

  //   alert("Digite apenas numeros")
  //   document.getElementById("valoruni").value = "";
  //   document.getElementById("qtd").value = "";
  //   document.getElementById("valortotal").value = "";
  //   return false;
  // }

  banco.push({ produto: produto, valoruni: valoruni, quantidade: qtd, total: total })

  createNewItem(banco)
  verificaCarrinho()
}

function createNewItem(banco) {

  var table = document.getElementById("tableProduct");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  banco.forEach(element => {

    cell1.innerHTML = element.produto;
    cell2.innerHTML = element.valoruni;
    cell3.innerHTML = element.quantidade;
    cell4.innerHTML = element.total;
    cell5.innerHTML = "<button onclick='deleteItem(this)'  class='btn-delete' >Deletar</button>";

  });

  document.getElementById("produto").value = "";
  document.getElementById("valoruni").value = "";
  document.getElementById("qtd").value = "";
  document.getElementById("valortotal").value = "";
  verificaCarrinho()

}
