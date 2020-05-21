const caesar = function(sentence, num) {
    let lAlph = /[a-z]/;
    let uAlph = /[A-Z]/;
    //console.log(lAlph.test("AA"));
    let newSentence = [];
    [...sentence].map( c => {
        if (lAlph.test(c) || uAlph.test(c)) {
            console.log(c);
            c = c.charCodeAt(c) + num;
            c = String.fromCharCode(c);
            console.log(c);
            newSentence.push(c);
        }
        else {
            newSentence.push(c);
        }
        
        return c;
    
    });
    
    newSentence = newSentence.toString();
    const searchRegExp = /,/g;
    newSentence = newSentence.replace(searchRegExp,'');
    console.log(newSentence);
}

console.log(caesar("aaa BBB ZZZ 111", 1));
//module.exports = caesar