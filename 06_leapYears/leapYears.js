const leapYears = function(year) {
    let divideByFour = year/4;
    let divideByOneHundred = year/100;
    let divideByFourHundred = year/400;
    if (Number.isInteger(divideByFour)){
        // is number divisible by 100 and 400?
        if(Number.isInteger(divideByOneHundred) && Number.isInteger(divideByFourHundred)){
            return true;
        } if(Number.isInteger(divideByOneHundred) &! Number.isInteger(divideByFourHundred)){
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }

}
leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900)
leapYears(1600);
leapYears(700);
// Do not edit below this line
module.exports = leapYears;
