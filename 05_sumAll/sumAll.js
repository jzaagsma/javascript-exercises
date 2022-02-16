const sumAll = function(begin, end) {
    if (begin < end && begin >= 0 && end >= 0 && typeof(begin)=="number" && typeof(end)=="number"){
        const firstArray = [begin];
        for (let i = begin + 1; i <= end; i++){
            firstArray.push(i);
            }
        let sum = 0;
        for(let i = 0; i <firstArray.length; i++){
            sum += firstArray[i];
        }
        return sum;
    } if (begin > end && begin >= 0 && end >= 0 && typeof(begin)=="number" && typeof(end)=="number"){
        const firstArray = [end];
        for (let i = end + 1; i <= begin; i++){
            firstArray.push(i);
        }
        let sum = 0;
        for(let i = 0; i <firstArray.length; i++){
            sum += firstArray[i];
        } 
        return sum;
    } else {
        return "ERROR";
    }
}
sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;