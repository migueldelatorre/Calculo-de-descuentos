//Precios y descuentos.

const article1 = document.querySelector('.article1');
const article2 = document.querySelector('.article2');
const article3 = document.querySelector('.article3');
const confirmPrice = document.querySelector('#confirmBtnPrice');

const discount1 = document.querySelector('#discount1');
const discount2 = document.querySelector('#discount2');
const discount3 = document.querySelector('#discount3');
//const confirmDiscount = document.querySelector('#confirmBtnDiscount');
const calcular = document.querySelector('#calcular');
const resultDiscount = document.querySelector('#resultDiscount');
const finalPrice = document.querySelector('#finalPrice');

var boton = document.querySelector(".active-button");

//const totalContainer = document.querySelector('#total-container');



boton.addEventListener("mousedown", function() {
  boton.classList.add("active-button");
});

// boton.addEventListener("mouseup", function() {
//     boton.classList.remove("active-button");
//   });

// article1.addEventListener('click', agreeprice1);
// article2.addEventListener('click', agreeprice2);
// article3.addEventListener('click', agreeprice3);
confirmPrice.addEventListener('click', agreepriceManual);

// discount1.addEventListener('click', agreeDiscount1);
// discount2.addEventListener('click', agreeDiscount2);
// discount3.addEventListener('click', agreeDiscount3);
//confirmDiscount.addEventListener('click', agreeDiscountManual);

calcular.addEventListener('click', calcularTotal);


var price;
let discount;
var totalPrice;
var totalDiscount;



function agreepriceManual(){
    price = document.getElementById('price-input').value;
    console.log(price);

    if (price > 0){
    showDiscountSection()
}
}

function showDiscountSection(){
    var discountSection = document.getElementById("discount-container");
    discountSection.style.display = "block";
}

function calcularTotal(){

    discount = document.getElementById('discount-input').value;
    totalDiscount=(discount*price)/100;
    resultDiscount.innerHTML = "Total descuento: " + totalDiscount + " €";

    totalPrice = (price-totalDiscount);
    finalPrice.innerHTML = "El precio final con descuento es de: " + totalPrice + " €";

    var totalContainer = document.getElementById("total-container");
    if (discount > 0){
       totalContainer.style.display = "flex"; 
    }    
};

    function addArticle1(){
        document.getElementById('price-input').value = "100";
        console.log(document.getElementById('price-input').value);
        agreepriceManual()
        showDiscountSection()
   
    }

    function addArticle2(){
        document.getElementById('price-input').value = "600";
        console.log(document.getElementById('price-input').value);
        agreepriceManual()
        showDiscountSection()
    }

    function addArticle3(){
        document.getElementById('price-input').value = "1359";
        console.log(document.getElementById('price-input').value);
        agreepriceManual()
        showDiscountSection()
    }




    function addDiscount1(){
        document.getElementById('discount-input').value = "10";
        console.log(document.getElementById('discount-input').value);
        calcularTotal()
    }

    function addDiscount2(){
        document.getElementById('discount-input').value = "15";
        console.log(document.getElementById('discount-input').value);
        calcularTotal()
    }

    function addDiscount3(){
        document.getElementById('discount-input').value = "30";
        console.log(document.getElementById('discount-input').value);
        calcularTotal()
    }