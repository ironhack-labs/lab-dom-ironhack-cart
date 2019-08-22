


const buttonCalculatePrices = document.querySelector('#calc-prices-button')


let arrPrices = document.querySelectorAll('.unit span')

let arrQuantities = document.querySelectorAll('.quantity')

let arrTotalPrice = document.querySelectorAll('.unit-total')

let superTotal = document.querySelector('h2 span')



buttonCalculatePrices.onclick = () => {


  let superDuperTotal = 0
  for (let i = 0; i < arrPrices.length; i++) {
    let totalItem = arrPrices[i].dataset.precio*arrQuantities[i].value
    const unitTotal = arrTotalPrice[i]
    arrTotalPrice[i].dataset.superTotal = totalItem

    unitTotal.innerHTML =  `$ ${totalItem}`

    superDuperTotal += parseInt(arrTotalPrice[i].dataset.superTotal)
  }
 
  superTotal.innerHTML = `$ ${superDuperTotal}`
}


