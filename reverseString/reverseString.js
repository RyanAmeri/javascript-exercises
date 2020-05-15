const reverseString = function(origText) {
    let newText = '';
    let length = origText.length;
    for (let i = length -1; i >= 0; i--){
        newText += origText[i];
    }
    return newText;

}

module.exports = reverseString
