const repeatString = function(text, num) {
    let endText = '';
    if (num < 0){
        endText = 'ERROR';
    }
    else{
        for (let i = 0; i < num; i++){
            endText += text;
        }
    } 
    return endText;
}

module.exports = repeatString
