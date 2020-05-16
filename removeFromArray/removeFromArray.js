const removeFromArray = function(origArray,...removeArray) {
    let newArray = [...origArray]; 

    for (let origItem = 0; origItem < origArray.length ; origItem++){
        for (let removeItem = 0; removeItem < removeArray.length ; removeItem++){
            if (origArray[origItem] === removeArray[removeItem]){
                newArray.splice(newArray.indexOf(origArray[origItem]),1);
            }
               
        }
    }
    return newArray;
}

module.exports = removeFromArray;