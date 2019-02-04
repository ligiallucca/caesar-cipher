
function getFormData(){
  let form = document.getElementById("cypherForm");

  let formData={
    sentence: form.elements["sentence"].value,
    offset: parseInt(form.elements["offset"].value),
    decision: form.elements["decision"].value
  }

  return formData;
}

function getCharCodesArray(sentence) {
  let charCodesArray = [];
  for(let index in sentence) {
    charCodesArray.push(
      sentence.charCodeAt(index)
    );
  }
  return charCodesArray;
}

function isCharUppercase (charCodeItem) {
  let charCodeA = 65;
  let charCodeZ = 90;

  if (charCodeItem >= charCodeA && charCodeItem <= charCodeZ) {
      return true;
  }
  return false;
}

function isCharLowercase (charCodeItem) {
  let charCodeA = 97;
  let charCodeZ = 122;
  if (charCodeItem >= charCodeA && charCodeItem <= charCodeZ) {
    return true;
  }
  return false;
}

function encodeArray(sentence, offset) {
  let charCodesArray = getCharCodesArray(sentence);
  let encodedArray = [];

  for (let code of charCodesArray) {
    if (isCharUppercase(code)) {
      encodedArray.push((((code - 65) + offset) % 26) + 65);
    } else if (isCharLowercase(code)) {
      encodedArray.push((((code - 97) + offset) % 26) + 97);
    } else {
      encodedArray.push(code);
    }
  }

  return encodedArray;
}

function decodeArray(sentence, offset) {
  let charCodesArray = getCharCodesArray(sentence);
  let decodedArray = [];

  for (let code of charCodesArray) {
    if (isCharUppercase(code)) {
      decodedArray.push((((code - 90) - offset) % 26) + 90);
    } else if (isCharLowercase(code)) {
      decodedArray.push((((code - 122) - offset) % 26) + 122);
    } else {
      decodedArray.push(code);
    }
  }
  return decodedArray;
}

function getCypher(decision, sentence, offset) {
  let cypher = [];

  if (decision === "encode") {
    cypher = encodeArray(sentence, offset);
  } else {
    cypher = decodeArray(sentence, offset);
  }

  return cypher;
}

function setStringFromArray(array){
  let result = "";

  for (let counter=0; counter <array.length; counter++) {
    result = result + String.fromCharCode(array[counter]);
  }

  return result;
}

function result(){
  let form = getFormData();
  let cypher = getCypher(form.decision, form.sentence, form.offset);
  let result = setStringFromArray(cypher);

  return result;
}

function showResult() {

  document.getElementById("result").innerHTML=result();


}
