
function getSentence() {
    let sentenceInput = document.getElementById("sentenceOriginal");
    return sentenceInput.value;
}

function getOffset() {
    let offsetInput = document.getElementById("offset");
    return parseInt(offsetInput.value);

}

function getCharCodesArray(sentence) {
    let charCodesArray = [];
    for(let counter = 0; counter < sentence.length; counter++) {
        charCodesArray.push(
            sentence.charCodeAt(counter)
        );
    }
    return charCodesArray;
}

function isCharLowercase (charCodeItem) {
    let charCodea = 97;
    let charCodez = 122;
    if (charCodeItem >= charCodea && charCodeItem <= charCodez) {
        return true;
    }
    return false;
}

function isCharUppercase (charCodeItem) {
    let charCodeA = 65;
    let charCodeZ = 90;
    if (charCodeItem >= charCodeA && charCodeItem <= charCodeZ) {
        return true;
    }
    return false;
}

function applyOffset(charCodesArray, offset){
    let offsetedArray = [];
    let alphabetLength = 26;
    
    for(let counter = 0; counter < charCodesArray.length; counter++) {
        let charCodeItem = charCodesArray[counter];
        let offsetedItem;
        let charCode = 97;
        
        if (isCharUppercase(charCodeItem)) {
            charCode = 65;
        }

        if (isCharUppercase(charCodeItem) || isCharLowercase(charCodeItem)) {
            offsetedItem = (charCodeItem - charCode + offset) % alphabetLength + charCode
        } else {
            offsetedItem = charCodeItem;
        }

        offsetedArray.push(offsetedItem);
    }
        return offsetedArray;
}
   
function setStringFromArray(array){
    let result = ""
    for (let counter=0; counter <array.length; counter++)
    result = result + String.fromCharCode(array[counter]);
    return result;     
   }

function encode(sentence,offset) {
 
    let CodesArray = getCharCodesArray(sentence);
    let withOffset = applyOffset(CodesArray,offset);

return setStringFromArray(withOffset);
  
}

function result (){
let sentence = getSentence();
let offset = getOffset();
document.getElementById("mostraCifra").innerHTML = encode(sentence, offset);
}


