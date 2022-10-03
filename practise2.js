function myLove (p, m, s){
    const totalLove = p + m + s;
    const average = totalLove / 3;
    return average;
}
const yourLove1 = 80;
const yourLove2 = 78;
const yourLove3 = 79;

const myOrYou = myLove(yourLove1, yourLove2, yourLove3);
console.log('my Love so far:', myOrYou);