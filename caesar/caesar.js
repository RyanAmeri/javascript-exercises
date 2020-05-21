const caesar = function(sentence, num) {
    let lAlph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
                'q', 'r','s','t','u','v','w','x','y','z'];
    let uAlph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
    'Q', 'R','S','T','U','V','W','X','Y','Z'];
    let newSentence = [];
    [...sentence].map( c => {
        let i = lAlph.indexOf(c);
        let I = uAlph.indexOf(c);
        if ( i !== -1) {
            newSentence.push(lAlph[modulo((i + num),26)]);
        }
        else if ( I !== -1) {
            newSentence.push(uAlph[modulo((I + num),26)]);
        }
        else {
            newSentence.push(c);
        }
        return c;
    
    });
    
    newSentence = newSentence.join('');
    return newSentence;
}

function modulo (x, m) {
 
    return (x % m + m) % m;
 
}

//console.log(caesar("aaa bbb ccc AAA BBB CCC", -1));
module.exports = caesar