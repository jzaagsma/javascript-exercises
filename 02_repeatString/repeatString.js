const repeatString = function(string, times) {
    let repeatedString = "";
    if (times > 0) {
        return string.repeat(times);
    } if (times === 0) {
        return "";
    } else {
        return 'ERROR';
    }
};
repeatString("hey", 3);
repeatString("hey", 10);
repeatString("hey", 1);
repeatString("hey", 0);
repeatString("hey", -1);
repeatString("hey", Math.random());
repeatString("", 10);

// Do not edit below this line
module.exports = repeatString;
