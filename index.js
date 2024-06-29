var product1 = document.getElementById("product1")
var qty1 = document.getElementById("qty1")
var price1 = document.getElementById("price1")

var product2 = document.getElementById("product2")
var qty2 = document.getElementById("qty2")
var price2 = document.getElementById("price2")

var product2 = document.getElementById("product3")
var qty2 = document.getElementById("qty3")
var price2 = document.getElementById("price3")

var carts = document.getElementById("carts")
var total = document.getElementById("total")
var cash = document.getElementById("cash")
var change = document.getElementById("change")

function addOrder() {
    cart.textContent=""
    if (parseFloat(qty1.value) > 0){
        var order= qty1.value.toString() + ' pc/s × '+ price1.textContent + '------'+ product1
.textContent + '------ Php' + (parseFloat(qty1.value,)*parseFloat(price1.textContent)) + '/n'
        //carts.textContent += carts.value.toString() + "/n";
    carts.textContent += order
    }
    if (parseFloat(qty2.value) > 0){
        var order= qty2.value.toString() + ' pc/s × '+ price2.textContent + '------'+ product2
.textContent + '------ Php' + (parseFloat(qty2.value,)*parseFloat(price2.textContent)) + '/n'
    }   
if (parseFloat(qty3.value) > 0){
        var order= qty3.value.toString() + ' pc/s × '+ price3.textContent + '------'+ product3
.textContent + '------ Php' + (parseFloat(qty3.value,)*parseFloat(price3.textContent)) + '/n'
    }   
    
}
qty1.addEvenListener("keyup", addOrder);
qty2.addEvenListener(keyup", addOrder);
qty3.addEvenListener(keyup", addOrder);
{
