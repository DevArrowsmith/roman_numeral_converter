// Please do not change the name of this function
const romanNumeralEncoder = (num) => {
  if (typeof(num) !== "number" || Number.isNaN(num)) {
    return "Please input a valid number."
  };

  let remaining = num;
  let numeral = "";

  switch(num) {
    case 1:
      return "I";
    case 5:
      return "V";
    case 10:
      return "X";
    default:
      
  while (remaining > 0) {
    numeral += "I";
    remaining -= 1;
  };
  return numeral;
  }







}

module.exports = { romanNumeralEncoder }

/*
1: I
5: v
10: x
50: L
100: C

Pass in a number
Return the roman numeral
*/