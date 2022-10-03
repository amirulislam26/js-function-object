//array vs object
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendAge = [ 12, 18, 22, 25, 28, 23];
var friendAge = {
    amirul: 12,
    robiul: 18,
    amirKhan: 22,
    monirKhan:25,
    subanKhan: 28,
    shihabKhan: 23,
}

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
}

var keys = Object.keys(shoppingCart);
// console.log(keys);
var values = Object.values(shoppingCart);
// console.log(shoppingCart);

// var keys = ['books', 'sunglass', 'shoes', 'pen'];
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

// for in loop....................
for(var propertyName in shoppingCart){
    var value = shoppingCart[propertyName];
    console.log(propertyName, value);
}