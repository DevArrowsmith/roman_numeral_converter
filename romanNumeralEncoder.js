// Please do not change the name of this function
const romanNumeralEncoder = (num) => {
  if (typeof(num) !== "number" || Number.isNaN(num)) {
    return "Please input a valid number."
  };

  const onesNumerals = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    0: ""
  }

  const tensNumerals = {
    1: "X",
    2: "XX",
    3: "XXX",
    4: "XL",
    5: "L",
    6: "LX",
    7: "LXX",
    8: "LXXX",
    9: "XC",
    0: "",
    undefined: ""
  };

  const hundredsNumerals = {
    1: "C",
    2: "CC",
    3: "CCC",
    4: "CD",
    5: "D",
    6: "DC",
    7: "DCC",
    8: "DCCC",
    9: "CM",
    undefined: ""
  };

  let digitArray = num.toString().split("");

  const onesInput = digitArray.pop();
  const tensInput = digitArray.pop();
  const hundredsInput = digitArray.pop();

  return hundredsNumerals[hundredsInput] + tensNumerals[tensInput] + onesNumerals[onesInput];
};

module.exports = { romanNumeralEncoder };