function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
}
// var total =add(80,20)
    // console.log('total :', total);


    function biriyani(money){
        var biriyaniPrice = 10;
        var quantity = money / biriyaniPrice;
        return quantity; 
    }
var myTaka = 150;
var kalabuna = biriyani(myTaka);
console.log('Eating biriyani:', kalabuna);