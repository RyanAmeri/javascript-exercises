const palindromes = function(sentence) {
    let lowerSentence = sentence.toLowerCase();
    let arr = [...lowerSentence];
    let clean = arr.filter( (letter) => {
        return letter !== " " && letter !== ',' && letter !== '.' && letter !== '!';
    });
    
    arr2 = [...clean];
    arr2.reverse();
    let condition = true;
    for (let i = 0; i < clean.length; i++){
        if (clean[i] !== arr2[i])
        condition = false;
    }
    return condition;
}

//console.log(palindromes("Racecar"));
module.exports = palindromes
