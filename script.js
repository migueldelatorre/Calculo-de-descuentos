//Precios y descuentos.

const article1 = document.querySelector('.article1');
const article2 = document.querySelector('.article2');
const article3 = document.querySelector('.article3');
const confirmPrice = document.querySelector('#confirmBtnPrice');

const discount1 = document.querySelector('.discount1');
const discount2 = document.querySelector('.discount2');
const discount3 = document.querySelector('.discount3');
//const confirmDiscount = document.querySelector('#confirmBtnDiscount');
const calcular = document.querySelector('#calcular');




article1.addEventListener('click', agreeprice1);
article2.addEventListener('click', agreeprice2);
article3.addEventListener('click', agreeprice3);
confirmPrice.addEventListener('click', agreepriceManual);

discount1.addEventListener('click', agreeDiscount1);
discount2.addEventListener('click', agreeDiscount2);
discount3.addEventListener('click', agreeDiscount3);
//confirmDiscount.addEventListener('click', agreeDiscountManual);

calcular.addEventListener('click', calcularTotal);

var article;



function agreeprice1(){
    var priceArticle1 = 100;
    console.log(priceArticle1);
}

function agreeprice2(){
    var priceArticle2 = 600;
    console.log(priceArticle2);
}

function agreeprice3(){
    var priceArticle3 = 1359;
    console.log(priceArticle3);
}

function agreepriceManual(){
    var priceManual = document.getElementById('price-input').value;
    console.log(priceManual);
}



function agreeDiscount1(){
    var discount1 = 10;
    console.log(discount1);

if (priceArticle1){
    (discount1*priceArticle1)/100;
}
}

function agreeDiscount2(){
    var discount2 = 15;
    console.log(discount2);
}

function agreeDiscount3(){
    var discount3 = 30;
    console.log(discount3);
}
//function agreeDiscountManual(){
    //var discountManual = document.getElementById('discount-input').value;
    //console.log(discountManual);
//}

function calcularTotal(){
    var discountManual = document.getElementById('discount-input').value;
    console.log(discountManual);
    console.log("Resultado final");
}


