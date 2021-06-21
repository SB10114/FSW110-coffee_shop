const button = document.getElementById('button')
var total = document.getElementById('total')
var coffee = document.getElementById('numCoffee')
var cookie = document.getElementById('numCookies')
var scone = document.getElementById('numScones')
console.log(coffee)
console.log(cookie)
console.log(scone)
console.log(total)

button.addEventListener('click', function(event){
    event.preventDefault
    var valcoffee = coffee.value;
    var valcookie = cookie.value;
    var valscone = scone.value;
    console.log(valscone);
    console.log(valcoffee);
    console.log(valcookie);

var totalPrice = document.createTextNode( 'Total Price: $' + ((valcoffee * 1.25) + (valcookie * .75) + (valscone * 1)));
console.log(totalPrice);
total.appendChild(totalPrice);


})