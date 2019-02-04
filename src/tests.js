function compareObjects ( decision, sentence, offset, obj1, obj2) {
    if (setStringFromArray(obj1) === setStringFromArray(obj2)) {
        console.log(
            decision + ' "' + sentence + '" com o deslocamento ' + offset +  ' deu o resultado: certo'
        );
    }
    else{
        console.log(
            decision + ' "' + sentence + '" com o deslocamento ' + offset +  ' deu o resultado: errado'
        );
    }
};

compareObjects("encode", "abc", 1, encodeArray("abc",1), [98,99,100]);
compareObjects("decode", "bcd", 1, decodeArray("bcd",1), [97,98,99]);
compareObjects("encode", "ABC", 2,encodeArray("ABC",2), [67,68,69]);
compareObjects("decode", "CDE", 2,decodeArray("CDE",2), [65,66,67]);
compareObjects("encode", "AbC", 100,encodeArray("AbC",100), [87,120,89]);;
compareObjects("decode", "BcD", 1,decodeArray("BcD",1), [65,98,67]);
compareObjects("decode", "DeF", 100,decodeArray("DeF",100), [72,105,74]);

