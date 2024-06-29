var product1 = document.getElementById("product1")
var qty1 = document.getElementById("qty1")
var price1 = document.getElementById("price1")

var product2 = document.getElementById("product2")
var qty2 = document.getElementById("qty2")
var price2 = document.getElementById("price2")

var product3 = document.getElementById("product3")
var qty3 = document.getElementById("qty3")
var price3 = document.getElementById("price3")

var product4 = document.getElementById("product4")
var qty4 = document.getElementById("qty4")
var price4 = document.getElementById("price4")

var product5 = document.getElementById("product5")
var qty5 = document.getElementById("qty5")
var price5 = document.getElementById("price5")

var product6 = document.getElementById("product6")
var qty6 = document.getElementById("qty6")
var price6 = document.getElementById("price6")

var carts = document.getElementById("carts")
var total = document.getElementById("total")
var cash = document.getElementById("cash")
var change = document.getElementById("change")

function addOrder(){
    cart.textContent=""
    if (parseFloat(qty1.value) > 0){
        var order= qty1.value.toString() + ' pc/s × '+ price1.textContent + '------'+ product1
.textContent + '------ Php' + (parseFloat(qty1.value,)*parseFloat(price1.textContent)) + '\n'
        \\carts.textContent += carts.value.toString() + "\n";
    carts.textContent += order
    }
    if (parseFloat(qty2.value) > 0){
        var order= qty2.value.toString() + ' pc/s × '+ price2.textContent + '------'+ product2
.textContent + '------ Php' + (parseFloat(qty2.value,)*parseFloat(price2.textContent)) + '\n'
       \\carts.textContent += carts.value.toString() + "\n";
    carts.textContent += order
    }   
if (parseFloat(qty3.value) > 0){
        var order= qty3.value.toString() + ' pc/s × '+ price3.textContent + '------'+ product3
.textContent + '------ Php' + (parseFloat(qty3.value,)*parseFloat(price3.textContent)) + '\n'
    \\carts.textContent += carts.value.toString() + "\n";
    carts.textContent += order
   }  
if (parseFloat(qty4.value) > 0){
        var order= qty4.value.toString() + ' pc/s × '+ price4.textContent + '------'+ product4
.textContent + '------ Php' + (parseFloat(qty4.value,)*parseFloat(price4.textContent)) + '\n'
    carts.textContent += carts.value.toString() + "\n";
    carts.textContent += order
        }   
if (parseFloat(qty5.value) > 0){
        var order= qty5.value.toString() + ' pc/s × '+ price5.textContent + '------'+ product5
.textContent + '------ Php' + (parseFloat(qty5.value,)*parseFloat(price5.textContent)) + '\n'
    \\carts.textContent += carts.value.toString() + "\n";
    carts.textContent += order
     }   
if (parseFloat(qty6.value) > 0){
        var order= qty6.value.toString() + ' pc/s × '+ price6.textContent + '------'+ product6
.textContent + '------ Php' + (parseFloat(qty6.value,)*parseFloat(price6.textContent)) + '\n'
    \\carts.textContent += carts.value.toString() + "\n";
    carts.textContent += order
    }   
    
}
qty1.addEvenListener("keyup", addOrder);
qty2.addEvenListener(keyup", addOrder);
qty3.addEvenListener(keyup", addOrder);
qty4.addEvenListener("keyup", addOrder);
qty5.addEvenListener("keyup", addOrder);
qty6.addEvenListener("keyup", addOrder);
