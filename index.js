var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var product3 = document.getElementById("product3");
var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");

var product4 = document.getElementById("product4");
var qty4 = document.getElementById("qty4");
var price4 = document.getElementById("price4");

var product5 = document.getElementById("product5");
var qty5 = document.getElementById("qty5");
var price5 = document.getElementById("price5");

var product6 = document.getElementById("product6");
var qty6 = document.getElementById("qty6");
var price6 = document.getElementById("price6");

var cart = document.getElementById("carts");

function addOrder() {
    cart.textContent = ""; 

    var orders = [];

    if (parseFloat(qty1.value) > 0) {
        orders.push(`${qty1.value} pcs/s x ${price1.textContent} Php = ${(parseFloat(qty1.value) * parseFloat(price1.textContent)).toFixed(2)} - ${product1.textContent}`);
    }
    if (parseFloat(qty2.value) > 0) {
        orders.push(`${qty2.value} pcs/s x ${price2.textContent} Php = ${(parseFloat(qty2.value) * parseFloat(price2.textContent)).toFixed(2)} - ${product2.textContent}`);
    }
    if (parseFloat(qty3.value) > 0) {
        orders.push(`${qty3.value} pcs/s x ${price3.textContent} Php = ${(parseFloat(qty3.value) * parseFloat(price3.textContent)).toFixed(2)} - ${product3.textContent}`);
    }
    if (parseFloat(qty4.value) > 0) {
        orders.push(`${qty4.value} pcs/s x ${price4.textContent} Php = ${(parseFloat(qty4.value) * parseFloat(price4.textContent)).toFixed(2)} - ${product4.textContent}`);
    }
    if (parseFloat(qty5.value) > 0) {
        orders.push(`${qty5.value} pcs/s x ${price5.textContent} Php = ${(parseFloat(qty5.value) * parseFloat(price5.textContent)).toFixed(2)} - ${product5.textContent}`);
    }
    if (parseFloat(qty6.value) > 0) {
        orders.push(`${qty6.value} pcs/s x ${price6.textContent} Php = ${(parseFloat(qty6.value) * parseFloat(price6.textContent)).toFixed(2)} - ${product6.textContent}`);
    }


qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);
