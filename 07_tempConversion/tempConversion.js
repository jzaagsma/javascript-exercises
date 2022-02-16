const ftoc = function(temp) {
  let cTempUnRounded = (temp - 32) * (5/9);
  let cTempRounded = Math.round(cTempUnRounded * 10)/10;
  return cTempRounded;
};

const ctof = function(temp) {
  let fTempUnrounded = temp * (9/5) + 32;
  let fTempRounded = Math.round(fTempUnrounded * 10)/10;
  return fTempRounded;
};

ftoc(32);
ftoc(100);
ftoc(-100);
ctof(0);
ctof(73.2);
ctof(-10);
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
