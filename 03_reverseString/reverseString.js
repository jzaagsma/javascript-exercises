const reverseString = function(gnirts) {
    let splitString = gnirts.split("");
    let reverseArray = splitString.reverse("");
    let joinArray = reverseArray.join("");
    return joinArray;
};
reverseString("Hello");
reverseString("Hello there");
reverseString("123! abc!");
reverseString("");
// Do not edit below this line
module.exports = reverseString;
