const sumAll = function(num1, num2) {
    let sum = 0;
    let smallNum = num1;
    let bigNum = num2;
    
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        sum = "ERROR";
        return sum;
    }
    if (num1 < 0 || num2 < 0){
        sum = "ERROR";
        return sum;
    }
    if (num1 > num2){
        smallNum = num2;
        bigNum = num1;
    }
    for (let i = smallNum; i <= bigNum; i++){
        sum += i;
    }
    return sum;

}
//console.log(sumAll(-10,4));
module.exports = sumAll
