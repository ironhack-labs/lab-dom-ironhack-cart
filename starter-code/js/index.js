let calcButton = document.getElementById('calc');
let cart = document.getElementsByClassName('product');

// Iteration 1
// calcButton.onclick = () => {
//     let unitPrice = Number(document.querySelector('.pu > span').innerText);
//     let quantity = Number(document.querySelector('.qty > label > input').value);
//     let subToteSpan = document.querySelector('.subtot > span');

//     subToteSpan.innerText = quantity * unitPrice;
//     console.log(quantity * unitPrice);
// };

// Iteration 2
// calcButton.onclick = () => {
//     let rows = document.getElementsByClassName('product');

//     // You can't actually for in or forEach on the returned value of what is pulled from HTML
//     for (let i = 0; i < rows.length; i++) {
//         let unitPrice = Number(rows[i].querySelector('.pu > span').innerText);
//         let quantity = Number(
//             rows[i].querySelector('.qty > label > input').value,
//         );
//         let subToteSpan = rows[i].querySelector('.subtot > span');

//         subToteSpan.innerText = quantity * unitPrice;
//         console.log(quantity * unitPrice);
//     }
// };

// Update Total
calcButton.onclick = () => {
    let rows = document.getElementsByClassName('product');
    let total = 0;
    let totalSpan = document.querySelector('body > h2 > span');

    // You can't actually for in or forEach on the returned value of what is pulled from HTML
    for (let i = 0; i < rows.length; i++) {
        let unitPrice = Number(rows[i].querySelector('.pu > span').innerText);
        let quantity = Number(
            rows[i].querySelector('.qty > label > input').value,
        );
        let subToteSpan = rows[i].querySelector('.subtot > span');

        subToteSpan.innerText = quantity * unitPrice;
        total = total + Number(subToteSpan.innerText);
        console.log(total);
    }

    totalSpan.innerText = total;
};
