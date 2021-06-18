const button = document.getElementById('button')

var coffee = document.getElementById('numCoffee')
var cookie = document.getElementById('numCookies')
var scone = document.getElementById('numScones')
console.log(coffee)
console.log(cookie)
console.log(scone)

button.addEventListener('click', function(event){
    event.preventDefault
    var valcoffee = coffee.value
    var valcookie = cookie.value
    var valscone = scone.value
console.log(valcoffee)
console.log(valcookie)
console.log(valscone)
})